import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider, ADMIN_UID } from './firebase/config.js';
import Dashboard      from './pages/Dashboard.jsx';
import EventManager   from './pages/EventManager.jsx';
import AchievementManager from './pages/AchievementManager.jsx';
import Analytics      from './pages/Analytics.jsx';
import Login          from './pages/Login.jsx';

export default function App() {
  const [user,    setUser]    = useState(undefined); // undefined = loading
  const [toasts,  setToasts]  = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return unsub;
  }, []);

  const showToast = (msg, type = 'info') => {
    const id = Date.now();
    setToasts(t => [...t, { id, msg, type }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3500);
  };

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      showToast('登入失敗: ' + e.message, 'error');
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    showToast('已登出', 'info');
  };

  // Loading
  if (user === undefined) {
    return (
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100dvh', gap:'12px' }}>
        <div className="loader" />
        <span className="color-mute">初始化中...</span>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return <Login onSignIn={handleSignIn} />;
  }

  // Logged in but not admin
  if (user.uid !== ADMIN_UID && ADMIN_UID !== 'YOUR_ADMIN_UID') {
    return (
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100dvh', gap:'16px' }}>
        <div style={{ fontSize:'4rem' }}>🚫</div>
        <h2 style={{ fontSize:'1.5rem', fontWeight:700 }}>無管理員權限</h2>
        <p className="color-mute">你的帳號 ({user.email}) 不是管理員。</p>
        <button className="btn btn-ghost" onClick={handleSignOut}>登出</button>
      </div>
    );
  }

  const navItems = [
    { to: '/dashboard',     icon: '📊', label: '總覽儀表板' },
    { to: '/events',        icon: '📰', label: '事件管理' },
    { to: '/achievements',  icon: '🏆', label: '成就管理' },
    { to: '/analytics',     icon: '📈', label: '玩家數據' }
  ];

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-logo">📈</div>
          <div>
            <div className="sidebar-title">InvestSim</div>
            <div className="sidebar-sub">管理後台</div>
          </div>
        </div>

        {navItems.map(n => (
          <NavLink
            key={n.to}
            to={n.to}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">{n.icon}</span>
            {n.label}
          </NavLink>
        ))}

        <div style={{ marginTop:'auto' }}>
          <div style={{ padding:'8px 12px', marginBottom:'8px' }}>
            <div className="text-sm" style={{ fontWeight:600 }}>{user.displayName}</div>
            <div className="text-sm color-mute">{user.email}</div>
          </div>
          <button className="nav-item" onClick={handleSignOut} style={{ color:'var(--down)' }}>
            <span className="nav-icon">🚪</span>
            登出
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route path="/"             element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard"    element={<Dashboard    showToast={showToast} />} />
          <Route path="/events"       element={<EventManager showToast={showToast} />} />
          <Route path="/achievements" element={<AchievementManager showToast={showToast} />} />
          <Route path="/analytics"    element={<Analytics    showToast={showToast} />} />
        </Routes>
      </main>

      {/* Toast Container */}
      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className={`toast toast-${t.type}`}>{t.msg}</div>
        ))}
      </div>
    </div>
  );
}
