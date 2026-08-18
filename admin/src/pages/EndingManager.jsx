import React, { useEffect, useState, useMemo } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config.js';
import { DEFAULT_ENDINGS } from '../data/seedEndings.js';

const EMPTY_ENDING = {
  id:          '',
  title:       '',
  description: '',
  icon:        '🎬',
  conditionStr: '',
  guiConds:    [{ id: 1, logic: '&&', field: 's.portfolio.cash', op: '<', val: 0 }],
  advancedMode: false,
  enabled:     true
};

// ─── Reusable Condition Editor ─────────────────────────────────────────────
const FIELD_OPTIONS = [
  { value: 'nw', label: '總資產淨值 (nw)' },
  { value: 's.portfolio.cash', label: '現金 (cash)' },
  { value: 's.portfolio.twStock', label: '台股市值 (twStock)' },
  { value: 's.portfolio.usStock', label: '美股市值 (usStock)' },
  { value: 's.portfolio.crypto', label: '加密貨幣 (crypto)' },
  { value: 's.portfolio.realEstate', label: '房地產 (realEstate)' },
  { value: 's.portfolio.gold', label: '黃金市值 (gold)' },
  { value: 's.age', label: '玩家年齡 (age)' },
  { value: 's.lifeStats.appearance', label: '顏值 (appearance)' },
  { value: 's.lifeStats.intelligence', label: '智力 (intelligence)' },
  { value: 's.lifeStats.constitution', label: '體質 (constitution)' },
  { value: 's.lifeStats.happiness', label: '快樂 (happiness)' },
];

const OP_OPTIONS = [
  { value: '>=', label: '大於等於 (>=)' },
  { value: '<=', label: '小於等於 (<=)' },
  { value: '>',  label: '大於 (>)' },
  { value: '<',  label: '小於 (<)' },
  { value: '===', label: '等於 (===)' },
];

function guiToConditionStr(conds) {
  if (!conds || conds.length === 0) return 'false';
  return conds.map((c, i) => {
    let str = `${c.field} ${c.op} ${c.val}`;
    if (i > 0) str = ` ${c.logic || '&&'} ${str}`;
    return str;
  }).join('');
}

function ConditionEditor({ label, conds, onChange, advancedMode, onToggleAdvanced, conditionStr, onConditionStrChange }) {
  const addCond = () => onChange([...(conds || []), { id: Date.now(), logic: '&&', field: 's.portfolio.cash', op: '<', val: 0 }]);
  const removeCond = (idx) => onChange((conds || []).filter((_, i) => i !== idx));
  const updateCond = (idx, field, val) => {
    const newC = [...(conds || [])];
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
            placeholder="nw < 0 && s.age >= 18"
            className="font-mono"
            style={{ color: 'var(--color-accent)', width:'100%' }}
          />
          <small className="color-mute" style={{ marginTop: 6, display: 'block' }}>
            提示：<code>s</code> 為狀態引擎物件，<code>nw</code> 為總淨值。當條件回傳 <code>true</code> 時，遊戲將即刻觸發此結局結算。
          </small>
        </>
      ) : (
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {(conds && conds.length > 0) ? conds.map((c, i) => (
            <div key={c.id || i} style={{ display:'flex', gap:6, alignItems:'center' }}>
              {i > 0 ? (
                <select value={c.logic || '&&'} onChange={e => updateCond(i, 'logic', e.target.value)} style={{ width:75 }}>
                  <option value="&&">AND 且</option>
                  <option value="||">OR 或</option>
                </select>
              ) : (
                <div style={{ width:75, textAlign:'center', color:'var(--color-muted)', fontSize:'0.75rem', fontWeight:600 }}>當</div>
              )}
              <select value={c.field || 's.portfolio.cash'} onChange={e => updateCond(i, 'field', e.target.value)} style={{ flex:1 }}>
                {FIELD_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <select value={c.op || '<'} onChange={e => updateCond(i, 'op', e.target.value)} style={{ width:120 }}>
                {OP_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <input type="number" value={c.val ?? 0} onChange={e => updateCond(i, 'val', parseFloat(e.target.value) || 0)} style={{ width:100 }} />
              <button className="btn btn-ghost btn-sm" style={{ padding:'0 8px', color:'var(--color-red)' }} onClick={() => removeCond(i)}>✕</button>
            </div>
          )) : (
            <div className="color-mute text-xs" style={{ padding: '4px 0' }}>尚未設定條件，點擊下方新增。</div>
          )}
          <button className="btn btn-ghost" style={{ width: '100%', border: '1px dashed var(--border-color)', marginTop: 4 }} onClick={addCond}>＋ 新增條件</button>
        </div>
      )}
    </div>
  );
}

// ─── Ending Card (for tree view) ─────────────────────────────────────────────
function EndingCard({ e, onToggle, onEdit, onDelete }) {
  const isEnabled = e.enabled !== false;
  return (
    <div style={{
      width: 200, background: isEnabled ? "#0f172a" : "#0a0f1e",
      border: `2px solid ${isEnabled ? "#ec4899" : "#374151"}`,
      borderRadius: 10, padding: "10px 12px",
      display: "flex", flexDirection: "column", gap: 6,
      opacity: isEnabled ? 1 : 0.45,
      boxShadow: isEnabled ? "0 2px 12px #ec489922" : "none",
      transition: "all 0.15s",
      position: "relative",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 20 }}>{e.icon || "🎬"}</span>
        <label
          onClick={ev => { ev.stopPropagation(); onToggle(e); }}
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
        {e.title}
      </div>

      {/* Condition (truncated) */}
      <div style={{
        fontFamily: "monospace", fontSize: 9, color: "#ec4899",
        background: "#1c0b16", borderRadius: 4, padding: "3px 6px",
        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
      }}>
        {e.conditionStr || 'false'}
      </div>

      {/* ID */}
      <div style={{ fontSize: 8, color: "#475569", fontFamily: "monospace" }}>{e.id}</div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 4, marginTop: 2 }}>
        <button
          onClick={() => onEdit(e)}
          style={{
            flex: 1, background: "#1d4ed8", border: "none", color: "#fff",
            borderRadius: 6, padding: "4px 0", cursor: "pointer", fontSize: 10, fontWeight: 600,
          }}
        >✏️ 編輯</button>
        <button
          onClick={() => onDelete(e)}
          style={{
            background: "#b91c1c", border: "none", color: "#fff",
            borderRadius: 6, padding: "4px 8px", cursor: "pointer", fontSize: 10,
          }}
        >🗑️</button>
      </div>
    </div>
  );
}

// ─── Ending Tree View ────────────────────────────────────────────────────────
function EndingTreeView({ endings, onToggle, onEdit, onDelete }) {
  const [searchQ, setSearchQ] = useState("");
  const [filterType, setFilterType] = useState("all");

  const visible = useMemo(() => {
    let r = endings;
    if (searchQ) {
      const q = searchQ.toLowerCase();
      r = r.filter(e => e.title?.toLowerCase().includes(q) || e.id?.toLowerCase().includes(q));
    }
    if (filterType === "enabled")  r = r.filter(e => e.enabled !== false);
    if (filterType === "disabled") r = r.filter(e => e.enabled === false);
    return r;
  }, [endings, searchQ, filterType]);

  const groups = useMemo(() => {
    const map = new Map();
    map.set("🔛 啟用中", []);
    map.set("🚫 已停用", []);
    visible.forEach(e => {
      const key = e.enabled !== false ? "🔛 啟用中" : "🚫 已停用";
      map.get(key).push(e);
    });
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
            background: filterType === v ? "#ec4899" : "#0f172a",
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
          <div style={{
            fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: 1,
            textTransform: "uppercase", marginBottom: 8,
            borderBottom: "1px solid #1e293b", paddingBottom: 4,
          }}>
            {groupName}
            <span style={{ color: "#334155", marginLeft: 8, fontWeight: 400 }}>×{items.length}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {items.map(e => (
              <EndingCard
                key={e.id} e={e}
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
      let list = snap.exists() ? (snap.data().list || []) : [];
      if (list.length === 0) {
        await setDoc(doc(db, 'config', 'endings'), { list: DEFAULT_ENDINGS }, { merge: true });
        list = DEFAULT_ENDINGS;
        showToast(`✅ 已自動匯入 ${DEFAULT_ENDINGS.length} 筆預設結局！`, 'success');
      }
      setEndings(list);
    } catch (e) {
      showToast('載入結局失敗: ' + e.message, 'error');
    } finally {
      setLoading(false);
    }
  }

  function openNew() {
    setEditEnding(null);
    setForm({ 
      ...EMPTY_ENDING, 
      id: `end_${Date.now()}`,
      guiConds: [{ id: Date.now(), logic: '&&', field: 's.portfolio.cash', op: '<', val: 0 }]
    });
    setShowForm(true);
  }

  function openEdit(e) {
    setEditEnding(e);
    const hasComplexJS = e.conditionStr && e.conditionStr.length > 0 && (!e.guiConds || e.guiConds.length === 0);
    setForm({ 
      ...EMPTY_ENDING,
      ...JSON.parse(JSON.stringify(e)),
      enabled: e.enabled !== false, 
      guiConds: e.guiConds || [{ id: Date.now(), logic: '&&', field: 's.portfolio.cash', op: '<', val: 0 }], 
      advancedMode: !!hasComplexJS
    });
    setShowForm(true);
  }

  async function toggleEnabled(e) {
    try {
      const configRef = doc(db, 'config', 'endings');
      const snap = await getDoc(configRef);
      let list = snap.exists() ? (snap.data().list || []) : [];
      list = list.map(item => item.id === e.id ? { ...item, enabled: item.enabled === false ? true : false } : item);
      await setDoc(configRef, { list }, { merge: true });
      setEndings(list);
      showToast(e.enabled === false ? '已啟用結局' : '已關閉結局', 'success');
    } catch (err) {
      showToast('切換狀態失敗: ' + err.message, 'error');
    }
  }

  async function saveEnding() {
    if (!form.title || !form.title.trim()) { 
      showToast('結局名稱不能為空', 'error'); 
      return; 
    }

    const conditionToSave = form.advancedMode 
      ? form.conditionStr 
      : guiToConditionStr(form.guiConds);

    if (!conditionToSave || !conditionToSave.trim()) { 
      showToast('觸發條件不能為空', 'error'); 
      return; 
    }

    setSaving(true);
    try {
      const endingToSave = {
        ...form,
        conditionStr: conditionToSave,
        guiConds: form.guiConds || []
      };

      const configRef = doc(db, 'config', 'endings');
      const snap = await getDoc(configRef);
      let list = snap.exists() ? (snap.data().list || []) : [];

      if (editEnding) {
        list = list.map(e => e.id === form.id ? endingToSave : e);
      } else {
        list = [...list, endingToSave];
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

  async function deleteEnding(e) {
    if (!confirm(`確定要刪除「${e.title}」嗎？`)) return;
    try {
      const configRef = doc(db, 'config', 'endings');
      const snap = await getDoc(configRef);
      const list = (snap.data().list || []).filter(item => item.id !== e.id);
      await setDoc(configRef, { list });
      setEndings(list);
      showToast('🗑️ 結局已刪除', 'info');
    } catch (err) {
      showToast('刪除失敗: ' + err.message, 'error');
    }
  }

  function handleExport() {
    const blob = new Blob([JSON.stringify(endings, null, 2)], { type:'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = `investsim_endings_${new Date().toISOString().slice(0,10)}.json`;
    a.click(); URL.revokeObjectURL(url);
    showToast(`📤 已匯出 ${endings.length} 筆結局`, 'success');
  }

  function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        if (!Array.isArray(imported)) throw new Error('格式錯誤：必須是 JSON 陣列');
        const replace = window.confirm(`即將匯入 ${imported.length} 筆結局。\n\n確定 (OK) = 取代全部現有結局\n取消 (Cancel) = 合併（保留現有）`);
        const merged = replace ? imported : [...endings.filter(ex => !imported.find(im => im.id === ex.id)), ...imported];
        const configRef = doc(db, 'config', 'endings');
        await setDoc(configRef, { list: merged });
        setEndings(merged);
        showToast(`✅ 成功匯入 ${imported.length} 筆結局`, 'success');
      } catch (err) {
        showToast('匯入失敗：' + err.message, 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  function updateForm(field, value) {
    setForm(f => ({ ...f, [field]: value }));
  }

  return (
    <div className="flex-col gap-6">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">結局管理</h1>
          <p className="page-subtitle">共 {endings.length} 個結局・自訂玩家遊戲結束的觸發條件與結算說明</p>
        </div>
        <div className="flex gap-3" style={{ flexWrap:'wrap' }}>
          <button className="btn btn-ghost btn-sm" onClick={handleExport}>📤 匯出 JSON</button>
          <label className="btn btn-ghost btn-sm" style={{ cursor:'pointer' }}>
            📥 匯入 JSON
            <input type="file" accept=".json" onChange={handleImport} style={{ display:'none' }} />
          </label>
          <button className="btn btn-primary" onClick={openNew}>＋ 新增結局</button>
        </div>
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
                    <th>觸發條件表示式</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {endings.map(e => {
                    const isEnabled = e.enabled !== false;
                    return (
                      <tr key={e.id} style={{ opacity: isEnabled ? 1 : 0.5 }}>
                        <td>
                          <label className="switch" style={{ cursor: 'pointer' }}>
                            <input type="checkbox" checked={isEnabled} onChange={() => toggleEnabled(e)} />
                            <span className="slider round"></span>
                          </label>
                        </td>
                        <td style={{ fontSize: '1.25rem' }}>{e.icon}</td>
                        <td className="font-mono color-mute">{e.id}</td>
                        <td><span style={{ fontWeight: 600 }}>{e.title}</span></td>
                        <td className="color-mute" style={{ maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.description}</td>
                        <td className="font-mono color-accent" style={{ maxWidth: 300, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.conditionStr || 'false'}</td>
                        <td>
                          <div className="flex gap-2">
                            <button className="btn btn-ghost btn-sm" onClick={() => openEdit(e)}>✏️</button>
                            <button className="btn btn-danger btn-sm" onClick={() => deleteEnding(e)}>🗑️</button>
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
        <div className="modal-overlay" onClick={(ev) => ev.target === ev.currentTarget && setShowForm(false)}>
          <div className="modal" style={{ maxWidth: 640 }}>
            <div className="flex justify-between items-center" style={{ marginBottom: 20 }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{editEnding ? '✏️ 編輯結局' : '＋ 新增結局'}</h2>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowForm(false)}>✕</button>
            </div>

            <div className="flex-col gap-4">
              <div className="grid-2">
                <div className="form-group">
                  <label>圖示 (Emoji)</label>
                  <input value={form.icon} onChange={ev => updateForm('icon', ev.target.value)} placeholder="🎬" />
                </div>
                <div className="form-group">
                  <label>結局 ID</label>
                  <input value={form.id} onChange={ev => updateForm('id', ev.target.value)} placeholder="end_001" className="font-mono" />
                </div>
              </div>

              <div className="form-group">
                <label>結局名稱 *</label>
                <input value={form.title} onChange={ev => updateForm('title', ev.target.value)} placeholder="例：破產倒閉" />
              </div>

              <div className="form-group">
                <label>結局結算描述</label>
                <textarea value={form.description} onChange={ev => updateForm('description', ev.target.value)} placeholder="描述達成此結局時顯示給玩家的結算話語..." rows={2} />
              </div>

              <ConditionEditor
                label="🎯 觸發條件（當條件為真時立即觸發遊戲結束）"
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
                  {saving ? '儲存中...' : (editEnding ? '儲存變更' : '發布結局')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
