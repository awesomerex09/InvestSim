import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase/config.js';

export default function Dashboard({ showToast }) {
  const [stats, setStats]     = useState(null);
  const [recent, setRecent]   = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const q = query(collection(db, 'game_sessions'), orderBy('timestamp', 'desc'), limit(50));
      const snap = await getDocs(q);
      const sessions = snap.docs.map(d => ({ id: d.id, ...d.data() }));

      const totalSessions = sessions.length;
      const bankrupted    = sessions.filter(s => s.causeOfEnd?.includes('破產') || s.causeOfEnd?.includes('斷頭')).length;
      const retired       = sessions.filter(s => s.causeOfEnd?.includes('退休')).length;
      const avgMonths     = totalSessions > 0
        ? Math.round(sessions.reduce((a, s) => a + (s.durationMonths || 0), 0) / totalSessions)
        : 0;
      const maxNW = sessions.reduce((a, s) => Math.max(a, s.finalNetWorth || 0), 0);
      const avgReturn = totalSessions > 0
        ? (sessions.reduce((a, s) => a + ((s.growthRate || 1) - 1), 0) / totalSessions * 100).toFixed(1)
        : 0;

      setStats({ totalSessions, bankrupted, retired, avgMonths, maxNW, avgReturn, survivedRate: totalSessions > 0 ? (retired / totalSessions * 100).toFixed(1) : 0 });
      setRecent(sessions.slice(0, 10));
    } catch (e) {
      showToast('讀取數據失敗: ' + e.message, 'error');
    } finally {
      setLoading(false);
    }
  }

  const fmtNTD = (v) => {
    if (!v) return '—';
    if (v >= 1e8) return `${(v/1e8).toFixed(1)} 億`;
    if (v >= 1e4) return `${(v/1e4).toFixed(0)} 萬`;
    return v.toLocaleString();
  };

  if (loading) return <div className="flex items-center gap-3"><div className="loader" /><span className="color-mute">載入中...</span></div>;

  return (
    <div className="flex-col gap-6">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">總覽儀表板</h1>
          <p className="page-subtitle">InvestSim 玩家數據一覽</p>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={loadData}>🔄 重新整理</button>
      </div>

      {/* Stat Cards */}
      <div className="grid-4">
        {[
          { icon:'🎮', label:'總對局數', value: stats?.totalSessions ?? 0 },
          { icon:'💀', label:'破產數',   value: stats?.bankrupted ?? 0,  color:'color-down' },
          { icon:'🏖️', label:'退休數',   value: stats?.retired ?? 0,     color:'color-up' },
          { icon:'📅', label:'平均存活月', value: `${stats?.avgMonths ?? 0}月` }
        ].map((s, i) => (
          <div className="card" key={i}>
            <div className="stat-card">
              <div className="stat-icon">{s.icon}</div>
              <div>
                <div className="stat-label">{s.label}</div>
                <div className={`stat-value ${s.color || ''}`}>{s.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid-2">
        {/* More stats */}
        <div className="card flex-col gap-4">
          <h3 style={{ fontSize:'1rem', fontWeight:700 }}>全服紀錄</h3>
          <div className="flex-col gap-3">
            {[
              { label:'全服最高淨值',  value: fmtNTD(stats?.maxNW), color: 'color-up' },
              { label:'平均總報酬率',  value: `${stats?.avgReturn ?? 0}%` },
              { label:'存活率 (退休)', value: `${stats?.survivedRate ?? 0}%`, color: 'color-accent' }
            ].map((r, i) => (
              <div key={i} className="flex justify-between items-center" style={{ padding:'8px 0', borderBottom:'1px solid var(--border)' }}>
                <span className="text-sm color-mute">{r.label}</span>
                <span className={`text-sm ${r.color || ''}`} style={{ fontWeight:700 }}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Investment style breakdown */}
        <div className="card flex-col gap-4">
          <h3 style={{ fontSize:'1rem', fontWeight:700 }}>投資風格分布</h3>
          {['conservative', 'balanced', 'aggressive', 'gambler'].map(style => {
            const count = recent.filter(s => s.investStyle === style).length;
            const pct   = recent.length > 0 ? (count / recent.length * 100).toFixed(0) : 0;
            const labels = { conservative:'保守型', balanced:'均衡型', aggressive:'積極型', gambler:'賭徒型' };
            return (
              <div key={style}>
                <div className="flex justify-between items-center" style={{ marginBottom:4 }}>
                  <span className="text-sm">{labels[style]}</span>
                  <span className="text-sm color-mute">{count} ({pct}%)</span>
                </div>
                <div style={{ height:4, background:'var(--bg-3)', borderRadius:2, overflow:'hidden' }}>
                  <div style={{ height:'100%', width:`${pct}%`, background:'linear-gradient(90deg, var(--accent), var(--accent-2))', borderRadius:2 }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Sessions */}
      <div className="card">
        <h3 style={{ fontSize:'1rem', fontWeight:700, marginBottom:16 }}>最近對局記錄</h3>
        {recent.length === 0 ? (
          <p className="color-mute text-sm">尚無對局紀錄。玩家完成對局後將在此顯示。</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>玩家</th>
                  <th>投資風格</th>
                  <th>存活月數</th>
                  <th>最終淨值</th>
                  <th>報酬率</th>
                  <th>MDD</th>
                  <th>結局</th>
                </tr>
              </thead>
              <tbody>
                {recent.map(s => (
                  <tr key={s.id}>
                    <td>
                      <div className="flex items-center gap-2">
                        {s.playerAvatar && <img src={s.playerAvatar} width={24} height={24} style={{ borderRadius:'50%' }} />}
                        <span className="text-sm">{s.playerName || '訪客'}</span>
                      </div>
                    </td>
                    <td><span className="badge badge-blue text-sm">{s.investStyle}</span></td>
                    <td className="text-sm">{s.durationMonths}</td>
                    <td className="text-sm" style={{ fontWeight:600 }}>{fmtNTD(s.finalNetWorth)}</td>
                    <td className={`text-sm ${((s.growthRate||1)-1) >= 0 ? 'color-up' : 'color-down'}`} style={{ fontWeight:600 }}>
                      {(((s.growthRate||1)-1)*100).toFixed(1)}%
                    </td>
                    <td className="text-sm color-down">{(s.maxDrawdown||0).toFixed(1)}%</td>
                    <td>
                      <span className={`badge ${s.causeOfEnd?.includes('破產') || s.causeOfEnd?.includes('斷頭') ? 'badge-red' : 'badge-green'}`}>
                        {s.causeOfEnd || '—'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
