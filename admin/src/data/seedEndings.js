export const DEFAULT_ENDINGS = [
  {
    id: 'end_bankruptcy',
    icon: '💸',
    title: '破產倒閉',
    description: '你背負了龐大債務，總資產歸負，無力回天宣告破產。',
    conditionStr: 'nw < 0 && s.age >= 18',
    guiConds: [
      { id: 1, logic: '&&', field: 'nw', op: '<', val: 0 },
      { id: 2, logic: '&&', field: 's.age', op: '>=', val: 18 }
    ],
    enabled: true
  },
  {
    id: 'end_cash_debt',
    icon: '📉',
    title: '現金斷流',
    description: '手上現金歸零且背負短期債務，生活無法繼續，被迫進行清算。',
    conditionStr: 's.portfolio.cash < 0 && s.age >= 18',
    guiConds: [
      { id: 1, logic: '&&', field: 's.portfolio.cash', op: '<', val: 0 },
      { id: 2, logic: '&&', field: 's.age', op: '>=', val: 18 }
    ],
    enabled: true
  },
  {
    id: 'end_super_rich',
    icon: '🏰',
    title: '爆富退休',
    description: '你的總淨值突破 1 億元，成為台灣傳奇投資人，提前享受奢華無憂的退休生活！',
    conditionStr: 'nw >= 100000000 && s.age >= 18',
    guiConds: [
      { id: 1, logic: '&&', field: 'nw', op: '>=', val: 100000000 },
      { id: 2, logic: '&&', field: 's.age', op: '>=', val: 18 }
    ],
    enabled: true
  },
  {
    id: 'end_centenarian_peace',
    icon: '🕊️',
    title: '壽終正寢',
    description: '年滿 100 歲，在親友與子孫的陪伴下安詳離世，走完了精彩充實的一生。',
    conditionStr: 's.age >= 100',
    guiConds: [
      { id: 1, logic: '&&', field: 's.age', op: '>=', val: 100 }
    ],
    enabled: true
  },
  {
    id: 'end_burnout',
    icon: '🥀',
    title: '身心俱疲',
    description: '長期的投資焦慮與生活壓力使快樂值歸零，心力交瘁決定退隱江湖。',
    conditionStr: 's.lifeStats.happiness <= 0 && s.age >= 18',
    guiConds: [
      { id: 1, logic: '&&', field: 's.lifeStats.happiness', op: '<=', val: 0 },
      { id: 2, logic: '&&', field: 's.age', op: '>=', val: 18 }
    ],
    enabled: true
  },
  {
    id: 'end_health_collapse',
    icon: '🏥',
    title: '健康崩潰',
    description: '因長年過度操勞、作息不正常，體質歸零，遺憾提前告別舞台。',
    conditionStr: 's.lifeStats.constitution <= 0 && s.age >= 18',
    guiConds: [
      { id: 1, logic: '&&', field: 's.lifeStats.constitution', op: '<=', val: 0 },
      { id: 2, logic: '&&', field: 's.age', op: '>=', val: 18 }
    ],
    enabled: true
  }
];
