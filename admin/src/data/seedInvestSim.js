export const INVESTSIM_EVENTS = [
  {
    id: "e_invest_bull",
    title: "全球大牛市",
    description: "受惠於AI浪潮與寬鬆貨幣政策，全球股市迎來史詩級大牛市！",
    type: "macro",
    icon: "🚀",
    sentiment: "positive",
    triggerType: "random",
    minAge: 18,
    maxAge: 100,
    probability: 0.05,
    enabled: true,
    prerequisites: [],
    effectStr: "return { twStock: 15, usStock: 20, crypto: 30, realEstate: 5 };",
    choices: []
  },
  {
    id: "e_invest_bear",
    title: "經濟衰退疑慮",
    description: "通膨居高不下，央行持續升息，市場恐慌情緒蔓延。",
    type: "macro",
    icon: "📉",
    sentiment: "negative",
    triggerType: "random",
    minAge: 18,
    maxAge: 100,
    probability: 0.08,
    enabled: true,
    prerequisites: [],
    effectStr: "return { twStock: -10, usStock: -15, crypto: -25, realEstate: -2 };",
    choices: []
  },
  {
    id: "e_invest_blackswan",
    title: "區域衝突黑天鵝",
    description: "突發的區域衝突導致全球供應鏈中斷，市場迎來劇烈震盪。",
    type: "blackswan",
    icon: "☠️",
    sentiment: "critical",
    triggerType: "random",
    minAge: 18,
    maxAge: 100,
    probability: 0.01,
    enabled: true,
    prerequisites: [],
    effectStr: "return { twStock: -25, usStock: -30, crypto: -40, realEstate: -10 };",
    choices: []
  },
  {
    id: "e_invest_crypto_boom",
    title: "比特幣減半效應",
    description: "加密貨幣迎來四年一度的減半行情，大量資金湧入幣圈！",
    type: "crypto",
    icon: "💎",
    sentiment: "positive",
    triggerType: "random",
    minAge: 18,
    maxAge: 100,
    probability: 0.03,
    enabled: true,
    prerequisites: [],
    effectStr: "return { crypto: 50 };",
    choices: []
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
    conditionStr: 'port.realEstate > 0 && (s.stats.dividendsEarned / (nw - s.startNetWorth + 1)) >= 0.5',
    enabled: true
  },
  {
    id: 'a005',
    title: '資產配置達人',
    description: '四大資產均有配置，且比例皆在 15% 到 35% 之間。',
    icon: '⚖️',
    conditionStr: '(() => { const total = port.cash + port.twStock + port.usStock + port.crypto + port.realEstate; if(total===0)return false; const r = [port.twStock/total, port.usStock/total, port.crypto/total, port.realEstate/total]; return r.every(x => x >= 0.15 && x <= 0.35); })()',
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
    title: '幣圈亡命徒',
    description: '加密貨幣佔總資產比例超過 60%。',
    icon: '🎲',
    conditionStr: 'total > 0 && (port.crypto / total) >= 0.6',
    enabled: true
  }
];
