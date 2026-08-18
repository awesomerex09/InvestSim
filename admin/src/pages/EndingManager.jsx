import React, { useEffect, useState, useMemo } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config.js';

const EMPTY_ENDING = {
  id:          '',
  title:       '',
  description: '',
  icon:        '🏆',
  conditionStr: '',
  guiConds:    [],
  advancedMode: false,
  enabled:     true
};

// ─── Reusable Condition Editor ─────────────────────────────────────────────
const FIELD_OPTIONS = [
  { value: 's.age', label: '年齡' },
  { value: 's.portfolio.cash', label: '現金' },
  { value: 's.portfolio.twStock', label: '台股' },
  { value: 's.portfolio.usStock', label: '美股' },
  { value: 's.portfolio.crypto', label: '加密貨幣' },
  { value: 's.portfolio.realEstate', label: '房地產' },
  { value: 's.lifeStats.appearance', label: '顏值' },
  { value: 's.lifeStats.intelligence', label: '智力' },
  { value: 's.lifeStats.constitution', label: '體質' },
  { value: 's.lifeStats.happiness', label: '快樂' },
];

const OP_OPTIONS = [
  { value: '>=', label: '大於等於 (>=)' },
  { value: '<=', label: '小於等於 (<=)' },
  { value: '>',  label: '大於 (>)' },
  { value: '<',  label: '小於 (<)' },
  { value: '===', label: '等於 (===)' },
];

function guiToConditionStr(conds) {
  if (!conds || conds.length === 0) return 'true';
  return conds.map((c, i) => {
    let str = `${c.field} ${c.op} ${c.val}`;
    if (i > 0) str = ` ${c.logic} ${str}`;
    return str;
  }).join('');
}

function ConditionEditor({ label, conds, onChange, advancedMode, onToggleAdvanced, conditionStr, onConditionStrChange }) {
  const addCond = () => onChange([...(conds||[]), { id: Date.now(), logic: '&&', field: 's.portfolio.cash', op: '>=', val: 0 }]);
  const removeCond = (idx) => onChange(conds.filter((_, i) => i !== idx));
  const updateCond = (idx, field, val) => {
    const newC = [...conds];
    newC[idx] = { ...newC[idx], [field]: val };
    onChange(newC);
  };

  return (
    <div style={{ padding:'10px 12px', background:'hsla(0,0%,0%,0.18)', borderRadius:8 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
        <span style={{ fontWeight:600, fontSize:'0.8125rem' }}>{label}</span>
        <label style={{ display:'flex', alignItems:'center', gap:6, fontSize:'0.75rem', color:'var(--color-muted)', cursor:'pointer', userSelect:'none' }}>
          <input type="checkbox" checked={!!advancedMode} onChange={e => onToggleAdvanced(e.target.checked)}
            style={{ accentColor:'var(--color-accent)', cursor:'pointer' }} />
          進階模式（原始碼）
        </label>
      </div>
      {advancedMode ? (
        <>
          <input
            value={conditionStr || ''}
            onChange={e => onConditionStrChange(e.target.value)}
            placeholder="s.portfolio.cash > 1000000 && s.age < 30"
            className="font-mono"
            style={{ color: 'var(--color-accent)', width:'100%' }}
          />
          <small className="color-mute" style={{ marginTop: 6, display: 'block' }}>
            提示：<code>s</code> 為狀態引擎物件，可使用的變數如 <code>s.age</code>, <code>s.portfolio.cash</code>, <code>s.lifeStats.happiness</code> 等。遊戲每個月會自動 `eval` 這個字串，若為 `true` 則解鎖。
          </small>
        </>
      ) : (
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {(conds||[]).map((c, i) => (
            <div key={c.id} style={{ display:'flex', gap:6, alignItems:'center' }}>
              {i > 0 && (
                <select value={c.logic} onChange={e => updateCond(i, 'logic', e.target.value)} style={{ width:70 }}>
                  <option value="&&">AND</option>
                  <option value="||">OR</option>
                </select>
              )}
              {i === 0 && <div style={{ width:70, textAlign:'center', color:'var(--color-muted)', fontSize:'0.75rem' }}>當</div>}
              <select value={c.field} onChange={e => updateCond(i, 'field', e.target.value)} style={{ flex:1 }}>
                {FIELD_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label} ({o.value})</option>)}
              </select>
              <select value={c.op} onChange={e => updateCond(i, 'op', e.target.value)} style={{ width:110 }}>
                {OP_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <input type="number" value={c.val} onChange={e => updateCond(i, 'val', parseFloat(e.target.value)||0)} style={{ width:100 }} />
              <button className="btn btn-ghost btn-sm" style={{ padding:'0 8px' }} onClick={() => removeCond(i)}>✕</button>
            </div>
          ))}
          <button className="btn btn-ghost" style={{ width: '100%', border: '1px dashed var(--border-color)' }} onClick={addCond}>＋ 新增條件</button>
        </div>
      )}
    </div>
  );
}


// ─── Ending Card (for tree view) ─────────────────────────────────────────
function EndingCard({ a, onToggle, onEdit, onDelete }) {
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

// ─── Ending Tree View ────────────────────────────────────────────────────
function EndingTreeView({ endings, onToggle, onEdit, onDelete }) {
  const [searchQ, setSearchQ] = useState("");
  const [filterType, setFilterType] = useState("all");

  const visible = useMemo(() => {
    let r = endings;
    if (searchQ) {
      const q = searchQ.toLowerCase();
      r = r.filter(a => a.title?.toLowerCase().includes(q) || a.id?.toLowerCase().includes(q));
    }
    if (filterType === "enabled")  r = r.filter(a => a.enabled !== false);
    if (filterType === "disabled") r = r.filter(a => a.enabled === false);
    return r;
  }, [endings, searchQ, filterType]);

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
          placeholder="🔍 搜尋結局..."
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
        <span style={{ color: "#475569", fontSize: 11 }}>{visible.length} / {endings.length} 個</span>
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
              <EndingCard
                key={a.id} a={a}
                onToggle={onToggle} onEdit={onEdit} onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      ))}

      {visible.length === 0 && (
        <p style={{ color: "#475569", textAlign: "center", marginTop: 40 }}>
          沒有符合條件的結局
        </p>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function EndingManager({ showToast }) {
  const [endings, setEndings] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editEnding, setEditEnding] = useState(null);
  const [form,     setForm]     = useState(EMPTY_ENDING);
  const [saving,   setSaving]   = useState(false);
  const [activeTab, setActiveTab] = useState('list');

  useEffect(() => { loadEndings(); }, []);

  async function loadEndings() {
    setLoading(true);
    try {
      const snap = await getDoc(doc(db, 'config', 'endings'));
      setEndings(snap.exists() ? (snap.data().list || []) : []);
    } catch (e) {
      showToast('載入結局失敗: ' + e.message, 'error');
    } finally {
      setLoading(false);
    }
  }

  function openNew() {
    setEditEnding(null);
    setForm({ ...EMPTY_ENDING, id: `a_${Date.now()}` });
    setShowForm(true);
  }

  function openEdit(a) {
    setEditEnding(a);
    const hasComplexJS = a.conditionStr && a.conditionStr.length > 0 && (!a.guiConds || a.guiConds.length === 0);
    setForm(JSON.parse(JSON.stringify({ 
      enabled: true, 
      guiConds: [], 
      advancedMode: hasComplexJS, 
      ...a 
    })));
    setShowForm(true);
  }

  async function toggleEnabled(a) {
    try {
      const configRef = doc(db, 'config', 'endings');
      const snap = await getDoc(configRef);
      let list = snap.exists() ? (snap.data().list || []) : [];
      list = list.map(item => item.id === a.id ? { ...item, enabled: !item.enabled } : item);
      await setDoc(configRef, { list }, { merge: true });
      setEndings(list);
      showToast(a.enabled ? '已關閉結局' : '已啟用結局', 'success');
    } catch (e) {
      showToast('切換狀態失敗: ' + e.message, 'error');
    }
  }

  async function saveEnding() {
    if (!form.title) { showToast('結局名稱不能為空', 'error'); return; }
    if (!form.conditionStr) { showToast('解鎖條件不能為空', 'error'); return; }
    setSaving(true);
    try {
      const configRef = doc(db, 'config', 'endings');
      const snap = await getDoc(configRef);
      let list = snap.exists() ? (snap.data().list || []) : [];

      const achvToSave = {
        ...form,
        conditionStr: form.advancedMode ? form.conditionStr : guiToConditionStr(form.guiConds)
      };

      if (editEnding) {
        list = list.map(a => a.id === form.id ? achvToSave : a);
      } else {
        list = [...list, achvToSave];
      }

      await setDoc(configRef, { list }, { merge: true });
      setEndings(list);
      showToast(editEnding ? '✅ 結局已更新！' : '✅ 新結局已發布！', 'success');
      setShowForm(false);
    } catch (e) {
      showToast('儲存失敗: ' + e.message, 'error');
    } finally {
      setSaving(false);
    }
  }

  async function deleteEnding(a) {
    if (!confirm(`確定要刪除「${a.title}」嗎？`)) return;
    try {
      const configRef = doc(db, 'config', 'endings');
      const snap = await getDoc(configRef);
      const list = (snap.data().list || []).filter(item => item.id !== a.id);
      await setDoc(configRef, { list });
      setEndings(list);
      showToast('🗑️ 結局已刪除', 'info');
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
          <h1 className="page-title gradient-text">結局管理</h1>
          <p className="page-subtitle">共 {endings.length} 個結局・自訂玩家的結局與解鎖條件</p>
        </div>
        <button className="btn btn-primary" onClick={openNew}>＋ 新增結局</button>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-4" style={{ borderBottom: '1px solid var(--bg-card-hover)', paddingBottom: 8 }}>
        <button className={`btn btn-sm ${activeTab === 'list' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setActiveTab('list')}>📋 清單檢視</button>
        <button className={`btn btn-sm ${activeTab === 'tree' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setActiveTab('tree')}>🌳 樹狀圖檢視</button>
      </div>

      {loading ? (
        <div className="card flex items-center gap-3"><div className="loader" /><span className="color-mute">載入中...</span></div>
      ) : activeTab === 'tree' ? (
        endings.length === 0 ? (
          <div className="card"><p className="color-mute">尚無結局，請先新增。</p></div>
        ) : (
          <EndingTreeView
            endings={endings}
            onToggle={toggleEnabled}
            onEdit={openEdit}
            onDelete={deleteEnding}
          />
        )
      ) : (
        <div className="card">
          {endings.length === 0 ? (
            <p className="color-mute">尚無結局。點擊「新增結局」建立第一個結局。</p>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>狀態</th>
                    <th>圖示</th>
                    <th>結局 ID</th>
                    <th>名稱</th>
                    <th>描述</th>
                    <th>解鎖條件表示式</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {endings.map(a => {
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
                            <button className="btn btn-danger btn-sm" onClick={() => deleteEnding(a)}>🗑️</button>
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
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{editEnding ? '編輯結局' : '新增結局'}</h2>
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
                  <label>結局 ID</label>
                  <input value={form.id} onChange={e => updateForm('id', e.target.value)} placeholder="a_001" className="font-mono" />
                </div>
              </div>

              <div className="form-group">
                <label>結局名稱</label>
                <input value={form.title} onChange={e => updateForm('title', e.target.value)} placeholder="例：百萬富翁" />
              </div>

              <div className="form-group">
                <label>結局描述</label>
                <textarea value={form.description} onChange={e => updateForm('description', e.target.value)} placeholder="描述這個結局的意義..." />
              </div>

              <ConditionEditor
                label="解鎖條件"
                conds={form.guiConds}
                onChange={v => updateForm('guiConds', v)}
                advancedMode={form.advancedMode}
                onToggleAdvanced={v => updateForm('advancedMode', v)}
                conditionStr={form.conditionStr}
                onConditionStrChange={v => updateForm('conditionStr', v)}
              />

              <div className="flex justify-end gap-3" style={{ marginTop: 10 }}>
                <button className="btn btn-ghost" onClick={() => setShowForm(false)}>取消</button>
                <button className="btn btn-primary" onClick={saveEnding} disabled={saving}>
                  {saving ? '儲存中...' : '儲存結局'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
