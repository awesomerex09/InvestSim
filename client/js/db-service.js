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
      { id: 'a001', icon: '💎', name: '鑽石手', desc: '持倉超過 3 年從未停損', condition: 'holdYears >= 3 && stopLossCount === 0', rarity: 'legendary' },
      { id: 'a002', icon: '🧘', name: '穩健操盤手', desc: '最大回撤低於 10%', condition: 'mdd < 10', rarity: 'rare' },
      { id: 'a003', icon: '🚀', name: '百倍玩家', desc: '資產成長超過 100 倍', condition: 'growthRate >= 100', rarity: 'legendary' },
      { id: 'a004', icon: '🏠', name: '包租公/婆', desc: '房產收益佔總收入 50% 以上', condition: 'rentalIncomePct >= 0.5', rarity: 'rare' },
      { id: 'a005', icon: '📊', name: '分散大師', desc: '四類資產各佔 15-35%', condition: 'diversified === true', rarity: 'uncommon' },
      { id: 'a006', icon: '🌊', name: '黑天鵝倖存者', desc: '歷經黑天鵝事件後淨值仍為正', condition: 'survivedBlackswan === true', rarity: 'epic' },
      { id: 'a007', icon: '💀', name: '韭菜一號', desc: '追高殺低，虧損 50% 以上', condition: 'loss >= 0.5', rarity: 'common' },
      { id: 'a008', icon: '🎯', name: '精準抄底', desc: '在最低點後 1 個月內加倉', condition: 'bottomFishing === true', rarity: 'epic' },
      { id: 'a009', icon: '🏆', name: '財務自由', desc: '被動收入超過生活支出', condition: 'passiveIncome >= livingCost', rarity: 'legendary' },
      { id: 'a010', icon: '₿', name: '加密信徒', desc: '加密貨幣佔資產 60% 以上', condition: 'cryptoPct >= 0.6', rarity: 'uncommon' }
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
    if (!this.db) {
      return {
        events:       this._defaultEvents,
        achievements: this._defaultAchievements
      };
    }

    try {
      const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      const eventsDoc       = await getDoc(doc(this.db, 'config', 'events'));
      const achievementsDoc = await getDoc(doc(this.db, 'config', 'achievements'));

      return {
        events:       eventsDoc.exists() ? eventsDoc.data().list       : this._defaultEvents,
        achievements: achievementsDoc.exists() ? achievementsDoc.data().list : this._defaultAchievements
      };
    } catch (err) {
      console.warn('[DB] Failed to fetch config, using local defaults.', err);
      return {
        events:       this._defaultEvents,
        achievements: this._defaultAchievements
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
