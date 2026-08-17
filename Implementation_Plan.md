# 技能樹式事件管理介面計畫

## 目標

1. **視覺技能樹**：把後台「事件管理」的 🌳 Tab 改為真正的 SVG 技能樹，節點以連線串聯，類似截圖的技能樹設計。
2. **全量事件匯入**：確認 `seedLifeTwFull.js`（502個 Life-TW 事件）和 `seedInvestSim.js`（原創市場事件）兩個資料集能正確寫入 Firestore。

---

## 技能樹視覺設計

### 節點設計 (每個事件)
```
┌─────────────────┐
│ 🎓  [Toggle ON] │
│  就讀大學       │
│  18 歲 固定     │
└─────────────────┘
```
- 節點顯示：圖示、標題、年齡/觸發條件、啟用 Toggle
- 點擊節點：展開側邊欄可編輯完整欄位

### 連線規則
- **根節點**：沒有 `prerequisites` 的事件，顯示在最上方
- **子節點**：有 `prerequisites` 的事件，用 SVG `<line>` 連到其前置節點
- **自動排版**：根據 BFS (廣度優先) 演算法自動排列節點位置，避免線條交叉

### 互動功能
- 📐 可用滑鼠拖曳平移 (pan) 整個樹狀圖
- 🔍 可縮放 (zoom in/out)
- 🎯 點擊節點：在右側展開詳細資訊面板（含 toggle 開關 + 完整 CRUD 按鈕）
- 🎨 顏色分組：
  - 🔵 藍色邊框 = 固定年齡事件
  - 🟣 紫色邊框 = 區間隨機事件
  - 🔴 紅色節點 = 已關閉（disabled）的事件
  - 🟡 黃色邊框 = 有前置條件

---

## Proposed Changes

### Admin (Backend UI)
#### [MODIFY] `admin/src/pages/EventManager.jsx`
- 移除現有的折疊式列表 Tree View
- 新增 `<EventSkillTree />` 元件，使用 SVG + foreignObject 渲染節點
- 新增 `useRef` + `useState` 控制 pan/zoom
- 新增側邊欄 `<NodeDetailPanel />` 用於點擊節點後編輯

---

## 事件數據來源確認

| 資料集 | 筆數 | 來源 |
|--------|------|------|
| `seedLifeTwFull.js` | 502 筆 | 直接解析 Life-TW 原始碼 |
| `seedInvestSim.js` | ~20 筆 | 原創市場牛熊黑天鵝事件 |
| `seedEvents.js` | 20 筆 | 前幾輪手寫的人生事件（部分重複） |

> [!IMPORTANT]
> **關於 Life-TW 的事件格式**：`seedLifeTwFull.js` 裡的 `effectStr` 欄位是直接從原作 JS 抽取的字串（如 `S => inc(S, {con: 3})`），這些字串依賴原作自定義的 `inc()`, `money()` 等 helper function，需要在 game-engine 端加入相容 shim，否則執行時會報錯。
> 這是否在本次一起修正，或者先以純管理視覺為主？

## Verification Plan
1. 開啟 `http://localhost:3006`，切換到「🌳 技能樹」Tab
2. 驗證節點是否正確渲染並有連線
3. 點擊節點確認側邊欄是否可編輯 + toggle 正常
4. 點擊匯入按鈕確認事件寫入 Firestore
