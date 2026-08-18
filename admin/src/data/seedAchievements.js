export const DEFAULT_ACHIEVEMENTS = [
  {
    id: 'a_first_pot',
    icon: '💰',
    title: '第一桶金',
    description: '總現金突破 100 萬元！邁出投資人生的第一大步。',
    conditionStr: 's.portfolio.cash >= 1000000',
    guiConds: [{ id: 1, logic: '&&', field: 's.portfolio.cash', op: '>=', val: 1000000 }],
    enabled: true
  },
  {
    id: 'a_ten_million',
    icon: '💎',
    title: '千萬身價',
    description: '總資產淨值突破 1,000 萬元！在台灣已是前段班。',
    conditionStr: 'nw >= 10000000',
    guiConds: [{ id: 1, logic: '&&', field: 'nw', op: '>=', val: 10000000 }],
    enabled: true
  },
  {
    id: 'a_hundred_million',
    icon: '👑',
    title: '億萬富豪',
    description: '總資產淨值突破 1 億元大關！達成富可敵國的傳奇成就。',
    conditionStr: 'nw >= 100000000',
    guiConds: [{ id: 1, logic: '&&', field: 'nw', op: '>=', val: 100000000 }],
    enabled: true
  },
  {
    id: 'a_crypto_king',
    icon: '₿',
    title: '幣圈巨鯨',
    description: '持有加密貨幣資產超過 500 萬元。',
    conditionStr: 's.portfolio.crypto >= 5000000',
    guiConds: [{ id: 1, logic: '&&', field: 's.portfolio.crypto', op: '>=', val: 5000000 }],
    enabled: true
  },
  {
    id: 'a_real_estate_mogul',
    icon: '🏠',
    title: '地產大亨',
    description: '持有房地產資產超過 2,000 萬元。',
    conditionStr: 's.portfolio.realEstate >= 20000000',
    guiConds: [{ id: 1, logic: '&&', field: 's.portfolio.realEstate', op: '>=', val: 20000000 }],
    enabled: true
  },
  {
    id: 'a_tw_stock_whale',
    icon: '🇹🇼',
    title: '台股大戶',
    description: '台股市值突破 1,000 萬元。',
    conditionStr: 's.portfolio.twStock >= 10000000',
    guiConds: [{ id: 1, logic: '&&', field: 's.portfolio.twStock', op: '>=', val: 10000000 }],
    enabled: true
  },
  {
    id: 'a_happy_life',
    icon: '😊',
    title: '幸福滿分',
    description: '快樂值達到 90 以上，名利雙收心靈滿足。',
    conditionStr: 's.lifeStats.happiness >= 90',
    guiConds: [{ id: 1, logic: '&&', field: 's.lifeStats.happiness', op: '>=', val: 90 }],
    enabled: true
  },
  {
    id: 'a_genius',
    icon: '🧠',
    title: '智商天花板',
    description: '智力達到 90 以上，洞悉市場所有脈絡。',
    conditionStr: 's.lifeStats.intelligence >= 90',
    guiConds: [{ id: 1, logic: '&&', field: 's.lifeStats.intelligence', op: '>=', val: 90 }],
    enabled: true
  },
  {
    id: 'a_ironman',
    icon: '💪',
    title: '鋼鐵體質',
    description: '體質達到 90 以上，百病不侵。',
    conditionStr: 's.lifeStats.constitution >= 90',
    guiConds: [{ id: 1, logic: '&&', field: 's.lifeStats.constitution', op: '>=', val: 90 }],
    enabled: true
  },
  {
    id: 'a_super_star',
    icon: '✨',
    title: '絕世顏值',
    description: '顏值達到 90 以上，靠臉就能吃飯。',
    conditionStr: 's.lifeStats.appearance >= 90',
    guiConds: [{ id: 1, logic: '&&', field: 's.lifeStats.appearance', op: '>=', val: 90 }],
    enabled: true
  },
  {
    id: 'a_centenarian',
    icon: '🧓',
    title: '長命百歲',
    description: '年齡達到 100 歲，見證跨世紀的經濟榮枯。',
    conditionStr: 's.age >= 100',
    guiConds: [{ id: 1, logic: '&&', field: 's.age', op: '>=', val: 100 }],
    enabled: true
  }
];
