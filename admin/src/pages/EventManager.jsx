import React, { useEffect, useState } from 'react';
import { doc, getDoc, setDoc, arrayUnion, arrayRemove, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config.js';

const SENTIMENT_OPTIONS = [
  { value:'positive', label:'📈 利多' },
  { value:'negative', label:'📉 利空' },
  { value:'neutral',  label:'😐 中性' },
  { value:'critical', label:'☠️ 黑天鵝' }
];

const TYPE_OPTIONS = [
  'macro', 'company', 'crypto', 'realEstate', 'tech', 'blackswan', 'routine', 'geopolitics'
];

const EMPTY_CHOICE = { text: '', effect: {}, risk: 'medium' };

const EMPTY_EVENT = {
  id:          '',
  title:       '',
  description: '',
  type:        'macro',
  icon:        '📰',
  sentiment:   'neutral',
  effects: { twStock: 0, usStock: 0, crypto: 0, realEstate: 0 },
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
      const snap = await getDoc(doc(db, 'config', 'events'));
      setEvents(snap.exists() ? (snap.data().list || []) : []);
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

  function updateForm(field, value) {
    setForm(f => ({ ...f, [field]: value }));
  }

  function updateEffect(asset, value) {
    setForm(f => ({ ...f, effects: { ...f.effects, [asset]: parseFloat(value) || 0 } }));
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

  return (
    <div className="flex-col gap-6">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">事件管理</h1>
          <p className="page-subtitle">管理遊戲中的市場事件，即時推送給所有玩家</p>
        </div>
        <button className="btn btn-primary" onClick={openNew}>＋ 新增事件</button>
      </div>

      <div className="card">
        {loading ? (
          <div className="flex items-center gap-3"><div className="loader" /><span className="color-mute">載入中...</span></div>
        ) : events.length === 0 ? (
          <p className="color-mute">尚無事件。點擊「新增事件」建立第一個事件。</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>圖示</th>
                  <th>事件名稱</th>
                  <th>類型</th>
                  <th>情緒</th>
                  <th>台股效果</th>
                  <th>美股效果</th>
                  <th>加密效果</th>
                  <th>機率</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {events.map(ev => (
                  <tr key={ev.id}>
                    <td style={{ fontSize:'1.25rem' }}>{ev.icon}</td>
                    <td><span style={{ fontWeight:600 }}>{ev.title}</span></td>
                    <td><span className="badge badge-blue font-mono">{ev.type}</span></td>
                    <td><span className={`badge ${sentimentBadge(ev.sentiment)}`}>{ev.sentiment}</span></td>
                    <td className={ev.effects?.twStock >= 0 ? 'color-up' : 'color-down'} style={{ fontWeight:700 }}>
                      {ev.effects?.twStock >= 0 ? '+' : ''}{ev.effects?.twStock}%
                    </td>
                    <td className={ev.effects?.usStock >= 0 ? 'color-up' : 'color-down'} style={{ fontWeight:700 }}>
                      {ev.effects?.usStock >= 0 ? '+' : ''}{ev.effects?.usStock}%
                    </td>
                    <td className={ev.effects?.crypto >= 0 ? 'color-up' : 'color-down'} style={{ fontWeight:700 }}>
                      {ev.effects?.crypto >= 0 ? '+' : ''}{ev.effects?.crypto}%
                    </td>
                    <td className="color-mute">{(ev.probability * 100).toFixed(0)}%</td>
                    <td>
                      <div className="flex gap-2">
                        <button className="btn btn-ghost btn-sm" onClick={() => openEdit(ev)}>✏️</button>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteEvent(ev)}>🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

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

              {/* Market Effects */}
              <div>
                <label style={{ display:'block', marginBottom:8, fontWeight:600 }}>市場衝擊 (%)</label>
                <div className="grid-4">
                  {[['twStock','台股'],['usStock','美股'],['crypto','加密'],['realEstate','房市']].map(([k,l]) => (
                    <div className="form-group" key={k}>
                      <label>{l}</label>
                      <input type="number" step="0.5" value={form.effects[k] || 0} onChange={e => updateEffect(k, e.target.value)} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Probability & Duration */}
              <div className="grid-2">
                <div className="form-group">
                  <label>觸發機率 (0.01 ~ 1.0)</label>
                  <input type="number" step="0.01" min="0.01" max="1" value={form.probability} onChange={e => updateForm('probability', parseFloat(e.target.value))} />
                </div>
                <div className="form-group">
                  <label>持續月數</label>
                  <input type="number" min="1" max="12" value={form.duration} onChange={e => updateForm('duration', parseInt(e.target.value))} />
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
                        <label>效果 JSON (如 {"{'twStock':0.1}"})</label>
                        <input
                          className="font-mono"
                          value={typeof choice.effect === 'string' ? choice.effect : JSON.stringify(choice.effect)}
                          onChange={e => { try { updateChoice(i, 'effect', JSON.parse(e.target.value)); } catch {} }}
                          placeholder="{}"
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
