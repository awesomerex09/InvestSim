import React, { useEffect, useState } from 'react';
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
  'macro', 'company', 'crypto', 'realEstate', 'tech', 'blackswan', 'routine', 'geopolitics'
];

const EMPTY_CHOICE = { text: '', effectStr: 'return {};', risk: 'medium' };

const EMPTY_EVENT = {
  id:          '',
  title:       '',
  description: '',
  type:        'life', // Or 'macro', 'childhood', etc.
  icon:        '📰',
  sentiment:   'neutral',
  enabled:     true,
  // Trigger condition: 'random', 'fixed_age', 'age_range'
  triggerType: 'age_range',
  triggerAge:  18, 
  minAge:      18,
  maxAge:      80,
  prerequisites: [],
  statReq:     { stat: 'none', min: 0 },
  // Impacts
  effectStr:   'return {};',
  choices:     [
    { ...EMPTY_CHOICE },
    { ...EMPTY_CHOICE },
    { ...EMPTY_CHOICE },
    { ...EMPTY_CHOICE }
  ],
  duration:    1,
  probability: 0.1
};

export default function EventManager({ showToast }) {
  const [events,   setEvents]   = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editEvent,setEditEvent]= useState(null); // null = new
  const [form,     setForm]     = useState(EMPTY_EVENT);
  const [saving,   setSaving]   = useState(false);

  useEffect(() => { loadEvents(); }, []);

  async function loadEvents() {
    setLoading(true);
    try {
      const configRef = doc(db, 'config', 'events');
      const snap = await getDoc(configRef);
      let list = snap.exists() ? (snap.data().list || []) : [];

      // Auto-seed: if Firestore is empty, merge all seed data automatically
      if (list.length === 0) {
        const allSeeds = [...INVESTSIM_EVENTS, ...LIFE_TW_EVENTS];
        await setDoc(configRef, { list: allSeeds }, { merge: true });
        list = allSeeds;
        showToast(`✅ 已自動匯入 ${allSeeds.length} 筆預設事件！`, 'success');
      }

      setEvents(list);
    } catch (e) {
      showToast('載入事件失敗: ' + e.message, 'error');
    } finally {
      setLoading(false);
    }
  }


  function openNew() {
    setEditEvent(null);
    setForm({ ...EMPTY_EVENT, id: `e_${Date.now()}` });
    setShowForm(true);
  }

  function openEdit(ev) {
    setEditEvent(ev);
    setForm(JSON.parse(JSON.stringify(ev)));
    setShowForm(true);
  }

  async function saveEvent() {
    if (!form.title) { showToast('事件名稱不能為空', 'error'); return; }
    setSaving(true);
    try {
      const configRef = doc(db, 'config', 'events');
      const snap = await getDoc(configRef);
      let list = snap.exists() ? (snap.data().list || []) : [];

      if (editEvent) {
        list = list.map(e => e.id === form.id ? form : e);
      } else {
        list = [...list, form];
      }

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

  function updateForm(field, value) {
    setForm(f => ({ ...f, [field]: value }));
  }

  function updateChoice(i, field, value) {
    setForm(f => {
      const choices = [...f.choices];
      choices[i] = { ...choices[i], [field]: value };
      return { ...f, choices };
    });
  }

  const sentimentBadge = (s) => {
    const map = { positive: 'badge-green', negative: 'badge-red', neutral: 'badge-gray', critical: 'badge-yellow' };
    return map[s] || 'badge-gray';
  };

  const [activeTab, setActiveTab] = useState('all');

  const filteredEvents = events.filter(e => {
    if (activeTab === 'fixed') return e.triggerType === 'fixed_age';
    if (activeTab === 'range') return e.triggerType === 'age_range' || e.triggerType === 'random';
    return true;
  });

  return (
    <div className="flex-col gap-6">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">事件管理</h1>
          <p className="page-subtitle">共 {events.length} 個事件・管理觸發條件、前置關聯與啟用狀態</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-primary" onClick={openNew}>＋ 新增事件</button>
        </div>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-4" style={{ borderBottom: '1px solid var(--bg-card-hover)', paddingBottom: 8 }}>
        <button className={`btn btn-sm ${activeTab === 'all' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setActiveTab('all')}>全部事件</button>
        <button className={`btn btn-sm ${activeTab === 'fixed' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setActiveTab('fixed')}>📌 固定年齡</button>
        <button className={`btn btn-sm ${activeTab === 'range' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setActiveTab('range')}>🎲 區間隨機</button>
        <button className={`btn btn-sm ${activeTab === 'tree' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setActiveTab('tree')}>🌳 樹狀圖檢視</button>
      </div>

      {/* Skill tree — full width outside card */}
      {activeTab === 'tree' ? (
        loading ? (
          <div className="card flex items-center gap-3"><div className="loader" /><span className="color-mute">載入中...</span></div>
        ) : events.length === 0 ? (
          <div className="card"><p className="color-mute">尚無事件，請先匯入或新增。</p></div>
        ) : (
          <EventSkillTree
            events={events}
            onToggle={toggleEnabled}
            onEdit={openEdit}
            onDelete={deleteEvent}
          />
        )
      ) : (

      <div className="card">
        {loading ? (
          <div className="flex items-center gap-3"><div className="loader" /><span className="color-mute">載入中...</span></div>
        ) : filteredEvents.length === 0 ? (
          <p className="color-mute">尚無符合條件的事件。點擊「新增事件」建立第一個事件。</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>狀態</th>
                  <th>圖示</th>
                  <th>事件名稱</th>
                  <th>觸發方式</th>
                  <th>情緒</th>
                  <th>前置條件</th>
                  <th>機率</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map(ev => {
                  const isEnabled = ev.enabled !== false;
                  return (
                    <tr key={ev.id} style={{ opacity: isEnabled ? 1 : 0.5 }}>
                      <td>
                        <label className="switch" style={{ cursor: 'pointer' }}>
                          <input type="checkbox" checked={isEnabled} onChange={() => toggleEnabled(ev)} />
                          <span className="slider round"></span>
                        </label>
                      </td>
                      <td style={{ fontSize:'1.25rem' }}>{ev.icon}</td>
                      <td>
                        <span style={{ fontWeight:600, display: 'block' }}>{ev.title}</span>
                        <span className="font-mono text-xs color-mute">{ev.id}</span>
                      </td>
                      <td>
                        {ev.triggerType === 'fixed_age' ? (
                          <span className="badge badge-blue">{ev.triggerAge} 歲</span>
                        ) : (
                          <span className="badge badge-purple">{ev.minAge || 0} ~ {ev.maxAge || 100} 歲</span>
                        )}
                      </td>
                      <td><span className={`badge ${sentimentBadge(ev.sentiment)}`}>{ev.sentiment}</span></td>
                      <td>
                        {(ev.prerequisites && ev.prerequisites.length > 0) ? (
                          <span className="badge badge-gray">{ev.prerequisites.join(', ')}</span>
                        ) : '-'}
                      </td>
                      <td className="color-mute">{(ev.probability * 100).toFixed(1)}%</td>
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
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowForm(false)}>
          <div className="modal" style={{ maxWidth:680, maxHeight:'90dvh', overflowY:'auto' }}>
            <div className="flex justify-between items-center" style={{ marginBottom:20 }}>
              <h2 style={{ fontSize:'1.25rem', fontWeight:700 }}>{editEvent ? '編輯事件' : '新增事件'}</h2>
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
                <label>事件名稱</label>
                <input value={form.title} onChange={e => updateForm('title', e.target.value)} placeholder="例：央行宣布升息 1碼" />
              </div>

              <div className="form-group">
                <label>事件描述</label>
                <textarea value={form.description} onChange={e => updateForm('description', e.target.value)} placeholder="描述這個事件的背景與影響..." />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label>類型</label>
                  <select value={form.type} onChange={e => updateForm('type', e.target.value)}>
                    <option value="childhood">🐣 童年成長</option>
                    <option value="life">👤 人生抉擇</option>
                    {TYPE_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
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
              <div style={{ padding: 12, background: 'hsla(0,0%,0%,0.2)', borderRadius: 8 }}>
                <label style={{ display:'block', marginBottom:8, fontWeight:600 }}>觸發條件</label>
                <div className="grid-2">
                  <div className="form-group">
                    <label>觸發方式</label>
                    <select value={form.triggerType} onChange={e => updateForm('triggerType', e.target.value)}>
                      <option value="random">🎲 全局隨機 (忽略年齡)</option>
                      <option value="fixed_age">📌 固定年齡</option>
                      <option value="age_range">⏱️ 區間隨機</option>
                    </select>
                  </div>
                  {form.triggerType === 'fixed_age' && (
                    <div className="form-group">
                      <label>指定年齡</label>
                      <input type="number" value={form.triggerAge || ''} onChange={e => updateForm('triggerAge', parseInt(e.target.value)||0)} />
                    </div>
                  )}
                  {form.triggerType === 'age_range' && (
                    <div className="form-group flex items-center gap-2">
                      <div>
                        <label>最小年齡</label>
                        <input type="number" value={form.minAge || ''} onChange={e => updateForm('minAge', parseInt(e.target.value)||0)} />
                      </div>
                      <span style={{ marginTop: 24 }}>~</span>
                      <div>
                        <label>最大年齡</label>
                        <input type="number" value={form.maxAge || ''} onChange={e => updateForm('maxAge', parseInt(e.target.value)||0)} />
                      </div>
                    </div>
                  )}
                  {form.triggerType === 'random' && (
                    <div className="form-group">
                      <label>發生機率 (0~1)</label>
                      <input type="number" step="0.01" value={form.probability} onChange={e => updateForm('probability', parseFloat(e.target.value)||0)} />
                    </div>
                  )}
                </div>

                <div className="form-group mt-3">
                  <label>前置條件 (輸入事件 ID，以逗號分隔)</label>
                  <input 
                    value={form.prerequisites?.join(', ') || ''} 
                    onChange={e => updateForm('prerequisites', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} 
                    placeholder="例: e_partner, e_married" 
                    className="font-mono"
                  />
                  <small className="color-mute" style={{ marginTop: 4, display: 'block' }}>玩家必須先觸發過這些事件，此事件才可能發生。</small>
                </div>

                <div className="grid-2 mt-3">
                  <div className="form-group">
                    <label>屬性門檻檢定</label>
                    <select value={form.statReq?.stat} onChange={e => updateForm('statReq', { ...form.statReq, stat: e.target.value })}>
                      <option value="none">無限制</option>
                      <option value="appearance">顏值</option>
                      <option value="intelligence">智力</option>
                      <option value="constitution">體質</option>
                      <option value="happiness">快樂</option>
                    </select>
                  </div>
                  {form.statReq?.stat !== 'none' && (
                    <div className="form-group">
                      <label>最低需求</label>
                      <input type="number" value={form.statReq?.min || 0} onChange={e => updateForm('statReq', { ...form.statReq, min: parseInt(e.target.value)||0 })} />
                    </div>
                  )}
                </div>
              </div>

              {/* Effects & Impact (JS) */}
              <div style={{ padding: 12, background: 'hsla(0,0%,0%,0.2)', borderRadius: 8 }}>
                <label style={{ display:'block', marginBottom:8, fontWeight:600 }}>事件效果 (JS 語法)</label>
                <div className="form-group">
                  <textarea 
                    value={form.effectStr} 
                    onChange={e => updateForm('effectStr', e.target.value)} 
                    placeholder="s.portfolio.twStock += 10; s.lifeStats.happiness -= 5; return {twStock: 10};" 
                    className="font-mono"
                    style={{ minHeight: 80, color: 'var(--color-accent)' }}
                  />
                  <small className="color-mute" style={{ marginTop: 4, display: 'block' }}>
                    可直接操作狀態引擎 <code>s</code>，或回傳市場波動物件如 <code>return {'{twStock: 15, usStock: -5}'}</code>
                  </small>
                </div>
              </div>

              {/* Choices */}
              <div>
                <label style={{ display:'block', marginBottom:8, fontWeight:600 }}>玩家選項 (4個)</label>
                {form.choices.map((choice, i) => (
                  <div key={i} className="card" style={{ marginBottom:8, padding:'12px 16px' }}>
                    <div className="text-sm color-mute" style={{ marginBottom:8 }}>選項 {i+1}</div>
                    <div className="form-group" style={{ marginBottom:8 }}>
                      <input value={choice.text} onChange={e => updateChoice(i, 'text', e.target.value)} placeholder="選項文字..." />
                    </div>
                    <div className="grid-2">
                      <div className="form-group">
                        <label>風險等級</label>
                        <select value={choice.risk} onChange={e => updateChoice(i, 'risk', e.target.value)}>
                          {['none','safe','low','medium','high','extreme'].map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label>效果腳本 (JS)</label>
                        <input
                          className="font-mono"
                          value={choice.effectStr || ''}
                          onChange={e => updateChoice(i, 'effectStr', e.target.value)}
                          placeholder="return {twStock: 5};"
                        />
                      </div>
                    </div>
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
