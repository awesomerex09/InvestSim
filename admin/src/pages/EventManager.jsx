import React, { useEffect, useState, useMemo } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config.js';
import { INVESTSIM_EVENTS } from '../data/seedInvestSim.js';
import { LIFE_TW_EVENTS } from '../data/seedLifeTwFull.js';
import EventSkillTree from '../components/EventSkillTree.jsx';

const SENTIMENT_OPTIONS = [
  { value:'positive', label:'📈 利多' },
  { value:'negative', label:'📉 利空' },
  { value:'neutral',  label:'😐 中性' },
  { value:'critical', label:'☠️ 黑天鵝' }
];

const TYPE_OPTIONS = [
  { value:'childhood',   label:'🐣 童年成長' },
  { value:'life',        label:'👤 人生抉擇' },
  { value:'macro',       label:'🏦 總體經濟' },
  { value:'company',     label:'🏢 企業事件' },
  { value:'crypto',      label:'₿ 加密貨幣' },
  { value:'realEstate',  label:'🏠 房地產' },
  { value:'tech',        label:'🤖 科技趨勢' },
  { value:'blackswan',   label:'🦢 黑天鵝' },
  { value:'routine',     label:'📅 日常事件' },
  { value:'geopolitics', label:'🌐 地緣政治' },
];

const RISK_OPTIONS = ['none','safe','low','medium','high','extreme'];

// ─── GUI Effect fields ─────────────────────────────────────
const EFFECT_FIELDS = [
  { key:'appearance',   label:'顏值',    icon:'✨' },
  { key:'intelligence', label:'智力',    icon:'🧠' },
  { key:'constitution', label:'體質',    icon:'💪' },
  { key:'happiness',    label:'快樂',    icon:'😊' },
  { key:'cash',         label:'現金(萬)', icon:'💵' },
  { key:'twStock',      label:'台股%',   icon:'🇹🇼' },
  { key:'usStock',      label:'美股%',   icon:'🇺🇸' },
  { key:'crypto',       label:'加密%',   icon:'₿' },
  { key:'realEstate',   label:'房產%',   icon:'🏠' },
  { key:'gold',         label:'黃金%',   icon:'🥇' },
];

function emptyGuiVals() {
  return { appearance:0, intelligence:0, constitution:0, happiness:0,
           cash:0, twStock:0, usStock:0, crypto:0, realEstate:0, gold:0 };
}

function guiToEffectStr(vals) {
  const lines = [];
  if (vals.appearance)   lines.push(`if(${vals.appearance}!==0){s.lifeStats.appearance+=${vals.appearance};}`);
  if (vals.intelligence) lines.push(`if(${vals.intelligence}!==0){s.lifeStats.intelligence+=${vals.intelligence};}`);
  if (vals.constitution) lines.push(`if(${vals.constitution}!==0){s.lifeStats.constitution+=${vals.constitution};}`);
  if (vals.happiness)    lines.push(`if(${vals.happiness}!==0){s.lifeStats.happiness+=${vals.happiness};}`);
  if (vals.cash)         lines.push(`if(${vals.cash}!==0){s.portfolio.cash+=${vals.cash}*10000;}`);
  const mkt = {};
  ['twStock','usStock','crypto','realEstate','gold'].forEach(k => {
    if (vals[k]) mkt[k] = vals[k];
  });
  const mktStr = Object.entries(mkt).map(([k,v]) => `${k}:${v}`).join(',');
  lines.push(`return {${mktStr}};`);
  return lines.join('\n');
}

const EMPTY_CHOICE = { text:'', risk:'medium', effectStr:'', guiVals: emptyGuiVals(), advancedMode: false };

const EMPTY_EVENT = {
  id:'', title:'', description:'',
  type:'life', icon:'📰', sentiment:'neutral', enabled:true,
  triggerType:'age_range', triggerAge:18, minAge:18, maxAge:80,
  prerequisites:[], statReq:{ stat:'none', min:0 },
  effectStr:'', guiVals: emptyGuiVals(), advancedMode: false,
  choices:[{...EMPTY_CHOICE},{...EMPTY_CHOICE},{...EMPTY_CHOICE},{...EMPTY_CHOICE}],
  probability:0.1
};

// ─── Reusable Effect Editor ────────────────────────────────
function EffectEditor({ label, vals, onChange, advancedMode, onToggleAdvanced, effectStr, onEffectStrChange }) {
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
        <textarea
          value={effectStr || ''}
          onChange={e => onEffectStrChange(e.target.value)}
          placeholder="s.lifeStats.happiness -= 5;\nreturn {twStock: 10};"
          className="font-mono"
          style={{ minHeight:64, color:'hsl(45,90%,65%)', width:'100%', resize:'vertical', fontSize:'0.8125rem' }}
        />
      ) : (
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(108px,1fr))', gap:6 }}>
          {EFFECT_FIELDS.map(f => {
            const v = vals?.[f.key] ?? 0;
            const color = v > 0 ? 'hsl(142,70%,60%)' : v < 0 ? 'hsl(355,75%,65%)' : 'var(--text-color)';
            const border = v > 0 ? '1px solid hsl(142,70%,35%)' : v < 0 ? '1px solid hsl(355,70%,40%)' : '1px solid var(--border-color)';
            return (
              <div key={f.key} style={{ display:'flex', flexDirection:'column', gap:2 }}>
                <label style={{ fontSize:'0.7rem', color:'var(--color-muted)', lineHeight:1.2 }}>{f.icon} {f.label}</label>
                <input
                  type="number"
                  step={f.key === 'cash' ? 10 : 1}
                  value={v}
                  onChange={e => onChange({ ...vals, [f.key]: parseFloat(e.target.value)||0 })}
                  style={{ background:'hsla(0,0%,0%,0.3)', border, borderRadius:6, padding:'4px 6px',
                    color, fontWeight: v ? 700 : 400, width:'100%', fontSize:'0.875rem' }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function EventManager({ showToast }) {
  const [events,    setEvents]    = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [showForm,  setShowForm]  = useState(false);
  const [editEvent, setEditEvent] = useState(null);
  const [form,      setForm]      = useState(EMPTY_EVENT);
  const [saving,    setSaving]    = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Filter state
  const [search,        setSearch]        = useState('');
  const [filterType,    setFilterType]    = useState('');
  const [filterSent,    setFilterSent]    = useState('');
  const [filterEnabled, setFilterEnabled] = useState('');
  const [filterTrigger, setFilterTrigger] = useState('');

  useEffect(() => { loadEvents(); }, []);

  async function loadEvents() {
    setLoading(true);
    try {
      const configRef = doc(db, 'config', 'events');
      const snap = await getDoc(configRef);
      let list = snap.exists() ? (snap.data().list || []) : [];
      if (list.length === 0) {
        const allSeeds = [...INVESTSIM_EVENTS, ...LIFE_TW_EVENTS];
        await setDoc(configRef, { list: allSeeds }, { merge: true });
        list = allSeeds;
        showToast(`✅ 已自動匯入 ${allSeeds.length} 筆預設事件！`, 'success');
      }
      setEvents(list);
    } catch (e) {
      showToast('載入失敗: ' + e.message, 'error');
    } finally {
      setLoading(false);
    }
  }

  const filteredEvents = useMemo(() => {
    return events.filter(e => {
      if (activeTab === 'fixed' && e.triggerType !== 'fixed_age') return false;
      if (activeTab === 'range' && e.triggerType !== 'age_range' && e.triggerType !== 'random') return false;
      if (search && !`${e.title}${e.id}${e.description}`.toLowerCase().includes(search.toLowerCase())) return false;
      if (filterType    && e.type      !== filterType)    return false;
      if (filterSent    && e.sentiment !== filterSent)    return false;
      if (filterEnabled === 'enabled'  && e.enabled === false)  return false;
      if (filterEnabled === 'disabled' && e.enabled !== false)  return false;
      if (filterTrigger && e.triggerType !== filterTrigger) return false;
      return true;
    });
  }, [events, activeTab, search, filterType, filterSent, filterEnabled, filterTrigger]);

  const hasActiveFilter = search || filterType || filterSent || filterEnabled || filterTrigger;
  const clearFilters = () => { setSearch(''); setFilterType(''); setFilterSent(''); setFilterEnabled(''); setFilterTrigger(''); };

  function openNew() {
    setEditEvent(null);
    setForm({ ...EMPTY_EVENT, id: `e_${Date.now()}` });
    setShowForm(true);
  }

  function openEdit(ev) {
    setEditEvent(ev);
    const hasGuiVals = ev.guiVals && Object.values(ev.guiVals).some(v => v !== 0);
    const hasComplexEffectStr = ev.effectStr && ev.effectStr.length > 0 && !hasGuiVals;
    setForm({
      ...EMPTY_EVENT,
      ...JSON.parse(JSON.stringify(ev)),
      guiVals: ev.guiVals || emptyGuiVals(),
      advancedMode: hasComplexEffectStr,
      choices: (ev.choices || []).map(c => ({
        ...EMPTY_CHOICE, ...c,
        guiVals: c.guiVals || emptyGuiVals(),
        advancedMode: !!(c.effectStr && c.effectStr.length > 0 && !c.guiVals),
      }))
    });
    setShowForm(true);
  }

  async function saveEvent() {
    if (!form.title) { showToast('事件名稱不能為空', 'error'); return; }
    setSaving(true);
    try {
      const eventToSave = {
        ...form,
        effectStr: form.advancedMode ? form.effectStr : guiToEffectStr(form.guiVals),
        choices: form.choices.map(c => ({
          ...c,
          effectStr: c.advancedMode ? c.effectStr : guiToEffectStr(c.guiVals),
        }))
      };
      const configRef = doc(db, 'config', 'events');
      const snap = await getDoc(configRef);
      let list = snap.exists() ? (snap.data().list || []) : [];
      list = editEvent ? list.map(e => e.id === form.id ? eventToSave : e) : [...list, eventToSave];
      await setDoc(configRef, { list }, { merge: true });
      setEvents(list);
      showToast(editEvent ? '✅ 事件已更新！' : '✅ 新事件已發布！', 'success');
      setShowForm(false);
    } catch (e) {
      showToast('儲存失敗: ' + e.message, 'error');
    } finally {
      setSaving(false);
    }
  }

  async function deleteEvent(ev) {
    if (!confirm(`確定要刪除「${ev.title}」嗎？`)) return;
    try {
      const configRef = doc(db, 'config', 'events');
      const snap = await getDoc(configRef);
      const list = (snap.data().list || []).filter(e => e.id !== ev.id);
      await setDoc(configRef, { list });
      setEvents(list);
      showToast('🗑️ 事件已刪除', 'info');
    } catch (e) {
      showToast('刪除失敗: ' + e.message, 'error');
    }
  }

  async function toggleEnabled(ev) {
    try {
      const configRef = doc(db, 'config', 'events');
      const snap = await getDoc(configRef);
      let list = snap.exists() ? (snap.data().list || []) : [];
      list = list.map(item => item.id === ev.id ? { ...item, enabled: item.enabled === false ? true : false } : item);
      await setDoc(configRef, { list }, { merge: true });
      setEvents(list);
      showToast(ev.enabled === false ? '已啟用事件' : '已關閉事件', 'success');
    } catch (e) {
      showToast('切換狀態失敗: ' + e.message, 'error');
    }
  }

  function handleExport() {
    const blob = new Blob([JSON.stringify(events, null, 2)], { type:'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = `investsim_events_${new Date().toISOString().slice(0,10)}.json`;
    a.click(); URL.revokeObjectURL(url);
    showToast(`📤 已匯出 ${events.length} 筆事件`, 'success');
  }

  function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        if (!Array.isArray(imported)) throw new Error('格式錯誤：必須是 JSON 陣列');
        const replace = window.confirm(`即將匯入 ${imported.length} 筆事件。\n\n確定 (OK) = 取代全部現有事件\n取消 (Cancel) = 合併（保留現有）`);
        const merged = replace ? imported : [...events.filter(ex => !imported.find(im => im.id === ex.id)), ...imported];
        const configRef = doc(db, 'config', 'events');
        await setDoc(configRef, { list: merged });
        setEvents(merged);
        showToast(`✅ 成功匯入 ${imported.length} 筆事件`, 'success');
      } catch (err) {
        showToast('匯入失敗：' + err.message, 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  function updateForm(field, value) { setForm(f => ({ ...f, [field]: value })); }
  function updateChoice(i, field, value) {
    setForm(f => { const c = [...f.choices]; c[i] = { ...c[i], [field]: value }; return { ...f, choices: c }; });
  }

  const sentimentBadge = s => ({ positive:'badge-green', negative:'badge-red', neutral:'badge-gray', critical:'badge-yellow' }[s] || 'badge-gray');

  return (
    <div className="flex-col gap-6">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">事件管理</h1>
          <p className="page-subtitle">共 {events.length} 個事件・顯示 {filteredEvents.length} 個</p>
        </div>
        <div className="flex gap-3" style={{ flexWrap:'wrap' }}>
          <button className="btn btn-ghost btn-sm" onClick={handleExport}>📤 匯出 JSON</button>
          <label className="btn btn-ghost btn-sm" style={{ cursor:'pointer' }}>
            📥 匯入 JSON
            <input type="file" accept=".json" onChange={handleImport} style={{ display:'none' }} />
          </label>
          <button className="btn btn-primary" onClick={openNew}>＋ 新增事件</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4" style={{ borderBottom:'1px solid var(--bg-card-hover)', paddingBottom:8 }}>
        {[['all','全部事件'],['fixed','📌 固定年齡'],['range','🎲 區間隨機'],['tree','🌳 樹狀圖']].map(([tab,label]) => (
          <button key={tab} className={`btn btn-sm ${activeTab===tab?'btn-primary':'btn-ghost'}`} onClick={() => setActiveTab(tab)}>{label}</button>
        ))}
      </div>

      {activeTab === 'tree' ? (
        loading ? <div className="card flex items-center gap-3"><div className="loader"/><span className="color-mute">載入中...</span></div>
        : events.length === 0 ? <div className="card"><p className="color-mute">尚無事件。</p></div>
        : <EventSkillTree events={events} onToggle={toggleEnabled} onEdit={openEdit} onDelete={deleteEvent} />
      ) : (
        <div className="card">
          {/* Filter Bar */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:14, padding:'10px 12px', background:'hsla(0,0%,0%,0.15)', borderRadius:8, alignItems:'center' }}>
            <div style={{ position:'relative', flex:'1 1 180px', minWidth:140 }}>
              <span style={{ position:'absolute', left:8, top:'50%', transform:'translateY(-50%)', pointerEvents:'none' }}>🔍</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="搜尋名稱、ID、描述..."
                style={{ paddingLeft:28, width:'100%' }} />
            </div>
            <select value={filterType} onChange={e => setFilterType(e.target.value)} style={{ flex:'0 1 140px' }}>
              <option value="">所有類型</option>
              {TYPE_OPTIONS.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
            <select value={filterSent} onChange={e => setFilterSent(e.target.value)} style={{ flex:'0 1 120px' }}>
              <option value="">所有情緒</option>
              {SENTIMENT_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
            <select value={filterEnabled} onChange={e => setFilterEnabled(e.target.value)} style={{ flex:'0 1 110px' }}>
              <option value="">全部狀態</option>
              <option value="enabled">✅ 啟用中</option>
              <option value="disabled">🚫 已停用</option>
            </select>
            <select value={filterTrigger} onChange={e => setFilterTrigger(e.target.value)} style={{ flex:'0 1 130px' }}>
              <option value="">所有觸發</option>
              <option value="fixed_age">📌 固定年齡</option>
              <option value="age_range">⏱️ 區間隨機</option>
              <option value="random">🎲 全局隨機</option>
            </select>
            {hasActiveFilter && <button className="btn btn-ghost btn-sm" onClick={clearFilters}>✕ 清除</button>}
          </div>

          {loading ? (
            <div className="flex items-center gap-3"><div className="loader"/><span className="color-mute">載入中...</span></div>
          ) : filteredEvents.length === 0 ? (
            <p className="color-mute">沒有符合條件的事件。{hasActiveFilter && <button className="btn btn-ghost btn-sm" style={{marginLeft:8}} onClick={clearFilters}>清除篩選</button>}</p>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>狀態</th><th>圖示</th><th>事件名稱</th><th>觸發方式</th>
                    <th>情緒</th><th>前置條件</th><th>機率</th><th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvents.map(ev => {
                    const isEnabled = ev.enabled !== false;
                    return (
                      <tr key={ev.id} style={{ opacity: isEnabled ? 1 : 0.5 }}>
                        <td>
                          <label className="switch" style={{ cursor:'pointer' }}>
                            <input type="checkbox" checked={isEnabled} onChange={() => toggleEnabled(ev)} />
                            <span className="slider round"></span>
                          </label>
                        </td>
                        <td style={{ fontSize:'1.25rem' }}>{ev.icon}</td>
                        <td>
                          <span style={{ fontWeight:600, display:'block' }}>{ev.title}</span>
                          <span className="font-mono text-xs color-mute">{ev.id}</span>
                        </td>
                        <td>
                          {ev.triggerType === 'fixed_age'
                            ? <span className="badge badge-blue">{ev.triggerAge} 歲</span>
                            : ev.triggerType === 'random'
                            ? <span className="badge badge-gray">全局隨機</span>
                            : <span className="badge badge-purple">{ev.minAge||0}~{ev.maxAge||100} 歲</span>
                          }
                        </td>
                        <td><span className={`badge ${sentimentBadge(ev.sentiment)}`}>{ev.sentiment}</span></td>
                        <td>{(ev.prerequisites?.length > 0) ? <span className="badge badge-gray">{ev.prerequisites.join(', ')}</span> : '-'}</td>
                        <td className="color-mute">{((ev.probability||0.1)*100).toFixed(1)}%</td>
                        <td>
                          <div className="flex gap-2">
                            <button className="btn btn-ghost btn-sm" onClick={() => openEdit(ev)}>✏️</button>
                            <button className="btn btn-danger btn-sm" onClick={() => deleteEvent(ev)}>🗑️</button>
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

      {/* Event Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && setShowForm(false)}>
          <div className="modal" style={{ maxWidth:720, maxHeight:'92dvh', overflowY:'auto' }}>
            <div className="flex justify-between items-center" style={{ marginBottom:20 }}>
              <h2 style={{ fontSize:'1.25rem', fontWeight:700 }}>{editEvent ? '✏️ 編輯事件' : '＋ 新增事件'}</h2>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowForm(false)}>✕</button>
            </div>

            <div className="flex-col gap-4">
              {/* Basic Info */}
              <div className="grid-2">
                <div className="form-group">
                  <label>圖示 (Emoji)</label>
                  <input value={form.icon} onChange={e => updateForm('icon', e.target.value)} placeholder="📰" />
                </div>
                <div className="form-group">
                  <label>事件 ID</label>
                  <input value={form.id} onChange={e => updateForm('id', e.target.value)} placeholder="e_001" className="font-mono" />
                </div>
              </div>
              <div className="form-group">
                <label>事件名稱 *</label>
                <input value={form.title} onChange={e => updateForm('title', e.target.value)} placeholder="例：央行宣布升息 1碼" />
              </div>
              <div className="form-group">
                <label>事件描述</label>
                <textarea value={form.description} onChange={e => updateForm('description', e.target.value)} placeholder="描述事件的背景與影響..." rows={3} />
              </div>
              <div className="grid-2">
                <div className="form-group">
                  <label>類型</label>
                  <select value={form.type} onChange={e => updateForm('type', e.target.value)}>
                    {TYPE_OPTIONS.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>市場情緒</label>
                  <select value={form.sentiment} onChange={e => updateForm('sentiment', e.target.value)}>
                    {SENTIMENT_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </div>
              </div>

              {/* Trigger Conditions */}
              <div style={{ padding:12, background:'hsla(0,0%,0%,0.2)', borderRadius:8 }}>
                <label style={{ display:'block', marginBottom:8, fontWeight:600 }}>🎯 觸發條件</label>
                <div className="grid-2">
                  <div className="form-group">
                    <label>觸發方式</label>
                    <select value={form.triggerType} onChange={e => updateForm('triggerType', e.target.value)}>
                      <option value="random">🎲 全局隨機</option>
                      <option value="fixed_age">📌 固定年齡</option>
                      <option value="age_range">⏱️ 區間隨機</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>發生機率 (0~1)</label>
                    <input type="number" step="0.01" min="0" max="1" value={form.probability}
                      onChange={e => updateForm('probability', parseFloat(e.target.value)||0)} />
                  </div>
                </div>
                {form.triggerType === 'fixed_age' && (
                  <div className="form-group">
                    <label>指定年齡</label>
                    <input type="number" value={form.triggerAge||''} onChange={e => updateForm('triggerAge', parseInt(e.target.value)||0)} />
                  </div>
                )}
                {form.triggerType === 'age_range' && (
                  <div style={{ display:'flex', gap:8, alignItems:'flex-end' }}>
                    <div className="form-group" style={{ flex:1 }}>
                      <label>最小年齡</label>
                      <input type="number" value={form.minAge||''} onChange={e => updateForm('minAge', parseInt(e.target.value)||0)} />
                    </div>
                    <span style={{ paddingBottom:10, color:'var(--color-muted)' }}>~</span>
                    <div className="form-group" style={{ flex:1 }}>
                      <label>最大年齡</label>
                      <input type="number" value={form.maxAge||''} onChange={e => updateForm('maxAge', parseInt(e.target.value)||0)} />
                    </div>
                  </div>
                )}
                <div className="form-group mt-3">
                  <label>前置條件事件 ID（逗號分隔）</label>
                  <input value={form.prerequisites?.join(', ')||''} className="font-mono"
                    onChange={e => updateForm('prerequisites', e.target.value.split(',').map(s=>s.trim()).filter(Boolean))}
                    placeholder="例: e_partner, e_married" />
                </div>
                <div className="grid-2 mt-3">
                  <div className="form-group">
                    <label>屬性門檻</label>
                    <select value={form.statReq?.stat} onChange={e => updateForm('statReq', {...form.statReq, stat:e.target.value})}>
                      <option value="none">無限制</option>
                      <option value="appearance">顏值</option>
                      <option value="intelligence">智力</option>
                      <option value="constitution">體質</option>
                      <option value="happiness">快樂</option>
                    </select>
                  </div>
                  {form.statReq?.stat !== 'none' && (
                    <div className="form-group">
                      <label>最低需求值</label>
                      <input type="number" value={form.statReq?.min||0}
                        onChange={e => updateForm('statReq', {...form.statReq, min:parseInt(e.target.value)||0})} />
                    </div>
                  )}
                </div>
              </div>

              {/* Event Main Effect */}
              <EffectEditor
                label="⚡ 事件效果（觸發時自動執行）"
                vals={form.guiVals || emptyGuiVals()}
                onChange={v => updateForm('guiVals', v)}
                advancedMode={form.advancedMode}
                onToggleAdvanced={v => updateForm('advancedMode', v)}
                effectStr={form.effectStr}
                onEffectStrChange={v => updateForm('effectStr', v)}
              />

              {/* Choices */}
              <div>
                <label style={{ display:'block', marginBottom:10, fontWeight:600 }}>🎮 玩家選項</label>
                {form.choices.map((choice, i) => (
                  <div key={i} style={{ marginBottom:10, padding:'12px 14px', background:'hsla(0,0%,0%,0.15)', borderRadius:10, borderLeft:'3px solid var(--color-accent)' }}>
                    <div style={{ fontWeight:700, marginBottom:8, fontSize:'0.8125rem', opacity:0.7 }}>選項 {i+1}</div>
                    <div className="form-group" style={{ marginBottom:8 }}>
                      <input value={choice.text} onChange={e => updateChoice(i,'text',e.target.value)} placeholder={`選項 ${i+1} 顯示文字...`} />
                    </div>
                    <div className="form-group" style={{ marginBottom:8 }}>
                      <label>風險等級</label>
                      <select value={choice.risk} onChange={e => updateChoice(i,'risk',e.target.value)}>
                        {RISK_OPTIONS.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                    <EffectEditor
                      label="選項效果"
                      vals={choice.guiVals || emptyGuiVals()}
                      onChange={v => updateChoice(i,'guiVals',v)}
                      advancedMode={choice.advancedMode}
                      onToggleAdvanced={v => updateChoice(i,'advancedMode',v)}
                      effectStr={choice.effectStr}
                      onEffectStrChange={v => updateChoice(i,'effectStr',v)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3" style={{ marginTop:24, justifyContent:'flex-end' }}>
              <button className="btn btn-ghost" onClick={() => setShowForm(false)}>取消</button>
              <button className="btn btn-primary" onClick={saveEvent} disabled={saving}>
                {saving ? <span className="loader" style={{ width:14, height:14, borderWidth:2 }} /> : null}
                {editEvent ? '儲存變更' : '發布事件'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


