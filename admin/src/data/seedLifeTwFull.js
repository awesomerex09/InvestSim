// ============================================================
// InvestSim — Normalized Full Life & Childhood Events
// Total Events: 514
// ============================================================

export const LIFE_TW_EVENTS = [
  {
    "id": "e_life_001",
    "title": "未成年懷孕",
    "description": "一次意外，你（的另一半）懷孕了…你才十幾歲。",
    "type": "childhood",
    "icon": "👶",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 17,
    "minAge": 17,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "appearance",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "生下來，早婚",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "沒有孩子",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_002",
    "title": "才藝班",
    "description": "爸媽送你去上才藝班（鋼琴／畫畫／舞蹈／心算），要認真學嗎？",
    "type": "childhood",
    "icon": "🎨",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 8,
    "probability": 0.8,
    "prerequisites": [],
    "statReq": {
      "stat": "appearance",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "認真學、培養興趣",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "每次都翹課擺爛",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_003",
    "title": "模範生選舉",
    "description": "班上要選模範生／班長，你想爭取嗎？",
    "type": "life",
    "icon": "🗳️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 26,
    "maxAge": 100,
    "probability": 0.5,
    "prerequisites": [],
    "statReq": {
      "stat": "intelligence",
      "min": 40
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "上台拉票爭取",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "當個安靜的小孩就好",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_004",
    "title": "吵著養寵物",
    "description": "你好想養寵物，天天吵著要爸媽答應…",
    "type": "childhood",
    "icon": "🐶",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 12,
    "minAge": 12,
    "maxAge": 12,
    "probability": 0.6,
    "prerequisites": [],
    "statReq": {
      "stat": "happiness",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "保證會負責爭取到手",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "被爸媽打槍",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_005",
    "title": "混幫派",
    "description": "大哥找你入夥「做事」，有錢賺但也有風險…",
    "type": "life",
    "icon": "🔪",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 100,
    "probability": 0.2,
    "prerequisites": [],
    "statReq": {
      "stat": "intelligence",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "跟著大哥混",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "金盆洗手做正經事",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_006",
    "title": "會考放榜",
    "description": "會考放榜了，成績決定你上哪所學校。",
    "type": "childhood",
    "icon": "🎓",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 15,
    "minAge": 15,
    "maxAge": 15,
    "probability": 1,
    "prerequisites": [],
    "statReq": {
      "stat": "happiness",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "繼續努力升學",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "直接躺平不讀了",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_007",
    "title": "8+9 漏氣",
    "description": "你借了大哥的賓士載妹兜風，開到加油站卻只敢喊「加 300」，女伴一臉嫌棄、覺得你有夠漏氣。",
    "type": "life",
    "icon": "⛽",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "happiness",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "默默承受",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_008",
    "title": "交友軟體",
    "description": "你下載了交友軟體，right swipe 滑不停。",
    "type": "life",
    "icon": "📱",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "random",
    "triggerAge": 24,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.15,
    "prerequisites": [],
    "statReq": {
      "stat": "appearance",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "認真找對象",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "只想約約看、及時行樂",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "母胎單身也不錯",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_009",
    "title": "出國留學",
    "description": "你有機會出國念書、深造鍍金…",
    "type": "life",
    "icon": "🛫",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 23,
    "minAge": 23,
    "maxAge": 23,
    "probability": 0.3,
    "prerequisites": [],
    "statReq": {
      "stat": "intelligence",
      "min": 60
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "出國留學（花大錢）",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "留台發展",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_010",
    "title": "中年失業",
    "description": "公司組織調整，你被資遣了…中年失業。",
    "type": "life",
    "icon": "📉",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "random",
    "triggerAge": 45,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.05,
    "prerequisites": [],
    "statReq": {
      "stat": "happiness",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "努力二度就業",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "去跑外送／開Uber",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_011",
    "title": "創業",
    "description": "你有個創業點子，要不要辭職 all in？",
    "type": "life",
    "icon": "🚀",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "random",
    "triggerAge": 30,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "intelligence",
      "min": 50
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "梭哈創業！",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "還是領死薪水",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_012",
    "title": "黃昏之戀",
    "description": "晚年寂寞，一個對你噓寒問暖的對象出現了，甚至提起了結婚——要把握這段黃昏之戀嗎？",
    "type": "life",
    "icon": "💕",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 65,
    "minAge": 22,
    "maxAge": 100,
    "probability": 0.3,
    "prerequisites": [],
    "statReq": {
      "stat": "happiness",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "再婚！把握晚年幸福",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "這年紀了，還是算了",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_013",
    "title": "生小孩",
    "description": "要不要生小孩？養一個到大學可要千萬欸。",
    "type": "life",
    "icon": "👶",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.5,
    "prerequisites": [],
    "statReq": {
      "stat": "happiness",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "生！住月子中心",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "當快樂頂客族",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_014",
    "title": "靠爸啃老",
    "description": "家裡有錢，其實你不工作也餓不死…",
    "type": "life",
    "icon": "🛋️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 25,
    "minAge": 25,
    "maxAge": 25,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "happiness",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "靠爸啃老爽過",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "不想被說靠爸，去工作",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_015",
    "title": "考公職",
    "description": "長輩狂勸你考公務員，鐵飯碗欸。",
    "type": "life",
    "icon": "🍚",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 100,
    "probability": 0.3,
    "prerequisites": [],
    "statReq": {
      "stat": "intelligence",
      "min": 40
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "拚國考",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "不想被綁著",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_016",
    "title": "二代接班",
    "description": "家族企業要你接班。",
    "type": "life",
    "icon": "👔",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 35,
    "minAge": 35,
    "maxAge": 35,
    "probability": 0.05,
    "prerequisites": [],
    "statReq": {
      "stat": "happiness",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "接下家業當董仔",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "我想走自己的路",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_017",
    "title": "打工度假",
    "description": "你想 gap year，出國打工度假闖一闖…",
    "type": "life",
    "icon": "🌏",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.3,
    "prerequisites": [],
    "statReq": {
      "stat": "constitution",
      "min": 40
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "衝！海外打工度假",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "乖乖待台灣",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_018",
    "title": "半退休",
    "description": "存夠了，要不要提早半退休、做想做的事？",
    "type": "life",
    "icon": "🌅",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 55,
    "minAge": 55,
    "maxAge": 100,
    "probability": 0.4,
    "prerequisites": [],
    "statReq": {
      "stat": "happiness",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "半退休樂活",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "再拚幾年",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_019",
    "title": "金盆洗手",
    "description": "混了大半輩子、進出幾次牢，你動了洗手上岸、過安穩日子的念頭…",
    "type": "life",
    "icon": "🙏",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 40,
    "minAge": 40,
    "maxAge": 40,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "happiness",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "金盆洗手做點小生意",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "人在江湖身不由己",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_life_020",
    "title": "收買獄警",
    "description": "你想塞錢給獄警，換點特殊待遇…",
    "type": "life",
    "icon": "👮",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 32,
    "minAge": 22,
    "maxAge": 100,
    "probability": 0.05,
    "prerequisites": [],
    "statReq": {
      "stat": "happiness",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "塞錢買舒服",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "乖乖服刑",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_born",
    "title": "呱呱墜地",
    "description": "你在台灣平安出生了，開啟了充滿挑戰與機會的人生與投資旅程。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 0,
    "probability": 1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_run",
    "title": "RUN",
    "description": "你整天在外奔跑玩耍，越長越勇。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 4,
    "minAge": 4,
    "maxAge": 11,
    "probability": 0.2,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.constitution += 3;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 3,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_sibling",
    "title": "SIBLING",
    "description": "家裡多了個弟弟／妹妹，你升格當哥哥／姊姊。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 2,
    "minAge": 2,
    "maxAge": 9,
    "probability": 0.2,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 1,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_cousin",
    "title": "COUSIN",
    "description": "過年親戚聚會，你收紅包也被問成績。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 4,
    "minAge": 4,
    "maxAge": 12,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_scary",
    "title": "SCARY",
    "description": "你怕黑怕鬼，晚上不敢自己睡。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 3,
    "minAge": 3,
    "maxAge": 9,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_champ_kid",
    "title": "CHAMP_KID",
    "description": "你參加班上比賽得了獎，被老師誇獎。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 7,
    "minAge": 7,
    "maxAge": 12,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_funded_cram",
    "title": "FUNDED_CRAM",
    "description": "家裡幫你請家教、上補習班，成績穩穩往上。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 6,
    "minAge": 6,
    "maxAge": 14,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_help_family",
    "title": "HELP_FAMILY",
    "description": "你放學後幫忙家裡做生意／打理家務。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 16,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.constitution += 2;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 2,
      "happiness": -1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_廟會",
    "title": "廟會",
    "description": "跟著陣頭看廟會遶境，鑼鼓喧天。",
    "type": "childhood",
    "icon": "🛕",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 5,
    "minAge": 5,
    "maxAge": 14,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_運動會",
    "title": "運動會",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 7,
    "minAge": 7,
    "maxAge": 13,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (2 !== 0) s.lifeStats.constitution += 2;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 2,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_才藝班",
    "title": "才藝班",
    "description": "爸媽送你去上才藝班（鋼琴／畫畫／舞蹈／心算），要認真學嗎？",
    "type": "childhood",
    "icon": "🎒",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 7,
    "minAge": 7,
    "maxAge": 12,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "認真學、培養興趣",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "每次都翹課擺爛",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_模範生選舉",
    "title": "模範生選舉",
    "description": "班上要選模範生／班長，你想爭取嗎？",
    "type": "life",
    "icon": "🎒",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 26,
    "maxAge": 75,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "上台拉票、爭取同學支持",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "當個安靜的小孩就好",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_收藏卡熱潮",
    "title": "收藏卡熱潮",
    "description": "班上瘋收集卡片（寶可夢／遊戲王／鬼滅），大家都在拆包比稀有…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 13,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "課金狂拆、蒐集稀有卡",
        "risk": "medium",
        "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "忍住、把零用錢存起來",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_校外教學",
    "title": "校外教學",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 7,
    "minAge": 7,
    "maxAge": 13,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_蛀牙",
    "title": "蛀牙",
    "description": "糖果餅乾吃太多，你蛀牙了，被媽媽押去看牙醫——那鑽牙的聲音好可怕。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 7,
    "minAge": 7,
    "maxAge": 12,
    "probability": 0.09,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_吵著養寵物",
    "title": "吵著養寵物",
    "description": "你好想養寵物，天天吵著要爸媽答應…",
    "type": "childhood",
    "icon": "🐶",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 14,
    "probability": 0.11,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "保證會負責、爭取到手",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 1,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "被爸媽以『你不會顧』打槍",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_腸病毒停課",
    "title": "腸病毒停課",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 7,
    "minAge": 7,
    "maxAge": 12,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -2,
      "happiness": -1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_夜市小遊戲",
    "title": "夜市小遊戲",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 14,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_被老師罰",
    "title": "被老師罰",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 14,
    "probability": 0.09,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_暑假作業",
    "title": "暑假作業",
    "description": "漫長暑假你只顧著玩，開學前一週才驚覺暑假作業一個字都沒寫，只好熬夜狂補到天亮。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 7,
    "minAge": 7,
    "maxAge": 14,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": -1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_會考",
    "title": "會考",
    "description": "",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 15,
    "minAge": 15,
    "maxAge": 16,
    "probability": 1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_選組",
    "title": "選組",
    "description": "高中分組，這個選擇會左右你的升學與職涯：",
    "type": "childhood",
    "icon": "🎓",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 15,
    "minAge": 15,
    "maxAge": 16,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "理組（數理化生）",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "文組（史地法商）",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "轉讀技職／高職",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.constitution += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 3,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_中輟",
    "title": "中輟",
    "description": "你對讀書徹底沒興趣，班上壞朋友揪你翹家…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "跟著混，中輟去",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "忍住，把書念完",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_學測",
    "title": "學測",
    "description": "",
    "type": "childhood",
    "icon": "🎓",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 10,
    "minAge": 17,
    "maxAge": 17,
    "probability": 1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_落榜後",
    "title": "落榜後",
    "description": "學測落榜，接下來怎麼辦？",
    "type": "childhood",
    "icon": "🎓",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 10,
    "minAge": 17,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "重考一年拚拚看",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "念科大／五專",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.constitution += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 2,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "直接進社會工作",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 1,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_科大出師",
    "title": "科大出師",
    "description": "",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 22,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.constitution += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 3,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_考醫科律師",
    "title": "考醫科律師",
    "description": "你成績頂尖，要拚醫科／律師這條路嗎？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 24,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "拚專業證照（超硬）",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -2,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "走一般就業就好",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_研究所",
    "title": "研究所",
    "description": "要繼續念研究所嗎？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 23,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "念碩士",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "直接就業",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_career_start",
    "title": "CAREER_START",
    "description": "",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_考公職",
    "title": "考公職",
    "description": "長輩狂勸你考公務員，鐵飯碗欸。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 26,
    "maxAge": 75,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "拚國考",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -2,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "不想被綁著",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_轉行",
    "title": "轉行",
    "description": "你對現在的工作感到倦怠，動了轉行的念頭…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 32,
    "minAge": 32,
    "maxAge": 52,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_打工度假",
    "title": "打工度假",
    "description": "你想 gap year，出國打工度假闖一闖…",
    "type": "life",
    "icon": "✈️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 29,
    "probability": 0.14,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "衝！海外打工度假",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (3 !== 0) s.lifeStats.constitution += 3;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 4,
          "intelligence": 0,
          "constitution": 3,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "乖乖待台灣",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_出國留學",
    "title": "出國留學",
    "description": "你有機會出國念書、深造鍍金…",
    "type": "life",
    "icon": "✈️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 24,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "出國留學",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "留台發展",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_斜槓",
    "title": "斜槓",
    "description": "你發展斜槓副業，多一份收入也多一份忙碌。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 56,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_數位游牧",
    "title": "數位游牧",
    "description": "你邊旅行邊工作，當起數位游牧民族。",
    "type": "life",
    "icon": "✈️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 52,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_半退休",
    "title": "半退休",
    "description": "存夠了，要不要提早半退休、做想做的事？",
    "type": "life",
    "icon": "🏖️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 65,
    "minAge": 55,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "半退休樂活",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.constitution += 2;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 2,
          "happiness": 8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "再拚幾年",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_尾牙",
    "title": "尾牙",
    "description": "公司尾牙抽獎，你抽到…安慰獎一包衛生紙。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 23,
    "minAge": 23,
    "maxAge": 63,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_加班",
    "title": "加班",
    "description": "連續加班趕專案，肝在哭泣。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 23,
    "minAge": 23,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -2,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_慣老闆",
    "title": "慣老闆",
    "description": "老闆又在畫大餅、年終只有一個月。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 23,
    "minAge": 23,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_專案成功",
    "title": "專案成功",
    "description": "你主導的專案大成功，被上頭點名嘉獎！",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_辦公室政治",
    "title": "辦公室政治",
    "description": "你被捲入辦公室鬥爭，身心俱疲。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 58,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_跳槽",
    "title": "跳槽",
    "description": "獵頭來挖角，要跳槽嗎？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 52,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "跳！加薪三成",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "求安穩不跳",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_創業",
    "title": "創業",
    "description": "你有個創業點子，要不要辭職 all in？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 48,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "梭哈創業！",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (9 !== 0) s.lifeStats.happiness += 9;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 9,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "還是領死薪水",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_中年失業",
    "title": "中年失業",
    "description": "公司組織調整，你被資遣了…中年失業。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 42,
    "minAge": 42,
    "maxAge": 57,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "努力二度就業",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -2,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "去跑外送／開Uber",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -2,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_工安意外",
    "title": "工安意外",
    "description": "工作現場發生意外，你受了傷。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-10 !== 0) s.lifeStats.constitution += -10;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -10,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_混幫派",
    "title": "混幫派",
    "description": "大哥找你入夥「做事」，有錢賺但也有風險…",
    "type": "life",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "跟著大哥混、入行黑道",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (4 !== 0) s.lifeStats.constitution += 4;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 4,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "金盆洗手做正經事",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_8+9漏氣",
    "title": "8+9漏氣",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
    "guiVals": {
      "appearance": -2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_混很大尾",
    "title": "混很大尾",
    "description": "你在道上越混越有份量，手下一票小弟，出入有人喊你大哥。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (6 !== 0) s.lifeStats.appearance += 6;\nif (3 !== 0) s.lifeStats.constitution += 3;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 6,
      "intelligence": 0,
      "constitution": 3,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_黑道上位",
    "title": "黑道上位",
    "description": "你在道上拚輸贏、罩兄弟、搶地盤，名號一天天響亮。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 52,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (1 !== 0) s.lifeStats.constitution += 1;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 1,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_收保護費",
    "title": "收保護費",
    "description": "你替商家「喬事情」、圍事、收保護費，店家們乖乖上繳「規費」。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 58,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 1,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_經營八大",
    "title": "經營八大",
    "description": "你有機會頂下一間酒店／地下賭場／地下錢莊來經營，金流龐大但也是警方眼中釘…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "接手經營、大撈特撈",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "這太招搖，不碰",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_viceRaid",
    "title": "八大行業遭掃蕩查抄",
    "description": "警方大規模掃黑掃黃，你的酒店／賭場被抄，金雞母沒了、還吃上官司。",
    "type": "life",
    "icon": "⛓️",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
    "guiVals": {
      "appearance": -2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_暴力討債",
    "title": "暴力討債",
    "description": "錢莊委託你去「討一筆債」——潑漆、恐嚇、上門要人，抽成優渥…",
    "type": "life",
    "icon": "👤",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "接下、該硬就硬",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "手段別太過火",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_圍標工程",
    "title": "圍標工程",
    "description": "你靠著地方勢力介入公共工程圍標、綁標，一標下來油水驚人。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_黑道漂白",
    "title": "黑道漂白",
    "description": "你想洗白上岸——靠地方樁腳實力參選民代、脫下黑衣換上西裝…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 58,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "漂白參政、當地方民代",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "繼續當幕後大老",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_仇家尋仇",
    "title": "仇家尋仇",
    "description": "仇家帶人堵你尋仇，一陣火拼刀光劍影…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-12 !== 0) s.lifeStats.constitution += -12;\nif (-5 !== 0) s.lifeStats.happiness += -5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -12,
      "happiness": -5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_金盆洗手",
    "title": "金盆洗手",
    "description": "混了大半輩子、進出幾次牢，你動了洗手上岸、過安穩日子的念頭…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 35,
    "minAge": 35,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "金盆洗手、做點小生意",
        "risk": "medium",
        "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "人在江湖、身不由己",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_販毒",
    "title": "販毒",
    "description": "上游要你接「送貨」的線——販毒，暴利但這是唯一死刑等級的重罪…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 50,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "接下這條金雞母",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "這條線不能碰",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 1,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_販槍",
    "title": "販槍",
    "description": "有門路問你要不要走私槍械軍火…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 52,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "做軍火生意",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "不碰槍",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_替老大扛罪",
    "title": "替老大扛罪",
    "description": "組織出事，大哥要你出來「扛」——替他蹲牢…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "義氣相挺，我扛",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "憑什麼是我扛？",
        "risk": "medium",
        "effectStr": "if (-12 !== 0) s.lifeStats.constitution += -12;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -12,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_火拼",
    "title": "火拼",
    "description": "兩幫人馬街頭火拼，你也在場…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 45,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-12 !== 0) s.lifeStats.constitution += -12;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -12,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_吸毒",
    "title": "吸毒",
    "description": "兄弟遞來一包白粉，說能讓你忘掉煩惱…",
    "type": "life",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "碰了",
        "risk": "medium",
        "effectStr": "if (-8 !== 0) s.lifeStats.constitution += -8;\nif (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -8,
          "happiness": 5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "堅決拒絕",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.constitution += 2;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 2,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_入獄",
    "title": "入獄",
    "description": "你犯的事終於東窗事發，被抓去關。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.appearance += -3;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
    "guiVals": {
      "appearance": -3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_出獄",
    "title": "出獄",
    "description": "刑期服滿，你走出高牆、重見天日。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 95,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "痛改前非，重新做人",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "重操舊業／混口飯吃",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 1,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_獄中大哥",
    "title": "獄中大哥",
    "description": "你在獄中結識了呼風喚雨的道上大哥，攀上了關係。",
    "type": "life",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 4,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_收買獄警",
    "title": "收買獄警",
    "description": "你想塞錢給獄警，換點特殊待遇…",
    "type": "life",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "塞錢買舒服",
        "risk": "medium",
        "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "乖乖服刑",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_獄中鬥毆",
    "title": "獄中鬥毆",
    "description": "監獄裡爆發衝突，你被捲入一場鬥毆。",
    "type": "life",
    "icon": "🦢",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.18,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-10 !== 0) s.lifeStats.constitution += -10;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -10,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_獄中讀書",
    "title": "獄中讀書",
    "description": "你在獄中苦讀進修、考取證照，決心洗心革面。",
    "type": "life",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.16,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_獄中健身",
    "title": "獄中健身",
    "description": "你利用放封時間勤練身體，練出一身腱子肉。",
    "type": "life",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.16,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (5 !== 0) s.lifeStats.constitution += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 5,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_探監",
    "title": "探監",
    "description": "家人來探監，隔著玻璃相見，讓你五味雜陳。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 0,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_假釋",
    "title": "假釋",
    "description": "你在獄中表現良好，獲准假釋、提早出獄。",
    "type": "life",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_獄中度日",
    "title": "獄中度日",
    "description": "鐵窗裡的日子一天天過去，度日如年。",
    "type": "life",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_未成年懷孕",
    "title": "未成年懷孕",
    "description": "一次意外，你（的另一半）懷孕了…你才十幾歲。",
    "type": "childhood",
    "icon": "💍",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "生下來，早婚",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "沒有孩子",
        "risk": "medium",
        "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_遊民",
    "title": "遊民",
    "description": "沒工作、欠了債、走投無路，你流落街頭成了遊民。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 35,
    "minAge": 35,
    "maxAge": 85,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.constitution += -4;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -4,
      "happiness": -6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_街友翻身",
    "title": "街友翻身",
    "description": "社工向你伸出援手，要不要試著站起來？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 36,
    "minAge": 36,
    "maxAge": 80,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "接受幫助，重新開始",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.constitution += 2;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 2,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "已經無所謂了",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_啃老",
    "title": "啃老",
    "description": "家裡有錢，其實你不工作也餓不死…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 45,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "靠爸啃老爽過",
        "risk": "medium",
        "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "不想被說靠爸，去工作",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_敗家",
    "title": "敗家",
    "description": "你揮霍無度，名車名錶跑趴樣樣來。",
    "type": "life",
    "icon": "🚗",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 25,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_二代接班",
    "title": "二代接班",
    "description": "家族企業要你接班。",
    "type": "life",
    "icon": "🏢",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 50,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "接下家業當董仔",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "我想走自己的路",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_初戀",
    "title": "初戀",
    "description": "你遇到了心動的對象，要告白嗎？",
    "type": "childhood",
    "icon": "💍",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 15,
    "minAge": 15,
    "maxAge": 17,
    "probability": 0.6,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "鼓起勇氣告白",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "默默藏心裡",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_穩定交往",
    "title": "穩定交往",
    "description": "你在生活圈遇到對的人，自然在一起了。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 52,
    "probability": 0.32,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_交友軟體",
    "title": "交友軟體",
    "description": "你下載了交友軟體，right swipe 滑不停。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 23,
    "minAge": 23,
    "maxAge": 45,
    "probability": 0.16,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "認真找對象",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "只想約約看、及時行樂",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "母胎單身也不錯",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_相親",
    "title": "相親",
    "description": "長輩安排你去相親。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 65,
    "probability": 0.18,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "認真交往看看",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "婉拒",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_結婚",
    "title": "結婚",
    "description": "交往多年，該步入禮堂嗎？",
    "type": "life",
    "icon": "💍",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 65,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "結婚辦桌",
        "risk": "medium",
        "effectStr": "if (10 !== 0) s.lifeStats.happiness += 10;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 10,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "先不急，再等等",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_黃昏之戀",
    "title": "黃昏之戀",
    "description": "晚年寂寞，一個對你噓寒問暖、體貼入微的對象出現了，甚至提起了結婚——要把握這段黃昏之戀嗎？",
    "type": "life",
    "icon": "💍",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 55,
    "minAge": 55,
    "maxAge": 85,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "再婚！把握晚年幸福",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.constitution += 2;\nif (13 !== 0) s.lifeStats.happiness += 13;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 2,
          "happiness": 13,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "這年紀了，還是算了",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_外遇",
    "title": "外遇",
    "description": "公司來了個聊得來的同事，曖昧火苗竄起…",
    "type": "life",
    "icon": "👤",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 70,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "守住底線",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "越線了",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-12 !== 0) s.lifeStats.happiness += -12;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -12,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_生小孩",
    "title": "生小孩",
    "description": "要不要生小孩？養一個到大學可要千萬欸。",
    "type": "life",
    "icon": "🎓",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 27,
    "minAge": 27,
    "maxAge": 44,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "生！住月子中心",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.constitution += -3;\nif (10 !== 0) s.lifeStats.happiness += 10;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -3,
          "happiness": 10,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "當快樂頂客族",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_二寶",
    "title": "二寶",
    "description": "你們拚了二寶，家裡更熱鬧（也更燒錢）。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 29,
    "minAge": 29,
    "maxAge": 44,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -2,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_教養",
    "title": "教養",
    "description": "孩子的教育要怎麼投資？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 33,
    "minAge": 33,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "補習私校全力栽培",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "讓孩子快樂長大",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "放養自己顧",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 1,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_子女孝順",
    "title": "子女孝順",
    "description": "你有出息的孩子事業有成，固定孝敬你一筆錢、逢年過節紅包不手軟。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 52,
    "minAge": 52,
    "maxAge": 92,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_子女光宗耀祖",
    "title": "子女光宗耀祖",
    "description": "你的孩子出人頭地、還上了新聞版面，你臉上有光、親友稱羨。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 50,
    "minAge": 50,
    "maxAge": 90,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_子女成家",
    "title": "子女成家",
    "description": "孩子結婚成家、生了小孩，你榮升阿公／阿嬤，喜宴紅包包好包滿。",
    "type": "life",
    "icon": "💍",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 52,
    "minAge": 52,
    "maxAge": 90,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (9 !== 0) s.lifeStats.happiness += 9;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 9,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_子女闖禍",
    "title": "子女闖禍",
    "description": "你那不成材的孩子在外闖禍（打人／酒駕／詐欺），對方找上門要你善後…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 38,
    "minAge": 38,
    "maxAge": 85,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "花錢消災、幫他擦屁股",
        "risk": "medium",
        "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "這次讓他自己扛",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": -6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_子女欠債",
    "title": "子女欠債",
    "description": "孩子在外欠了一屁股債（賭債／卡債／地下錢莊），債主堵到你家門口。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 38,
    "minAge": 38,
    "maxAge": 85,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_子女上社會版",
    "title": "子女上社會版",
    "description": "你的孩子涉毒／傷害／詐騙上了社會新聞，你在鄰里間抬不起頭。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 40,
    "minAge": 40,
    "maxAge": 88,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.appearance += -3;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
    "guiVals": {
      "appearance": -3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_啃老不走",
    "title": "啃老不走",
    "description": "成年的孩子還賴在家啃老，你只能一路養下去。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 38,
    "minAge": 38,
    "maxAge": 85,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_浪子回頭_子",
    "title": "浪子回頭_子",
    "description": "你那不成材的孩子突然說想改過、要你再幫他一把…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 45,
    "minAge": 45,
    "maxAge": 85,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "再信他一次，出錢幫他",
        "risk": "medium",
        "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "不再被情緒勒索",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_街頭衝突",
    "title": "街頭衝突",
    "description": "你在路上跟人起了衝突，對方氣勢洶洶…",
    "type": "childhood",
    "icon": "🦢",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_意外撿到錢包",
    "title": "意外撿到錢包",
    "description": "你在路上撿到一個裝滿現金的錢包…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 12,
    "minAge": 12,
    "maxAge": 17,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_存股",
    "title": "存股",
    "description": "閒錢怎麼放？隔壁老王都買抬雞店。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 25,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "存 0050／抬雞店",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "放定存",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_加密貨幣",
    "title": "加密貨幣",
    "description": "朋友狂推幣圈，狗狗幣要上月球 🚀",
    "type": "life",
    "icon": "₿",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 50,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "梭哈迷因幣",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "這是龐氏騙局",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_詐騙",
    "title": "詐騙",
    "description": "電話那頭：『我是檢察官，你的帳戶涉及洗錢…』",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 72,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "照指示操作",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "直接掛掉打165",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_分紅配股",
    "title": "分紅配股",
    "description": "公司發放員工分紅配股，你的持股又厚了一筆（沒賣就是長期資產）。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_卡債風暴",
    "title": "卡債風暴",
    "description": "你迷上刷卡、分期、辦現金卡，帳單像雪球越滾越大…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 40,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "辦債務協商、認真還",
        "risk": "medium",
        "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "以卡養卡繼續撐",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": -8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_三高上門",
    "title": "三高上門",
    "description": "健檢報告一片紅字：三高、脂肪肝找上門，醫生要你少吃多動…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 45,
    "minAge": 45,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "認真戒口、規律運動",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.constitution += 4;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 4,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "人生苦短，照吃照喝",
        "risk": "medium",
        "effectStr": "if (-5 !== 0) s.lifeStats.constitution += -5;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -5,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_買車",
    "title": "買車",
    "description": "",
    "type": "life",
    "icon": "🚗",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_carLoan",
    "title": "沉重車貸生活壓力",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "life",
    "icon": "🚗",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 22,
    "maxAge": 65,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_樂透",
    "title": "樂透",
    "description": "你順手買了張大樂透／刮刮樂。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 82,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (15 !== 0) s.lifeStats.happiness += 15;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 15,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_拜拜",
    "title": "拜拜",
    "description": "逢年過節你到廟裡拜拜、點光明燈、安太歲。",
    "type": "childhood",
    "icon": "🛕",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.16,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_擲筊",
    "title": "擲筊",
    "description": "人生迷惘，你到廟裡擲筊請示神明。",
    "type": "life",
    "icon": "🛕",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 90,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "求神明指點",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "我信我自己",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_本命年",
    "title": "本命年",
    "description": "",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 84,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "乖乖安太歲、點光明燈",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "鐵齒，不信這套",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_犯太歲",
    "title": "犯太歲",
    "description": "今年犯太歲，水逆到爆——諸事不順、破財又傷身。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 88,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_改運",
    "title": "改運",
    "description": "最近諸事不順，要花錢改運嗎？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "做法事買開運物",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "靠自己努力",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 1,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_自我進修",
    "title": "自我進修",
    "description": "工作之餘想投資自己，你打算…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_運動習慣",
    "title": "運動習慣",
    "description": "你養成規律運動的習慣，體態與精神都變好了。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (3 !== 0) s.lifeStats.constitution += 3;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 1,
      "intelligence": 0,
      "constitution": 3,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_玄學開運",
    "title": "玄學開運",
    "description": "你迷上塔羅／紫微／宮廟開運，心靈找到寄託。",
    "type": "childhood",
    "icon": "🛕",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.11,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_科技玄學",
    "title": "科技玄學",
    "description": "寫程式遇到玄學 bug，你拜了乖乖、改了風水位，竟然就好了——工程師的浪漫。",
    "type": "life",
    "icon": "🤖",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 75,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_才藝萌芽",
    "title": "才藝萌芽",
    "description": "你培養起一項才藝（樂器／攝影／手作），美感與品味提升。",
    "type": "childhood",
    "icon": "🎒",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 12,
    "minAge": 12,
    "maxAge": 17,
    "probability": 0.09,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_突然開竅",
    "title": "突然開竅",
    "description": "某件事讓你茅塞頓開，整個人升級了。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 10,
    "minAge": 10,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_心境成熟",
    "title": "心境成熟",
    "description": "歷經一些事，你的心境更成熟穩重，待人接物更從容。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 88,
    "probability": 0.09,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_讀書會",
    "title": "讀書會",
    "description": "你加入讀書會／社群，跟一群人一起精進，收穫滿滿。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 78,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_貴人相助",
    "title": "貴人相助",
    "description": "人生路上遇到貴人指點提攜，你受益良多。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 80,
    "probability": 0.07,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_珍奶",
    "title": "珍奶",
    "description": "珍奶配雞排，台灣人的續命水。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 12,
    "minAge": 12,
    "maxAge": 17,
    "probability": 0.16,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_颱風假",
    "title": "颱風假",
    "description": "放颱風假！在家耍廢追劇最爽。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 6,
    "minAge": 6,
    "maxAge": 17,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_停電",
    "title": "停電",
    "description": "全台大停電，你在黑暗中懷疑人生。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 17,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_選舉",
    "title": "選舉",
    "description": "選舉到了，你為了挺「民國黨」還是「民主黨」跟人吵翻，Line 群組退三個。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 26,
    "maxAge": 85,
    "probability": 0.09,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_疫情",
    "title": "疫情",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_追星",
    "title": "追星",
    "description": "你搶演唱會門票、應援買周邊，快樂但破財。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_健身",
    "title": "健身",
    "description": "你辦了健身房會員，練出好身材（雖然常沒去）。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 66,
    "probability": 0.14,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (4 !== 0) s.lifeStats.constitution += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 4,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_旅遊",
    "title": "旅遊",
    "description": "你安排了一趟旅行，出國走走充電。",
    "type": "life",
    "icon": "✈️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 78,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_發票中獎",
    "title": "發票中獎",
    "description": "對統一發票，居然中了！",
    "type": "life",
    "icon": "👤",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 88,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_寵物",
    "title": "寵物",
    "description": "你養了一隻貓／狗，牠成了你的家人。",
    "type": "childhood",
    "icon": "🐶",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_車禍",
    "title": "車禍",
    "description": "騎機車出車禍，還好保住一命。",
    "type": "life",
    "icon": "🚗",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 82,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-10 !== 0) s.lifeStats.constitution += -10;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -10,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_生病",
    "title": "生病",
    "description": "健康亮紅燈，你進醫院檢查治療。",
    "type": "life",
    "icon": "🏥",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 35,
    "minAge": 35,
    "maxAge": 95,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-5 !== 0) s.lifeStats.constitution += -5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -5,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_養生",
    "title": "養生",
    "description": "你痛定思痛規律作息、早睡早起，身體回穩。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 95,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (9 !== 0) s.lifeStats.constitution += 9;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 9,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_憂鬱",
    "title": "憂鬱",
    "description": "生活壓力讓你陷入低潮，笑不出來。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -2,
      "happiness": -6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_貴人",
    "title": "貴人",
    "description": "你遇到人生貴人，出現轉機。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_選里長",
    "title": "選里長",
    "description": "街坊鄰居拱你出來選里長，服務鄉里、也是踏入政壇的第一步…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "參選里長，紮根地方",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "當個安分的老百姓",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_從政",
    "title": "從政",
    "description": "",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 56,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "投身政治，從助理做起",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "政治太黑暗",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_參選市議員",
    "title": "參選市議員",
    "description": "基層歷練夠了，要投入市議員選戰嗎？（要選得上才算數）",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 29,
    "minAge": 29,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "參選市議員",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (9 !== 0) s.lifeStats.happiness += 9;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 9,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "再蹲基層",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_參選立委",
    "title": "參選立委",
    "description": "你想更上一層樓，參選立法委員嗎？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 34,
    "minAge": 34,
    "maxAge": 64,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "投入立委選戰",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (11 !== 0) s.lifeStats.happiness += 11;\nreturn {  };",
        "guiVals": {
          "appearance": 4,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 11,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "守住市議員",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_選總統",
    "title": "選總統",
    "description": "你已是資深立委，黨內徵召你參選總統！",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 48,
    "minAge": 48,
    "maxAge": 75,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "角逐大位！",
        "risk": "medium",
        "effectStr": "if (6 !== 0) s.lifeStats.appearance += 6;\nif (16 !== 0) s.lifeStats.happiness += 16;\nreturn {  };",
        "guiVals": {
          "appearance": 6,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 16,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "當立委就好",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_總統連任",
    "title": "總統連任",
    "description": "四年任期將屆，你要競選連任、拚第二任期嗎？（憲法規定總統最多連任一次）",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 48,
    "minAge": 48,
    "maxAge": 86,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "投入連任選戰",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (10 !== 0) s.lifeStats.happiness += 10;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 10,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "做滿一任、光榮交棒",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_選高雄市長",
    "title": "選高雄市長",
    "description": "南方吹起一股旋風，黨內徵召你投入高雄市長選戰！",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 40,
    "minAge": 40,
    "maxAge": 64,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "參選高雄市長！",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
        "guiVals": {
          "appearance": 4,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 12,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "守住立院崗位",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_bigFortune",
    "title": "就職演說喊出發大財",
    "description": "上任演說，鎂光燈全打在你身上。你張開雙手，要不要對著滿場市民大喊那句招牌口號？",
    "type": "life",
    "icon": "📰",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 26,
    "maxAge": 75,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "高聲大喊「高雄發大財！」",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "務實談政策、不喊口號",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_recallVote",
    "title": "空頭支票引發罷免連署",
    "description": "「發大財」喊了兩年還是沒發財，市民從狂熱轉為失望，覺得被空頭支票唬弄，罷免連署遍地開花。",
    "type": "life",
    "icon": "📰",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 26,
    "maxAge": 75,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-6 !== 0) s.lifeStats.appearance += -6;\nif (-12 !== 0) s.lifeStats.happiness += -12;\nreturn {  };",
    "guiVals": {
      "appearance": -6,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -12,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_跑攤",
    "title": "跑攤",
    "description": "婚喪喜慶、廟會剪綵、里民烤肉，你一天跑十攤、乾杯到胃翻——民代的日常。",
    "type": "life",
    "icon": "🛕",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 78,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.constitution += -4;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -4,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_選民服務",
    "title": "選民服務",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 82,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 1,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_賄選買票",
    "title": "賄選買票",
    "description": "選情膠著，樁腳建議「走路工」買票固樁，一票八百…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 29,
    "minAge": 29,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "買！有錢能使鬼推磨",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "堅持乾淨選舉",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_briberyBust",
    "title": "查賄風暴起訴當選無效",
    "description": "檢調查賄選！走路工名冊被起底，你被依《選罷法》起訴，恐當選無效…",
    "type": "life",
    "icon": "📰",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "花錢請律師、切割樁腳",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "認了，退出政壇",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_質詢爆紅",
    "title": "質詢爆紅",
    "description": "你一段犀利質詢／金句被剪成短影音瘋傳，聲量暴衝，全國都認得你。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 72,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (6 !== 0) s.lifeStats.appearance += 6;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 6,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_政治緋聞",
    "title": "政治緋聞",
    "description": "週刊爆你的緋聞／私德爭議，鏡頭堵麥、輿論炎上…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 32,
    "minAge": 32,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "開記者會鞠躬道歉",
        "risk": "medium",
        "effectStr": "if (-4 !== 0) s.lifeStats.appearance += -4;\nif (-5 !== 0) s.lifeStats.happiness += -5;\nreturn {  };",
        "guiVals": {
          "appearance": -4,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "提告、硬拗到底",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_死亡之握",
    "title": "死亡之握",
    "description": "黨內大場合，總統親切地走來與你握手、合影，鎂光燈閃個不停——但這可是傳說中會帶衰的「死亡之握」…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 78,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
    "guiVals": {
      "appearance": -2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_shakeCurse",
    "title": "爭議纏身民調直落",
    "description": "「死亡之握」的衰運發酵：你莫名捲入一樁爭議、金流又離奇失利，媒體窮追猛打、民調直落。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 0,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.appearance += -3;\nif (-5 !== 0) s.lifeStats.happiness += -5;\nreturn {  };",
    "guiVals": {
      "appearance": -3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_立院打架",
    "title": "立院打架",
    "description": "審查爭議法案，朝野在議場推擠、潑水、丟豬內臟，眼看就要上演全武行…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 34,
    "minAge": 34,
    "maxAge": 75,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "衝上主席台卡位肉搏",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (-7 !== 0) s.lifeStats.constitution += -7;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": 1,
          "intelligence": 0,
          "constitution": -7,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "退到後排、假裝滑手機",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_幣圈梭哈",
    "title": "幣圈梭哈",
    "description": "",
    "type": "life",
    "icon": "₿",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 50,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "歐印梭哈！賭一把翻身",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (14 !== 0) s.lifeStats.happiness += 14;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 14,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "只玩閒錢、定期定額",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "這是龐氏騙局，不碰",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_合約爆倉",
    "title": "合約爆倉",
    "description": "你學會開合約、拉槓桿，一根插針就能爆倉，也可能一夜致富…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 52,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "開百倍槓桿賭方向",
        "risk": "medium",
        "effectStr": "if (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "只做現貨，不碰合約",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_出道",
    "title": "出道",
    "description": "你的才藝出眾／外型亮眼，星探當街發掘了你，要不要進演藝圈？",
    "type": "childhood",
    "icon": "🎒",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "簽約出道！",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "還是過普通生活",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_星途",
    "title": "星途",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 17,
    "minAge": 17,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (7 !== 0) s.lifeStats.happiness += 7;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 7,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_啦啦隊選拔",
    "title": "啦啦隊選拔",
    "description": "職棒／職籃球團公開徵選啦啦隊，你的外型與律動被星探相中…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 30,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "加入職業啦啦隊！",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "還是算了",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_應援之路",
    "title": "應援之路",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 37,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (7 !== 0) s.lifeStats.happiness += 7;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 7,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_應援爆紅",
    "title": "應援爆紅",
    "description": "你的應援舞蹈被球迷剪成短影音瘋傳，一夜之間成為全網焦點，還登上運動版頭條。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 42,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (6 !== 0) s.lifeStats.appearance += 6;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 6,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_球場開球",
    "title": "球場開球",
    "description": "你受邀在滿場球迷前開球、擔任應援主持，全場為你歡呼。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 42,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_代言接不完",
    "title": "代言接不完",
    "description": "人氣高漲，運動品牌、手搖飲、遊戲代言接到手軟。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 42,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_私生飯騷擾",
    "title": "私生飯騷擾",
    "description": "你遇上私生飯跟蹤、偷拍、堵門，隱私與人身安全亮紅燈…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 42,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "報警＋請保鑣",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "忍氣吞聲繼續跑通告",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -2,
          "happiness": -6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_酸民出征",
    "title": "酸民出征",
    "description": "一張被惡意合成的圖在論壇瘋傳，酸民出征你的社群，留言不堪入目。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 42,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_轉戰演藝",
    "title": "轉戰演藝",
    "description": "人氣正旺，經紀公司邀你跨足演藝圈、出唱片拍戲…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 40,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "轉戰演藝圈",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "守住應援台",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_啦啦隊退役",
    "title": "啦啦隊退役",
    "description": "",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 34,
    "minAge": 34,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_應援C位之爭",
    "title": "應援C位之爭",
    "description": "隊上要重新排位，人人都想搶下鏡頭最多的『C位』（中央主咖），競爭白熱化…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 19,
    "minAge": 19,
    "maxAge": 38,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "卯足全力拚C位",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "與隊友和睦、不爭",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_應援紅到日本",
    "title": "應援紅到日本",
    "description": "你的應援畫面被日本／韓國媒體轉載，一夕爆紅海外，接到跨海代言與見面會邀約，收入翻倍。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 39,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.appearance += 5;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
    "guiVals": {
      "appearance": 5,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_球員戀情",
    "title": "球員戀情",
    "description": "你和球隊當家球星／球員互有好感，戀情呼之欲出——但球團有『禁愛令』、粉絲也盯著…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 40,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "公開戀情、勇敢愛",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "地下情、偷偷來",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_cheerScandal",
    "title": "啦啦隊地下戀情曝光",
    "description": "狗仔跟拍多時，你和球員的地下戀情登上頭條，球團震怒、粉絲炎上，你被推上風口浪尖。",
    "type": "childhood",
    "icon": "🐶",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 0,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.appearance += -4;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
    "guiVals": {
      "appearance": -4,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_舞蹈傷害",
    "title": "舞蹈傷害",
    "description": "長年高強度應援舞蹈，你的膝蓋／腰椎亮起紅燈，痛到彎不下腰…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 42,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "就醫復健、調整強度",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "打止痛硬撐、怕被換掉",
        "risk": "medium",
        "effectStr": "if (-6 !== 0) s.lifeStats.constitution += -6;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -6,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_新人輩出",
    "title": "新人輩出",
    "description": "一批批青春逼人的新人加入應援團，鏡頭與人氣漸漸被分走，你感受到現實的年齡焦慮。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 41,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.appearance += -1;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": -1,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_職棒選秀",
    "title": "職棒選秀",
    "description": "你棒球打得好，職棒球團在選秀會上相中你…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 26,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "投入職棒、簽約當新秀！",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.constitution += 3;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 3,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "還是找份穩定工作",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_球季拚戰",
    "title": "球季拚戰",
    "description": "球季開打，你日夜苦練打擊與守備、拚出賽機會與成績。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 40,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.constitution += 2;\nif (7 !== 0) s.lifeStats.happiness += 7;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 2,
      "happiness": 7,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_開轟英雄",
    "title": "開轟英雄",
    "description": "你在關鍵戰役轟出再見全壘打，全場暴動、登上運動頭條，成了球迷心中的英雄。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 40,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.appearance += 5;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
    "guiVals": {
      "appearance": 5,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_旅外挑戰",
    "title": "旅外挑戰",
    "description": "大聯盟／日職球探開出高薪合約，邀你旅外挑戰更高殿堂…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 34,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "旅外挑戰大聯盟！",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
        "guiVals": {
          "appearance": 4,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 12,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "根留台灣、當本土看板",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_運動傷害",
    "title": "運動傷害",
    "description": "你的肩膀／膝蓋舊傷復發，痛到握不住球棒，醫生說要開刀…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 42,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "開刀＋長期復健拚回歸",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.constitution += -3;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -3,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "帶傷硬撐上場",
        "risk": "medium",
        "effectStr": "if (-8 !== 0) s.lifeStats.constitution += -8;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -8,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_假球案",
    "title": "假球案",
    "description": "組頭上門，捧著大把鈔票要你「配合」打放水球、簽賭做球…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "收錢放水、配合做球",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "嚴詞拒絕、潔身自愛",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_ballBust",
    "title": "職棒假球案永久禁賽",
    "description": "職棒假球案爆發，檢調大動作偵辦，你的名字登上頭條、球迷心碎，你遭聯盟永久禁賽、聲名狼藉。",
    "type": "life",
    "icon": "📰",
    "sentiment": "critical",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-6 !== 0) s.lifeStats.appearance += -6;\nif (-12 !== 0) s.lifeStats.happiness += -12;\nreturn {  };",
    "guiVals": {
      "appearance": -6,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -12,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_球員引退",
    "title": "球員引退",
    "description": "體能與傷勢提醒你，職棒選手的黃金歲月已近尾聲…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 34,
    "minAge": 34,
    "maxAge": 44,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "引退轉任教練／球評",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "退休開運動用品店",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_禁藥風波",
    "title": "禁藥風波",
    "description": "為了拚成績、拚旅外身價，有人慫恿你使用「外部物質」增強表現，但藥檢隨時會抽…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 19,
    "minAge": 19,
    "maxAge": 40,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "鋌而走險、偷偷用",
        "risk": "medium",
        "effectStr": "if (-6 !== 0) s.lifeStats.appearance += -6;\nif (2 !== 0) s.lifeStats.constitution += 2;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
        "guiVals": {
          "appearance": -6,
          "intelligence": 0,
          "constitution": 2,
          "happiness": -8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "堅持乾淨、靠苦練",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (1 !== 0) s.lifeStats.constitution += 1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 1,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_牛肉麵大聯盟",
    "title": "牛肉麵大聯盟",
    "description": "離開職棒後你開了間牛肉麵店，卻始終沒放下手套、私下苦練不輟。某天海外球探竟遞來一張大聯盟測試合約…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 46,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "重拾手套、拚一次大聯盟！",
        "risk": "medium",
        "effectStr": "if (5 !== 0) s.lifeStats.appearance += 5;\nif (2 !== 0) s.lifeStats.constitution += 2;\nif (15 !== 0) s.lifeStats.happiness += 15;\nreturn {  };",
        "guiVals": {
          "appearance": 5,
          "intelligence": 0,
          "constitution": 2,
          "happiness": 15,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "人生已翻頁，專心賣麵",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_電競選拔",
    "title": "電競選拔",
    "description": "你在網咖／線上排位打到頂尖，職業電競戰隊找你試訓…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "加入電競戰隊當選手！",
        "risk": "medium",
        "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "打電動能當飯吃?還是算了",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_電競賽季",
    "title": "電競賽季",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (7 !== 0) s.lifeStats.happiness += 7;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 7,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_電競世界大賽",
    "title": "電競世界大賽",
    "description": "你率隊征戰世界大賽，全國熬夜看直播為你加油…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 17,
    "minAge": 17,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.appearance += 5;\nif (14 !== 0) s.lifeStats.happiness += 14;\nreturn {  };",
    "guiVals": {
      "appearance": 5,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 14,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_直播斗內",
    "title": "直播斗內",
    "description": "你經營實況台，粉絲抖內、訂閱、業配接不完，收入比賽獎金還多。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_加盟GYB",
    "title": "加盟GYB",
    "description": "人氣爆棚的「GYB 戰隊」找你加盟——老闆是位以言行犀利、開實況台聞名的知名遊戲實況主，粉絲整天在彈幕洗『GYB 讚！』…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "加盟 GYB！一起喊『GYB 讚！』",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "婉拒，怕淪為網紅戰隊",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_GYB老闆開台",
    "title": "GYB老闆開台",
    "description": "戰隊老闆（那位言行犀利的知名實況主）又在直播開你玩笑、對其他戰隊下戰帖，彈幕瘋狂刷『GYB 讚！』，戰隊聲量再創新高。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_電競手傷",
    "title": "電競手傷",
    "description": "長年高強度訓練，你的手腕、頸椎出問題（滑鼠手／腕隧道），痛到握不住滑鼠…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "就醫復健、調整訓練量",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.constitution += -3;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -3,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "硬拚不休息",
        "risk": "medium",
        "effectStr": "if (-7 !== 0) s.lifeStats.constitution += -7;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -7,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_戰隊解散",
    "title": "戰隊解散",
    "description": "母隊資金鏈斷裂、贊助商撤資，戰隊無預警解散，你一夕失去舞台。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 17,
    "minAge": 17,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": -6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_電競引退",
    "title": "電競引退",
    "description": "電競選手是吃青春飯的行業，反應開始跟不上年輕人了…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 36,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "轉當教練／分析師",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "全職當遊戲實況主／YouTuber",
        "risk": "medium",
        "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_開實況台",
    "title": "開實況台",
    "description": "你架好麥克風和視訊鏡頭，想開個遊戲實況台試水溫——要全職拚拚看嗎？",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "開台！全職當遊戲實況主",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "當個下班娛樂就好",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_實況拚人氣",
    "title": "實況拚人氣",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (7 !== 0) s.lifeStats.happiness += 7;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 7,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_爐石戰Lo傑",
    "title": "爐石戰LO傑",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_LOL戰前職業",
    "title": "LOL戰前職業",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (7 !== 0) s.lifeStats.happiness += 7;\nreturn {  };",
    "guiVals": {
      "appearance": 4,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 7,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_實況抖內",
    "title": "實況抖內",
    "description": "直播台上粉絲抖內、火箭刷不停，還接了幾檔遊戲／飲料業配，收入相當可觀。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_實況炎上",
    "title": "實況炎上",
    "description": "你直播口嗨講錯話／玩梗過火，被截圖炎上、上了新聞，掉粉、贊助商暫停合作…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 64,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "開台鞠躬道歉、真誠面對",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "嘴硬反擊、越黑越紅",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_百萬同接",
    "title": "百萬同接",
    "description": "你的實況台締造「百萬同時觀看」紀錄，登上國際實況平台首頁，成為現象級大實況主。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 66,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.appearance += 5;\nif (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
    "guiVals": {
      "appearance": 5,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 12,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_入行保險",
    "title": "入行保險",
    "description": "親戚／學長姊揪你「進來一起做」，保險公司開出高獎金、時間自由的大餅…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 48,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "入行賣保險、拚業績",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "婉拒，怕做人情生意",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_人情保單",
    "title": "人情保單",
    "description": "月底業績還差一點，你盯上了親友的口袋——要不要「拜託」他們捧場買張保單？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "開口拜託親友捧場",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "靠專業陌生開發",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (-1 !== 0) s.lifeStats.constitution += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": -1,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_增員拉下線",
    "title": "增員拉下線",
    "description": "主管要你「增員」——拉人進來當下線，你的收入就多一份組織獎金。你開始到處找人「一起打拚」。",
    "type": "life",
    "icon": "💼",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 58,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_業績壓力",
    "title": "業績壓力",
    "description": "月底衝業績、早會喊口號、被主管盯 KPI，你壓力大到失眠、假日也在跑客戶。",
    "type": "life",
    "icon": "💼",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 58,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -2,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_MDRT",
    "title": "MDRT",
    "description": "你業績亮眼，達成國際百萬圓桌會員（MDRT），上台領獎、出國開會，成了公司的招牌 Top Sales。",
    "type": "life",
    "icon": "✈️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 4,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_入行房仲",
    "title": "入行房仲",
    "description": "房仲公司大舉徵才，主打「成交一間抵你半年薪水」，你心動了…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 48,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "入行當房仲、拚成交",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "婉拒，房市水太深",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_成交王",
    "title": "成交王",
    "description": "你談成一筆大案子，斡旋、議價、簽約一氣呵成，抱回一筆漂亮的成交獎金，登上店頭的業績紅榜！",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_帶看跑斷腿",
    "title": "帶看跑斷腿",
    "description": "你一天帶看八組客戶、發傳單洗街到深夜，結果全是只看不買的「奧客」，一毛佣金都沒進帳。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -2,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_凶宅糾紛",
    "title": "凶宅糾紛",
    "description": "你手上一間物件其實是凶宅，屋主要你「別主動提」，買方也還沒問…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "隱瞞不說、先成交再說",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.appearance += -3;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
        "guiVals": {
          "appearance": -3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "據實告知、誠信第一",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_柬埔寨高薪",
    "title": "柬埔寨高薪",
    "description": "你在網路看到「柬埔寨高薪徵才、免經驗、日領上萬、包吃包住」的廣告，對方熱情又急著要你馬上飛過去…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 35,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "衝了！飛去海外賺大錢",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "這一定是詐騙，不去",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_pigFarm",
    "title": "柬埔寨假求職詐騙陷阱",
    "description": "一下飛機護照就被沒收——你被賣進 KK 園區，被逼著坐在電腦前做詐騙，打罵、電擊樣樣來，想逃卻插翅難飛…",
    "type": "life",
    "icon": "💼",
    "sentiment": "critical",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "拚死翻牆逃跑、向外求救",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (-4 !== 0) s.lifeStats.constitution += -4;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": -4,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "配合做詐騙、等家人湊錢贖",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.constitution += -3;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -3,
          "happiness": -6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_當車手",
    "title": "當車手",
    "description": "有人找你當『車手』——負責到 ATM 提領被害人被騙的錢，抽成優渥、來錢超快…",
    "type": "life",
    "icon": "🚗",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 40,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "接了，反正來錢快",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.appearance += -3;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
        "guiVals": {
          "appearance": -3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "這是害人的錢，不碰",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_辦現金卡",
    "title": "辦現金卡",
    "description": "手頭緊、卡費快繳不出來，電視狂打「借錢免求人、現金卡馬上撥款」，你動了辦卡預借的念頭…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "辦現金卡、以卡養卡",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "再苦也不碰循環利息",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_debtSpiral",
    "title": "CHAIN_DEBTSPIRAL",
    "description": "循環利息利滾利，你以卡養卡、拆東牆補西牆，債務像雪球越滾越大，成了名副其實的『卡奴』。",
    "type": "childhood",
    "icon": "🏦",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 0,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": -6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_地下錢莊",
    "title": "地下錢莊",
    "description": "銀行不借了，走投無路的你看到「當日撥款、免聯徵」的小廣告——那是地下錢莊的高利貸…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "跟地下錢莊借錢",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "寧可破產也不碰高利貸",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_debtCollect",
    "title": "高利貸暴力討債逼迫",
    "description": "高利貸利滾利還不出來，討債集團找上門——潑漆、噴字、堵你家門、打電話恐嚇家人，日子過得膽戰心驚…",
    "type": "life",
    "icon": "⛓️",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "聲請破產／債務更生",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.appearance += -1;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": -1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "半夜捲鋪蓋跑路",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-5 !== 0) s.lifeStats.happiness += -5;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": -5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_衝刺IPO",
    "title": "衝刺IPO",
    "description": "公司經營有成，投資人與承銷商建議你衝刺 IPO 上市…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 35,
    "minAge": 35,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "拚上市，做大做強！",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "守成、穩健經營",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_國際巨星",
    "title": "國際巨星",
    "description": "你不只紅遍台灣，更進軍國際、代言接到手軟，站上華語天王／天后的位置。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
    "guiVals": {
      "appearance": 4,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 12,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_綜藝爆氣",
    "title": "綜藝爆氣",
    "description": "你上綜藝節目玩遊戲，卻一路慘輸，還被後輩藝人虧「哥／姊你不行喔～」，全場笑成一片…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "當場爆氣、摔道具走人",
        "risk": "medium",
        "effectStr": "if (-4 !== 0) s.lifeStats.appearance += -4;\nif (-5 !== 0) s.lifeStats.happiness += -5;\nreturn {  };",
        "guiVals": {
          "appearance": -4,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "自嘲帶過、笑著認輸",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_演出出包",
    "title": "演出出包",
    "description": "一場商演進行到一半，突發狀況打斷了你精心安排的橋段（音響凸槌、有觀眾上台起鬨），全場氣氛瞬間尷尬…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 45,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "敬業救場、隨機應變化解",
        "risk": "medium",
        "effectStr": "if (5 !== 0) s.lifeStats.appearance += 5;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 5,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "當場擺臉色、鬧脾氣",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_stageBacklash",
    "title": "CHAIN_STAGEBACKLASH",
    "description": "你擺臉色的影片瘋傳，網友批你耍大牌、不敬業，你發文回應卻越描越黑，主辦與品牌開始跟你切割…",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 0,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "誠懇道歉、扛下責任",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.appearance += -3;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": -3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "硬拗甩鍋、死不認錯",
        "risk": "medium",
        "effectStr": "if (-7 !== 0) s.lifeStats.appearance += -7;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
        "guiVals": {
          "appearance": -7,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_天使投資",
    "title": "天使投資",
    "description": "學弟的新創找你當天使投資人，估值便宜、但十有八九會歸零…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "重押一筆，賭它成獨角獸",
        "risk": "medium",
        "effectStr": "if (11 !== 0) s.lifeStats.happiness += 11;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 11,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "風險太高，婉拒",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_爆紅",
    "title": "爆紅",
    "description": "",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.appearance += 5;\nif (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
    "guiVals": {
      "appearance": 5,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 12,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_移民",
    "title": "移民",
    "description": "你有機會辦技術／投資移民，出國定居。",
    "type": "life",
    "icon": "✈️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 32,
    "minAge": 32,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "舉家移民海外",
        "risk": "medium",
        "effectStr": "if (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "還是台灣好",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_投身研究",
    "title": "投身研究",
    "description": "你在專業上嶄露頭角，有機會投入尖端學術研究、攻讀博士後鑽研學問——這條路清苦、收入打折，但能追求真理…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 52,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "投身研究、追求真理",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "還是選安穩、高薪的路",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_research",
    "title": "CHAIN_RESEARCH",
    "description": "研究卡關多年、經費吃緊、同儕紛紛轉行——你要繼續埋首下去嗎？",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_nobelNom",
    "title": "CHAIN_NOBELNOM",
    "description": "你的研究影響力持續發酵，國際間傳出你被列為諾貝爾獎候選人的消息。",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_nobelWin",
    "title": "CHAIN_NOBELWIN",
    "description": "諾貝爾獎揭曉的季節到了，全世界的目光聚焦在斯德哥爾摩…",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (16 !== 0) s.lifeStats.happiness += 16;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 16,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_得道",
    "title": "得道",
    "description": "修行多年，你感到與天地相通…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 50,
    "minAge": 50,
    "maxAge": 95,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "遁入空門潛心修行",
        "risk": "medium",
        "effectStr": "if (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 12,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "繼續入世生活",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_中年危機",
    "title": "中年危機",
    "description": "你迎來中年危機，買了台重機／換了個造型。",
    "type": "life",
    "icon": "🚗",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 44,
    "minAge": 44,
    "maxAge": 55,
    "probability": 0.22,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 1,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_遺產",
    "title": "遺產",
    "description": "長輩仙逝，你繼承了一筆遺產（也承擔了思念）。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 45,
    "minAge": 45,
    "maxAge": 65,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_含飴弄孫",
    "title": "含飴弄孫",
    "description": "你當上阿公／阿嬤，含飴弄孫其樂融融。",
    "type": "life",
    "icon": "🏖️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 55,
    "minAge": 55,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_退休",
    "title": "退休",
    "description": "到了退休年紀，你打算什麼時候放下工作？",
    "type": "life",
    "icon": "🏖️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 60,
    "minAge": 60,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_lateRetire",
    "title": "CHAIN_LATERETIRE",
    "description": "",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -2,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_交棒",
    "title": "交棒",
    "description": "",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 68,
    "minAge": 68,
    "maxAge": 80,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_銀髮運動",
    "title": "銀髮運動",
    "description": "你到公園打太極／跳土風舞，老得健康。",
    "type": "life",
    "icon": "👤",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 60,
    "minAge": 60,
    "maxAge": 92,
    "probability": 0.14,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.constitution += 3;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 3,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_回憶錄",
    "title": "回憶錄",
    "description": "你把一生的故事寫下來，回味這趟旅程。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 65,
    "minAge": 65,
    "maxAge": 95,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_開竅",
    "title": "開竅",
    "description": "你突然開竅／遇到啟蒙貴人，某項專長突飛猛進。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_sk_acad",
    "title": "SK_ACAD",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_sk_tech",
    "title": "SK_TECH",
    "description": "你接外包案／開發小 App，技術直接變現。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_sk_biz",
    "title": "SK_BIZ",
    "description": "你搞副業：擺攤、團購主、蝦皮賣家，賺了不少外快。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 66,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_sk_art",
    "title": "SK_ART",
    "description": "你上傳作品／街頭表演／參加比賽，開始小有名氣。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 13,
    "minAge": 13,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_sk_talk",
    "title": "SK_TALK",
    "description": "你口若懸河，當上業務冠軍／社區里長／活動主持人。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 72,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_sk_ath",
    "title": "SK_ATH",
    "description": "你體育超強，教練找你進校隊拚國手…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 13,
    "minAge": 13,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "拚職業／國手夢",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (6 !== 0) s.lifeStats.constitution += 6;\nif (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
        "guiVals": {
          "appearance": 4,
          "intelligence": 0,
          "constitution": 6,
          "happiness": 5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "運動當興趣就好",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.constitution += 4;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 4,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_sk_street",
    "title": "SK_STREET",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-5 !== 0) s.lifeStats.constitution += -5;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -5,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_sk_spirit",
    "title": "SK_SPIRIT",
    "description": "你替人算命、收驚、當宮廟志工，信眾絡繹不絕。",
    "type": "life",
    "icon": "🛕",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 88,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_收回扣",
    "title": "收回扣",
    "description": "有人捧著大筆好處上門——工程回扣、官商勾結，收不收？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 66,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "笑納，這是潛規則",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "兩袖清風，拒絕",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_分贓不均",
    "title": "分贓不均",
    "description": "分錢喬不攏，你得罪了自己人——有人心裡不爽了。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 32,
    "minAge": 32,
    "maxAge": 68,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_檢調調查",
    "title": "檢調調查",
    "description": "吹哨者檢舉！檢調搜索、約談，你被列為被告…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 33,
    "minAge": 33,
    "maxAge": 72,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "砸錢請律師團脫罪",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "認了，坦白從寬",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_收賄帳本",
    "title": "收賄帳本",
    "description": "晴天霹靂——你多年來把每一筆收賄金流都鉅細靡遺記在一份 Word 帳本裡（誰進貢多少、喬了哪些案子、幾號拿了幾百萬），如今這本『天字第一號』帳本竟被檢調搜出、還外流媒體，全國看得目瞪口呆。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 34,
    "minAge": 34,
    "maxAge": 80,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-5 !== 0) s.lifeStats.appearance += -5;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
    "guiVals": {
      "appearance": -5,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_ledgerVerdict",
    "title": "CHAIN_LEDGERVERDICT",
    "description": "『Word 帳本』白紙黑字、鐵證如山，檢方依貪污治罪條例起訴、求處重刑，你站上被告席…",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 0,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "認罪協商、退回不法所得",
        "risk": "medium",
        "effectStr": "if (-4 !== 0) s.lifeStats.appearance += -4;\nif (-10 !== 0) s.lifeStats.happiness += -10;\nreturn {  };",
        "guiVals": {
          "appearance": -4,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -10,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "死不認帳、律師團硬拚",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_總統保外就醫",
    "title": "總統保外就醫",
    "description": "獄中的你健康『每況愈下』——手不由自主地抖、走路也不太穩，醫療小組評估後，你獲准『保外就醫』步出高牆，輿論兩極、支持者夾道相迎。",
    "type": "life",
    "icon": "🐣",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -2,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_過勞憂鬱",
    "title": "過勞憂鬱",
    "description": "長期高壓爆肝，你開始失眠、提不起勁——像是憂鬱症找上門。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "就醫、諮商治療",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.constitution += 2;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 2,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "硬撐，別人不懂",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.constitution += -3;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -3,
          "happiness": -8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_學業壓力",
    "title": "學業壓力",
    "description": "升學壓力壓得你喘不過氣，你懷疑讀書的意義。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-5 !== 0) s.lifeStats.happiness += -5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -2,
      "happiness": -5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_父母重病",
    "title": "父母重病",
    "description": "父母突然罹患重病，龐大的醫藥費壓在你肩上…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "傾家蕩產也要救",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -2,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "力有未逮，保守治療",
        "risk": "medium",
        "effectStr": "if (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_小孩霸凌人",
    "title": "小孩霸凌人",
    "description": "學校通知：你的孩子在校霸凌同學，你被叫去道歉、賠償和解。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 34,
    "minAge": 34,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
    "guiVals": {
      "appearance": -2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_被出軌",
    "title": "被出軌",
    "description": "你發現另一半外遇、劈腿了…",
    "type": "life",
    "icon": "💍",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "離婚，好聚好散",
        "risk": "medium",
        "effectStr": "if (-10 !== 0) s.lifeStats.happiness += -10;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -10,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "為了孩子／家庭原諒",
        "risk": "medium",
        "effectStr": "if (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_卡債",
    "title": "卡債",
    "description": "你辦了太多信用卡、循環利息滾雪球，成了卡奴。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_官司",
    "title": "官司",
    "description": "你捲入一場官司，勞神又傷財。",
    "type": "life",
    "icon": "👤",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 65,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_天災",
    "title": "天災",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 17,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_中年發福",
    "title": "中年發福",
    "description": "中年代謝變慢，你身材走樣、大肚腩藏不住。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 35,
    "minAge": 35,
    "maxAge": 60,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-5 !== 0) s.lifeStats.appearance += -5;\nif (-1 !== 0) s.lifeStats.constitution += -1;\nreturn {  };",
    "guiVals": {
      "appearance": -5,
      "intelligence": 0,
      "constitution": -1,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_健忘",
    "title": "健忘",
    "description": "你開始丟三落四、記性大不如前。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 55,
    "minAge": 55,
    "maxAge": 95,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_職業病",
    "title": "職業病",
    "description": "長年勞損，你落下一身職業病（腰、肩、關節）。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 35,
    "minAge": 35,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.constitution += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -4,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_破相",
    "title": "破相",
    "description": "一場意外在你臉上／身上留下明顯疤痕。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 70,
    "probability": 0.04,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-8 !== 0) s.lifeStats.appearance += -8;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": -8,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_失戀",
    "title": "失戀",
    "description": "你被分手了，痛徹心扉。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-7 !== 0) s.lifeStats.happiness += -7;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -7,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_中風",
    "title": "中風",
    "description": "你中風／罹患重病，身體與腦力都大受影響，一身本事也生疏了。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 55,
    "minAge": 55,
    "maxAge": 95,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-8 !== 0) s.lifeStats.constitution += -8;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -8,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_房屋天災",
    "title": "房屋天災",
    "description": "地震／強颱來襲，你的房子受損嚴重，得花一大筆錢重建修繕。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 25,
    "maxAge": 85,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_海砂屋",
    "title": "海砂屋",
    "description": "晴天霹靂——你買到的竟是海砂屋／漏水屋，修到快哭。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 52,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-5 !== 0) s.lifeStats.happiness += -5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_惡鄰",
    "title": "惡鄰",
    "description": "你遇上惡鄰居／樓上漏水／頂樓加蓋糾紛，煩不勝煩。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 80,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_排隊之亂",
    "title": "排隊之亂",
    "description": "衛生紙之亂／蛋塔熱／排隊名店，你也跟風搶了一波。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_老鼠會",
    "title": "老鼠會",
    "description": "多年不見的同學突然很熱情，約你「聊聊機會」——是直銷／老鼠會…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "投錢衝一波",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "已讀不回",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_迷因股",
    "title": "迷因股",
    "description": "航海王、鋼鐵人、AI 概念股…網友喊到天上，你要追高嗎？",
    "type": "life",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "梭哈追高",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "不追這種盤",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_課金手遊",
    "title": "課金手遊",
    "description": "你沉迷手遊、課金抽卡，錢包再次陣亡。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.09,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_違停拖吊",
    "title": "違停拖吊",
    "description": "你違停被拖吊、吃了張罰單，一肚子火。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 70,
    "probability": 0.07,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_網路炎上",
    "title": "網路炎上",
    "description": "你一句話在網路上被出征、炎上，鍵盤大戰三天三夜。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_報復旅遊",
    "title": "報復旅遊",
    "description": "悶太久，你來一場報復性旅遊／露營，玩得很開心。",
    "type": "life",
    "icon": "✈️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_親戚借錢",
    "title": "親戚借錢",
    "description": "親戚知道你有錢，開口跟你借一大筆…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 25,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "借他（多半有去無回）",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "婉拒",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.appearance += -1;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": -1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_見義勇為",
    "title": "見義勇為",
    "description": "你目擊有人被搶／落水／倒地不起…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.07,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_職場剝削",
    "title": "職場剝削",
    "description": "慣老闆又凹你無償加班、還想 A 走你的功勞…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 23,
    "minAge": 23,
    "maxAge": 58,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_舊愛重逢",
    "title": "舊愛重逢",
    "description": "多年後，你和前任在同學會／街頭重逢，舊情湧上心頭…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 25,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_實境節目",
    "title": "實境節目",
    "description": "你被邀上綜藝／實境節目…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 48,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "上節目搏版面",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 4,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "婉拒，低調就好",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_入邪教",
    "title": "入邪教",
    "description": "人生低潮時，一個「心靈成長團體」向你招手，師父慈眉善目，要你「以供養消業障」…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 72,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_cult",
    "title": "CHAIN_CULT",
    "description": "教團越搞越誇張——師父要信眾「供養百萬名車」表孝心、宣稱自己能「發光分身」、還賣加持照片斂財，要你變賣家產證明信仰…",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "變賣家產、供養師父百萬名車",
        "risk": "medium",
        "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "如夢初醒、脫離教團",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_網路爆紅",
    "title": "網路爆紅",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 15,
    "minAge": 15,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.appearance += 5;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 5,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_綁架勒索",
    "title": "綁架勒索",
    "description": "你太有錢，家人遭綁架勒贖，你付了鉅款換人平安。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 25,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -2,
      "happiness": -8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_愛情詐騙",
    "title": "愛情詐騙",
    "description": "你在網路上談了場遠距戀愛，對方卻是感情詐騙集團…",
    "type": "life",
    "icon": "💍",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_天降橫禍",
    "title": "天降橫禍",
    "description": "禍從天降——被掉落物砸中／無妄之災，你倒了大楣。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.constitution += -4;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -4,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_意外之財",
    "title": "意外之財",
    "description": "你獲得一筆意外之財（尾牙頭獎／遺失物招領／股票分紅）。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_撿到寶",
    "title": "撿到寶",
    "description": "你在二手市集／老家閣樓翻到值錢的骨董寶物。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_買到假貨",
    "title": "買到假貨",
    "description": "你網購／買骨董收到假貨，錢打了水漂。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.07,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_見到偶像",
    "title": "見到偶像",
    "description": "你在街頭巧遇心儀的偶像／名人，還要到了簽名合照！",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 12,
    "minAge": 12,
    "maxAge": 17,
    "probability": 0.07,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_出櫃",
    "title": "出櫃",
    "description": "你認清並接納了真實的自己，向世界出櫃，活得更自在。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 45,
    "probability": 0.05,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_錦鯉發威",
    "title": "錦鯉發威",
    "description": "錦鯉體質發威，你又中了小獎／抽中好康，好運擋不住。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_大難不死",
    "title": "大難不死",
    "description": "一場致命意外，你竟毫髮無傷、大難不死——八字真的很硬。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 80,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.constitution += 3;\nif (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 3,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_神明託夢",
    "title": "神明託夢",
    "description": "神明入夢指點迷津，你依指示行事，趨吉避凶。",
    "type": "childhood",
    "icon": "🛕",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_星探搭訕",
    "title": "星探搭訕",
    "description": "憑著出眾外貌，你頻頻被搭訕、接業配、拍廣告。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 15,
    "minAge": 15,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_衰神附體",
    "title": "衰神附體",
    "description": "十元硬幣的詛咒發作，你這一年諸事不順、衰事連連。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -2,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_被霸凌",
    "title": "被霸凌",
    "description": "你在學校被同學霸凌、排擠…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 16,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_當霸凌者",
    "title": "當霸凌者",
    "description": "班上有個好欺負的同學，同儕慫恿你一起霸凌他…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 9,
    "minAge": 9,
    "maxAge": 16,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "跟著霸凌、耍威風",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "制止、保護弱者",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_暗戀",
    "title": "暗戀",
    "description": "你有了暗戀的對象，光是看到對方就小鹿亂撞。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 12,
    "minAge": 12,
    "maxAge": 17,
    "probability": 0.14,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_校園戀愛",
    "title": "校園戀愛",
    "description": "你在校園談起純純的戀愛，牽手、放學一起走。",
    "type": "childhood",
    "icon": "💍",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 15,
    "minAge": 15,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_作弊",
    "title": "作弊",
    "description": "重要考試你沒準備好，隔壁同學的答案卷就攤在那…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 13,
    "minAge": 13,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "鋌而走險作弊",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-5 !== 0) s.lifeStats.happiness += -5;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "憑實力，考多少算多少",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_社團比賽",
    "title": "社團比賽",
    "description": "你參加社團／校隊比賽，為校爭光。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 13,
    "minAge": 13,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_中二病",
    "title": "中二病",
    "description": "你進入中二叛逆期，覺得全世界都不懂你。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 12,
    "minAge": 12,
    "maxAge": 16,
    "probability": 0.09,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
    "guiVals": {
      "appearance": 1,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_網咖通宵",
    "title": "網咖通宵",
    "description": "你和同學跑網咖打電動通宵，隔天上課猛點頭。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 13,
    "minAge": 13,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_第一次打工",
    "title": "第一次打工",
    "description": "你第一次打工（超商／手搖／家教），嚐到賺錢的滋味。",
    "type": "life",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 19,
    "minAge": 18,
    "maxAge": 26,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 1,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_畢業旅行",
    "title": "畢業旅行",
    "description": "畢業旅行，你和同學留下難忘的青春回憶。",
    "type": "childhood",
    "icon": "🎓",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 15,
    "minAge": 15,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_資優生",
    "title": "資優生",
    "description": "你資質過人，老師建議你跳級／進資優班…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 9,
    "minAge": 9,
    "maxAge": 15,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "跳級／進資優班",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "和同齡人一起就好",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_心動告白",
    "title": "心動告白",
    "description": "你遇到心動的對象，要怎麼追？",
    "type": "childhood",
    "icon": "💍",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_辦公室戀情",
    "title": "辦公室戀情",
    "description": "你和同事日久生情，辦公室戀情悄悄萌芽。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 45,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_婆媳問題",
    "title": "婆媳問題",
    "description": "婆媳／親家關係緊張，夾在中間的你左右為難。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 65,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_銀髮戀",
    "title": "銀髮戀",
    "description": "黃昏之戀來敲門，你在晚年遇到相知相惜的伴。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 60,
    "minAge": 60,
    "maxAge": 88,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (7 !== 0) s.lifeStats.happiness += 7;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 7,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_出差外派",
    "title": "出差外派",
    "description": "你被外派出差（大陸／東南亞／歐美），見了世面也累個半死。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (-2 !== 0) s.lifeStats.constitution += -2;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": -2,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_公司倒閉",
    "title": "公司倒閉",
    "description": "公司周轉不靈倒閉，你被迫另謀出路，薪水縮水。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 58,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_接到大客戶",
    "title": "接到大客戶",
    "description": "你談成一筆大生意／接到大客戶，荷包滿滿。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 58,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_內線消息",
    "title": "內線消息",
    "description": "你聽到一個內線消息，據說某檔股票要飆…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 25,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "跟進重壓",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "內線交易犯法，不碰",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_缺錢借貸",
    "title": "缺錢借貸",
    "description": "你急需一筆錢週轉…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_長照",
    "title": "長照",
    "description": "你的身體每況愈下，需要人照顧、進出長照機構。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 62,
    "minAge": 62,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -2,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_圓夢",
    "title": "圓夢",
    "description": "趁還走得動，你完成了年輕時的夢想（環遊世界／學一項技藝）。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 55,
    "minAge": 55,
    "maxAge": 90,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (9 !== 0) s.lifeStats.happiness += 9;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 9,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_立遺囑",
    "title": "立遺囑",
    "description": "你立下遺囑、安排身後財產，了卻一樁心事。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 66,
    "minAge": 66,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_存股有成",
    "title": "存股有成",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 60,
    "minAge": 60,
    "maxAge": 78,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (9 !== 0) s.lifeStats.happiness += 9;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 9,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_退休詐騙",
    "title": "退休詐騙",
    "description": "有人熱情報你一個『保證月配 8%、穩賺不賠』的高利投資…",
    "type": "life",
    "icon": "🏖️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 60,
    "minAge": 60,
    "maxAge": 90,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "聽起來不錯，投一大筆",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "保證高報酬一定是詐騙",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_退休再就業",
    "title": "退休再就業",
    "description": "閒不下來的你去當保全／開小黃／顧孫，賺點零用也讓生活更充實。",
    "type": "life",
    "icon": "🏖️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 62,
    "minAge": 62,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_老宅都更",
    "title": "老宅都更",
    "description": "老家碰上都市更新／危老改建，你分回一戶嶄新電梯宅，身價默默增值。",
    "type": "life",
    "icon": "🏠",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 48,
    "minAge": 48,
    "maxAge": 85,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (7 !== 0) s.lifeStats.happiness += 7;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 7,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_預售屋",
    "title": "預售屋",
    "description": "建商推出便宜的預售屋，付訂金就能卡位、等蓋好增值——但也可能爛尾…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "下訂預售屋、賭增值",
        "risk": "medium",
        "effectStr": "if (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "不碰預售、太多糾紛",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_房客糾紛",
    "title": "房客糾紛",
    "description": "房客欠租不走／惡意破壞／半夜擾民，你這個包租公也不好當。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 85,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_房市風向",
    "title": "房市風向",
    "description": "",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 35,
    "minAge": 35,
    "maxAge": 80,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "逢高賣出一間、獲利落袋",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "房子越晚賣越值錢、長抱",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_loanshark",
    "title": "CHAIN_LOANSHARK",
    "description": "地下錢莊利滾利，堂口的兄弟找上門逼債，撂話再不還就見血…",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_loansharkCatch",
    "title": "CHAIN_LOANSHARKCATCH",
    "description": "躲債兩年，你還是被錢莊的人堵到，一頓毒打、斷手斷腳…",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-12 !== 0) s.lifeStats.constitution += -12;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -12,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_gangFavor",
    "title": "黑道大哥討人情差事",
    "description": "當年幫你擺平錢莊的大哥，如今要你「還這個人情」——幫他做件見不得光的事…",
    "type": "life",
    "icon": "⛓️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "義氣相挺、替他辦事",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "裝死、避不見面",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_gangRevenge",
    "title": "欠人情遭黑幫派人報復",
    "description": "你欠人情不還，大哥派人來給你點顏色瞧瞧。",
    "type": "life",
    "icon": "⛓️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-6 !== 0) s.lifeStats.constitution += -6;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -6,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_heroReward",
    "title": "CHAIN_HEROREWARD",
    "description": "多年前你捨身相救的那個人，如今飛黃騰達，特地回來重謝、還提攜你一把。",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_affairExposed",
    "title": "外遇鐵證曝光家庭風暴",
    "description": "紙終究包不住火——當年的外遇被另一半翻出鐵證…",
    "type": "life",
    "icon": "💍",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "下跪懺悔、努力挽回",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.appearance += -1;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": -1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "攤牌、乾脆離婚",
        "risk": "medium",
        "effectStr": "if (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_bullyKarma",
    "title": "CHAIN_BULLYKARMA",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_bizExpand",
    "title": "CHAIN_BIZEXPAND",
    "description": "你的公司站穩腳步，要不要大舉擴張、拚上市？",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "擴張、拚上市",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "穩健經營就好",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_bizPeak",
    "title": "CHAIN_BIZPEAK",
    "description": "公司成功上市／被高價併購，你搖身成為身價驚人的企業家。",
    "type": "childhood",
    "icon": "🏢",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (10 !== 0) s.lifeStats.happiness += 10;\nreturn {  };",
    "guiVals": {
      "appearance": 4,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 10,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_unicorn",
    "title": "CHAIN_UNICORN",
    "description": "你的公司一路壯大，成為市值驚人的護國神山／國際獨角獸——你的名字登上財經雜誌與富豪榜封面。",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.appearance += 5;\nif (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
    "guiVals": {
      "appearance": 5,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 12,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_empire",
    "title": "CHAIN_EMPIRE",
    "description": "你的商業帝國橫跨數十國、市值屢創新高，財富規模已是台灣頂尖——問鼎首富只是時間問題。",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (6 !== 0) s.lifeStats.appearance += 6;\nif (14 !== 0) s.lifeStats.happiness += 14;\nreturn {  };",
    "guiVals": {
      "appearance": 6,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 14,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_worldRichest",
    "title": "CHAIN_WORLDRICHEST",
    "description": "你的財富版圖橫掃全球，市值一路衝破天際——地表沒有人比你更有錢。",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (6 !== 0) s.lifeStats.appearance += 6;\nif (16 !== 0) s.lifeStats.happiness += 16;\nreturn {  };",
    "guiVals": {
      "appearance": 6,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 16,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_時代雜誌",
    "title": "時代雜誌",
    "description": "你的成就登上《時刻雜誌》年度風雲人物封面，成為全球矚目的焦點。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 88,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_金馬金曲",
    "title": "金馬金曲",
    "description": "你抱回了金馬／金曲／金鐘獎座，站上台灣演藝圈的最高殿堂。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 72,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (10 !== 0) s.lifeStats.happiness += 10;\nreturn {  };",
    "guiVals": {
      "appearance": 4,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 10,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_奧運摘金",
    "title": "奧運摘金",
    "description": "你披上國家隊戰袍，在奧運殿堂為台灣奪下一面金牌，全國為你歡騰。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 40,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.appearance += 5;\nif (2 !== 0) s.lifeStats.constitution += 2;\nif (14 !== 0) s.lifeStats.happiness += 14;\nreturn {  };",
    "guiVals": {
      "appearance": 5,
      "intelligence": 0,
      "constitution": 2,
      "happiness": 14,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_lovechild",
    "title": "私生子女找上門認親",
    "description": "一個年輕人找上門，自稱是你當年一夜情／舊情人留下的孩子——你的私生子女…",
    "type": "life",
    "icon": "🍼",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "認了，接納這個孩子",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "矢口否認、拒絕相認",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-5 !== 0) s.lifeStats.happiness += -5;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_斜槓創作者",
    "title": "斜槓創作者",
    "description": "下班後經營的頻道流量越來越好，粉絲喊你辭職當全職創作者…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 50,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "辭職 all in 當創作者！",
        "risk": "medium",
        "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "當興趣、繼續上班",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_創作爆紅",
    "title": "創作爆紅",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (7 !== 0) s.lifeStats.happiness += 7;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 7,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_百萬YTR",
    "title": "百萬YTR",
    "description": "",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
    "guiVals": {
      "appearance": 4,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 12,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_業配翻車",
    "title": "業配翻車",
    "description": "你接了「抬雞店飆股神器」的業配，結果產品出包、粉絲炎上出征。",
    "type": "life",
    "icon": "🚗",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": -2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_演算法",
    "title": "演算法",
    "description": "平台一改演算法，你的流量一夕腰斬，焦慮到失眠。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_聯名九妹",
    "title": "聯名九妹",
    "description": "你和知名 YouTuber「九妹」聯名開箱，流量互蹭大爆發。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_名人工商",
    "title": "名人工商",
    "description": "當紅的你接到大檔工商——和「九妹」「R滴」等百萬級 YouTuber 合拍業配影片，兩邊粉絲互蹭、觀看數狂飆，酬勞和導流一次到位。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 64,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_開箱翻車",
    "title": "開箱翻車",
    "description": "你跑去開箱另一位知名網紅開的餐廳，鏡頭前忍不住開始嫌東嫌西…",
    "type": "life",
    "icon": "🚗",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "照樣毒舌、口無遮攔開嗆",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.appearance += -3;\nif (-8 !== 0) s.lifeStats.constitution += -8;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
        "guiVals": {
          "appearance": -3,
          "intelligence": 0,
          "constitution": -8,
          "happiness": -6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "客氣稱讚、和氣生財",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_追星狂熱",
    "title": "追星狂熱",
    "description": "你瘋狂迷上一位偶像，砸錢應援、跑遍每場演唱會…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "衝！當第一排鐵粉",
        "risk": "medium",
        "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "理性追星、量力而為",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_metIdol",
    "title": "CHAIN_METIDOL",
    "description": "命運般地，你在私下場合認識了崇拜的那位名人，對方對你也有好感…",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "把握機會、展開追求",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 12,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "當個粉絲就好",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_celebWed",
    "title": "CHAIN_CELEBWED",
    "description": "你和名人步入禮堂，婚禮登上各大媒體版面，你成了「某某的另一半」。",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (14 !== 0) s.lifeStats.happiness += 14;\nreturn {  };",
    "guiVals": {
      "appearance": 4,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 14,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_異國戀",
    "title": "異國戀",
    "description": "你邂逅了一位外國人（日／韓／歐美／東南亞），情投意合，語言不通也擋不住…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 52,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "跨海追愛、步入異國婚姻",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 12,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "遠距離終究敗給現實",
        "risk": "medium",
        "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_嫁入豪門",
    "title": "嫁入豪門",
    "description": "一位家世顯赫的富商／富婆對你展開熱烈追求，開口就是名車名錶…",
    "type": "life",
    "icon": "🚗",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 46,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "傍上金主、嫁／娶進豪門",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "我要靠自己、婉拒",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_酒店應酬",
    "title": "酒店應酬",
    "description": "談生意的酒店飯局上，一位氣質出眾的酒店妹對你特別關照…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "包養她、金屋藏嬌",
        "risk": "medium",
        "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "公事公辦、保持分寸",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_keepEnd",
    "title": "CHAIN_KEEPEND",
    "description": "包養關係終究走到盡頭——對方捲款分手／被另一半抓包，你人財兩失。",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_青春期子女",
    "title": "青春期子女",
    "description": "你的孩子進入叛逆期，跟你頂嘴、關房門、沉迷手機…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 35,
    "minAge": 35,
    "maxAge": 58,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "放下身段、耐心陪伴溝通",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "高壓管教、我說了算",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "忙工作、無暇管教",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_陪伴親子",
    "title": "陪伴親子",
    "description": "你陪孩子露營、看棒球、逛夜市，留下珍貴的親子回憶。",
    "type": "life",
    "icon": "✈️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 56,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_子女婚禮",
    "title": "子女婚禮",
    "description": "你的孩子步入禮堂，你在婚禮上又哭又笑，包了個大紅包。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 50,
    "minAge": 50,
    "maxAge": 88,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (9 !== 0) s.lifeStats.happiness += 9;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 9,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_染上菸癮",
    "title": "染上菸癮",
    "description": "壓力大／朋友慫恿，你抽起了菸…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "抽吧，紓壓",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "拒絕、對身體好",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 1,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_戒菸",
    "title": "戒菸",
    "description": "咳嗽越來越嚴重，你動了戒菸的念頭…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 25,
    "maxAge": 72,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "下定決心戒菸",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.constitution += 3;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 3,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "戒不掉，隨它去",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_吃檳榔",
    "title": "吃檳榔",
    "description": "工地／開車提神，工友遞來一顆紅唇族的紅…",
    "type": "life",
    "icon": "🚗",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "嚼一顆提神",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "謝謝不用",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 1,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_檳榔病變",
    "title": "檳榔病變",
    "description": "長年吃檳榔，你的口腔出現病變，醫生要你立刻戒掉、定期追蹤。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 40,
    "minAge": 40,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-5 !== 0) s.lifeStats.constitution += -5;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -5,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_賭博成癮",
    "title": "賭博成癮",
    "description": "朋友揪你玩幾把——線上博弈、麻將、地下賭盤，越玩越大…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "梭了！賭一把翻身",
        "risk": "medium",
        "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "小賭怡情就收手",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_賭債",
    "title": "賭債",
    "description": "賭越大、輸越多，你欠下一屁股賭債…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_摩鐵意外",
    "title": "摩鐵意外",
    "description": "你開車不小心滑進汽車旅館車庫，出來時被熟人撞見，尷尬到腳趾摳地。",
    "type": "life",
    "icon": "🚗",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 55,
    "probability": 0.07,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.appearance += -1;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": -1,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_直播神壇",
    "title": "直播神壇",
    "description": "最近爆紅、爭議不斷的網路神壇「尬電宮」找上你——教主天天開直播、辦「無神進香」，信眾邊看直播邊瘋狂打賞…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "入教、直播打賞供養師父",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "看熱鬧就好、不掏錢",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_古蹟抽煙",
    "title": "古蹟抽煙",
    "description": "你在古蹟參訪時偷抽菸被逮，當場開罰、還上了地方新聞。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.appearance += -1;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": -1,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_缺蛋",
    "title": "缺蛋",
    "description": "全台大缺蛋，你排隊搶蛋搶到懷疑人生，一顆蛋比黃金還珍貴。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 17,
    "probability": 0.09,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_演唱會搶票",
    "title": "演唱會搶票",
    "description": "你為了搶演唱會門票，開了十台裝置狂刷，最後還是被黃牛掃光。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.09,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_手搖漲價",
    "title": "手搖漲價",
    "description": "愛喝的手搖飲又漲價了，你邊喝邊罵通膨。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 10,
    "minAge": 10,
    "maxAge": 17,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_直播打賞",
    "title": "直播打賞",
    "description": "你半夜看直播一時衝動狂刷禮物，隔天看帳單心在淌血。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.07,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_詐騙簡訊",
    "title": "詐騙簡訊",
    "description": "你收到「監理站違規通知」的詐騙簡訊，還好你機警沒點連結。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 82,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_停車格之亂",
    "title": "停車格之亂",
    "description": "你為了一個停車位跟鄰居大戰三百回合，社區群組吵翻天。",
    "type": "life",
    "icon": "🚗",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 72,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_AI搶飯碗",
    "title": "AI搶飯碗",
    "description": "職場導入 AI，同事人心惶惶怕被取代，你趕緊進修學 AI 工具。",
    "type": "life",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_抬雞店概念",
    "title": "抬雞店概念",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_酷澎剁手",
    "title": "酷澎剁手",
    "description": "你在「酷澎」與「蝦米購物」半夜下單，包裹堆成山、錢包扁一半。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 62,
    "probability": 0.07,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_人脈積累",
    "title": "人脈積累",
    "description": "你在職場與生活中結識新朋友，交換名片、互相幫襯，人脈悄悄擴展。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 72,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_貴人飯局",
    "title": "貴人飯局",
    "description": "人脈廣的你被引薦上一桌政商名流的飯局，談笑間機會自來。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 25,
    "maxAge": 66,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_攀附大佬",
    "title": "攀附大佬",
    "description": "透過人脈，你有機會攀上一位喊水會結凍的商界大佬／政壇大老…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 66,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "抱大腿、跟著喝湯",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "保持距離、明哲保身",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_patron",
    "title": "CHAIN_PATRON",
    "description": "你攀附的大佬捲入弊案，檢調順藤摸瓜查到你頭上…",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "切割撇清、當污點證人",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "義氣相挺、扛下來",
        "risk": "medium",
        "effectStr": "if (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_結識三口組",
    "title": "結識三口組",
    "description": "透過道上人脈，你搭上了日本黑幫「三口組」的線，對方邀你合作跨海生意…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "接下這條國際線",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "婉拒、太危險",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_yakuza",
    "title": "CHAIN_YAKUZA",
    "description": "跨海生意出了紕漏，三口組與台灣警方兩頭施壓，你嚇得魂不附體。",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_資優跳級",
    "title": "資優跳級",
    "description": "你天賦異稟，學校讓你跳級、進資優班，還上了新聞。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 15,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_科展國手",
    "title": "科展國手",
    "description": "你在國際科展／奧林匹亞為國爭光，抱回金牌。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 12,
    "minAge": 12,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_少年大學生",
    "title": "少年大學生",
    "description": "你以未成年之姿破格錄取頂尖大學，成為新聞上的「少年大學生」。",
    "type": "life",
    "icon": "🎓",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 19,
    "minAge": 18,
    "maxAge": 26,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_隱藏_富豪俱樂部",
    "title": "隱藏_富豪俱樂部",
    "description": "你的身價驚動了某神祕富豪俱樂部，燙金邀請函送上門，你自此躋身頂級人脈圈。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 82,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_隱藏_谷底翻身",
    "title": "隱藏_谷底翻身",
    "description": "曾經負債累累的你如今東山再起、資產翻紅，這段谷底翻身的故事被寫成勵志報導。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 35,
    "minAge": 35,
    "maxAge": 72,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_隱藏_人瑞專訪",
    "title": "隱藏_人瑞專訪",
    "description": "記者上門專訪你這位人瑞，你分享長壽祕訣，成了地方之光。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 90,
    "minAge": 90,
    "maxAge": 99,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_重陽敬老",
    "title": "重陽敬老",
    "description": "重陽節到了，區公所送來敬老禮金／人瑞金鎖片，里長還來合照。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 66,
    "minAge": 66,
    "maxAge": 100,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_晨運人瑞",
    "title": "晨運人瑞",
    "description": "你天天到公園甩手、外丹功、爬山，硬朗得讓年輕人自嘆不如。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 70,
    "minAge": 70,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.constitution += 2;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 2,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_老友凋零",
    "title": "老友凋零",
    "description": "又一位老朋友走了，你去參加告別式，感慨人生無常、白髮人送白髮人。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 72,
    "minAge": 72,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_含飴弄孫2",
    "title": "含飴弄孫2",
    "description": "兒孫繞膝、假日全家團圓，你含飴弄孫、笑得合不攏嘴。",
    "type": "life",
    "icon": "🏖️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 60,
    "minAge": 60,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_五代同堂",
    "title": "五代同堂",
    "description": "你活到見證五代同堂，家族開枝散葉、逢年過節坐滿好幾桌，成了地方美談。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 95,
    "minAge": 95,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (10 !== 0) s.lifeStats.happiness += 10;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 10,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_首長祝壽",
    "title": "首長祝壽",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 100,
    "minAge": 100,
    "maxAge": 100,
    "probability": 0.2,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_人瑞專訪2",
    "title": "人瑞專訪2",
    "description": "記者又上門了：『阿公／阿嬤，長壽祕訣是什麼？』你笑呵呵：『沒煩惱、呷菜、多走路。』",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 100,
    "minAge": 100,
    "maxAge": 100,
    "probability": 0.22,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_人瑞津貼",
    "title": "人瑞津貼",
    "description": "政府發放百歲人瑞敬老津貼，兒孫幫你把紅包收得妥妥當當。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 100,
    "minAge": 100,
    "maxAge": 100,
    "probability": 0.16,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_硬朗晚年",
    "title": "硬朗晚年",
    "description": "你精神矍鑠、耳聰目明，還能自己下棋、看報，講古給曾孫聽。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 100,
    "minAge": 100,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 1,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_老番顛",
    "title": "老番顛",
    "description": "你偶爾忘東忘西、認錯人，家人半哄半勸，你自己倒是樂得自在。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 96,
    "minAge": 96,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_破紀錄關注",
    "title": "破紀錄關注",
    "description": "你的年齡逼近台灣最高齡紀錄，人口學者與媒體爭相研究你的長壽基因。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 116,
    "minAge": 100,
    "maxAge": 100,
    "probability": 0.3,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_最高齡人瑞",
    "title": "最高齡人瑞",
    "description": "你成了全台最高齡的傳奇人瑞，連國際媒體都來朝聖，寫下台灣的長壽紀錄。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 120,
    "minAge": 100,
    "maxAge": 100,
    "probability": 0.4,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
    "guiVals": {
      "appearance": 4,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 12,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_遺產爭產",
    "title": "遺產爭產",
    "description": "年事已高，律師提醒你把遺產分配交代清楚，免得子女日後爭產鬧上法院…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 78,
    "minAge": 78,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "公平分配、白紙黑字寫清楚",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "不想面對，拖著再說",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_隱藏_孤獨終老",
    "title": "隱藏_孤獨終老",
    "description": "回首一生未婚無子，你活得自在瀟灑，也有幾分孤獨——你早已與自己和解。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 62,
    "minAge": 62,
    "maxAge": 82,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_定期健檢",
    "title": "定期健檢",
    "description": "健檢通知又來了，你要認真面對身體嗎？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 90,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "每年認真健檢、早期發現",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "沒空，拖著再說",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_規律運動養生",
    "title": "規律運動養生",
    "description": "你維持規律運動、早睡早起，身體越來越硬朗。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 95,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 1,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_健康飲食",
    "title": "健康飲食",
    "description": "中年後代謝變差，飲食習慣要不要調整？",
    "type": "life",
    "icon": "👤",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 92,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "少油少鹽少糖、多蔬果",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 1,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "人生就要吃好吃滿",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_中醫調理",
    "title": "中醫調理",
    "description": "你固定看中醫、針灸推拿、喝養生茶調理體質。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 92,
    "probability": 0.05,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_泡湯養生",
    "title": "泡湯養生",
    "description": "你去泡溫泉、做SPA放鬆，身心都舒暢。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 92,
    "probability": 0.05,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 1,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_打疫苗",
    "title": "打疫苗",
    "description": "你按時接種疫苗（流感／帶狀疱疹），少生了幾場病。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 6,
    "minAge": 6,
    "maxAge": 17,
    "probability": 0.04,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_急診驚魂",
    "title": "急診驚魂",
    "description": "你半夜掛急診，虛驚一場，但也提醒自己該顧身體了。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 90,
    "probability": 0.04,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_慢性病",
    "title": "慢性病",
    "description": "健檢查出三高／糖尿病等慢性病，醫生要你長期控制…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 42,
    "minAge": 42,
    "maxAge": 85,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "乖乖吃藥、控制飲食運動",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "不痛不癢、懶得理它",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_chronicHit",
    "title": "CHAIN_CHRONICHIT",
    "description": "長期放任慢性病，你併發了嚴重問題（中風／洗腎／心臟病），住進了醫院。",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-6 !== 0) s.lifeStats.constitution += -6;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -6,
      "happiness": -6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_重大傷病",
    "title": "重大傷病",
    "description": "就醫檢查發現了需要處理的病灶（早期腫瘤／心血管阻塞）…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 35,
    "minAge": 35,
    "maxAge": 88,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "積極治療、配合療程",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -2,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "逃避／信偏方，不想面對",
        "risk": "medium",
        "effectStr": "if (-5 !== 0) s.lifeStats.constitution += -5;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -5,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_老年跌倒",
    "title": "老年跌倒",
    "description": "你一個踉蹌跌倒、髖部劇痛——老人家最怕跌…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 68,
    "minAge": 68,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "立刻就醫、認真復健",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.constitution += -3;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -3,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "忍一忍、沒去看",
        "risk": "medium",
        "effectStr": "if (-6 !== 0) s.lifeStats.constitution += -6;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -6,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_養生退休",
    "title": "養生退休",
    "description": "退休後你規律作息、爬山健走、含飴弄孫，日子過得健康又愜意。",
    "type": "life",
    "icon": "🏖️",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 60,
    "minAge": 60,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 1,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_職場難題",
    "title": "職場難題",
    "description": "",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 63,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_臨時缺錢",
    "title": "臨時缺錢",
    "description": "你臨時需要一筆錢周轉，該怎麼生出來？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 72,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_一展長才",
    "title": "一展長才",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 66,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_感情升溫",
    "title": "感情升溫",
    "description": "你和另一半來場約會／小旅行，重溫熱戀的甜蜜。",
    "type": "life",
    "icon": "💍",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 92,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_夫妻吵架",
    "title": "夫妻吵架",
    "description": "你和另一半為了錢／小孩／家事大吵一架…",
    "type": "life",
    "icon": "💍",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 92,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "主動低頭、好好溝通",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
        "guiVals": {
          "appearance": 1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "據理力爭、互不相讓",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_貌合神離",
    "title": "貌合神離",
    "description": "婚姻早已貌合神離、同床異夢，你思考著這段關係的去留…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 82,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "好聚好散、協議離婚",
        "risk": "medium",
        "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "為了孩子／面子撐著",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_鑽石婚",
    "title": "鑽石婚",
    "description": "你和另一半攜手走過四十載，兒孫為你們慶祝鑽石婚，白頭偕老、羨煞旁人。",
    "type": "life",
    "icon": "💍",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 60,
    "minAge": 60,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 12,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_金融海嘯",
    "title": "金融海嘯",
    "description": "全球金融海嘯來襲，股市崩盤、公司裁員、資產一夕蒸發——那一年人心惶惶…",
    "type": "life",
    "icon": "📉",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 75,
    "probability": 0.11,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_世紀大地震",
    "title": "世紀大地震",
    "description": "天搖地動！一場規模驚人的大地震重創台灣，你家也受到影響…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_兩岸緊張",
    "title": "兩岸緊張",
    "description": "兩岸情勢驟然升溫、戰雲密布，全民陷入焦慮，有人開始盤算後路…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 80,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "未雨綢繆、規劃海外備案",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "要來就來、根留台灣",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 1,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_AI產業革命",
    "title": "AI產業革命",
    "description": "AI 浪潮席捲各行各業，你的工作正被重新定義——是危機也是轉機…",
    "type": "life",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 62,
    "probability": 0.11,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "積極學 AI、讓自己不可取代",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "排斥新科技、照老方法做",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_世紀疫情",
    "title": "世紀疫情",
    "description": "一場世紀大疫情席捲全球，封城、搶物資、居家隔離，生活徹底改變…",
    "type": "childhood",
    "icon": "🦢",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 10,
    "minAge": 10,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_惡性通膨",
    "title": "惡性通膨",
    "description": "一波惡性通膨襲來，萬物齊漲、錢越來越薄，你的現金購買力大幅縮水。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 85,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_兵役",
    "title": "兵役",
    "description": "兵單來了！體檢＋抽籤，決定你接下來的軍旅命運…",
    "type": "life",
    "icon": "🏥",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 32,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_chain_draftFraud",
    "title": "CHAIN_DRAFTFRAUD",
    "description": "檢調偵辦一起『免役舞弊集團』，當年你偽造免役證明的往事被翻了出來，你被列為被告…",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "fixed_age",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 0,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "砸錢請律師、全力擺平",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "認罪協商、繳回不法所得",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.appearance += -3;\nif (-5 !== 0) s.lifeStats.happiness += -5;\nreturn {  };",
        "guiVals": {
          "appearance": -3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_army",
    "title": "CHAIN_ARMY",
    "description": "部隊裡學長學弟制、站夜哨、跑五千、莒光日、五百障礙、被學長電——你在鋼鐵般的日子裡磨出硬漢心志，也交到一輩子的兵役兄弟。",
    "type": "childhood",
    "icon": "🤖",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 0,
    "minAge": 0,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (3 !== 0) s.lifeStats.constitution += 3;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
    "guiVals": {
      "appearance": 1,
      "intelligence": 0,
      "constitution": 3,
      "happiness": -1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_當兵梗",
    "title": "當兵梗",
    "description": "你又想起當兵的日子：數饅頭、擦皮鞋、刺槍術、放假前一晚興奮到睡不著——當過兵的都懂。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 19,
    "minAge": 19,
    "maxAge": 75,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_教召",
    "title": "教召",
    "description": "後備軍人教育召集令來了！你被召回營區 14 天，重溫打靶、行軍、擦槍的日子——老婆碎念、老闆臉臭，你也只能摸摸鼻子報到。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 37,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.constitution += 2;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 2,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_教召撞出國",
    "title": "教召撞出國",
    "description": "你早就訂好機票、安排出國（旅遊／出差／打工度假），臨行前竟收到一紙教召令，時間硬生生撞在一起…",
    "type": "life",
    "icon": "✈️",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 37,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "乖乖退票、報到教召",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (-5 !== 0) s.lifeStats.happiness += -5;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 1,
          "happiness": -5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "照樣出國、當作沒收到",
        "risk": "medium",
        "effectStr": "if (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 5,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_chain_draftEvade",
    "title": "逃避教召遭依法移送",
    "description": "你逃避教召的事被查獲，依《妨害兵役治罪條例》移送法辦，你被限制出境、面臨牢獄之災…",
    "type": "life",
    "icon": "🦢",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "回國投案、認罪服刑",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.appearance += -3;\nif (-8 !== 0) s.lifeStats.happiness += -8;\nreturn {  };",
        "guiVals": {
          "appearance": -3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "乾脆滯留海外、當通緝犯跑路",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_海外打黑工",
    "title": "海外打黑工",
    "description": "沒有身分的你只能打黑工、洗盤子、綁鋼筋，領現金、看老闆臉色，隨時怕被抓。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_海外躲藏",
    "title": "海外躲藏",
    "description": "聽說台灣發了通緝、還跟國際刑警合作，你嚇得不敢用真名、不敢露臉，天天提心吊膽。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_逃兵思鄉",
    "title": "逃兵思鄉",
    "description": "逢年過節，你在異鄉聽著鄉音的歌、看著家人的照片，想家想到掉淚，卻有家歸不得。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_流亡淪落",
    "title": "流亡淪落",
    "description": "人生地不熟又沒身分，同鄉的『大哥』找你做點『來錢快』的事…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 22,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "為了活下去、鋌而走險",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "再苦也守住底線",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_異鄉落地生根",
    "title": "異鄉落地生根",
    "description": "流亡多年，你用假身分在異鄉站穩了腳，甚至遇上願意相守的人…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "隱姓埋名、就此落地生根",
        "risk": "medium",
        "effectStr": "if (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 8,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "心繫故鄉、不願安定",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_偷渡自首",
    "title": "偷渡自首",
    "description": "漂泊多年，你再也受不了異鄉的孤單，動了偷渡回國、投案自首的念頭…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "偷渡回台、投案面對",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "再撐撐、繼續流亡",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_逃兵大赦",
    "title": "逃兵大赦",
    "description": "好消息傳來：兵役法規修正、追訴時效已過（又逢國家大赦），你的通緝令撤銷了——你終於可以光明正大回家！",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (12 !== 0) s.lifeStats.happiness += 12;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 12,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_客死異鄉",
    "title": "客死異鄉",
    "description": "多年流亡、缺醫少藥又孤苦無依，你的身體終於撐不住了…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 45,
    "minAge": 45,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-8 !== 0) s.lifeStats.constitution += -8;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -8,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_PTT爆紅",
    "title": "PTT爆紅",
    "description": "你在 PTT／Dcard 發的一篇文被推爆、洗上熱門，嘗到當「鄉民之神」的快感。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 15,
    "minAge": 15,
    "maxAge": 17,
    "probability": 0.09,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 1,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_迷因製造機",
    "title": "迷因製造機",
    "description": "你做的一張迷因圖被瘋傳，全網都在玩你的梗——可惜沒人知道原作是你。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_被肉搜",
    "title": "被肉搜",
    "description": "你的一句話被截圖瘋傳，爆料公社與鄉民正在肉搜你、出征你…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.07,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "誠懇道歉、鞠躬滅火",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.appearance += -1;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": -1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "硬起來嗆回去",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.appearance += -3;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
        "guiVals": {
          "appearance": -3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "關帳號、人間蒸發",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_帶風向",
    "title": "帶風向",
    "description": "爭議事件期間，你在網路上帶風向、跟人筆戰到三更半夜，Line 群組又退了兩個。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 62,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_鄉民封號",
    "title": "鄉民封號",
    "description": "因為某件事，鄉民給你冠上一個難聽又好笑的封號，你從此在網路上小有名氣。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 66,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 1,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_報明牌",
    "title": "報明牌",
    "description": "投顧老師／Line 飆股群組報明牌：「這支保證漲停，帶你上車財富自由！」",
    "type": "life",
    "icon": "🚗",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 75,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "跟單梭哈、賭一把",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "天下沒有白吃的午餐、拒絕",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_航海王",
    "title": "航海王",
    "description": "這是一個動態事件，請進入遊戲體驗。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_存股領息",
    "title": "存股領息",
    "description": "你當個佛系存股族，抱著金融股／0056 領股息，追求穩穩的幸福。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 80,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_財經網紅",
    "title": "財經網紅",
    "description": "你投資有一套，有機會經營財經頻道／當股市名嘴、開課教人…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 66,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "開課賣訊號、當名嘴撈一票",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.appearance += -2;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": -2,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "低調自己賺就好",
        "risk": "medium",
        "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_選舉造勢",
    "title": "選舉造勢",
    "description": "選舉到了，你去造勢晚會搖旗吶喊、凱道快閃，氣氛嗨到最高點，隔天喉嚨都啞了。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 26,
    "maxAge": 82,
    "probability": 0.09,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_當樁腳",
    "title": "當樁腳",
    "description": "地方選舉，候選人拜託你當樁腳、幫忙固樁催票、辦流水席…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 75,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "答應，跟著卡位分一杯羹",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "婉拒，政治太複雜",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_公投",
    "title": "公投",
    "description": "公投綁大選，你為了核四／同婚／萊豬這些議題認真爬文研究，鄭重投下神聖一票。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 85,
    "probability": 0.07,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_罷免案",
    "title": "罷免案",
    "description": "你的選區掀起罷免案，正反雙方在街頭與網路激烈動員，全民陷入政治狂熱。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 26,
    "maxAge": 80,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_米其林",
    "title": "米其林",
    "description": "你的餐廳摘下米其林星星，訂位排到三個月後、一位難求！",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 30,
    "minAge": 30,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (8 !== 0) s.lifeStats.happiness += 8;\nreturn {  };",
    "guiVals": {
      "appearance": 3,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 8,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_食安風暴",
    "title": "食安風暴",
    "description": "供應商爆出黑心油／食材問題，你的店被掃到颱風尾…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 66,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "誠實下架、向顧客道歉",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "低調處理、裝沒事",
        "risk": "medium",
        "effectStr": "if (-4 !== 0) s.lifeStats.appearance += -4;\nif (-6 !== 0) s.lifeStats.happiness += -6;\nreturn {  };",
        "guiVals": {
          "appearance": -4,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_廚房受傷",
    "title": "廚房受傷",
    "description": "你在廚房被熱油噴傷／切到手，掛急診縫了好幾針。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.constitution += -3;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -3,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_打火英雄",
    "title": "打火英雄",
    "description": "惡火／重大事故現場，你身為打火弟兄／員警必須衝進去…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "奮不顧身、衝進去救人",
        "risk": "medium",
        "effectStr": "if (-8 !== 0) s.lifeStats.constitution += -8;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -8,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "評估風險、按 SOP 行動",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_逮到通緝犯",
    "title": "逮到通緝犯",
    "description": "你在勤務中逮到一名逃亡多年的通緝犯，記大功一支。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_值班爆肝",
    "title": "值班爆肝",
    "description": "連續值班、日夜顛倒，你累到眼神死，身體亮起紅燈。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 58,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.constitution += -3;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -3,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_醫療糾紛",
    "title": "醫療糾紛",
    "description": "一起醫療／訴訟結果不如預期，對方家屬揚言提告、上媒體爆料…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 65,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "和解賠償、快速止血",
        "risk": "medium",
        "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "上法院力爭清白",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (-1 !== 0) s.lifeStats.constitution += -1;\nif (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": -1,
          "happiness": -3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_開業當老闆",
    "title": "開業當老闆",
    "description": "醫美／法律市場火熱，你考慮自己開間診所／事務所…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 32,
    "minAge": 32,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "開業當老闆、拚翻身",
        "risk": "medium",
        "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "當個安穩的受雇者",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_教甄落榜",
    "title": "教甄落榜",
    "description": "你又一次教甄落榜，只能繼續當流浪代課老師，前途茫茫。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 40,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_帶隊奪冠",
    "title": "帶隊奪冠",
    "description": "你帶的學生在全國比賽／科展奪冠，你成了學校的驕傲。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_少子化裁員",
    "title": "少子化裁員",
    "description": "少子化浪潮下學校減班、超額教師，你的鐵飯碗也不穩了。",
    "type": "life",
    "icon": "👤",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 35,
    "minAge": 35,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_盛產價崩",
    "title": "盛產價崩",
    "description": "今年大豐收，結果盛產導致價格崩盤，菜賤傷農，你欲哭無淚。",
    "type": "life",
    "icon": "📉",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_品牌小農",
    "title": "品牌小農",
    "description": "你做起產銷履歷、網路直售、觀光農場，成了爆紅的明星小農。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 65,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 6,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_颱風毀收成",
    "title": "颱風毀收成",
    "description": "一個強颱把你即將採收的作物打得稀爛，一整季的心血泡湯。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -4,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_還我牛",
    "title": "還我牛",
    "description": "某政黨民代選前拍胸脯保證收購你的作物、補助你的牛隻，選後政策急轉彎、支票全跳票，你血本無歸、連牛都被拍賣抵債…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 70,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "衝到市政府前大喊「還我牛！」",
        "risk": "medium",
        "effectStr": "if (4 !== 0) s.lifeStats.appearance += 4;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 4,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "摸摸鼻子自認倒楣",
        "risk": "medium",
        "effectStr": "if (-7 !== 0) s.lifeStats.happiness += -7;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -7,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_作品被抄",
    "title": "作品被抄",
    "description": "你的設計作品被大廠抄襲拿去商用，你發現了…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "提告捍衛著作權",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "摸摸鼻子、當作曝光",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.appearance += 1;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_接到大案",
    "title": "接到大案",
    "description": "你比稿贏得一個大品牌案，作品登上國際設計網站，接案接到手軟。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (5 !== 0) s.lifeStats.happiness += 5;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 5,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_職業傷害",
    "title": "職業傷害",
    "description": "長期勞損／一次工作意外，你的身體落下職業病。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-4 !== 0) s.lifeStats.constitution += -4;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -4,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_奧客",
    "title": "奧客",
    "description": "你遇到超級奧客又吼又鬧、還給一星負評，情緒被踐踏。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 62,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.happiness += -3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_被挖角",
    "title": "被挖角",
    "description": "對手公司開出高薪＋股票挖角你，跳不跳？",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 58,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "跳槽、薪水翻倍",
        "risk": "medium",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "留任、拿 offer 談加薪",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_竹科爆肝",
    "title": "竹科爆肝",
    "description": "連續趕專案上線，你在竹科爆肝到懷疑人生，肝指數直接飆高。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
    "maxAge": 55,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-3 !== 0) s.lifeStats.constitution += -3;\nif (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -3,
      "happiness": -2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_外派",
    "title": "外派",
    "description": "公司要外派你去中國／美國／東南亞，加給優渥但要離鄉背井…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 26,
    "minAge": 26,
    "maxAge": 52,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "接受外派、賺一波",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": -2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "婉拒、留在台灣",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_統一發票",
    "title": "統一發票",
    "description": "對統一發票的時刻到了！你屏息核對號碼…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 8,
    "minAge": 8,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (15 !== 0) s.lifeStats.happiness += 15;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 15,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_過年",
    "title": "過年",
    "description": "過年了！大掃除、貼春聯、圍爐守歲、走春拜年，紅包收發之間又老了一歲。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 5,
    "minAge": 5,
    "maxAge": 17,
    "probability": 0.12,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_家裡金援",
    "title": "家裡金援",
    "description": "你手頭吃緊、周轉不靈，家裡二話不說幫你補上缺口——有個富爸媽，跌倒了也有人接。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_媽祖遶境",
    "title": "媽祖遶境",
    "description": "你跟著大甲媽祖遶境進香，走了好幾天鐵腿，但心靈無比平靜。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 10,
    "minAge": 10,
    "maxAge": 17,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 1,
      "happiness": 3,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_中元普渡",
    "title": "中元普渡",
    "description": "中元普渡，你準備滿桌供品拜好兄弟，順便把要下架的零食全掃了。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 12,
    "minAge": 12,
    "maxAge": 17,
    "probability": 0.07,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_排隊搶購",
    "title": "排隊搶購",
    "description": "限量聯名／蛋塔／衛生紙之亂，你也跟著排了兩小時，買到有種莫名成就感。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 12,
    "minAge": 12,
    "maxAge": 17,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_檢舉達人",
    "title": "檢舉達人",
    "description": "你當起檢舉達人，拍違停／亂丟菸蒂領獎金，被鄰居白眼但荷包有進帳。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 75,
    "probability": 0.05,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.appearance += -1;\nif (-1 !== 0) s.lifeStats.happiness += -1;\nreturn {  };",
    "guiVals": {
      "appearance": -1,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_醫美整形",
    "title": "醫美整形",
    "description": "想變更美／更帥？醫美診所的價目表就攤在你眼前…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 20,
    "minAge": 20,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "砸錢微整／整形變美",
        "risk": "medium",
        "effectStr": "if (6 !== 0) s.lifeStats.appearance += 6;\nif (4 !== 0) s.lifeStats.happiness += 4;\nreturn {  };",
        "guiVals": {
          "appearance": 6,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "天然的最好、不動刀",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.constitution += 1;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 1,
          "happiness": 2,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_憂鬱症",
    "title": "憂鬱症",
    "description": "你長期情緒低落、失眠、對什麼都提不起勁——像是得了憂鬱症…",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 16,
    "minAge": 16,
    "maxAge": 17,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "就醫治療、好好面對",
        "risk": "medium",
        "effectStr": "if (6 !== 0) s.lifeStats.happiness += 6;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 6,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "硬撐、假裝沒事",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-4 !== 0) s.lifeStats.happiness += -4;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -1,
          "happiness": -4,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_減肥健身",
    "title": "減肥健身",
    "description": "你痛下決心減肥／健身增肌，練出人魚線／馬甲線，體態與自信都上升。",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 65,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (2 !== 0) s.lifeStats.constitution += 2;\nif (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 2,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_掉髮植髮",
    "title": "掉髮植髮",
    "description": "你的髮際線節節敗退、地中海浮現，鏡子越照越憂鬱…",
    "type": "life",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
    "maxAge": 60,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "砸錢植髮／養髮",
        "risk": "medium",
        "effectStr": "if (3 !== 0) s.lifeStats.appearance += 3;\nif (3 !== 0) s.lifeStats.happiness += 3;\nreturn {  };",
        "guiVals": {
          "appearance": 3,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 3,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "接受禿頭、剃個俐落平頭",
        "risk": "medium",
        "effectStr": "if (-1 !== 0) s.lifeStats.appearance += -1;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
        "guiVals": {
          "appearance": -1,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 1,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_lifetw_牙齒矯正",
    "title": "牙齒矯正",
    "description": "你戴牙套／隱適美矯正牙齒，痛了幾年但換來一口好牙與自信笑容。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 14,
    "minAge": 14,
    "maxAge": 17,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.appearance += 2;\nif (1 !== 0) s.lifeStats.happiness += 1;\nreturn {  };",
    "guiVals": {
      "appearance": 2,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 1,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_日常1",
    "title": "日常1",
    "description": "這一年平淡無奇，日子如流水般過去。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 5,
    "minAge": 5,
    "maxAge": 17,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_日常2",
    "title": "日常2",
    "description": "你交到一位知心好友，生活多了溫度。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 5,
    "minAge": 5,
    "maxAge": 17,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  },
  {
    "id": "e_lifetw_日常3",
    "title": "日常3",
    "description": "你培養了新興趣，樂在其中。",
    "type": "childhood",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 12,
    "minAge": 12,
    "maxAge": 17,
    "probability": 0.07,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": []
  }
];
