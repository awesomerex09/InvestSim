# ============================================================
# InvestSim — Firebase 設定說明 (Developer Note)
# 請仔細閱讀後，按步驟設定，約 15-20 分鐘可完成
# ============================================================

## 📋 前置需求

- 一個 Google 帳號（建議用你自己的 Gmail）
- Node.js 18+ 已安裝
- 瀏覽器（Chrome 推薦）

---

## 步驟 1：建立 Firebase 專案

1. 前往 [Firebase Console](https://console.firebase.google.com/)
2. 點擊「新增專案」
3. 輸入專案名稱，例如：`InvestSim`
4. **停用 Google Analytics**（本專案不需要，簡化設定）
5. 點擊「建立專案」，等待完成

---

## 步驟 2：啟用 Google 登入（Authentication）

1. 在 Firebase Console 左側選單，點擊「Build」→「Authentication」
2. 點擊「開始使用」
3. 在「Sign-in method」標籤，找到「Google」，點擊右側的開關啟用
4. 填入「專案支援電子郵件」（你的 Gmail）
5. 點擊「儲存」

---

## 步驟 3：建立 Firestore 資料庫

1. 在左側選單點擊「Build」→「Firestore Database」
2. 點擊「建立資料庫」
3. 選擇「以測試模式開始」（之後我們會設定正式規則）
4. 選擇伺服器位置：選擇「asia-east1」（台灣最近）
5. 點擊「啟用」

---

## 步驟 4：取得 Firebase 設定資料

1. 在 Firebase Console，點擊左上角的齒輪 ⚙️ →「專案設定」
2. 滾動到「您的應用程式」區塊
3. 點擊 `</>` 圖示（Web 應用程式）
4. 輸入應用程式暱稱，例如：`InvestSim Client`
5. **不要**勾選「設定 Firebase Hosting」
6. 點擊「注冊應用程式」
7. 你會看到類似這樣的設定代碼：

```javascript
const firebaseConfig = {
  apiKey:            "AIzaSyXXXXXXXXXXXXXXXXXXXX",
  authDomain:        "investsim-xxxxx.firebaseapp.com",
  projectId:         "investsim-xxxxx",
  storageBucket:     "investsim-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId:             "1:123456789012:web:xxxxxxxxxxxx"
};
```

8. **複製這整個物件的值**

---

## 步驟 5：填入設定值

### 玩家端（client）
打開 `client/js/firebase-config.js`，把佔位符替換成真實的值：

```javascript
const firebaseConfig = {
  apiKey:            "你的實際 apiKey",
  authDomain:        "你的實際 authDomain",
  projectId:         "你的實際 projectId",
  storageBucket:     "你的實際 storageBucket",
  messagingSenderId: "你的實際 messagingSenderId",
  appId:             "你的實際 appId"
};
```

### 管理後台（admin）
打開 `admin/src/firebase/config.js`，同樣替換成真實的值。

---

## 步驟 6：取得你的 Admin UID

1. 打開瀏覽器，開啟 `client/index.html`
2. 點擊「使用 Google 帳號登入」，用你自己的 Gmail 登入
3. 登入成功後，前往 Firebase Console → Authentication → Users
4. 你會看到一筆新的用戶記錄，複製「用戶 UID」那一欄的值
   例如：`abc123xyz456...`（一串長字串）

5. 把這個 UID 填入以下兩個檔案：

   `client/js/firebase-config.js`:
   ```javascript
   const ADMIN_UID = "你的UID"; // 替換 YOUR_ADMIN_UID
   ```

   `admin/src/firebase/config.js`:
   ```javascript
   export const ADMIN_UID = "你的UID"; // 替換 YOUR_ADMIN_UID
   ```

---

## 步驟 7：部署 Firestore 安全規則（重要！）

1. 安裝 Firebase CLI：
   ```
   npm install -g firebase-tools
   ```

2. 登入 Firebase：
   ```
   firebase login
   ```

3. 進入 `firebase/` 資料夾，部署規則：
   ```
   cd firebase
   firebase deploy --only firestore:rules --project 你的projectId
   ```

或者，你也可以手動在 Firebase Console 貼上規則：
   → Firestore Database → Rules → 貼上 `firebase/firestore.rules` 的內容 → 發布

---

## 步驟 8：啟動管理後台

```bash
cd admin
npm install
npm run dev
```

打開瀏覽器，前往 `http://localhost:5174`，用你的 Google 帳號登入。

如果看到「無管理員權限」，代表 UID 設定不正確，請重新確認步驟 6。

---

## 🔐 安全規則說明

`firebase/firestore.rules` 的規則保護：

| Collection     | 讀取權限         | 寫入權限      |
|----------------|------------------|---------------|
| config         | 任何人（含訪客） | 僅 Admin      |
| game_sessions  | 本人 + Admin     | 僅本人        |
| users          | 本人 + Admin     | 僅本人        |

**注意**：`YOUR_ADMIN_UID` 這個佔位符在規則中。
如果你忘記替換，規則將不會生效（沒有人可以寫入 config）。

---

## 🗂 Firestore 資料結構

```
config/
  ├── events        → { list: [ ...事件物件陣列 ] }
  └── achievements  → { list: [ ...成就物件陣列 ] }

game_sessions/
  └── {sessionId}   → { uid, playerName, timestamp, finalNetWorth, ... }

users/
  └── {uid}         → { uid, displayName, photoURL, lastSeen, ... }
```

管理後台可讀寫 `config` 集合，玩家端只讀取 `config` 並寫入 `game_sessions`。

---

## ✅ 設定完成檢查清單

- [ ] Firebase 專案已建立
- [ ] Authentication (Google) 已啟用
- [ ] Firestore 資料庫已建立
- [ ] `client/js/firebase-config.js` 已填入真實設定值
- [ ] `admin/src/firebase/config.js` 已填入真實設定值
- [ ] Admin UID 已取得並填入兩個設定檔
- [ ] Firestore 規則已部署（或手動貼上）
- [ ] 管理後台可正常登入
- [ ] 玩家端可 Google 登入並遊玩

---

## 🚀 部署到 GitHub Pages（玩家端）

玩家端是純靜態 HTML，可直接部署到 GitHub Pages：

1. 在 GitHub 上進入 `awesomerex09/InvestSim`
2. Settings → Pages → Source: Deploy from branch
3. Branch: main, Folder: /client
4. 儲存後，等待幾分鐘
5. 玩家端網址：`https://awesomerex09.github.io/InvestSim/`

注意：需要在 Firebase Console → Authentication → 授權網域
→ 加入 `awesomerex09.github.io`，Google 登入才能在生產環境運作。

---

**如有任何問題，請在 GitHub Issues 提交。**
