╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║           InvestSim — 台灣投資人生模擬器                          ║
║           Taiwan Investment Life Simulator                       ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝

GitHub: https://github.com/awesomerex09/InvestSim
License: CC BY-NC 4.0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【關於本專案 / About】

InvestSim 是一款以台灣市場為核心的文字式投資模擬遊戲。
玩家扮演一名台灣投資者，在真實感的市場波動、重大事件（如央行升息、
台積電財報、比特幣減半、黑天鵝事件等）中，做出買賣決策，
並在 35 年的模擬投資生涯中，看看你能否達成「財務自由」的目標。

特色功能：
  ✅ Google 登入，成績永久保存
  ✅ 四大投資風格：保守 / 均衡 / 積極 / 賭徒
  ✅ 台股、美股、加密貨幣、房地產、黃金 五大資產類別
  ✅ 動態市場事件（可由管理員後台即時新增）
  ✅ 成就系統（如：鑽石手、黑天鵝倖存者、財務自由）
  ✅ 玩家行為數據遙測（管理員可分析）
  ✅ 管理員後台（事件 CRUD、成就管理、數據分析圖表）

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【致謝 / Acknowledgements】

本專案的靈感與部分設計理念來自以下前人的優秀作品：

  🙏 Life-TW (鬼島人生) by kai890707
     GitHub: https://github.com/kai890707/Life-TW
     台灣在地化的文字生涯模擬遊戲，是 InvestSim 最直接的靈感來源。
     我們深深致敬 kai890707 在事件驅動遊戲設計上的出色工作。

  🙏 BitLife by Candywriter, LLC
     https://bitlife.com/
     開創「文字生涯模擬」這個遊戲類型的先驅。
     Life-TW 致敬了 BitLife，InvestSim 延續了這條創作鏈。

沒有這些前人的作品，InvestSim 不可能存在。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【技術架構 / Technical Architecture】

  Frontend (玩家端):
    - Vanilla HTML5 / CSS3 / JavaScript (ES2022+)
    - Apple Design 視覺系統（spring animations, glassmorphism）
    - Firebase SDK (v10, CDN) for Auth & Firestore

  Backend (管理後台):
    - React 18 + Vite
    - Firebase Firestore (NoSQL 雲端資料庫)
    - Recharts 數據視覺化
    - Google OAuth 2.0

  Cloud Services:
    - Firebase Authentication (Google Sign-In)
    - Firebase Firestore (Database)
    - Firebase Hosting (optional)

  Directory Structure:
    InvestSim/
    ├── client/       ← 玩家端遊戲 (直接開啟 index.html)
    ├── admin/        ← 管理後台 (需 npm install && npm run dev)
    ├── firebase/     ← Firebase 規則設定
    └── update_github.bat ← 一鍵更新到 GitHub

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【快速開始 / Quick Start】

遊玩（玩家端）：
  1. 用瀏覽器打開 client/index.html
  2. 可直接訪客遊玩，或 Google 登入後遊玩（需先設定 Firebase）
  3. 點擊「下一個月」推進時間
  4. 遭遇事件時，從 4 個選項中選擇你的應對策略
  5. 看看你能否達到財務自由！

設定 Firebase（雲端功能）：
  請參閱 DeveloperNote_Firebase.md 的詳細步驟說明。

啟動管理後台：
  cd admin
  npm install
  npm run dev
  → 開啟 http://localhost:5174

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【遊戲系統說明 / Game Mechanics】

投資風格：
  保守穩健型  70%現金 + 定存為主。安全但成長緩慢。
  均衡配置型  40%現金 + 台股美股 ETF 為主。新手推薦。
  積極成長型  10%現金 + 成長股重倉。高波動高報酬。
  賭徒梭哈型   5%現金 + 75%加密貨幣。極易爆倉。

資產類別：
  💵 現金    — 每月生活費 3 萬元，存款有定存利息
  🇹🇼 台股   — 年化約 7%，波動率中等，有除息
  🇺🇸 美股   — 年化約 8%，科技股波動較大
  ₿  加密貨幣 — 最高風險最高報酬，年化可達數百%
  🏠 房產   — 低波動，租金收益約 4.8%/年
  🥇 黃金    — 避險資產，通膨時表現佳

結局條件：
  破產        — 淨值跌破 5 萬元
  融資斷頭    — 現金耗盡且總資產不足起始的 10%
  提早退休    — 玩家主動選擇結算
  退休        — 模擬滿 35 年
  爆富退休    — 資產成長超過 50 倍

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【免責聲明 / Disclaimer】

InvestSim 僅供娛樂與教育用途。
本遊戲的模擬結果不代表真實市場表現，不構成任何形式的投資建議。
在做出任何實際投資決策前，請諮詢持牌的財務顧問。
創作者對任何基於遊戲體驗所做的真實投資決策概不負責。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Made with ❤️ in Taiwan
Copyright (c) 2026 awesomerex09 (VillainPrime)
CC BY-NC 4.0 License
