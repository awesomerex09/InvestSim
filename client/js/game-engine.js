// ============================================================
// InvestSim — Game Engine
// Core simulation: market prices, event system, achievements
// ============================================================

class GameEngine {
  constructor() {
    // ── Config (loaded from Firestore or local defaults) ──
    this.events       = [];
    this.achievements = [];
    this.endings      = [];

    // ── Game State ────────────────────────────────────────
    this.state = null;
  }

  // ────────────────────────────────────────────────────────
  // INITIALISATION
  // ────────────────────────────────────────────────────────

  /**
   * Load dynamic config and set up a fresh game state.
   * @param {Object} opts
   * @param {string} opts.seed - Random seed for generating life stats
   */
  async newGame({ seed = '' } = {}) {
    if (!seed) {
      seed = Math.random().toString(36).substring(2, 8).toUpperCase();
    }
    
    // Simple Hash for Seed (cyrb128 logic)
    let h1 = 1779033703;
    for (let i = 0; i < seed.length; i++) {
      let k = seed.charCodeAt(i);
      h1 = Math.imul(h1 ^ k, 597399067);
    }
    let seedNum = (h1 ^ (h1 >>> 16)) >>> 0;
    
    // PRNG (Mulberry32)
    const random = () => {
      let t = seedNum += 0x6D2B79F5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    // Fetch config
    const config = await window.dbService.fetchDynamicConfig();
    this.events       = (config.events || []).filter(e => e.enabled !== false);
    this.achievements = (config.achievements || []).filter(a => a.enabled !== false);
    this.endings      = (config.endings || []).filter(en => en.enabled !== false);

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

    // Generate Life Stats (1-100)
    const randInt = (min, max) => Math.floor(random() * (max - min + 1)) + min;
    const appearance = randInt(20, 100);
    const intelligence = randInt(20, 100);
    const constitution = randInt(20, 100);
    const happiness = 80;
    
    const birthplaces = ['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市', '新竹市', '花蓮縣', '台東縣'];
    const birthplace = birthplaces[randInt(0, birthplaces.length - 1)];
    
    // At birth, you have 0 cash. You get allowance later.
    const cashNTD = 0;

    this.state = {
      // Meta
      month:        1,
      year:         1,
      age:          0,
      seed:         seed,
      birthplace:   birthplace,
      
      // Life Stats
      lifeStats: {
        appearance,
        intelligence,
        constitution,
        happiness
      },

      startNetWorth: cashNTD,

      // Portfolio (in NTD value)
      portfolio: {
        cash:       cashNTD,
        twStock:    0,
        usStock:    0,
        crypto:     0,
        realEstate: 0,
        gold:       0
      },

      // Units held (shares / units)
      units: {
        twStock:    0,
        usStock:    0,
        crypto:     0,
        realEstate: 0,
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

      // Events triggered this game (IDs)
      triggeredEvents: [],

      // Current active event (if any)
      activeEvent:   null,

      // End state
      isEnded:       false,
      endReason:     null,

      // Random seed (for reproducibility)
      // seed is already set above
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

    // Step 2: Evaluate effectStr if present (this handles custom logic and returns market shocks)
    let marketShock = {};
    if (event && event.effectStr) {
      try {
        const checkFn = new Function('s', event.effectStr);
        const result = checkFn(s);
        if (result && typeof result === 'object') {
          marketShock = result;
        }
      } catch (e) {
        console.warn(`Event ${event.id} effectStr error:`, e);
      }
    } else if (event && event.effects) {
      // Backward compatibility for old events with static effects
      const eff = event.effects;
      if (eff.appearance) s.lifeStats.appearance += parseInt(eff.appearance);
      if (eff.intelligence) s.lifeStats.intelligence += parseInt(eff.intelligence);
      if (eff.constitution) s.lifeStats.constitution += parseInt(eff.constitution);
      if (eff.happiness) s.lifeStats.happiness += parseInt(eff.happiness);
      if (eff.cash) s.portfolio.cash += parseInt(eff.cash) * 10000;
      marketShock = eff;
    }

    // Mark event as triggered
    if (event && !s.triggeredEvents.includes(event.id)) {
      s.triggeredEvents.push(event.id);
    }

    // Step 3: Apply market movement (base drift + event shock)
    const priceChanges = this._simulateMarket(marketShock);

    // Step 4: Update portfolio values based on new prices
    this._updatePortfolioValues(priceChanges);

    // Step 5: Apply passive income (dividends, rent)
    this._applyPassiveIncome();

    // Step 6: Apply monthly living costs
    this._applyLivingCosts();

    // Step 7: Update stats
    this._updateStats();

    // Step 8: Advance time
    if (s.age < 18) {
      s.year++;
      s.age++;
    } else {
      s.month++;
      if (s.month > 12) {
        s.month = 1;
        s.year++;
        s.age++;
        s.stats.holdYears++;
      }
    }

    // Step 9: Log market snapshot
    window.logTracker.marketSnapshot(
      `${s.year}Y${s.month}M`,
      { ...s.portfolio },
      { ...s.prices }
    );

    // Step 10: Check end conditions
    this._checkEndConditions();

    // Step 11: Check achievements
    this._checkAchievements();

    // Step 12: Auto-save locally
    this.saveState();

    return { event, priceChanges };
  }

  /**
   * Randomly pick an event based on probability weights.
   * @returns {Object|null}
   */
  _pickEvent() {
    const s = this.state;
    
    // Filter events by stat requirements, age_range, and prerequisites
    let validEvents = this.events.filter(e => {
      // Check age range
      if (e.triggerType === 'age_range') {
        if (s.age < (e.minAge || 0) || s.age > (e.maxAge || 100)) return false;
      }
      
      // Check prerequisites
      if (e.prerequisites && e.prerequisites.length > 0) {
        const hasAllReqs = e.prerequisites.every(req => s.triggeredEvents.includes(req));
        if (!hasAllReqs) return false;
      }

      // Check legacy statReq
      if (!e.statReq || e.statReq.stat === 'none') return true;
      const req = e.statReq;
      if (req.stat === 'appearance') return s.lifeStats.appearance >= req.min;
      if (req.stat === 'intelligence') return s.lifeStats.intelligence >= req.min;
      if (req.stat === 'constitution') return s.lifeStats.constitution >= req.min;
      if (req.stat === 'happiness') return s.lifeStats.happiness >= req.min;
      return true;
    });

    // Check fixed age events first
    // Note: since age < 18 ticks by year, we just check if it's month 1 (or age < 18 which is always month 1)
    if (s.month === 1 || s.age < 18) {
      const fixedEvent = validEvents.find(e => e.triggerType === 'fixed_age' && e.triggerAge === s.age && !s.triggeredEvents.includes(e.id));
      if (fixedEvent) return fixedEvent;
    }

    // Filter out fixed events for random pool
    validEvents = validEvents.filter(e => e.triggerType !== 'fixed_age');

    const roll = Math.random();
    let cumulative = 0;

    // Shuffle to avoid bias
    const shuffled = [...validEvents].sort(() => Math.random() - 0.5);

    for (const event of shuffled) {
      cumulative += event.probability || 0.1;
      if (roll < cumulative) return event;
    }

    // No event this month (~30% of months)
    if (Math.random() < 0.3) return null;

    // Return routine event
    return validEvents.find(e => e.type === 'routine') || null;
  }

  /**
   * Simulate market price changes for this month.
   * Base: random walk with style-adjusted volatility + event shock
   * @param {Object} marketShock
   * @returns {Object} price changes in %
   */
  _simulateMarket(marketShock) {
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

    if (marketShock) {
      Object.keys(marketShock).forEach(asset => {
        if (asset in eventShock) {
          eventShock[asset] = (marketShock[asset] || 0) / 100;
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
    if (this.state.age < 18) return; // 童年由父母養育
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

    // Check dynamic endings from config
    for (const ending of this.endings) {
      if (!ending.conditionStr) continue;
      try {
        const isTriggered = new Function('s', 'netWorth', `return (${ending.conditionStr});`)(s, netWorth);
        if (isTriggered) {
          this._endGame(ending.title, ending.description);
          return;
        }
      } catch (err) {
        console.warn(`[Engine] Failed to evaluate ending ${ending.id}`, err);
      }
    }

    // Natural Death is hardcoded because it relies on complex probability
    if (this._checkDeath()) {
      this._endGame('壽終正寢', `你走完了 ${s.age} 年的漫長人生。`);
      return;
    }
  }

  /**
   * Check for natural death probability.
   */
  _checkDeath() {
    const s = this.state;
    // Only roll once a year (at month 1, or during childhood where it ticks by year)
    if (s.age >= 18 && s.month !== 1) return false;

    let deathChance = 0;
    if (s.age >= 100) deathChance = 0.5; // 50% chance each year
    else if (s.age >= 90) deathChance = 0.15;
    else if (s.age >= 80) deathChance = 0.05;
    else if (s.age >= 70) deathChance = 0.02;
    else if (s.age >= 60) deathChance = 0.005;
    else if (s.age >= 50) deathChance = 0.001;
    else if (s.age >= 30) deathChance = 0.0005;
    else deathChance = 0.0001;

    // Constitution modifier (con 50 is 1x, con 100 is 0.2x, con 0 is 5x)
    const conMod = Math.max(0.1, (110 - s.lifeStats.constitution) / 60);
    deathChance *= conMod;

    return Math.random() < deathChance;
  }

  /**
   * End the game and trigger upload.
   */
  _endGame(reason, message) {
    this.state.isEnded    = true;
    this.state.endReason  = reason;
    this.state.endMessage = message;
    
    this.clearState();

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

    for (const achievement of this.achievements) {
      if (s.achievements.includes(achievement.id)) continue;
      
      let conditionMet = false;
      try {
        // Evaluate the dynamic condition string (e.g., 's.age >= 30 && nw > 1000000')
        // We provide s, nw, total, port in the scope
        const checkFn = new Function('s', 'nw', 'total', 'port', `return ${achievement.conditionStr};`);
        conditionMet = checkFn(s, nw, total, port);
      } catch (e) {
        console.warn(`Achievement ${achievement.id} condition error:`, e);
      }

      if (conditionMet) {
        s.achievements.push(achievement.id);
        window.logTracker.achievement(achievement.id, achievement.title);
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
    const s = this.state;

    // Apply effects
    let eff = {};
    if (choice.effectStr) {
      try {
        const checkFn = new Function('s', 'nw', choice.effectStr);
        const result = checkFn(s, netWorth);
        if (result && typeof result === 'object') {
          eff = result;
        }
      } catch (e) {
        console.warn(`Choice effectStr error:`, e);
      }
    } else {
      eff = choice.effect || {};
    }

    // Life Stats
    if (eff.appearance) s.lifeStats.appearance += parseInt(eff.appearance);
    if (eff.intelligence) s.lifeStats.intelligence += parseInt(eff.intelligence);
    if (eff.constitution) s.lifeStats.constitution += parseInt(eff.constitution);
    if (eff.happiness) s.lifeStats.happiness += parseInt(eff.happiness);

    // Cash income
    // If cash > 10 it's likely absolute (萬), otherwise relative percentage of net worth
    if (eff.cash) {
      if (Math.abs(eff.cash) > 10) {
        portfolio.cash += eff.cash * 10000;
      } else {
        portfolio.cash += Math.round(netWorth * eff.cash);
      }
    }

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

  // ────────────────────────────────────────────────────────
  // LOCAL SAVE SYSTEM
  // ────────────────────────────────────────────────────────
  
  saveState() {
    if (!this.state || this.state.isEnded) return;
    try {
      const saveData = {
        state: this.state,
        logs: window.logTracker ? window.logTracker.getLogs() : []
      };
      localStorage.setItem('investsim_save', JSON.stringify(saveData));
    } catch (e) {
      console.warn('Failed to save game state', e);
    }
  }

  async loadState() {
    try {
      const raw = localStorage.getItem('investsim_save');
      if (!raw) return false;
      
      const saveData = JSON.parse(raw);
      if (!saveData || !saveData.state) return false;
      
      // Re-fetch config to ensure events/achievements are loaded
      const config = await window.dbService.fetchDynamicConfig();
      this.events = config.events;
      this.achievements = config.achievements;
      
      this.state = saveData.state;
      
      // Restore logs
      if (window.logTracker && saveData.logs) {
        window.logTracker.logs = saveData.logs;
      }
      return true;
    } catch (e) {
      console.error('Failed to load game state', e);
      return false;
    }
  }
  
  clearState() {
    localStorage.removeItem('investsim_save');
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
