export const LIFE_TW_EVENTS = [
  {
    id: "e_life_001",
    title: "未成年懷孕",
    description: "一次意外，你（的另一半）懷孕了…你才十幾歲。",
    type: "life",
    icon: "👶",
    sentiment: "negative",
    triggerType: "fixed_age",
    triggerAge: 17,
    probability: 0.1,
    statReq: { stat: "appearance", min: 0 },
    effects: { happiness: -4, cash: -100000, constitution: -2, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "生下來，早婚", effect: { happiness: 2, intelligence: -2, cash: -100000 } },
      { text: "沒有孩子", effect: { happiness: -4 } }
    ]
  },
  {
    id: "e_life_002",
    title: "才藝班",
    description: "爸媽送你去上才藝班（鋼琴／畫畫／舞蹈／心算），要認真學嗎？",
    type: "childhood",
    icon: "🎨",
    sentiment: "neutral",
    triggerType: "fixed_age",
    triggerAge: 8,
    probability: 0.8,
    statReq: { stat: "appearance", min: 0 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "認真學、培養興趣", effect: { appearance: 2, happiness: 2, cash: -30000 } },
      { text: "每次都翹課擺爛", effect: { happiness: 1, cash: -30000 } }
    ]
  },
  {
    id: "e_life_003",
    title: "模範生選舉",
    description: "班上要選模範生／班長，你想爭取嗎？",
    type: "childhood",
    icon: "🗳️",
    sentiment: "neutral",
    triggerType: "fixed_age",
    triggerAge: 10,
    probability: 0.5,
    statReq: { stat: "intelligence", min: 40 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "上台拉票爭取", effect: { appearance: 3, happiness: 4 } },
      { text: "當個安靜的小孩就好", effect: { happiness: 1 } }
    ]
  },
  {
    id: "e_life_004",
    title: "吵著養寵物",
    description: "你好想養寵物，天天吵著要爸媽答應…",
    type: "childhood",
    icon: "🐶",
    sentiment: "neutral",
    triggerType: "fixed_age",
    triggerAge: 12,
    probability: 0.6,
    statReq: { stat: "happiness", min: 0 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "保證會負責爭取到手", effect: { happiness: 6, constitution: 1, cash: -20000 } },
      { text: "被爸媽打槍", effect: { happiness: -2 } }
    ]
  },
  {
    id: "e_life_005",
    title: "混幫派",
    description: "大哥找你入夥「做事」，有錢賺但也有風險…",
    type: "life",
    icon: "🔪",
    sentiment: "negative",
    triggerType: "fixed_age",
    triggerAge: 16,
    probability: 0.2,
    statReq: { stat: "intelligence", min: 0 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "跟著大哥混", effect: { constitution: 4, happiness: 2, appearance: 2, cash: 200000 } },
      { text: "金盆洗手做正經事", effect: { happiness: 2 } }
    ]
  },
  {
    id: "e_life_006",
    title: "會考放榜",
    description: "會考放榜了，成績決定你上哪所學校。",
    type: "life",
    icon: "🎓",
    sentiment: "neutral",
    triggerType: "fixed_age",
    triggerAge: 15,
    probability: 1.0,
    statReq: { stat: "happiness", min: 0 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "繼續努力升學", effect: { intelligence: 5, happiness: 2 } },
      { text: "直接躺平不讀了", effect: { intelligence: -3, happiness: 3 } }
    ]
  },
  {
    id: "e_life_007",
    title: "8+9 漏氣",
    description: "你借了大哥的賓士載妹兜風，開到加油站卻只敢喊「加 300」，女伴一臉嫌棄、覺得你有夠漏氣。",
    type: "life",
    icon: "⛽",
    sentiment: "negative",
    triggerType: "random",
    triggerAge: 20,
    probability: 0.1,
    statReq: { stat: "happiness", min: 0 },
    effects: { happiness: -6, cash: -300, constitution: 0, intelligence: 0, appearance: -2, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "默默承受", effect: { happiness: 0 } }
    ]
  },
  {
    id: "e_life_008",
    title: "交友軟體",
    description: "你下載了交友軟體，right swipe 滑不停。",
    type: "life",
    icon: "📱",
    sentiment: "neutral",
    triggerType: "random",
    triggerAge: 24,
    probability: 0.15,
    statReq: { stat: "appearance", min: 0 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "認真找對象", effect: { happiness: 6, cash: -5000 } },
      { text: "只想約約看、及時行樂", effect: { happiness: 3, appearance: 1 } },
      { text: "母胎單身也不錯", effect: { happiness: 1 } }
    ]
  },
  {
    id: "e_life_009",
    title: "出國留學",
    description: "你有機會出國念書、深造鍍金…",
    type: "life",
    icon: "🛫",
    sentiment: "neutral",
    triggerType: "fixed_age",
    triggerAge: 23,
    probability: 0.3,
    statReq: { stat: "intelligence", min: 60 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "出國留學（花大錢）", effect: { intelligence: 8, appearance: 3, happiness: 3, cash: -1500000 } },
      { text: "留台發展", effect: { happiness: 1 } }
    ]
  },
  {
    id: "e_life_010",
    title: "中年失業",
    description: "公司組織調整，你被資遣了…中年失業。",
    type: "life",
    icon: "📉",
    sentiment: "negative",
    triggerType: "random",
    triggerAge: 45,
    probability: 0.05,
    statReq: { stat: "happiness", min: 0 },
    effects: { happiness: -8, cash: 0, constitution: -2, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "努力二度就業", effect: { happiness: 4 } },
      { text: "去跑外送／開Uber", effect: { constitution: -2, happiness: 2 } }
    ]
  },
  {
    id: "e_life_011",
    title: "創業",
    description: "你有個創業點子，要不要辭職 all in？",
    type: "life",
    icon: "🚀",
    sentiment: "neutral",
    triggerType: "random",
    triggerAge: 30,
    probability: 0.08,
    statReq: { stat: "intelligence", min: 50 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "梭哈創業！", effect: { happiness: 9, appearance: 3, cash: -1000000 } },
      { text: "還是領死薪水", effect: { happiness: -1 } }
    ]
  },
  {
    id: "e_life_012",
    title: "黃昏之戀",
    description: "晚年寂寞，一個對你噓寒問暖的對象出現了，甚至提起了結婚——要把握這段黃昏之戀嗎？",
    type: "life",
    icon: "💕",
    sentiment: "positive",
    triggerType: "fixed_age",
    triggerAge: 65,
    probability: 0.3,
    statReq: { stat: "happiness", min: 0 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "再婚！把握晚年幸福", effect: { happiness: 13, constitution: 2, cash: -500000 } },
      { text: "這年紀了，還是算了", effect: { happiness: -1 } }
    ]
  },
  {
    id: "e_life_013",
    title: "生小孩",
    description: "要不要生小孩？養一個到大學可要千萬欸。",
    type: "life",
    icon: "👶",
    sentiment: "neutral",
    triggerType: "fixed_age",
    triggerAge: 28,
    probability: 0.5,
    statReq: { stat: "happiness", min: 0 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "生！住月子中心", effect: { happiness: 10, constitution: -3, cash: -300000 } },
      { text: "當快樂頂客族", effect: { happiness: 3 } }
    ]
  },
  {
    id: "e_life_014",
    title: "靠爸啃老",
    description: "家裡有錢，其實你不工作也餓不死…",
    type: "life",
    icon: "🛋️",
    sentiment: "neutral",
    triggerType: "fixed_age",
    triggerAge: 25,
    probability: 0.1,
    statReq: { stat: "happiness", min: 0 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "靠爸啃老爽過", effect: { happiness: 6, intelligence: -3 } },
      { text: "不想被說靠爸，去工作", effect: { happiness: -2, intelligence: 2 } }
    ]
  },
  {
    id: "e_life_015",
    title: "考公職",
    description: "長輩狂勸你考公務員，鐵飯碗欸。",
    type: "life",
    icon: "🍚",
    sentiment: "neutral",
    triggerType: "fixed_age",
    triggerAge: 26,
    probability: 0.3,
    statReq: { stat: "intelligence", min: 40 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "拚國考", effect: { happiness: 4, constitution: -2 } },
      { text: "不想被綁著", effect: { happiness: 1 } }
    ]
  },
  {
    id: "e_life_016",
    title: "二代接班",
    description: "家族企業要你接班。",
    type: "life",
    icon: "👔",
    sentiment: "neutral",
    triggerType: "fixed_age",
    triggerAge: 35,
    probability: 0.05,
    statReq: { stat: "happiness", min: 0 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "接下家業當董仔", effect: { happiness: 6, appearance: 3, cash: 3000000 } },
      { text: "我想走自己的路", effect: { happiness: 3, intelligence: 2 } }
    ]
  },
  {
    id: "e_life_017",
    title: "打工度假",
    description: "你想 gap year，出國打工度假闖一闖…",
    type: "life",
    icon: "🌏",
    sentiment: "positive",
    triggerType: "fixed_age",
    triggerAge: 22,
    probability: 0.3,
    statReq: { stat: "constitution", min: 40 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "衝！海外打工度假", effect: { appearance: 4, constitution: 3, happiness: 6, cash: 150000 } },
      { text: "乖乖待台灣", effect: { happiness: 1 } }
    ]
  },
  {
    id: "e_life_018",
    title: "半退休",
    description: "存夠了，要不要提早半退休、做想做的事？",
    type: "life",
    icon: "🌅",
    sentiment: "positive",
    triggerType: "fixed_age",
    triggerAge: 55,
    probability: 0.4,
    statReq: { stat: "happiness", min: 0 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "半退休樂活", effect: { happiness: 8, constitution: 2 } },
      { text: "再拚幾年", effect: { happiness: -1 } }
    ]
  },
  {
    id: "e_life_019",
    title: "金盆洗手",
    description: "混了大半輩子、進出幾次牢，你動了洗手上岸、過安穩日子的念頭…",
    type: "life",
    icon: "🙏",
    sentiment: "neutral",
    triggerType: "fixed_age",
    triggerAge: 40,
    probability: 0.1,
    statReq: { stat: "happiness", min: 0 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "金盆洗手做點小生意", effect: { happiness: 6 } },
      { text: "人在江湖身不由己", effect: { happiness: -2, constitution: -1 } }
    ]
  },
  {
    id: "e_life_020",
    title: "收買獄警",
    description: "你想塞錢給獄警，換點特殊待遇…",
    type: "life",
    icon: "👮",
    sentiment: "neutral",
    triggerType: "random",
    triggerAge: 32,
    probability: 0.05,
    statReq: { stat: "happiness", min: 0 },
    effects: { happiness: 0, cash: 0, constitution: 0, intelligence: 0, appearance: 0, twStock: 0, usStock: 0, crypto: 0 },
    choices: [
      { text: "塞錢買舒服", effect: { happiness: 5, cash: -120000 } },
      { text: "乖乖服刑", effect: { happiness: -1 } }
    ]
  }
];
