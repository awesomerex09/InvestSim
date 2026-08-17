import React, { useEffect, useState, useMemo } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config.js';

const EMPTY_ACHIEVEMENT = {
  id:          '',
  title:       '',
  description: '',
  icon:        '🏆',
  conditionStr: 's.age >= 30 && s.lifeStats.happiness > 80',
  enabled:     true
};

// ─── Achievement Card (for tree view) ─────────────────────────────────────────
function AchievementCard({ a, onToggle, onEdit, onDelete }) {
  const isEnabled = a.enabled !== false;
  return (
    <div style={{
      width: 200, background: isEnabled ? "#0f172a" : "#0a0f1e",
      border: `2px solid ${isEnabled ? "#f59e0b" : "#374151"}`,
      borderRadius: 10, padding: "10px 12px",
      display: "flex", flexDirection: "column", gap: 6,
      opacity: isEnabled ? 1 : 0.45,
      boxShadow: isEnabled ? "0 2px 12px #f59e0b22" : "none",
      transition: "all 0.15s",
      position: "relative",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 20 }}>{a.icon || "🏆"}</span>
        {/* Mini toggle */}
        <label
          onClick={e => { e.stopPropagation(); onToggle(a); }}
          style={{ cursor: "pointer" }}
          title={isEnabled ? "停用" : "啟用"}
        >
          <div style={{
            width: 26, height: 14, borderRadius: 7,
            background: isEnabled ? "#16a34a" : "#374151",
            position: "relative", transition: "background 0.2s",
          }}>
            <div style={{
              position: "absolute", top: 2, left: isEnabled ? 13 : 2,
              width: 10, height: 10, borderRadius: "50%",
              background: "#fff", transition: "left 0.2s",
            }} />
          </div>
        </label>
      </div>

      {/* Title */}
      <div style={{
        fontWeight: 700, fontSize: 12, color: "#f1f5f9", lineHeight: 1.3,
        overflow: "hidden", display: "-webkit-box",
        WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
      }}>
        {a.title}
      </div>

      {/* Condition (truncated) */}
      <div style={{
        fontFamily: "monospace", fontSize: 9, color: "#f59e0b",
        background: "#1c1403", borderRadius: 4, padding: "3px 6px",
        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
      }}>
        {a.conditionStr}
      </div>

      {/* ID */}
      <div style={{ fontSize: 8, color: "#475569", fontFamily: "monospace" }}>{a.id}</div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 4, marginTop: 2 }}>
        <button
          onClick={() => onEdit(a)}
          style={{
            flex: 1, background: "#1d4ed8", border: "none", color: "#fff",
            borderRadius: 6, padding: "4px 0", cursor: "pointer", fontSize: 10, fontWeight: 600,
          }}
        >✏️ 編輯</button>
        <button
          onClick={() => onDelete(a)}
          style={{
            background: "#b91c1c", border: "none", color: "#fff",
            borderRadius: 6, padding: "4px 8px", cursor: "pointer", fontSize: 10,
          }}
        >🗑️</button>
      </div>
    </div>
  );
}

// ─── Achievement Tree View ────────────────────────────────────────────────────
function AchievementTreeView({ achievements, onToggle, onEdit, onDelete }) {
  const [searchQ, setSearchQ] = useState("");
  const [filterType, setFilterType] = useState("all");

  const visible = useMemo(() => {
    let r = achievements;
    if (searchQ) {
      const q = searchQ.toLowerCase();
      r = r.filter(a => a.title?.toLowerCase().includes(q) || a.id?.toLowerCase().includes(q));
    }
    if (filterType === "enabled")  r = r.filter(a => a.enabled !== false);
    if (filterType === "disabled") r = r.filter(a => a.enabled === false);
    return r;
  }, [achievements, searchQ, filterType]);

  // Group by first letter of title (A-Z, others)
  const groups = useMemo(() => {
    const map = new Map();
    map.set("🔛 啟用中", []);
    map.set("🚫 已停用", []);
    visible.forEach(a => {
      const key = a.enabled !== false ? "🔛 啟用中" : "🚫 已停用";
      map.get(key).push(a);
    });
    // Remove empty groups
    for (const [k, v] of map) { if (v.length === 0) map.delete(k); }
    return map;
  }, [visible]);

  return (
    <div style={{
      background: "#020617", borderRadius: 12, border: "1px solid #1e293b",
      padding: 16, display: "flex", flexDirection: "column", gap: 12,
      minHeight: "60vh",
    }}>
      {/* Toolbar */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        <input
          value={searchQ} onChange={e => setSearchQ(e.target.value)}
          placeholder="🔍 搜尋成就..."
          style={{
            background: "#0f172a", border: "1px solid #334155", borderRadius: 7,
            color: "#cbd5e1", padding: "5px 12px", fontSize: 12, width: 200,
          }}
        />
        {[["all", "全部"], ["enabled", "🔛 啟用"], ["disabled", "🚫 停用"]].map(([v, l]) => (
          <button key={v} onClick={() => setFilterType(v)} style={{
            background: filterType === v ? "#d97706" : "#0f172a",
            border: "1px solid #334155",
            color: filterType === v ? "#fff" : "#64748b",
            borderRadius: 6, padding: "4px 10px", fontSize: 11, cursor: "pointer",
          }}>{l}</button>
        ))}
        <span style={{ color: "#475569", fontSize: 11 }}>{visible.length} / {achievements.length} 個</span>
      </div>

      {/* Groups */}
      {[...groups.entries()].map(([groupName, items]) => (
        <div key={groupName}>
          {/* Group header */}
          <div style={{
            fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: 1,
            textTransform: "uppercase", marginBottom: 8,
            borderBottom: "1px solid #1e293b", paddingBottom: 4,
          }}>
            {groupName}
            <span style={{ color: "#334155", marginLeft: 8, fontWeight: 400 }}>×{items.length}</span>
          </div>
          {/* Cards grid */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {items.map(a => (
              <AchievementCard
                key={a.id} a={a}
                onToggle={onToggle} onEdit={onEdit} onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      ))}

      {visible.length === 0 && (
        <p style={{ color: "#475569", textAlign: "center", marginTop: 40 }}>
          沒有符合條件的成就
        </p>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AchievementManager({ showToast }) {
  const [achievements, setAchievements] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editAchv, setEditAchv] = useState(null);
  const [form,     setForm]     = useState(EMPTY_ACHIEVEMENT);
  const [saving,   setSaving]   = useState(false);
  const [activeTab, setActiveTab] = useState('list');

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
    setEditAchv(null);
    setForm({ ...EMPTY_ACHIEVEMENT, id: `a_${Date.now()}` });
    setShowForm(true);
  }

  function openEdit(a) {
    setEditAchv(a);
    setForm(JSON.parse(JSON.stringify({ enabled: true, ...a })));
    setShowForm(true);
  }

  async function toggleEnabled(a) {
    try {
      const configRef = doc(db, 'config', 'achievements');
      const snap = await getDoc(configRef);
      let list = snap.exists() ? (snap.data().list || []) : [];
      list = list.map(item => item.id === a.id ? { ...item, enabled: !item.enabled } : item);
      await setDoc(configRef, { list }, { merge: true });
      setAchievements(list);
      showToast(a.enabled ? '已關閉成就' : '已啟用成就', 'success');
    } catch (e) {
      showToast('切換狀態失敗: ' + e.message, 'error');
    }
  }

  async function saveAchievement() {
    if (!form.title) { showToast('成就名稱不能為空', 'error'); return; }
    if (!form.conditionStr) { showToast('解鎖條件不能為空', 'error'); return; }
    setSaving(true);
    try {
      const configRef = doc(db, 'config', 'achievements');
      const snap = await getDoc(configRef);
      let list = snap.exists() ? (snap.data().list || []) : [];

      if (editAchv) {
        list = list.map(a => a.id === form.id ? form : a);
      } else {
        list = [...list, form];
      }

      await setDoc(configRef, { list }, { merge: true });
      setAchievements(list);
      showToast(editAchv ? '✅ 成就已更新！' : '✅ 新成就已發布！', 'success');
      setShowForm(false);
    } catch (e) {
      showToast('儲存失敗: ' + e.message, 'error');
    } finally {
      setSaving(false);
    }
  }

  async function deleteAchievement(a) {
    if (!confirm(`確定要刪除「${a.title}」嗎？`)) return;
    try {
      const configRef = doc(db, 'config', 'achievements');
      const snap = await getDoc(configRef);
      const list = (snap.data().list || []).filter(item => item.id !== a.id);
      await setDoc(configRef, { list });
      setAchievements(list);
      showToast('🗑️ 成就已刪除', 'info');
    } catch (e) {
      showToast('刪除失敗: ' + e.message, 'error');
    }
  }

  function updateForm(field, value) {
    setForm(f => ({ ...f, [field]: value }));
  }

  return (
    <div className="flex-col gap-6">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">成就管理</h1>
          <p className="page-subtitle">共 {achievements.length} 個成就・自訂玩家的成就與解鎖條件</p>
        </div>
        <button className="btn btn-primary" onClick={openNew}>＋ 新增成就</button>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-4" style={{ borderBottom: '1px solid var(--bg-card-hover)', paddingBottom: 8 }}>
        <button className={`btn btn-sm ${activeTab === 'list' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setActiveTab('list')}>📋 清單檢視</button>
        <button className={`btn btn-sm ${activeTab === 'tree' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setActiveTab('tree')}>🌳 樹狀圖檢視</button>
      </div>

      {loading ? (
        <div className="card flex items-center gap-3"><div className="loader" /><span className="color-mute">載入中...</span></div>
      ) : activeTab === 'tree' ? (
        achievements.length === 0 ? (
          <div className="card"><p className="color-mute">尚無成就，請先新增。</p></div>
        ) : (
          <AchievementTreeView
            achievements={achievements}
            onToggle={toggleEnabled}
            onEdit={openEdit}
            onDelete={deleteAchievement}
          />
        )
      ) : (
        <div className="card">
          {achievements.length === 0 ? (
            <p className="color-mute">尚無成就。點擊「新增成就」建立第一個成就。</p>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>狀態</th>
                    <th>圖示</th>
                    <th>成就 ID</th>
                    <th>名稱</th>
                    <th>描述</th>
                    <th>解鎖條件表示式</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {achievements.map(a => {
                    const isEnabled = a.enabled !== false;
                    return (
                      <tr key={a.id} style={{ opacity: isEnabled ? 1 : 0.5 }}>
                        <td>
                          <label className="switch" style={{ cursor: 'pointer' }}>
                            <input type="checkbox" checked={isEnabled} onChange={() => toggleEnabled(a)} />
                            <span className="slider round"></span>
                          </label>
                        </td>
                        <td style={{ fontSize: '1.25rem' }}>{a.icon}</td>
                        <td className="font-mono color-mute">{a.id}</td>
                        <td><span style={{ fontWeight: 600 }}>{a.title}</span></td>
                        <td className="color-mute" style={{ maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.description}</td>
                        <td className="font-mono color-accent" style={{ maxWidth: 300, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.conditionStr}</td>
                        <td>
                          <div className="flex gap-2">
                            <button className="btn btn-ghost btn-sm" onClick={() => openEdit(a)}>✏️</button>
                            <button className="btn btn-danger btn-sm" onClick={() => deleteAchievement(a)}>🗑️</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowForm(false)}>
          <div className="modal" style={{ maxWidth: 600 }}>
            <div className="flex justify-between items-center" style={{ marginBottom: 20 }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{editAchv ? '編輯成就' : '新增成就'}</h2>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowForm(false)}>✕</button>
            </div>

            <div className="flex-col gap-4">
              <div className="form-group flex items-center gap-3">
                <label>是否啟用</label>
                <input type="checkbox" checked={form.enabled !== false} onChange={e => updateForm('enabled', e.target.checked)} />
              </div>
              <div className="grid-2">
                <div className="form-group">
                  <label>圖示 (Emoji)</label>
                  <input value={form.icon} onChange={e => updateForm('icon', e.target.value)} placeholder="🏆" />
                </div>
                <div className="form-group">
                  <label>成就 ID</label>
                  <input value={form.id} onChange={e => updateForm('id', e.target.value)} placeholder="a_001" className="font-mono" />
                </div>
              </div>

              <div className="form-group">
                <label>成就名稱</label>
                <input value={form.title} onChange={e => updateForm('title', e.target.value)} placeholder="例：百萬富翁" />
              </div>

              <div className="form-group">
                <label>成就描述</label>
                <textarea value={form.description} onChange={e => updateForm('description', e.target.value)} placeholder="描述這個成就的意義..." />
              </div>

              <div className="form-group">
                <label>解鎖條件 (JS 語法)</label>
                <input
                  value={form.conditionStr}
                  onChange={e => updateForm('conditionStr', e.target.value)}
                  placeholder="s.portfolio.cash > 1000000 && s.age < 30"
                  className="font-mono"
                  style={{ color: 'var(--color-accent)' }}
                />
                <small className="color-mute" style={{ marginTop: 6, display: 'block' }}>
                  提示：<code>s</code> 為狀態引擎物件，可使用的變數如 <code>s.age</code>, <code>s.portfolio.cash</code>, <code>s.lifeStats.happiness</code> 等。遊戲每個月會自動 `eval` 這個字串，若為 `true` 則解鎖。
                </small>
              </div>

              <div className="flex justify-end gap-3" style={{ marginTop: 10 }}>
                <button className="btn btn-ghost" onClick={() => setShowForm(false)}>取消</button>
                <button className="btn btn-primary" onClick={saveAchievement} disabled={saving}>
                  {saving ? '儲存中...' : '儲存成就'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
