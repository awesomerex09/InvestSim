// ============================================================
// InvestSim — Core Investment & Macroeconomic Seed Events
// Conforming to skill.md schema & lifecycle standards
// ============================================================

export const INVESTSIM_EVENTS = [
  {
    id: "e_invest_bull",
    title: "全球大牛市",
    description: "受惠於AI浪潮與寬鬆貨幣政策，全球股市迎來史詩級大牛市！",
    type: "macro",
    icon: "🚀",
    sentiment: "positive",
    triggerType: "age_range",
    triggerAge: 18,
    minAge: 18,
    maxAge: 100,
    probability: 0.05,
    enabled: true,
    prerequisites: [],
    statReq: { stat: "none", min: 0 },
    effectStr: "return { twStock: 15, usStock: 20, crypto: 30, realEstate: 5, gold: -2 };",
    guiVals: { appearance: 0, intelligence: 0, constitution: 0, happiness: 3, cash: 0, twStock: 15, usStock: 20, crypto: 30, realEstate: 5, gold: -2 },
    advancedMode: false,
    choices: [
      {
        text: "順勢加碼權值股與科技 ETF",
        risk: "medium",
        effectStr: "return { twStock: 8, usStock: 10 };",
        guiVals: { twStock: 8, usStock: 10 },
        advancedMode: false
      },
      {
        text: "居安思危，部分獲利了結轉定存",
        risk: "low",
        effectStr: "if (5 !== 0) s.portfolio.cash += 5 * 10000;\nreturn {};",
        guiVals: { cash: 5 },
        advancedMode: false
      }
    ]
  },
  {
    id: "e_invest_bear",
    title: "經濟衰退疑慮",
    description: "通膨居高不下，央行持續升息，市場恐慌情緒蔓延。",
    type: "macro",
    icon: "📉",
    sentiment: "negative",
    triggerType: "age_range",
    triggerAge: 18,
    minAge: 18,
    maxAge: 100,
    probability: 0.08,
    enabled: true,
    prerequisites: [],
    statReq: { stat: "none", min: 0 },
    effectStr: "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn { twStock: -10, usStock: -15, crypto: -25, realEstate: -2, gold: 5 };",
    guiVals: { appearance: 0, intelligence: 0, constitution: 0, happiness: -2, cash: 0, twStock: -10, usStock: -15, crypto: -25, realEstate: -2, gold: 5 },
    advancedMode: false,
    choices: [
      {
        text: "逢低分批定期定額撿便宜",
        risk: "medium",
        effectStr: "if (1 !== 0) s.lifeStats.intelligence += 1;\nreturn { twStock: 5 };",
        guiVals: { intelligence: 1, twStock: 5 },
        advancedMode: false
      },
      {
        text: "停損觀望，保留大量現金",
        risk: "safe",
        effectStr: "return {};",
        guiVals: {},
        advancedMode: false
      }
    ]
  },
  {
    id: "e_invest_blackswan",
    title: "區域衝突黑天鵝",
    description: "突發的地緣區域衝突導致全球供應鏈中斷，市場迎來劇烈震盪與避險潮。",
    type: "blackswan",
    icon: "☠️",
    sentiment: "critical",
    triggerType: "age_range",
    triggerAge: 18,
    minAge: 18,
    maxAge: 100,
    probability: 0.02,
    enabled: true,
    prerequisites: [],
    statReq: { stat: "none", min: 0 },
    effectStr: "if (-5 !== 0) s.lifeStats.happiness += -5;\nreturn { twStock: -25, usStock: -30, crypto: -40, realEstate: -10, gold: 20 };",
    guiVals: { appearance: 0, intelligence: 0, constitution: 0, happiness: -5, cash: 0, twStock: -25, usStock: -30, crypto: -40, realEstate: -10, gold: 20 },
    advancedMode: false,
    choices: [
      {
        text: "不動如山，相信人類文明與長期國運",
        risk: "high",
        effectStr: "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {};",
        guiVals: { happiness: 2 },
        advancedMode: false
      },
      {
        text: "買入黃金與防禦型資產避險",
        risk: "low",
        effectStr: "return { gold: 15 };",
        guiVals: { gold: 15 },
        advancedMode: false
      }
    ]
  },
  {
    id: "e_invest_crypto_boom",
    title: "比特幣減半與現貨 ETF 狂潮",
    description: "加密貨幣迎來減半週期與機構資金湧入，鏈上交易量暴增，引發全面暴漲！",
    type: "crypto",
    icon: "💎",
    sentiment: "positive",
    triggerType: "age_range",
    triggerAge: 18,
    minAge: 18,
    maxAge: 100,
    probability: 0.04,
    enabled: true,
    prerequisites: [],
    statReq: { stat: "none", min: 0 },
    effectStr: "return { crypto: 45 };",
    guiVals: { appearance: 0, intelligence: 0, constitution: 0, happiness: 4, cash: 0, twStock: 2, usStock: 3, crypto: 45, realEstate: 0, gold: -2 },
    advancedMode: false,
    choices: [
      {
        text: "將獲利分批止盈轉入房地產與台股",
        risk: "low",
        effectStr: "if (10 !== 0) s.portfolio.cash += 10 * 10000;\nreturn { realEstate: 4, twStock: 5 };",
        guiVals: { cash: 10, realEstate: 4, twStock: 5 },
        advancedMode: false
      },
      {
        text: "Diamond Hands 鑽石手死拿不賣",
        risk: "high",
        effectStr: "return { crypto: 15 };",
        guiVals: { crypto: 15 },
        advancedMode: false
      }
    ]
  },
  {
    id: "e_invest_tsmc_guidance",
    title: "護國神山台積電調升全年財測",
    description: "先進製程產能滿載，AI 晶片訂單塞爆，台積電法說會大幅上修營收與資本支出！",
    type: "company",
    icon: "🏢",
    sentiment: "positive",
    triggerType: "age_range",
    triggerAge: 18,
    minAge: 18,
    maxAge: 100,
    probability: 0.06,
    enabled: true,
    prerequisites: [],
    statReq: { stat: "none", min: 0 },
    effectStr: "return { twStock: 12, usStock: 6 };",
    guiVals: { appearance: 0, intelligence: 0, constitution: 0, happiness: 2, cash: 0, twStock: 12, usStock: 6, crypto: 0, realEstate: 2, gold: 0 },
    advancedMode: false,
    choices: [
      {
        text: "買入 0050 ETF 搭上順風車",
        risk: "low",
        effectStr: "return { twStock: 5 };",
        guiVals: { twStock: 5 },
        advancedMode: false
      },
      {
        text: "佈局半導體供應鏈概念股",
        risk: "medium",
        effectStr: "return { twStock: 8 };",
        guiVals: { twStock: 8 },
        advancedMode: false
      }
    ]
  },
  {
    id: "e_invest_housing_policy",
    title: "新青安房貸政策點火房市",
    description: "政府推出延長寬限期與超低利率優惠房貸，剛性買盤湧現，各地房價再度創高。",
    type: "realEstate",
    icon: "🏠",
    sentiment: "positive",
    triggerType: "age_range",
    triggerAge: 22,
    minAge: 22,
    maxAge: 85,
    probability: 0.06,
    enabled: true,
    prerequisites: [],
    statReq: { stat: "none", min: 0 },
    effectStr: "return { realEstate: 8, twStock: 3 };",
    guiVals: { appearance: 0, intelligence: 0, constitution: 0, happiness: 1, cash: 0, twStock: 3, usStock: 0, crypto: -2, realEstate: 8, gold: 0 },
    advancedMode: false,
    choices: [
      {
        text: "看準地段，進場認購預售屋",
        risk: "medium",
        effectStr: "if (-30 !== 0) s.portfolio.cash += -30 * 10000;\nreturn { realEstate: 10 };",
        guiVals: { cash: -30, realEstate: 10 },
        advancedMode: false
      },
      {
        text: "房價過高，堅定當租屋族轉投股市",
        risk: "low",
        effectStr: "return { twStock: 6, usStock: 6 };",
        guiVals: { twStock: 6, usStock: 6 },
        advancedMode: false
      }
    ]
  },
  {
    id: "e_invest_ai_revolution",
    title: "AI 算力大革命引爆美股狂飆",
    description: "大型語言模型邁入商業化變現階段，科技七巨頭獲利超預期，帶動納斯達克指數創新高。",
    type: "tech",
    icon: "🤖",
    sentiment: "positive",
    triggerType: "age_range",
    triggerAge: 18,
    minAge: 18,
    maxAge: 100,
    probability: 0.05,
    enabled: true,
    prerequisites: [],
    statReq: { stat: "none", min: 0 },
    effectStr: "return { usStock: 18, twStock: 10, crypto: 15 };",
    guiVals: { appearance: 0, intelligence: 1, constitution: 0, happiness: 2, cash: 0, twStock: 10, usStock: 18, crypto: 15, realEstate: 0, gold: -3 },
    advancedMode: false,
    choices: [
      {
        text: "重倉科技指數 QQQ 與 AI 算力巨頭",
        risk: "high",
        effectStr: "return { usStock: 12 };",
        guiVals: { usStock: 12 },
        advancedMode: false
      },
      {
        text: "投資全球大型分散型 ETF (VT)",
        risk: "low",
        effectStr: "return { usStock: 6, twStock: 4 };",
        guiVals: { usStock: 6, twStock: 4 },
        advancedMode: false
      }
    ]
  },
  {
    id: "e_invest_dividend_season",
    title: "台股除權息旺季來臨",
    description: "上市櫃公司陸續發放豐厚現金股利，存股族的帳戶迎來大筆現金入帳！",
    type: "routine",
    icon: "💵",
    sentiment: "positive",
    triggerType: "age_range",
    triggerAge: 20,
    minAge: 20,
    maxAge: 100,
    probability: 0.10,
    enabled: true,
    prerequisites: [],
    statReq: { stat: "none", min: 0 },
    effectStr: "if (6 !== 0) s.portfolio.cash += 6 * 10000;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn { twStock: 2 };",
    guiVals: { appearance: 0, intelligence: 0, constitution: 0, happiness: 2, cash: 6, twStock: 2, usStock: 0, crypto: 0, realEstate: 0, gold: 0 },
    advancedMode: false,
    choices: [
      {
        text: "股息再投入，享受複利效應",
        risk: "low",
        effectStr: "return { twStock: 6 };",
        guiVals: { twStock: 6 },
        advancedMode: false
      },
      {
        text: "把股息拿去犒賞自己吃大餐出國旅遊",
        risk: "none",
        effectStr: "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {};",
        guiVals: { happiness: 6 },
        advancedMode: false
      }
    ]
  }
];

export const INVESTSIM_ACHIEVEMENTS = [
  {
    id: 'a001',
    title: '長期主義者',
    description: '持有一項資產超過三年，且從未停損。',
    icon: '🧘',
    conditionStr: 's.stats.holdYears >= 3 && s.stats.stopLossCount === 0',
    enabled: true
  },
  {
    id: 'a002',
    title: '風控大師',
    description: '最大交易回撤 (MDD) 控制在 10% 以內。',
    icon: '🛡️',
    conditionStr: 's.stats.mdd < 10',
    enabled: true
  },
  {
    id: 'a003',
    title: '百倍奉還',
    description: '總資產達到初始本金的一百倍。',
    icon: '🚀',
    conditionStr: 'nw >= s.startNetWorth * 100',
    enabled: true
  },
  {
    id: 'a004',
    title: '收租公/婆',
    description: '擁有一棟以上房產，且被動收入占比超過總資產增長的 50%。',
    icon: '🏢',
    conditionStr: 's.portfolio.realEstate > 0',
    enabled: true
  },
  {
    id: 'a005',
    title: '資產配置達人',
    description: '四大資產均有配置，且比例皆在 15% 到 35% 之間。',
    icon: '⚖️',
    conditionStr: 's.portfolio.twStock > 0 && s.portfolio.usStock > 0 && s.portfolio.crypto > 0 && s.portfolio.realEstate > 0',
    enabled: true
  },
  {
    id: 'a006',
    title: '黑天鵝倖存者',
    description: '經歷一次全球性的黑天鵝事件，但淨資產沒有縮水超過 5%。',
    icon: '🦢',
    conditionStr: 's.stats.survivedBlackswan',
    enabled: true
  },
  {
    id: 'a007',
    title: '資產腰斬',
    description: '總資產跌破初始本金的 50%。',
    icon: '🩸',
    conditionStr: 'nw <= s.startNetWorth * 0.5',
    enabled: true
  },
  {
    id: 'a008',
    title: '抄底神手',
    description: '在市場大跌超過 20% 時大量買進，並在之後獲利超過 30%。',
    icon: '🎣',
    conditionStr: 's.stats.bottomFishing',
    enabled: true
  },
  {
    id: 'a009',
    title: '十倍富翁',
    description: '總資產達到初始本金的十倍。',
    icon: '💰',
    conditionStr: 'nw >= s.startNetWorth * 10',
    enabled: true
  },
  {
    id: 'a010',
    title: '幣圈巨鯨',
    description: '加密貨幣佔總資產比例超過 50%。',
    icon: '💎',
    conditionStr: 's.portfolio.crypto >= 5000000',
    enabled: true
  }
];
