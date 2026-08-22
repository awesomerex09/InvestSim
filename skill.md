# InvestSim — 事件設計規範 (SKILL.md)

> **版本**: v1.0 | **最後更新**: 2026-08-22
> **專案定位**: 鬼島投資人生模擬器 — 結合台灣人生體驗 x 深度投資模擬

---

## 設計宗旨

InvestSim 以台灣社會為背景，讓玩家體驗從出生到老年的完整人生，並在其中學習投資理財。
**核心原則**: 現實感 × 因果性 × 選擇性 × 投資貫穿

---

## 年齡分層架構

| Phase | 年齡 | 時間流速 | 允許事件 | 禁止事件 |
|-------|------|---------|---------|---------|
| 幼兒期 | 0–6  | 1回合=1年 | 家庭、兄弟姊妹、搬家 | 戀愛、工作、投資 |
| 兒童期 | 7–12 | 1回合=1年 | 學校、才藝、友情、家庭 | 戀愛、工作、投資 |
| 青少年 | 13–17 | 1回合=1年 | 高中、初戀(懵懂)、打工、升學 | 婚姻、正式投資 |
| 青年期 | 18–25 | 1回合=1月 | 大學、兵役、第一份工作、小額投資 | 高階投資 |
| 成年早期 | 26–40 | 1回合=1月 | 結婚、生子、購房、創業、各類投資 | 退休 |
| 壯年期 | 41–60 | 1回合=1月 | 中年危機、父母照護、退休規劃 | |
| 老年期 | 61+  | 1回合=1月 | 退休、健康、遺產 | 創業、結婚 |

---

## 因果關係規則

```
感情線:
  初戀 (13-24) → 認真交往 (18-35) → 同居/求婚 → 結婚 (24-45) → 生子 (25-45)
                                                              → 離婚 (28-60)

學術線:
  努力讀書 (13-17) → 好大學 (18) → 研究所 (22-26) → 博士 (26-32)
  → 學術研究 (30-60) → 諾貝爾獎 (minAge:45, 智力>=85)

職涯線:
  第一份工作 (22-25) → 晉升 (25-45) → 高薪 (30-55)
                     → 創業 (需cash>=500000) → 上市 (35-55)

投資線:
  第一次買股 (22-30) → 台股/美股/加密/房地產 事件鏈
```

---

## 事件欄位規範

```javascript
{
  id: "e_relationship_003",      // 格式: e_{category}_{三位數字}
  title: "求婚",                  // 簡短，<=10字
  description: "...",            // >= 20字，具體情境描述，無佔位符
  type: "relationship",          // childhood|life|career|relationship|health|investment|macro|blackswan|social|academic
  icon: "💍",
  sentiment: "positive",        // positive|negative|neutral|critical
  enabled: true,
  triggerType: "age_range",     // fixed_age|age_range|random
  minAge: 24, maxAge: 45,
  probability: 0.15,
  prerequisites: ["e_relationship_serious"],  // 直接前置事件ID
  effectStr: `
    s.lifeStats.happiness += 10;
    s.portfolio.cash -= 200000;
    s.flags = s.flags||{}; s.flags.engaged = true;
    return {};
  `,
  choices: [{ text: "...", risk: "low", effectStr: "..." }]
}
```

---

## 禁用清單

| 問題類型 | 處理方式 |
|---------|---------|
| 年齡嚴重不符 (2歲諾貝爾獎) | enabled:false |
| 描述為佔位符 | 補描述或刪除 |
| 婚姻/生子無前置 | 加prerequisites |
| effectStr 完全空 return {} | 補合理效果 |
| 完全重複事件 | 刪除 |

---

## 合理性核查

- 諾貝爾獎: minAge>=45，prerequisites含學術研究，智力>=85
- 婚姻: prerequisites含認真交往
- 生子: prerequisites含結婚或同居
- 未成年懷孕: triggerAge=17，prerequisites含初戀
- 創業: prerequisites含工作經驗
- 所有描述>=20字，無佔位符
