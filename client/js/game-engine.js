// ============================================================
// InvestSim — Game Engine
// Core simulation: market prices, event system, achievements
// ============================================================

class GameEngine {
  constructor() {
    // ── Config (loaded from Firestore or local defaults) ──
    this.events       = [];
    this.achievements = [];

    // ── Game State ────────────────────────────────────────
    this.state = null;
  }

  // ────────────────────────────────────────────────────────
  // INITIALISATION
  // ────────────────────────────────────────────────────────

  /**
   * Load dynamic config and set up a fresh game state.
   * @param {Object} opts
   * @param {string} opts.style       - 'conservative' | 'balanced' | 'aggressive' | 'gambler'
   * @param {number} opts.initialCash - starting cash in NTD (thousands)
   * @param {string} opts.goal        - player's life goal text
   */
  async newGame({ style = 'balanced', initialCash = 1000, goal = '財務自由' } = {}) {
    // Fetch config
    const config = await window.dbService.fetchDynamicConfig();
    this.events       = config.events;
    this.achievements = config.achievements;

    // Reset log tracker
    window.logTracker.reset();

    // Initialise market prices (index = 100 base)
    const prices = {
      twStock:     100,
      usStock:     100,
      crypto:      100,
      realEstate:  100,
      gold:        100
    };

    // Style-based starting allocation
    const allocations = {
      conservative: { cash: 0.7,  twStock: 0.2,  usStock: 0.1,  crypto: 0,    realEstate: 0   },
      balanced:     { cash: 0.4,  twStock: 0.25, usStock: 0.2,  crypto: 0.05, realEstate: 0.1 },
      aggressive:   { cash: 0.1,  twStock: 0.3,  usStock: 0.3,  crypto: 0.2,  realEstate: 0.1 },
      gambler:      { cash: 0.05, twStock: 0.1,  usStock: 0.1,  crypto: 0.75, realEstate: 0   }
    };

    const alloc = allocations[style] || allocations.balanced;
    const cashNTD = initialCash * 10000; // convert 萬 to 元

    this.state = {
      // Meta
      month:        1,
      year:         1,
      playerStyle:  style,
      playerGoal:   goal,
      startNetWorth: cashNTD,

      // Portfolio (in NTD value)
      portfolio: {
        cash:       Math.round(cashNTD * alloc.cash),
        twStock:    Math.round(cashNTD * alloc.twStock),
        usStock:    Math.round(cashNTD * alloc.usStock),
        crypto:     Math.round(cashNTD * alloc.crypto),
        realEstate: Math.round(cashNTD * alloc.realEstate),
        gold:       0
      },

      // Units held (shares / units)
      units: {
        twStock:    alloc.twStock > 0 ? 100 : 0,
        usStock:    alloc.usStock > 0 ? 100 : 0,
        crypto:     alloc.crypto  > 0 ? 1   : 0,
        realEstate: alloc.realEstate > 0 ? 1 : 0,
        gold:       0
      },

      // Market prices
      prices: { ...prices },

      // Statistics
      stats: {
        peakNetWorth:     cashNTD,
        mdd:              0,   // Max Drawdown %
        monthlyReturns:   [],
        stopLossCount:    0,
        holdYears:        0,
        survivedBlackswan: false,
        bottomFishing:    false,
        totalBuys:        0,
        totalSells:       0,
        dividendsEarned:  0
      },

      // Achievements unlocked this game
      achievements:  [],

      // Current active event (if any)
      activeEvent:   null,

      // End state
      isEnded:       false,
      endReason:     null,

      // Random seed (for reproducibility)
      seed: Date.now()
    };

    return this.state;
  }

  // ────────────────────────────────────────────────────────
  // MARKET ENGINE
  // ────────────────────────────────────────────────────────

  /**
   * Advance one month. Returns the event that happened (if any).
   * @param {string|null} forcedEventId - Force a specific event for testing
   * @returns {{ event: Object|null, priceChanges: Object }}
   */
  tick(forcedEventId = null) {
    if (this.state.isEnded) return null;

    const s = this.state;

    // Step 1: Pick an event
    const event = forcedEventId
      ? this.events.find(e => e.id === forcedEventId)
      : this._pickEvent();

    // Step 2: Apply market movement (base drift + event shock)
    const priceChanges = this._simulateMarket(event);

    // Step 3: Update portfolio values based on new prices
    this._updatePortfolioValues(priceChanges);

    // Step 4: Apply passive income (dividends, rent)
    this._applyPassiveIncome();

    // Step 5: Apply monthly living costs
    this._applyLivingCosts();

    // Step 6: Update stats
    this._updateStats();

    // Step 7: Advance time
    s.month++;
    if (s.month > 12) {
      s.month = 1;
      s.year++;
      s.stats.holdYears++;
    }

    // Step 8: Log market snapshot
    window.logTracker.marketSnapshot(
      `${s.year}Y${s.month}M`,
      { ...s.portfolio },
      { ...s.prices }
    );

    // Step 9: Check end conditions
    this._checkEndConditions();

    // Step 10: Check achievements
    this._checkAchievements();

    return { event, priceChanges };
  }

  /**
   * Randomly pick an event based on probability weights.
   * @returns {Object|null}
   */
  _pickEvent() {
    const roll = Math.random();
    let cumulative = 0;

    // Shuffle to avoid bias
    const shuffled = [...this.events].sort(() => Math.random() - 0.5);

    for (const event of shuffled) {
      cumulative += event.probability || 0.1;
      if (roll < cumulative) return event;
    }

    // No event this month (~30% of months)
    if (Math.random() < 0.3) return null;

    // Return routine event
    return this.events.find(e => e.type === 'routine') || null;
  }

  /**
   * Simulate market price changes for this month.
   * Base: random walk with style-adjusted volatility + event shock
   * @param {Object|null} event
   * @returns {Object} price changes in %
   */
  _simulateMarket(event) {
    // Base monthly drift (annualized ~7% for stocks, ~2% for real estate)
    const baseDrift = {
      twStock:    this._randNormal(0.006, 0.05),
      usStock:    this._randNormal(0.007, 0.045),
      crypto:     this._randNormal(0.01,  0.15),
      realEstate: this._randNormal(0.002, 0.015),
      gold:       this._randNormal(0.002, 0.025)
    };

    // Event shock (as % change)
    const eventShock = {
      twStock: 0, usStock: 0, crypto: 0, realEstate: 0, gold: 0
    };

    if (event && event.effects) {
      Object.keys(event.effects).forEach(asset => {
        if (asset in eventShock) {
          eventShock[asset] = (event.effects[asset] || 0) / 100;
        }
      });
    }

    // Combined change
    const changes = {};
    for (const asset of Object.keys(baseDrift)) {
      changes[asset] = baseDrift[asset] + eventShock[asset];
      this.state.prices[asset] *= (1 + changes[asset]);
      this.state.prices[asset]  = Math.max(1, this.state.prices[asset]); // floor at 1
    }

    return changes;
  }

  /**
   * Box-Muller normal distribution sampler.
   */
  _randNormal(mean = 0, stdDev = 1) {
    const u1 = Math.random(), u2 = Math.random();
    const z  = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    return z * stdDev + mean;
  }

  /**
   * Recompute portfolio values based on price changes.
   */
  _updatePortfolioValues(changes) {
    const { portfolio, units } = this.state;
    portfolio.twStock    = Math.round(units.twStock    * this.state.prices.twStock    * 1000);
    portfolio.usStock    = Math.round(units.usStock    * this.state.prices.usStock    * 1000);
    portfolio.crypto     = Math.round(units.crypto     * this.state.prices.crypto     * 10000);
    portfolio.realEstate = Math.round(units.realEstate * this.state.prices.realEstate * 5000000);
    portfolio.gold       = Math.round(units.gold       * this.state.prices.gold       * 2000);
  }

  /**
   * Apply monthly passive income (dividends + rental income).
   */
  _applyPassiveIncome() {
    const { portfolio, stats } = this.state;
    const monthlyDividendRate = 0.003;  // ~3.6% annual
    const monthlyRentalRate   = 0.004;  // ~4.8% annual yield

    const dividends = Math.round(
      (portfolio.twStock + portfolio.usStock) * monthlyDividendRate
    );
    const rental = Math.round(portfolio.realEstate * monthlyRentalRate);

    portfolio.cash    += dividends + rental;
    stats.dividendsEarned += dividends + rental;
  }

  /**
   * Deduct monthly living costs (~NTD 30,000/month).
   */
  _applyLivingCosts() {
    const livingCost = 30000;
    this.state.portfolio.cash = Math.max(0, this.state.portfolio.cash - livingCost);
  }

  /**
   * Recalculate stats after each tick.
   */
  _updateStats() {
    const { stats, portfolio } = this.state;
    const netWorth = this.getNetWorth();

    // Monthly return
    const prevNetWorth = stats.monthlyReturns.length > 0
      ? stats.monthlyReturns[stats.monthlyReturns.length - 1]
      : this.state.startNetWorth;
    stats.monthlyReturns.push(netWorth);

    // Peak and MDD
    if (netWorth > stats.peakNetWorth) stats.peakNetWorth = netWorth;
    const drawdown = (stats.peakNetWorth - netWorth) / stats.peakNetWorth * 100;
    if (drawdown > stats.mdd) stats.mdd = drawdown;
  }

  /**
   * Check if game-ending conditions are met.
   */
  _checkEndConditions() {
    const netWorth = this.getNetWorth();
    const s = this.state;

    // Bankruptcy: net worth below 50,000
    if (netWorth < 50000) {
      this._endGame('破產', '你的資產已跌至谷底，無力回天。');
      return;
    }

    // Total margin call / forced liquidation
    if (s.portfolio.cash <= 0 && netWorth < s.startNetWorth * 0.1) {
      this._endGame('融資斷頭', '所有現金耗盡，持倉被強制平倉。');
      return;
    }

    // Retirement: 35 years (420 months) or net worth > 50x start
    if (s.year > 35) {
      this._endGame('退休', '你走完了 35 年的投資人生。');
      return;
    }

    if (netWorth >= s.startNetWorth * 50) {
      this._endGame('爆富退休', '你的資產成長了 50 倍，成為傳奇投資人！');
      return;
    }
  }

  /**
   * End the game and trigger upload.
   */
  _endGame(reason, message) {
    this.state.isEnded    = true;
    this.state.endReason  = reason;
    this.state.endMessage = message;

    // Trigger Firestore upload (fire-and-forget)
    if (window.authService?.user) {
      window.dbService.uploadGameSession(
        window.authService.user,
        this.getFinalState(),
        window.logTracker.getLogs()
      );
    }
  }

  /**
   * Check and unlock achievements.
   */
  _checkAchievements() {
    const s = this.state;
    const nw = this.getNetWorth();
    const total = nw;
    const port = s.portfolio;

    const conditionMap = {
      'a001': s.stats.holdYears >= 3 && s.stats.stopLossCount === 0,
      'a002': s.stats.mdd < 10,
      'a003': nw >= s.startNetWorth * 100,
      'a004': port.realEstate > 0 && (s.stats.dividendsEarned / (nw - s.startNetWorth + 1)) >= 0.5,
      'a005': this._isDiversified(),
      'a006': s.stats.survivedBlackswan,
      'a007': nw <= s.startNetWorth * 0.5,
      'a008': s.stats.bottomFishing,
      'a009': nw >= s.startNetWorth * 10, // simplified
      'a010': total > 0 && (port.crypto / total) >= 0.6
    };

    for (const achievement of this.achievements) {
      if (s.achievements.includes(achievement.id)) continue;
      if (conditionMap[achievement.id]) {
        s.achievements.push(achievement.id);
        window.logTracker.achievement(achievement.id, achievement.name);
        window.ui?.showAchievementUnlock?.(achievement);
      }
    }
  }

  /**
   * Check if portfolio is diversified (4 asset classes each 15-35%).
   */
  _isDiversified() {
    const nw = this.getNetWorth();
    if (nw <= 0) return false;
    const { portfolio } = this.state;
    const pcts = [
      portfolio.twStock / nw,
      portfolio.usStock / nw,
      portfolio.crypto  / nw,
      portfolio.realEstate / nw
    ];
    return pcts.every(p => p >= 0.15 && p <= 0.35);
  }

  // ────────────────────────────────────────────────────────
  // PLAYER ACTIONS
  // ────────────────────────────────────────────────────────

  /**
   * Player chooses a response to the current event.
   * @param {Object} event - The active event
   * @param {number} choiceIndex - Which choice was selected
   */
  applyEventChoice(event, choiceIndex) {
    const choice = event.choices[choiceIndex];
    if (!choice) return;

    const { portfolio, units, prices } = this.state;
    const netWorth = this.getNetWorth();

    // Apply effects
    const eff = choice.effect || {};

    // Cash income
    if (eff.cash) portfolio.cash += Math.round(netWorth * eff.cash);

    // Buy asset classes
    if (eff.twStock && eff.twStock > 0) {
      const spend = Math.round(Math.min(portfolio.cash, netWorth * eff.twStock));
      const newUnits = Math.floor(spend / (prices.twStock * 1000));
      if (newUnits > 0) {
        units.twStock    += newUnits;
        portfolio.cash   -= newUnits * prices.twStock * 1000;
        this.state.stats.totalBuys++;
        window.logTracker.buy('twStock', spend, prices.twStock, newUnits);
      }
    }
    if (eff.usStock && eff.usStock > 0) {
      const spend = Math.round(Math.min(portfolio.cash, netWorth * eff.usStock));
      const newUnits = Math.floor(spend / (prices.usStock * 1000));
      if (newUnits > 0) {
        units.usStock    += newUnits;
        portfolio.cash   -= newUnits * prices.usStock * 1000;
        this.state.stats.totalBuys++;
        window.logTracker.buy('usStock', spend, prices.usStock, newUnits);
      }
    }
    if (eff.crypto && eff.crypto > 0) {
      const spend = Math.round(Math.min(portfolio.cash, netWorth * eff.crypto));
      const newUnits = spend / (prices.crypto * 10000);
      if (newUnits > 0.0001) {
        units.crypto     += newUnits;
        portfolio.cash   -= spend;
        this.state.stats.totalBuys++;
        window.logTracker.buy('crypto', spend, prices.crypto, newUnits);
      }
    }
    if (eff.realEstate && eff.realEstate > 0) {
      const spend = Math.round(Math.min(portfolio.cash, netWorth * eff.realEstate));
      const newUnits = spend / (prices.realEstate * 5000000);
      if (newUnits >= 0.01) {
        units.realEstate += newUnits;
        portfolio.cash   -= spend;
        this.state.stats.totalBuys++;
        window.logTracker.buy('realEstate', spend, prices.realEstate, newUnits);
      }
    }
    if (eff.gold && eff.gold > 0) {
      const spend = Math.round(Math.min(portfolio.cash, netWorth * eff.gold));
      const newUnits = Math.floor(spend / (prices.gold * 2000));
      if (newUnits > 0) {
        units.gold       += newUnits;
        portfolio.cash   -= newUnits * prices.gold * 2000;
        this.state.stats.totalBuys++;
        window.logTracker.buy('gold', spend, prices.gold, newUnits);
      }
    }

    // Handle black swan tracking
    if (event.type === 'blackswan') {
      if (this.getNetWorth() > 0) {
        this.state.stats.survivedBlackswan = true;
      }
    }

    // Log the choice
    window.logTracker.event(
      event.id,
      event.title,
      choiceIndex,
      choice.text,
      JSON.stringify(choice.effect)
    );

    // Recompute portfolio values
    this._updatePortfolioValues({});
    this._updateStats();
    this._checkAchievements();
  }

  /**
   * Player manually buys an asset.
   * @param {string} asset - 'twStock' | 'usStock' | 'crypto' | 'realEstate' | 'gold'
   * @param {number} amount - NTD amount to spend
   */
  buy(asset, amount) {
    const { portfolio, units, prices } = this.state;
    const spend = Math.min(amount, portfolio.cash);
    if (spend <= 0) return { success: false, reason: '現金不足' };

    const unitPrice = this._getUnitPrice(asset);
    const newUnits  = spend / unitPrice;

    if (newUnits < 0.0001) return { success: false, reason: '金額過小' };

    units[asset]     += newUnits;
    portfolio.cash   -= spend;
    this.state.stats.totalBuys++;

    window.logTracker.buy(asset, spend, prices[asset], newUnits);
    this._updatePortfolioValues({});
    this._updateStats();
    this._checkAchievements();

    return { success: true, units: newUnits, price: prices[asset] };
  }

  /**
   * Player manually sells an asset.
   * @param {string} asset
   * @param {number} pct - 0-1, percentage of holdings to sell
   */
  sell(asset, pct = 1) {
    const { portfolio, units, prices } = this.state;
    const sellUnits = units[asset] * pct;
    if (sellUnits <= 0) return { success: false, reason: '無持倉' };

    const proceeds = sellUnits * this._getUnitPrice(asset);
    const costBasis = (portfolio[asset] / units[asset]) * sellUnits; // simplified
    const profit    = proceeds - costBasis;

    units[asset]     -= sellUnits;
    portfolio.cash   += Math.round(proceeds);
    this.state.stats.totalSells++;

    window.logTracker.sell(asset, proceeds, prices[asset], profit);
    this._updatePortfolioValues({});
    this._updateStats();
    this._checkAchievements();

    return { success: true, proceeds: Math.round(proceeds), profit: Math.round(profit) };
  }

  _getUnitPrice(asset) {
    const { prices } = this.state;
    const map = {
      twStock:    prices.twStock    * 1000,
      usStock:    prices.usStock    * 1000,
      crypto:     prices.crypto     * 10000,
      realEstate: prices.realEstate * 5000000,
      gold:       prices.gold       * 2000
    };
    return map[asset] || 1;
  }

  // ────────────────────────────────────────────────────────
  // COMPUTED GETTERS
  // ────────────────────────────────────────────────────────

  /** Total net worth in NTD */
  getNetWorth() {
    const p = this.state.portfolio;
    return p.cash + p.twStock + p.usStock + p.crypto + p.realEstate + p.gold;
  }

  /** Annualized return rate */
  getAnnualReturn() {
    const months = (this.state.year - 1) * 12 + this.state.month;
    const years  = Math.max(months / 12, 0.083);
    const growthRate = this.getNetWorth() / this.state.startNetWorth;
    return (Math.pow(growthRate, 1 / years) - 1) * 100;
  }

  /** Get final state for upload */
  getFinalState() {
    return {
      month:        (this.state.year - 1) * 12 + this.state.month,
      netWorth:     this.getNetWorth(),
      startNetWorth: this.state.startNetWorth,
      stats:        this.state.stats,
      achievements: this.state.achievements,
      portfolio:    this.state.portfolio,
      endReason:    this.state.endReason,
      playerStyle:  this.state.playerStyle
    };
  }

  /** Format NTD number with 萬/億 */
  static formatNTD(value) {
    const abs = Math.abs(value);
    if (abs >= 100000000) return `${(value / 100000000).toFixed(2)} 億`;
    if (abs >= 10000)     return `${(value / 10000).toFixed(1)} 萬`;
    return `${value.toLocaleString()} 元`;
  }

  /** Format percentage */
  static formatPct(value, decimals = 1) {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(decimals)}%`;
  }
}

window.GameEngine = GameEngine;
window.gameEngine = new GameEngine();
