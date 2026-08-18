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
│   ├── index.html             ← 主遊戲頁面（含 App Controller）
│   ├── css/style.css          ← Apple Design 視覺系統
│   └── js/
│       ├── firebase-config.js ← Firebase 設定
│       ├── db-service.js      ← Firestore 讀寫（事件/成就/玩家數據）
│       ├── auth.js            ← Google 登入
│       ├── game-engine.js     ← 市場模擬引擎、事件觸發、成就判斷
│       └── ui.js              ← 畫面控制、事件卡片渲染
├── admin/                     ← 管理後台（React + Vite，本機運行）
│   └── src/
│       ├── pages/
│       │   ├── EventManager.jsx       ← 事件 CRUD + 匯入/匯出 + 篩選
│       │   ├── AchievementManager.jsx ← 成就管理
│       │   └── Dashboard.jsx          ← 數據儀表板
│       ├── components/
│       │   └── EventSkillTree.jsx     ← 樹狀圖視覺化
│       └── data/
│           ├── seedInvestSim.js       ← InvestSim 預設事件（投資類）
│           └── seedLifeTwFull.js      ← Life-TW 全量事件（人生類，500+ 筆）
├── firebase/                  ← Firestore 規則設定
└── update_github.bat          ← 一鍵更新到 GitHub（Windows）
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

## 📝 事件 JSON 格式說明（便於改版複用）

所有事件均以 JSON 格式儲存於 Firestore `config/events`，可透過後台「📤 匯出 JSON」取得完整範本：

```json
{
  "id": "e_unique_id",
  "title": "事件名稱",
  "description": "事件描述文字",
  "type": "macro | life | childhood | crypto | realEstate | tech | blackswan | routine",
  "icon": "📈",
  "sentiment": "positive | negative | neutral | critical",
  "enabled": true,
  "triggerType": "fixed_age | age_range | random",
  "triggerAge": 25,
  "minAge": 20,
  "maxAge": 40,
  "probability": 0.1,
  "prerequisites": ["e_other_event_id"],
  "statReq": { "stat": "intelligence", "min": 60 },
  "effectStr": "s.lifeStats.happiness -= 5; return {twStock: 10};",
  "choices": [
    { "text": "選項文字", "risk": "low | medium | high | extreme", "effectStr": "return {twStock: 5};" }
  ]
}
```

> 💡 `effectStr` 可直接操作狀態物件 `s`（含 `s.lifeStats`、`s.portfolio`、`s.prices`），並 `return` 市場波動物件。

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