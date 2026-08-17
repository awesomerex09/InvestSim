```python
# No code needed, formulating architecture strategy for web dashboard, user auth, and analytics.


```

針對你的需求，我們將專案從「純前端單機版」升級為「前後端分離的雲端架構 (Client-Server Architecture)」。

為了滿足：

1. **Google 登入 (OAuth 2.0)**：追蹤個別玩家。
2. **可視化後端 (Admin Dashboard)**：讓你（管理員）動態新增/刪除/修改「生涯成就」與「重要節點事件」。
3. **資料遙測 (Telemetry & Analytics)**：收集並觀察玩家的遊玩日誌、資產變化與決策數據。

身為系統架構師，我推薦使用 **Firebase (GCP)** 生態系作為後端。因為它與 Google 登入原生整合良好，且 Firebase Firestore (NoSQL) 非常適合儲存遊戲的樹狀事件與 JSON 格式的玩家日誌，不用花費大量時間維護伺服器。

以下是針對這套「投資模擬器 + 雲端管理後台」的系統架構解析與執行清單：

---

### 1. 目錄結構與雲端架構圖

#### 系統架構流 (Architecture Flow)

```text
[玩家端 Client - React/Vite] 
   ├─ Google OAuth 登入
   ├─ 遊戲主迴圈 (Local 計算波動與損益)
   └─ 週期性上傳日誌 (Batch Upload) ──────┐
                                         │
[Firebase Cloud Services] <──────────────┘
   ├─ Firebase Auth (處理使用者登入/授權)
   ├─ Firestore (Database)
   │    ├─ Collection: users (玩家基本資料、最高淨值、遊玩次數)
   │    ├─ Collection: game_sessions (單次遊玩的完整 Log 陣列、最終成就、MDD)
   │    └─ Collection: config (由後台設定的動態事件庫、成就庫、節點觸發條件)
   └─ Cloud Functions (可選：處理結算作弊驗證，或定時統計全服排行榜)

[管理端 Admin Dashboard - React/Vite] 
   ├─ 僅限你的 Google 帳號 (Admin 權限) 登入
   ├─ CRUD 介面：管理 Collection: config 內的「事件」與「成就」
   └─ 數據大盤：拉取 game_sessions 分析玩家死因 (破產率、當沖爆倉率)

```

#### 實體目錄結構 (Monorepo 建議)

```text
Investment-Sim/
├── client/                 # 玩家端遊戲主體 (HTML/JS/CSS 或 React)
│   ├── src/
│   │   ├── engines/        # 核心引擎 (MacroEngine, TradingLoop)
│   │   ├── services/       # Firebase 通訊層 (Auth, Sync)
│   │   └── ui/             # 畫面渲染
│   └── package.json
├── admin/                  # 管理端後台 (React + Tailwind 或 UI 框架)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── EventManager/ # 新增/修改遊戲節點事件
│   │   │   ├── AchievementManager/ # 新增/修改生涯成就
│   │   │   └── Analytics/    # 玩家數據圖表 (勝率、死因分析)
│   │   └── firebase/       # 只允許具備 Admin 權限的帳號寫入
│   └── package.json
└── firebase/               # Firebase 設定與資安規則
    ├── firestore.rules     # DB 安全權限控管
    └── firebase.json

```

---

### 2. 核心模組與雲端通訊的虛擬碼（Pseudocode）

我們需要在原本的遊戲迴圈中，加入「從雲端抓取動態配置」與「上傳玩家數據」的機制。

```javascript
// 模組 1：Firebase 資料服務 (Client-side)
class DatabaseService {
    constructor() {
        this.db = firebase.firestore();
    }

    // 遊戲初始化時：拉取你從後台設定的最新事件與成就
    async fetchDynamicConfig() {
        const eventsSnapshot = await this.db.collection('config').doc('events').get();
        const achievementsSnapshot = await this.db.collection('config').doc('achievements').get();
        return {
            events: eventsSnapshot.data().list,
            achievements: achievementsSnapshot.data().list
        };
    }

    // 遊戲結算時：上傳整局的歷史紀錄與指標供你觀察
    async uploadGameSession(user, finalState, logHistory) {
        await this.db.collection('game_sessions').add({
            uid: user.uid,
            playerName: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            durationMonths: finalState.time.month,
            finalNetWorth: finalState.totalNetWorth,
            maxDrawdown: finalState.stats.mdd,
            causeOfDeath: finalState.reason, // e.g., '融資斷頭', '當沖破產', '完美退休'
            achievementsUnlocked: finalState.achievements,
            logs: logHistory // 儲存玩家關鍵決策，方便你從後台看他們怎麼死的
        });
    }
}

// 模組 2：管理端大盤與 CRUD (Admin-side)
class AdminConfigManager {
    // 你在後台填寫表單後，按下「新增事件」，直接寫入雲端
    async addMarketEvent(newEventData) {
        // newEventData 範例：{ title: '央行升息', target: '房市', effect: -5, description: '...' }
        const configRef = this.db.collection('config').doc('events');
        await configRef.update({
            list: firebase.firestore.FieldValue.arrayUnion(newEventData)
        });
        alert('新事件已發布至所有玩家端！');
    }
}

```

---

### 3. 以『中型模組／功能區塊』為單位的執行步驟清單 (雲端升級版)

這份清單分為「Firebase 基礎建設」、「管理端後台開發」與「玩家端整合」三個階段，方便你分批丟給低階模型進行無縫開發。

#### Phase 1: 基礎建設與 Firebase 整合 (Infrastructure)

* **任務 1**：在 Firebase Console 建立專案，啟用 Authentication (Google 登入) 與 Firestore 資料庫。
* **任務 2**：撰寫 `firestore.rules` 資安規則。
* `config` 集合：任何人皆可讀取，但只有 Admin 的 UID 才能寫入。
* `game_sessions` 集合：登入的玩家只能新增自己的紀錄，只有 Admin 能讀取所有人的紀錄。


* **任務 3**：在前端專案實作 Google 登入按鈕與 Auth 狀態監聽器 (`onAuthStateChanged`)。若未登入，禁止開始遊戲或只允許遊玩「訪客體驗版」。

#### Phase 2: 管理端可視化後台開發 (Admin Dashboard)

*(建議使用 React + Tailwind CSS，因為表單與資料呈現較複雜)*

* **任務 1（權限防護）**：建立 Admin 首頁，驗證登入者的 UID 是否為你的帳號（例如 Villain 的 Google 帳號）。若不是，顯示「無權限」並踢出。
* **任務 2（事件管理區塊）**：實作「節點事件管理器」。開發一個表單介面，讓你輸入：事件名稱、觸發條件（例如：總資產 > 1000萬）、影響範圍（台股/美股/房產）、影響數值，並能寫入 Firestore 的 `config/events`。
* **任務 3（成就管理區塊）**：實作「生涯成就管理器」。允許你設定成就圖示、名稱、描述與判定門檻（例如：`condition: "state.stats.mdd < 10"` 穩健操盤手），並寫入 `config/achievements`。
* **任務 4（觀測雷達區塊）**：實作「玩家數據大盤」。讀取 `game_sessions`，繪製簡單圖表（例如：玩家存活率圓餅圖、最多人破產的原因排行表），並可點擊單一玩家查看他的每一筆交易 Log。

#### Phase 3: 玩家端引擎重構與整合 (Client Game Engine)

* **任務 1（資料動態載入）**：修改玩家端的 `EventEngine`。遊戲初始化（Loading 畫面）時，不再讀取本地端的寫死 JSON，而是透過 Firestore 拉取你在後台設定的事件池與成就列表，載入到記憶體中。
* **任務 2（日誌收集器）**：實作 `LogTracker` 模組。在遊戲過程中，默默記錄玩家的「買進/賣出/當沖損益/遭遇事件」陣列，但不即時上傳（節省網路請求）。
* **任務 3（結算與遙測上傳）**：重構結算畫面。當玩家觸發結局（破產或達標退休）時，將最終的 `PortfolioState`、計算出的成就結果，連同 `LogTracker` 的陣列，打包成一個 Object，上傳至 Firestore 的 `game_sessions` 集合，隨後再顯示結算成績給玩家看。

---

**給你的架構建議**：
因為你本身有全端與 UI/UX 背景，這套架構將遊戲邏輯留在 Client 端跑（省伺服器效能），而把「配置檔」與「結算日誌」丟到雲端。這能讓你不必重新部署程式碼，只要登入後台按幾個按鈕，所有玩家下一局就會立刻遇到你剛寫好的「黑天鵝事件」或「新成就」，非常適合快速迭代的營運模式。