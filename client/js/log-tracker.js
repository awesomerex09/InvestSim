// ============================================================
// InvestSim — Log Tracker
// Silently records all player decisions for analytics upload
// ============================================================

class LogTracker {
  constructor() {
    this.logs = [];
    this.sessionStart = Date.now();
  }

  /**
   * Record a player action.
   * @param {string} type - 'buy' | 'sell' | 'event' | 'skip' | 'achievement'
   * @param {Object} data - Relevant data for this log entry
   */
  record(type, data) {
    this.logs.push({
      t:    Date.now() - this.sessionStart, // ms since session start
      type,
      ...data
    });
  }

  /** Record a buy action */
  buy(asset, amount, price, quantity) {
    this.record('buy', { asset, amount, price, quantity });
  }

  /** Record a sell action */
  sell(asset, amount, price, profit) {
    this.record('sell', { asset, amount, price, profit });
  }

  /** Record when player encounters and responds to an event */
  event(eventId, eventTitle, choiceIndex, choiceText, effectSummary) {
    this.record('event', { eventId, eventTitle, choiceIndex, choiceText, effectSummary });
  }

  /** Record when player skips a month */
  skip(month, netWorth) {
    this.record('skip', { month, netWorth });
  }

  /** Record an achievement unlock */
  achievement(achievementId, achievementName) {
    this.record('achievement', { achievementId, achievementName });
  }

  /** Record market snapshot (once per game month) */
  marketSnapshot(month, portfolio, prices) {
    this.record('market', { month, portfolio, prices });
  }

  /**
   * Get all logs (for upload).
   * @returns {Array}
   */
  getLogs() {
    return this.logs;
  }

  /**
   * Clear all logs (for new game).
   */
  reset() {
    this.logs = [];
    this.sessionStart = Date.now();
  }
}

window.logTracker = new LogTracker();
