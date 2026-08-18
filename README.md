# InvestSim — 台灣投資人生模擬器 (Taiwan Investment Life Simulator)

![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)

## 📌 關於本專案 / About

**InvestSim** 是一款以台灣市場為核心的文字式投資模擬遊戲。
玩家扮演一名台灣投資者，在真實感的市場波動、重大事件（如央行升息、台積電財報、比特幣減半、黑天鵝事件等）中，做出買賣決策，並在 35 年的模擬投資生涯中，看看你能否達成「財務自由」的目標。

### ✨ 特色功能：
- ✅ **Google 登入**：成績永久保存與雲端同步
- ✅ **四大投資風格**：保守 / 均衡 / 積極 / 賭徒
- ✅ **五大資產類別**：台股、美股、加密貨幣、房地產、黃金
- ✅ **動態市場事件**：可由管理員後台即時新增與推播
- ✅ **成就系統**：鑽石手、黑天鵝倖存者、財務自由等
- ✅ **玩家行為遙測**：管理員可分析玩家遊玩風格與勝率
- ✅ **管理員後台**：事件 CRUD、成就管理、數據分析圖表

---

## 🙏 致謝 / Acknowledgements

本專案的靈感與部分設計理念來自以下前人的優秀作品：

1. **[Life-TW (鬼島人生)](https://github.com/kai890707/Life-TW)** by `kai890707`
   台灣在地化的文字生涯模擬遊戲，是 InvestSim 最直接的靈感來源。我們深深致敬作者在事件驅動遊戲設計上的出色工作。

2. **[BitLife](https://bitlife.com/)** by `Candywriter, LLC`
   開創「文字生涯模擬」這個遊戲類型的先驅。Life-TW 致敬了 BitLife，InvestSim 延續了這條創作鏈。

*沒有這些前人的作品，InvestSim 不可能存在。*

---

## 🏗️ 技術架構 / Technical Architecture

- **Frontend (玩家端)**:
  - Vanilla HTML5 / CSS3 / JavaScript (ES2022+)
  - Apple Design 視覺系統（spring animations, glassmorphism）
  - Firebase SDK (v10, CDN) for Auth & Firestore
- **Backend (管理後台)**:
  - React 18 + Vite
  - Firebase Firestore (NoSQL 雲端資料庫)
  - Recharts 數據視覺化
- **Cloud Services**:
  - Firebase Authentication (Google Sign-In)
  - Firebase Firestore (Database)

### 📁 資料夾結構
```text
InvestSim/
├── client/                    ← 玩家端遊戲（純靜態，部署到 GitHub Pages）
│   ├── index.html             ← 主遊戲頁面（含 App Controller 與 HUD）
│   ├── css/style.css          ← Apple Design 視覺系統
│   ├── data/
│   │   └── events.json        ← 全量 500+ 事件備份資料庫
│   └── js/
│       ├── firebase-config.js ← Firebase 設定
│       ├── db-service.js      ← Firestore 讀寫（事件/成就/結局/玩家數據）
│       ├── auth.js            ← Google 登入
│       ├── game-engine.js     ← 市場模擬引擎、事件觸發、成就與結局判斷
│       ├── log-tracker.js     ← 遊戲歷程與軌跡紀錄
│       └── ui.js              ← 畫面控制、事件卡片渲染與數值反饋
├── admin/                     ← 管理後台（React + Vite，本機運行）
│   └── src/
│       ├── pages/
│       │   ├── EventManager.jsx       ← 事件 CRUD + GUI 編輯器 + 篩選
│       │   ├── AchievementManager.jsx ← 成就管理 + GUI 條件編輯器
│       │   ├── EndingManager.jsx      ← 結局管理 + GUI 條件編輯器
│       │   └── Dashboard.jsx          ← 數據儀表板
│       ├── components/
│       │   └── EventSkillTree.jsx     ← 樹狀圖/年齡分層視覺化
│       └── data/
│           ├── seedInvestSim.js       ← 投資核心宏觀事件
│           ├── seedLifeTwFull.js      ← 人生全量事件（500+ 筆正規化資料）
│           ├── seedAchievements.js    ← 預設成就庫
│           └── seedEndings.js         ← 預設結局庫
├── firebase/                  ← Firestore 規則設定
├── skill.md                   ← 系統架構與事件設計官方規範手冊
└── update_github.bat          ← 一鍵更新到 GitHub（Windows 自動化腳本）
```

---

## 🚀 快速開始 / Quick Start

### 🎮 遊玩（玩家端）
1. 用瀏覽器打開 `client/index.html` 或是前往 GitHub Pages (若已部署)。
2. 可直接訪客遊玩，或 Google 登入後遊玩。
3. 點擊「下一個月」推進時間，遭遇事件時選擇應對策略！

### ⚙️ 設定 Firebase（雲端功能）
請參閱 `DeveloperNote_Firebase.md` 的詳細步驟說明。設定完成後即可啟用 Google 登入、排行榜與後台系統。

### 📊 啟動管理後台
```bash
cd admin
npm install
npm run dev
```
啟動後開啟 `http://localhost:3006`（如有衝突會自動換 port）。

---

## 📖 系統架構手冊 (skill.md)
詳細的事件分類體系、資料流管道、生命週期六大年齡段排程、風險回報矩陣以及 6 大合規性檢驗規則，請直接參閱專案根目錄的 **[skill.md](file:///C:/Users/VillainPrime/Desktop/InvestSim/skill.md)**。

---

## 👶 成年前後核心機制說明 (0-17 歲 vs 18+ 歲)

InvestSim 採用精細的生命週期兩階段切換設計：

1. **童年與青少年期 (0 ~ 17 歲 / 未成年)**：
   - **時間步長**：以「年」為單位推進（每點擊一次為「長大一歲 ▶」）。
   - **生活開銷**：生活費 0 元（由父母扶養，不扣除每月 3 萬元開銷）。
   - **投資帳戶**：右側操作面板處於鎖定狀態（`locked`），顯示「🔒 投資帳戶將於 18 歲解鎖」，禁止主動交易股票/房產/加密貨幣。
   - **事件分發**：僅觸發啟蒙、才藝、義務教育、人際與家庭成長事件。
   - **生存保護**：未成年不進行破產或負債結局判定，死亡機率極低。

2. **成年與獨立期 (18 歲以上 / 成年)**：
   - **時間步長**：以「月」為單位推進（每點擊一次為「下一個月 ▶」，每 12 個月增長一歲）。
   - **生活開銷**：每月自動扣除基本生活費（NT$30,000 / 月）。
   - **投資帳戶**：右側主動交易面板與手機端 Assistive Touch 白點全面解鎖，支援台股、美股、加密貨幣、房地產、黃金、定期定額與槓桿信貸。
   - **事件分發**：全面開放總體經濟、企業財報、加密浪潮、房市政策、職場升遷與黑天鵝事件。
   - **結局判定**：開啟破產、現金斷流、爆富退休、身心俱疲與壽終正寢等動態結局結算。

---

## ⚖️ 遊戲系統說明

### 投資風格：
- **保守穩健型**：70%現金 + 定存為主。安全但成長緩慢。
- **均衡配置型**：40%現金 + 台股美股 ETF 為主。新手推薦。
- **積極成長型**：10%現金 + 成長股重倉。高波動高報酬。
- **賭徒梭哈型**：5%現金 + 75%加密貨幣。極易爆倉。

### 結局條件：
- **破產**：淨值跌破 5 萬元
- **融資斷頭**：現金耗盡且總資產不足起始的 10%
- **提早退休**：玩家主動選擇結算
- **退休**：模擬滿 35 年
- **爆富退休**：資產成長超過 50 倍

---

## ⚠️ 免責聲明 / Disclaimer

InvestSim 僅供**娛樂與教育用途**。
本遊戲的模擬結果不代表真實市場表現，**不構成任何形式的投資建議**。
在做出任何實際投資決策前，請諮詢持牌的財務顧問。創作者對任何基於遊戲體驗所做的真實投資決策概不負責。

---
*Made with ❤️ in Taiwan*<br/>
*Copyright (c) 2026 awesomerex09 (VillainPrime)*