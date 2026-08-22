// InvestSim — Core Investment & Macro Events (16 events)
export const INVESTSIM_EVENTS = [
  {
    "id": "e_invest_bull",
    "title": "全球大牛市",
    "description": "受惠於AI浪潮與寬鬆貨幣政策，全球股市迎來史詩級大牛市！",
    "type": "tech",
    "icon": "🚀",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.05,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return { twStock:15, usStock:20, crypto:30, realEstate:5, gold:-2 };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 15,
      "usStock": 20,
      "crypto": 30,
      "realEstate": 5,
      "gold": -2
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "順勢加碼權值股與科技 ETF",
        "risk": "medium",
        "effectStr": "return { twStock:8, usStock:10 };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 8,
          "usStock": 10,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "居安思危，部分獲利了結轉定存",
        "risk": "low",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
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
    "id": "e_invest_bear",
    "title": "經濟衰退疑慮",
    "description": "通膨居高不下，央行持續升息，市場恐慌情緒蔓延。",
    "type": "macro",
    "icon": "📉",
    "sentiment": "negative",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.08,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-2 !== 0) s.lifeStats.happiness += -2;\nreturn { twStock:-10, usStock:-15, crypto:-25, realEstate:-2, gold:5 };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -2,
      "cash": 0,
      "twStock": -10,
      "usStock": -15,
      "crypto": -25,
      "realEstate": -2,
      "gold": 5
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "逢低分批定期定額撿便宜",
        "risk": "medium",
        "effectStr": "if (1 !== 0) s.lifeStats.intelligence += 1;\nreturn { twStock:5 };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 1,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 5,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "停損觀望，保留大量現金",
        "risk": "safe",
        "effectStr": "return {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
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
    "id": "e_invest_blackswan",
    "title": "區域衝突黑天鵝",
    "description": "突發的地緣區域衝突導致全球供應鏈中斷，市場迎來劇烈震盪與避險潮。",
    "type": "life",
    "icon": "☠️",
    "sentiment": "critical",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.02,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-5 !== 0) s.lifeStats.happiness += -5;\nreturn { twStock:-25, usStock:-30, crypto:-40, realEstate:-10, gold:20 };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": -5,
      "cash": 0,
      "twStock": -25,
      "usStock": -30,
      "crypto": -40,
      "realEstate": -10,
      "gold": 20
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "不動如山，相信人類文明與長期國運",
        "risk": "high",
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
        "text": "買入黃金與防禦型資產避險",
        "risk": "low",
        "effectStr": "return { gold:15 };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 15
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_invest_crypto_boom",
    "title": "比特幣減半與現貨 ETF 狂潮",
    "description": "加密貨幣迎來減半週期與機構資金湧入，鏈上交易量暴增，引發全面暴漲！",
    "type": "crypto",
    "icon": "💎",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.04,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return { crypto:45 };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 0,
      "usStock": 0,
      "crypto": 45,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "將獲利分批止盈轉入房地產與台股",
        "risk": "low",
        "effectStr": "return { twStock:5, realEstate:4 };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 5,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 4,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "Diamond Hands 鑽石手死拿不賣",
        "risk": "high",
        "effectStr": "return { crypto:15 };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 15,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_invest_tsmc_guidance",
    "title": "護國神山台積電調升全年財測",
    "description": "先進製程產能滿載，AI 晶片訂單塞爆，台積電法說會大幅上修營收與資本支出！",
    "type": "company",
    "icon": "🏢",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return { twStock:12, usStock:6 };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 12,
      "usStock": 6,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "買入 0050 ETF 搭上順風車",
        "risk": "low",
        "effectStr": "return { twStock:5 };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 5,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "佈局半導體供應鏈概念股",
        "risk": "medium",
        "effectStr": "return { twStock:8 };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 8,
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
    "id": "e_invest_housing_policy",
    "title": "新青安房貸政策點火房市",
    "description": "政府推出延長寬限期與超低利率優惠房貸，剛性買盤湧現，各地房價再度創高。",
    "type": "realEstate",
    "icon": "🏠",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 85,
    "probability": 0.06,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return { twStock:3, realEstate:8 };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 3,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 8,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "看準地段，進場認購預售屋",
        "risk": "medium",
        "effectStr": "return { realEstate:10 };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 10,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "房價過高，堅定當租屋族轉投股市",
        "risk": "low",
        "effectStr": "return { twStock:6, usStock:6 };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 6,
          "usStock": 6,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_invest_ai_revolution",
    "title": "AI 算力大革命引爆美股狂飆",
    "description": "大型語言模型邁入商業化變現階段，科技七巨頭獲利超預期，帶動納斯達克指數創新高。",
    "type": "life",
    "icon": "🚀",
    "sentiment": "positive",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.05,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "return { twStock:10, usStock:18, crypto:15 };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 0,
      "cash": 0,
      "twStock": 10,
      "usStock": 18,
      "crypto": 15,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "重倉科技指數 QQQ 與 AI 算力巨頭",
        "risk": "high",
        "effectStr": "return { usStock:12 };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 0,
          "usStock": 12,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "投資全球大型分散型 ETF (VT)",
        "risk": "low",
        "effectStr": "return { twStock:4, usStock:6 };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 4,
          "usStock": 6,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      }
    ]
  },
  {
    "id": "e_invest_dividend_season",
    "title": "台股除權息旺季來臨",
    "description": "上市櫃公司陸續發放豐厚現金股利，存股族的帳戶迎來大筆現金入帳！",
    "type": "routine",
    "icon": "💵",
    "sentiment": "positive",
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
    "effectStr": "if (2 !== 0) s.lifeStats.happiness += 2;\nreturn { twStock:2 };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": 0,
      "happiness": 2,
      "cash": 0,
      "twStock": 2,
      "usStock": 0,
      "crypto": 0,
      "realEstate": 0,
      "gold": 0
    },
    "advancedMode": false,
    "choices": [
      {
        "text": "股息再投入，享受複利效應",
        "risk": "low",
        "effectStr": "return { twStock:6 };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": 0,
          "happiness": 0,
          "cash": 0,
          "twStock": 6,
          "usStock": 0,
          "crypto": 0,
          "realEstate": 0,
          "gold": 0
        },
        "advancedMode": false
      },
      {
        "text": "把股息拿去犒賞自己吃大餐出國旅遊",
        "risk": "none",
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
      }
    ]
  },
  {
    "id": "e_lifetw_子女創業回饋",
    "title": "子女創業回饋",
    "description": "你的孩子創業有成，包了個大紅包、甚至幫你買房養老。",
    "type": "realEstate",
    "icon": "🏠",
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
    "id": "e_lifetw_chain_marketRecover",
    "title": "股災後強勁V型反彈",
    "description": "熬過那場股災，市場V型反轉、屢創新高——你當年沒賣的持股不僅回本，還多賺一大截。",
    "type": "macro",
    "icon": "🦢",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 25,
    "maxAge": 80,
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
    "id": "e_lifetw_買房",
    "title": "買房",
    "description": "看了好久的房子，要下訂當屋主嗎？",
    "type": "realEstate",
    "icon": "🏠",
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
        "text": "貸款買房當屋奴",
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
        "text": "一輩子租屋",
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
    "id": "e_lifetw_過年逼問",
    "title": "過年逼問",
    "description": "過年圍爐，親戚輪番逼問薪水、對象、何時買房，你尷尬又煩躁。",
    "type": "realEstate",
    "icon": "🏠",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 22,
    "minAge": 22,
    "maxAge": 65,
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
    "id": "e_lifetw_追劇KTV",
    "title": "追劇KTV",
    "description": "你熬夜追鄉土劇／韓劇／Netflix，或跟朋友唱 KTV 唱到燒聲，快樂但傷身。",
    "type": "macro",
    "icon": "🐣",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 25,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.09,
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
    "id": "e_lifetw_當沖",
    "title": "當沖",
    "description": "你迷上當沖，盯盤盯到眼睛脫窗。",
    "type": "macro",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 24,
    "minAge": 24,
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
        "text": "All in 賭一把",
        "risk": "medium",
        "effectStr": "if (-2 !== 0) s.lifeStats.constitution += -2;\nreturn {  };",
        "guiVals": {
          "appearance": 0,
          "intelligence": 0,
          "constitution": -2,
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
        "text": "太刺激，不玩",
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
    "id": "e_lifetw_股災",
    "title": "股災",
    "description": "",
    "type": "macro",
    "icon": "👤",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 28,
    "minAge": 28,
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
    "id": "e_lifetw_chain_exchangeRun",
    "title": "幣圈交易所倒閉凍結",
    "description": "你存幣的交易所無預警倒閉、老闆捲款跑路，你的幣全被凍結、血本無歸。",
    "type": "crypto",
    "icon": "₿",
    "sentiment": "neutral",
    "enabled": true,
    "triggerType": "age_range",
    "triggerAge": 18,
    "minAge": 18,
    "maxAge": 100,
    "probability": 0.1,
    "prerequisites": [],
    "statReq": {
      "stat": "none",
      "min": 0
    },
    "effectStr": "if (-1 !== 0) s.lifeStats.constitution += -1;\nif (-10 !== 0) s.lifeStats.happiness += -10;\nreturn {  };",
    "guiVals": {
      "appearance": 0,
      "intelligence": 0,
      "constitution": -1,
      "happiness": -10,
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
