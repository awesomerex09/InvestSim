import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase/config.js';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';

const COLORS = ['#ef4444', '#22c55e', '#3b82f6', '#f59e0b', '#8b5cf6'];

export default function Analytics({ showToast }) {
  const [sessions, setSessions] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => { loadSessions(); }, []);

  async function loadSessions() {
    setLoading(true);
    try {
      const q = query(collection(db, 'game_sessions'), orderBy('timestamp', 'desc'), limit(200));
      const snap = await getDocs(q);
      setSessions(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (e) {
      showToast('載入失敗: ' + e.message, 'error');
    } finally {
      setLoading(false);
    }
  }

  // ── Analytics helpers ─────────────────────────────────
  const endCauses = (() => {
    const map = {};
    sessions.forEach(s => {
      const cause = s.causeOfEnd || '未知';
      map[cause] = (map[cause] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  })();

  const styleData = (() => {
    const labels = { conservative:'保守型', balanced:'均衡型', aggressive:'積極型', gambler:'賭徒型' };
    const map = {};
    sessions.forEach(s => {
      const style = labels[s.investStyle] || s.investStyle || '未知';
      if (!map[style]) map[style] = { name: style, count: 0, totalReturn: 0, bankrupted: 0 };
      map[style].count++;
      map[style].totalReturn += (s.growthRate || 1) - 1;
      if (s.causeOfEnd?.includes('破產') || s.causeOfEnd?.includes('斷頭')) map[style].bankrupted++;
    });
    return Object.values(map).map(v => ({
      ...v,
      avgReturn: v.count > 0 ? (v.totalReturn / v.count * 100).toFixed(1) : 0,
      bankruptRate: v.count > 0 ? (v.bankrupted / v.count * 100).toFixed(0) : 0
    }));
  })();

  const returnDistribution = (() => {
    const buckets = ['-100%~-50%', '-50%~0%', '0%~50%', '50%~200%', '200%~1000%', '1000%+'];
    const counts  = [0,0,0,0,0,0];
    sessions.forEach(s => {
      const r = ((s.growthRate || 1) - 1) * 100;
      if      (r < -50)   counts[0]++;
      else if (r < 0)     counts[1]++;
      else if (r < 50)    counts[2]++;
      else if (r < 200)   counts[3]++;
      else if (r < 1000)  counts[4]++;
      else                counts[5]++;
    });
    return buckets.map((name, i) => ({ name, count: counts[i] }));
  })();

  const fmtNTD = (v) => {
    if (!v) return '—';
    if (v >= 1e8) return `${(v/1e8).toFixed(2)} 億`;
    if (v >= 1e4) return `${(v/1e4).toFixed(1)} 萬`;
    return v.toLocaleString();
  };

  if (loading) return <div className="flex items-center gap-3"><div className="loader" /><span className="color-mute">分析中...</span></div>;

  return (
    <div className="flex-col gap-6">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">玩家數據分析</h1>
          <p className="page-subtitle">基於 {sessions.length} 筆遊戲紀錄的統計分析</p>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={loadSessions}>🔄 重新整理</button>
      </div>

      {sessions.length === 0 ? (
        <div className="card">
          <p className="color-mute">尚無遊戲數據。玩家完成對局後，分析圖表將在此顯示。</p>
        </div>
      ) : (
        <>
          <div className="grid-2">
            {/* End Cause Pie */}
            <div className="card flex-col gap-4">
              <h3 style={{ fontWeight:700 }}>結局分布</h3>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={endCauses} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({ name, percent }) => `${name} ${(percent*100).toFixed(0)}%`}>
                    {endCauses.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip
                    contentStyle={{ background:'var(--bg-2)', border:'1px solid var(--border)', borderRadius:'8px', color:'var(--text)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Return Distribution Bar */}
            <div className="card flex-col gap-4">
              <h3 style={{ fontWeight:700 }}>報酬率分布</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={returnDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="name" tick={{ fontSize:10, fill:'var(--text-3)' }} />
                  <YAxis tick={{ fontSize:11, fill:'var(--text-3)' }} />
                  <Tooltip contentStyle={{ background:'var(--bg-2)', border:'1px solid var(--border)', borderRadius:'8px', color:'var(--text)' }} />
                  <Bar dataKey="count" fill="url(#grad)" name="人數" radius={[4,4,0,0]} />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(220,90%,60%)" />
                      <stop offset="100%" stopColor="hsl(260,80%,65%)" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Style Analysis Table */}
          <div className="card">
            <h3 style={{ fontWeight:700, marginBottom:16 }}>投資風格分析</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>投資風格</th>
                    <th>對局數</th>
                    <th>平均報酬率</th>
                    <th>破產率</th>
                  </tr>
                </thead>
                <tbody>
                  {styleData.map(s => (
                    <tr key={s.name}>
                      <td style={{ fontWeight:600 }}>{s.name}</td>
                      <td>{s.count}</td>
                      <td className={parseFloat(s.avgReturn) >= 0 ? 'color-up' : 'color-down'} style={{ fontWeight:700 }}>
                        {parseFloat(s.avgReturn) >= 0 ? '+' : ''}{s.avgReturn}%
                      </td>
                      <td className="color-down" style={{ fontWeight:700 }}>{s.bankruptRate}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Session Detail Table */}
          <div className="card">
            <h3 style={{ fontWeight:700, marginBottom:16 }}>個人對局查詢</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>玩家</th>
                    <th>時間</th>
                    <th>風格</th>
                    <th>月數</th>
                    <th>最終淨值</th>
                    <th>報酬率</th>
                    <th>MDD</th>
                    <th>結局</th>
                    <th>詳情</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.slice(0,50).map(s => (
                    <tr key={s.id}>
                      <td className="text-sm">{s.playerName || '訪客'}</td>
                      <td className="text-sm color-mute">{s.timestamp?.toDate?.().toLocaleDateString?.('zh-TW') || '—'}</td>
                      <td><span className="badge badge-blue">{s.investStyle}</span></td>
                      <td className="text-sm">{s.durationMonths}</td>
                      <td className="text-sm" style={{ fontWeight:600 }}>{fmtNTD(s.finalNetWorth)}</td>
                      <td className={`text-sm ${((s.growthRate||1)-1) >= 0 ? 'color-up' : 'color-down'}`} style={{ fontWeight:700 }}>
                        {(((s.growthRate||1)-1)*100).toFixed(1)}%
                      </td>
                      <td className="text-sm color-down">{(s.maxDrawdown||0).toFixed(1)}%</td>
                      <td><span className={`badge ${s.causeOfEnd?.includes('破產')||s.causeOfEnd?.includes('斷頭') ? 'badge-red' : 'badge-green'}`}>{s.causeOfEnd||'—'}</span></td>
                      <td>
                        <button className="btn btn-ghost btn-sm" onClick={() => setSelected(s === selected ? null : s)}>
                          {s === selected ? '收合' : '查看'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Session Log Detail */}
          {selected && (
            <div className="card">
              <div className="flex justify-between items-center" style={{ marginBottom:16 }}>
                <h3 style={{ fontWeight:700 }}>{selected.playerName || '訪客'} 的完整交易日誌</h3>
                <button className="btn btn-ghost btn-sm" onClick={() => setSelected(null)}>✕</button>
              </div>

              {selected.achievementsUnlocked?.length > 0 && (
                <div style={{ marginBottom:16 }}>
                  <div className="text-sm color-mute" style={{ marginBottom:8 }}>解鎖成就</div>
                  <div className="flex gap-2" style={{ flexWrap:'wrap' }}>
                    {selected.achievementsUnlocked.map(id => (
                      <span key={id} className="badge badge-yellow">{id}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ maxHeight:320, overflowY:'auto' }}>
                {(selected.logs || []).map((log, i) => (
                  <div key={i} className="text-sm" style={{ padding:'4px 0', borderBottom:'1px solid var(--border)', display:'flex', gap:12 }}>
                    <span className="color-mute font-mono">+{(log.t/1000).toFixed(0)}s</span>
                    <span className="badge badge-blue" style={{ flexShrink:0 }}>{log.type}</span>
                    <span>{
                      log.type === 'buy'   ? `買入 ${log.asset} ${fmtNTD(log.amount)}` :
                      log.type === 'sell'  ? `賣出 ${log.asset} ${fmtNTD(log.amount)} (利潤: ${fmtNTD(log.profit)})` :
                      log.type === 'event' ? `事件：${log.eventTitle} → 選擇「${log.choiceText}」` :
                      log.type === 'achievement' ? `🏆 解鎖成就：${log.achievementName}` :
                      JSON.stringify(log)
                    }</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
