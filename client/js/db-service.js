// ============================================================
// InvestSim — Database Service
// Handles Firestore reads and writes
// ============================================================

class DatabaseService {
  constructor() {
    this.db = null;
    this._initialized = false;

    // Default local fallback config (used when Firebase is not configured)
    this._defaultEvents = [
      {
        id: 'e001',
        title: '央行宣布升息 1碼',
        description: '聯準會跟進升息，市場擔憂資金收緊，債券殖利率上揚。台股外資大量賣超，權值股跌幅明顯。',
        type: 'macro',
        icon: '🏦',
        sentiment: 'negative',
        effects: { twStock: -4, usStock: -2, crypto: -6, realEstate: -3 },
        choices: [
          { text: '賣出部分台股，轉入定存', effect: { cash: 0.05 }, risk: 'low' },
          { text: '加碼美元資產避險', effect: { usStock: 0.1 }, risk: 'medium' },
          { text: '逢低買入權值股', effect: { twStock: 0.15 }, risk: 'high' },
          { text: '不動如山，靜觀其變', effect: {}, risk: 'none' }
        ],
        duration: 2,
        probability: 0.15
      },
      {
        id: 'e002',
        title: '台積電法說會大幅上修財測',
        description: 'AI 晶片需求爆發，台積電宣布三奈米產能滿載，並上修全年 EPS 預測 15%。外資瘋狂買超。',
        type: 'company',
        icon: '📈',
        sentiment: 'positive',
        effects: { twStock: 8, usStock: 3, crypto: 2, realEstate: 0 },
        choices: [
          { text: '加碼台積電 ADR', effect: { usStock: 0.12 }, risk: 'medium' },
          { text: '買入 0050 ETF 搭順風車', effect: { twStock: 0.08 }, risk: 'low' },
          { text: '空手不追高', effect: {}, risk: 'none' },
          { text: '融資放大槓桿衝', effect: { twStock: 0.25, leverage: 2 }, risk: 'extreme' }
        ],
        duration: 1,
        probability: 0.12
      },
      {
        id: 'e003',
        title: '比特幣減半事件',
        description: '比特幣完成第四次減半，礦工出塊獎勵減半至 3.125 BTC。歷史數據顯示減半後半年通常為大牛市。',
        type: 'crypto',
        icon: '₿',
        sentiment: 'positive',
        effects: { twStock: 1, usStock: 1, crypto: 15, realEstate: 0 },
        choices: [
          { text: '重倉押注比特幣', effect: { crypto: 0.3 }, risk: 'extreme' },
          { text: '小倉位嘗試，5% 資產', effect: { crypto: 0.1 }, risk: 'medium' },
          { text: '轉而買以太坊，預期跟漲', effect: { crypto: 0.15 }, risk: 'high' },
          { text: '我不碰賭博性資產', effect: {}, risk: 'none' }
        ],
        duration: 1,
        probability: 0.08
      },
      {
        id: 'e004',
        title: '台北市房市急速降溫',
        description: '政府推出第七波信用管制，限縮房屋貸款成數，台北市預售屋買氣腰斬。',
        type: 'realEstate',
        icon: '🏠',
        sentiment: 'negative',
        effects: { twStock: -2, usStock: 0, crypto: 0, realEstate: -8 },
        choices: [
          { text: '趁機低接台北精華區', effect: { realEstate: 0.2 }, risk: 'high' },
          { text: '賣出持有的房產避損', effect: { cash: 0.08 }, risk: 'low' },
          { text: '轉往桃園、台中布局', effect: { realEstate: 0.1 }, risk: 'medium' },
          { text: '繼續觀望，租金收益為主', effect: {}, risk: 'none' }
        ],
        duration: 3,
        probability: 0.1
      },
      {
        id: 'e005',
        title: '🌑 黑天鵝：台海緊張局勢升溫',
        description: '中國軍機頻繁擾台，外資大逃殺。台股單日跳空跌停，資金瘋狂出逃至美元避險資產。這是你職業生涯最嚴峻的一次測試。',
        type: 'blackswan',
        icon: '🦢',
        sentiment: 'critical',
        effects: { twStock: -20, usStock: -5, crypto: -15, realEstate: -10 },
        choices: [
          { text: '全部換美元，死守現金', effect: { cash: 0.2, currency: 'usd' }, risk: 'safe' },
          { text: '買入黃金 ETF 對沖', effect: { gold: 0.15 }, risk: 'low' },
          { text: '加碼美股避險股（必需消費）', effect: { usStock: 0.1 }, risk: 'medium' },
          { text: '相信台灣，逢低護盤', effect: { twStock: 0.2 }, risk: 'extreme' }
        ],
        duration: 4,
        probability: 0.04
      },
      {
        id: 'e006',
        title: 'AI 科技股全面爆發',
        description: 'ChatGPT 競品大戰白熱化，各大科技巨頭 AI 資本支出翻倍，NVIDIA、AMD、台積電全線大漲。',
        type: 'tech',
        icon: '🤖',
        sentiment: 'positive',
        effects: { twStock: 12, usStock: 10, crypto: 5, realEstate: 0 },
        choices: [
          { text: '重押 NVIDIA、AMD 美股', effect: { usStock: 0.2 }, risk: 'high' },
          { text: '買台積電 + 聯發科雙核心', effect: { twStock: 0.15 }, risk: 'medium' },
          { text: '買科技 ETF 分散風險', effect: { usStock: 0.08, twStock: 0.05 }, risk: 'low' },
          { text: '認為泡沫，不追高', effect: {}, risk: 'none' }
        ],
        duration: 2,
        probability: 0.14
      },
      {
        id: 'e007',
        title: '定期定額機會',
        description: '市場平靜，這個月沒有特別的大事件。是堅持執行紀律投資計畫的好時機。',
        type: 'routine',
        icon: '📅',
        sentiment: 'neutral',
        effects: { twStock: 1, usStock: 1, crypto: 0, realEstate: 0.5 },
        choices: [
          { text: '照計畫定期定額 0050', effect: { twStock: 0.04 }, risk: 'low' },
          { text: '定期定額 VOO（美股 S&P500）', effect: { usStock: 0.04 }, risk: 'low' },
          { text: '把現金留著，等待機會', effect: { cash: 0.005 }, risk: 'none' },
          { text: '小試身手，學習選股', effect: { twStock: 0.06 }, risk: 'medium' }
        ],
        duration: 1,
        probability: 0.3
      }
    ];

    this._defaultAchievements = [
      { id: 'a_first_pot', icon: '💰', title: '第一桶金', description: '總現金突破 100 萬元！邁出投資人生的第一大步。', conditionStr: 's.portfolio.cash >= 1000000', enabled: true },
      { id: 'a_ten_million', icon: '💎', title: '千萬身價', description: '總資產淨值突破 1,000 萬元！在台灣已是前段班。', conditionStr: 'nw >= 10000000', enabled: true },
      { id: 'a_hundred_million', icon: '👑', title: '億萬富豪', description: '總資產淨值突破 1 億元大關！達成富可敵國的傳奇成就。', conditionStr: 'nw >= 100000000', enabled: true },
      { id: 'a_crypto_king', icon: '₿', title: '幣圈巨鯨', description: '持有加密貨幣資產超過 500 萬元。', conditionStr: 's.portfolio.crypto >= 5000000', enabled: true },
      { id: 'a_real_estate_mogul', icon: '🏠', title: '地產大亨', description: '持有房地產資產超過 2,000 萬元。', conditionStr: 's.portfolio.realEstate >= 20000000', enabled: true },
      { id: 'a_tw_stock_whale', icon: '🇹🇼', title: '台股大戶', description: '台股市值突破 1,000 萬元。', conditionStr: 's.portfolio.twStock >= 10000000', enabled: true },
      { id: 'a_happy_life', icon: '😊', title: '幸福滿分', description: '快樂值達到 90 以上，名利雙收心靈滿足。', conditionStr: 's.lifeStats.happiness >= 90', enabled: true },
      { id: 'a_genius', icon: '🧠', title: '智商天花板', description: '智力達到 90 以上，洞悉市場所有脈絡。', conditionStr: 's.lifeStats.intelligence >= 90', enabled: true },
      { id: 'a_ironman', icon: '💪', title: '鋼鐵體質', description: '體質達到 90 以上，百病不侵。', conditionStr: 's.lifeStats.constitution >= 90', enabled: true },
      { id: 'a_super_star', icon: '✨', title: '絕世顏值', description: '顏值達到 90 以上，靠臉就能吃飯。', conditionStr: 's.lifeStats.appearance >= 90', enabled: true },
      { id: 'a_centenarian', icon: '🧓', title: '長命百歲', description: '年齡達到 100 歲，見證跨世紀的經濟榮枯。', conditionStr: 's.age >= 100', enabled: true }
    ];

    this._defaultEndings = [
      { id: 'end_bankruptcy', icon: '💸', title: '破產倒閉', description: '你背負了龐大債務，總資產歸負，無力回天宣告破產。', conditionStr: 'nw < 0 && s.age >= 18', enabled: true },
      { id: 'end_cash_debt', icon: '📉', title: '現金斷流', description: '手上現金歸零且背負短期債務，生活無法繼續，被迫進行清算。', conditionStr: 's.portfolio.cash < 0 && s.age >= 18', enabled: true },
      { id: 'end_super_rich', icon: '🏰', title: '爆富退休', description: '你的總淨值突破 1 億元，成為台灣傳奇投資人，提前享受奢華無憂的退休生活！', conditionStr: 'nw >= 100000000 && s.age >= 18', enabled: true },
      { id: 'end_centenarian_peace', icon: '🕊️', title: '壽終正寢', description: '年滿 100 歲，在親友與子孫的陪伴下安詳離世，走完了精彩充實的一生。', conditionStr: 's.age >= 100', enabled: true },
      { id: 'end_burnout', icon: '🥀', title: '身心俱疲', description: '長期的投資焦慮與生活壓力使快樂值歸零，心力交瘁決定退隱江湖。', conditionStr: 's.lifeStats.happiness <= 0 && s.age >= 18', enabled: true },
      { id: 'end_health_collapse', icon: '🏥', title: '健康崩潰', description: '因長年過度操勞、作息不正常，體質歸零，遺憾提前告別舞台。', conditionStr: 's.lifeStats.constitution <= 0 && s.age >= 18', enabled: true }
    ];
  }

  /**
   * Initialize Firestore.
   * Must be called after Firebase App is initialized.
   * @param {firebase.app.App} app - Firebase app instance
   */
  async init(app) {
    if (this._initialized) return;
    if (!app) {
      console.warn('[DB] Firebase not available, using local defaults.');
      this._initialized = true;
      return;
    }

    const { getFirestore } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    this.db = getFirestore(app);
    this._initialized = true;
  }

  /**
   * Fetch dynamic game config (events + achievements) from Firestore.
   * Falls back to local defaults if Firestore is unavailable.
   * @returns {{ events: Array, achievements: Array }}
   */
  async fetchDynamicConfig() {
    let localEvents = this._defaultEvents;
    try {
      const res = await fetch('./data/events.json');
      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json) && json.length > 0) localEvents = json;
      }
    } catch (_) {}

    if (!this.db) {
      return {
        events:       localEvents,
        achievements: this._defaultAchievements,
        endings:      this._defaultEndings
      };
    }

    try {
      const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      const eventsDoc       = await getDoc(doc(this.db, 'config', 'events'));
      const achievementsDoc = await getDoc(doc(this.db, 'config', 'achievements'));
      const endingsDoc      = await getDoc(doc(this.db, 'config', 'endings'));

      return {
        events:       (eventsDoc.exists() && eventsDoc.data().list?.length > 0) ? eventsDoc.data().list : localEvents,
        achievements: (achievementsDoc.exists() && achievementsDoc.data().list?.length > 0) ? achievementsDoc.data().list : this._defaultAchievements,
        endings:      (endingsDoc.exists() && endingsDoc.data().list?.length > 0) ? endingsDoc.data().list : this._defaultEndings
      };
    } catch (err) {
      console.warn('[DB] Failed to fetch Firestore config, using local fallback.', err);
      return {
        events:       localEvents,
        achievements: this._defaultAchievements,
        endings:      this._defaultEndings
      };
    }
  }

  /**
   * Upload a completed game session to Firestore.
   * Only called when user is logged in.
   * @param {Object} user - Firebase user object
   * @param {Object} finalState - Game state at end
   * @param {Array}  logHistory - LogTracker array
   */
  async uploadGameSession(user, finalState, logHistory) {
    if (!this.db || !user) return;

    try {
      const { collection, addDoc, serverTimestamp }
        = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');

      await addDoc(collection(this.db, 'game_sessions'), {
        uid:                user.uid,
        playerName:         user.displayName,
        playerAvatar:       user.photoURL,
        timestamp:          serverTimestamp(),
        durationMonths:     finalState.month,
        finalNetWorth:      finalState.netWorth,
        startNetWorth:      finalState.startNetWorth,
        growthRate:         finalState.netWorth / finalState.startNetWorth,
        maxDrawdown:        finalState.stats.mdd,
        causeOfEnd:         finalState.endReason,
        investStyle:        finalState.playerStyle,
        achievementsUnlocked: finalState.achievements,
        portfolioBreakdown: finalState.portfolio,
        logs:               logHistory.slice(0, 200) // cap at 200 entries
      });
    } catch (err) {
      console.error('[DB] Failed to upload game session:', err);
    }
  }

  /**
   * Update or create a user profile in Firestore.
   * @param {Object} user - Firebase user
   * @param {Object} updates - Fields to merge
   */
  async updateUserProfile(user, updates) {
    if (!this.db || !user) return;

    try {
      const { doc, setDoc, serverTimestamp }
        = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');

      await setDoc(doc(this.db, 'users', user.uid), {
        uid:         user.uid,
        displayName: user.displayName,
        photoURL:    user.photoURL,
        lastSeen:    serverTimestamp(),
        ...updates
      }, { merge: true });
    } catch (err) {
      console.error('[DB] Failed to update user profile:', err);
    }
  }
}

window.dbService = new DatabaseService();
