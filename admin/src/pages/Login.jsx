import React from 'react';

export default function Login({ onSignIn }) {
  return (
    <div className="login-page">
      <div className="login-card card" style={{ padding:'48px 40px' }}>
        <div style={{ marginBottom:'32px' }}>
          <div style={{
            width:72, height:72,
            background:'linear-gradient(135deg, var(--accent), var(--accent-2))',
            borderRadius:20, display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:'2rem', margin:'0 auto 16px'
          }}>📈</div>
          <h1 style={{ fontSize:'1.75rem', fontWeight:800, letterSpacing:'-0.03em' }}>
            InvestSim
          </h1>
          <p className="color-mute" style={{ marginTop:6, fontSize:'0.9375rem' }}>管理後台 — 需要管理員身份</p>
        </div>

        <p className="color-mute text-sm" style={{ marginBottom:24, lineHeight:1.6 }}>
          此頁面僅限授權的管理員帳號登入。<br />
          使用 Google 帳號登入後，系統將驗證你的管理員權限。
        </p>

        <button className="btn btn-primary w-full" style={{ fontSize:'1rem', padding:'12px' }} onClick={onSignIn}>
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" style={{ flexShrink:0 }}>
            <path d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 2.9l5.7-5.7C34.5 7.1 29.5 5 24 5 13 5 4 14 4 25s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" fill="#FFC107"/>
            <path d="M6.3 15.3l6.6 4.8C14.5 17 19 14 24 14c3.1 0 5.8 1.1 7.9 2.9l5.7-5.7C34.5 8.1 29.5 6 24 6 16.3 6 9.7 9.8 6.3 15.3z" fill="#FF3D00"/>
            <path d="M24 44c5.2 0 9.9-1.9 13.5-5.1L31.6 34c-2 1.5-4.6 2.4-7.6 2.4-5.2 0-9.6-3.3-11.2-8H6.4C9.8 36 16.3 44 24 44z" fill="#4CAF50"/>
            <path d="M43.6 20.1H42V20H24v8h11.3c-1.5 4.1-5.3 7-10.3 7H13.8l-6.7 5.1C10.1 42.5 16.6 46 24 46c11 0 20-9 20-20 0-1.3-.1-2.6-.4-3.9z" fill="#1976D2"/>
          </svg>
          使用 Google 帳號登入
        </button>
      </div>
    </div>
  );
}
