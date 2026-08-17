import React, { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config.js';

const RARITY_OPTIONS = ['common','uncommon','rare','epic','legendary'];
const RARITY_COLORS  = { common:'badge-gray', uncommon:'badge-blue', rare:'badge-green', epic:'badge-yellow', legendary:'badge-red' };

const EMPTY_ACH = {
  id:        '',
  icon:      '🏆',
  name:      '',
  desc:      '',
  condition: '',
  rarity:    'uncommon'
};

export default function AchievementManager({ showToast }) {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading]  = useState(true);
  const [showForm,setShowForm] = useState(false);
  const [editAch, setEditAch]  = useState(null);
  const [form,    setForm]     = useState(EMPTY_ACH);
  const [saving,  setSaving]   = useState(false);

  useEffect(() => { loadAchievements(); }, []);

  async function loadAchievements() {
    setLoading(true);
    try {
      const snap = await getDoc(doc(db, 'config', 'achievements'));
      setAchievements(snap.exists() ? (snap.data().list || []) : []);
    } catch (e) {
      showToast('載入成就失敗: ' + e.message, 'error');
    } finally {
      setLoading(false);
    }
  }

  function openNew() {
    setEditAch(null);
    setForm({ ...EMPTY_ACH, id: `a_${Date.now()}` });
    setShowForm(true);
  }

  function openEdit(ach) {
    setEditAch(ach);
    setForm({ ...ach });
    setShowForm(true);
  }

  async function saveAchievement() {
    if (!form.name) { showToast('成就名稱不能為空', 'error'); return; }
    setSaving(true);
    try {
      const configRef = doc(db, 'config', 'achievements');
      const snap = await getDoc(configRef);
      let list = snap.exists() ? (snap.data().list || []) : [];

      if (editAch) {
        list = list.map(a => a.id === form.id ? form : a);
      } else {
        list = [...list, form];
      }

      await setDoc(configRef, { list }, { merge: true });
      setAchievements(list);
      showToast(editAch ? '✅ 成就已更新！' : '✅ 新成就已發布！', 'success');
      setShowForm(false);
    } catch (e) {
      showToast('儲存失敗: ' + e.message, 'error');
    } finally {
      setSaving(false);
    }
  }

  async function deleteAch(ach) {
    if (!confirm(`確定要刪除「${ach.name}」嗎？`)) return;
    try {
      const configRef = doc(db, 'config', 'achievements');
      const snap = await getDoc(configRef);
      const list = (snap.data().list || []).filter(a => a.id !== ach.id);
      await setDoc(configRef, { list });
      setAchievements(list);
      showToast('🗑️ 成就已刪除', 'info');
    } catch (e) {
      showToast('刪除失敗: ' + e.message, 'error');
    }
  }

  return (
    <div className="flex-col gap-6">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">成就管理</h1>
          <p className="page-subtitle">管理玩家可解鎖的生涯成就</p>
        </div>
        <button className="btn btn-primary" onClick={openNew}>＋ 新增成就</button>
      </div>

      {/* Achievement Grid */}
      <div className="card">
        {loading ? (
          <div className="flex items-center gap-3"><div className="loader" /><span className="color-mute">載入中...</span></div>
        ) : achievements.length === 0 ? (
          <p className="color-mute">尚無成就。點擊「新增成就」建立第一個成就。</p>
        ) : (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:12 }}>
            {achievements.map(ach => (
              <div key={ach.id} className="card" style={{ padding:'16px 20px' }}>
                <div className="flex justify-between items-center" style={{ marginBottom:8 }}>
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize:'1.75rem' }}>{ach.icon}</span>
                    <div>
                      <div style={{ fontWeight:700 }}>{ach.name}</div>
                      <span className={`badge ${RARITY_COLORS[ach.rarity]}`}>{ach.rarity}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn btn-ghost btn-sm" onClick={() => openEdit(ach)}>✏️</button>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteAch(ach)}>🗑️</button>
                  </div>
                </div>
                <p className="text-sm color-mute" style={{ lineHeight:1.5, marginBottom:8 }}>{ach.desc}</p>
                <code className="text-sm font-mono" style={{ color:'var(--accent)', display:'block', wordBreak:'break-all' }}>
                  {ach.condition}
                </code>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Achievement Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && setShowForm(false)}>
          <div className="modal">
            <div className="flex justify-between items-center" style={{ marginBottom:20 }}>
              <h2 style={{ fontSize:'1.25rem', fontWeight:700 }}>{editAch ? '編輯成就' : '新增成就'}</h2>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowForm(false)}>✕</button>
            </div>

            <div className="flex-col gap-4">
              <div className="grid-2">
                <div className="form-group">
                  <label>圖示 (Emoji)</label>
                  <input value={form.icon} onChange={e => setForm(f=>({...f,icon:e.target.value}))} placeholder="🏆" />
                </div>
                <div className="form-group">
                  <label>稀有度</label>
                  <select value={form.rarity} onChange={e => setForm(f=>({...f,rarity:e.target.value}))}>
                    {RARITY_OPTIONS.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>成就名稱</label>
                <input value={form.name} onChange={e => setForm(f=>({...f,name:e.target.value}))} placeholder="例：鑽石手" />
              </div>

              <div className="form-group">
                <label>成就描述</label>
                <textarea value={form.desc} onChange={e => setForm(f=>({...f,desc:e.target.value}))} placeholder="描述解鎖條件..." />
              </div>

              <div className="form-group">
                <label>判定條件 (JS 運算式)</label>
                <input
                  className="font-mono"
                  value={form.condition}
                  onChange={e => setForm(f=>({...f,condition:e.target.value}))}
                  placeholder="例：mdd < 10 && holdYears >= 3"
                />
                <p className="text-sm color-mute" style={{ marginTop:4 }}>
                  可用變數：mdd, holdYears, growthRate, cryptoPct, diversified, survivedBlackswan, bottomFishing, stopLossCount
                </p>
              </div>
            </div>

            <div className="flex gap-3" style={{ marginTop:24, justifyContent:'flex-end' }}>
              <button className="btn btn-ghost" onClick={() => setShowForm(false)}>取消</button>
              <button className="btn btn-primary" onClick={saveAchievement} disabled={saving}>
                {editAch ? '儲存變更' : '發布成就'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
