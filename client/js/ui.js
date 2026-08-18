// ============================================================
// InvestSim — UI Controller
// Manages all screen transitions and DOM rendering
// ============================================================

class UI {
  constructor() {
    this.currentScreen = 'splash';
    this.chartData     = [];
    this._toastTimers  = [];
    this.selectedStyle = 'balanced';
    this.chartCtx      = null;
  }

  // ────────────────────────────────────────────────────────
  // SCREEN MANAGEMENT
  // ────────────────────────────────────────────────────────

  showScreen(id) {
    const prev = document.querySelector('.screen.active');
    if (prev) {
      prev.classList.remove('active');
      prev.classList.add('exit');
      setTimeout(() => prev.classList.remove('exit'), 500);
    }

    const next = document.getElementById(`screen-${id}`);
    if (next) {
      setTimeout(() => {
        next.classList.add('active');
        this.currentScreen = id;
      }, 50);
    }
  }

  // ────────────────────────────────────────────────────────
  // SPLASH SCREEN
  // ────────────────────────────────────────────────────────

  updateSplashAuth(user) {
    const loginBtn  = document.getElementById('btn-google-login');
    const guestBtn  = document.getElementById('btn-guest');
    const userInfo  = document.getElementById('splash-user-info');
    const startBtn  = document.getElementById('btn-start-game');

    if (user) {
      if (loginBtn)  loginBtn.style.display  = 'none';
      if (userInfo)  userInfo.style.display  = 'flex';
      if (startBtn)  startBtn.textContent     = '繼續遊戲';

      const nameEl   = document.getElementById('splash-user-name');
      const avatarEl = document.getElementById('splash-user-avatar');
      if (nameEl)   nameEl.textContent  = user.displayName;
      if (avatarEl && user.photoURL) avatarEl.src = user.photoURL;
    } else {
      if (loginBtn) loginBtn.style.display = 'flex';
      if (userInfo) userInfo.style.display = 'none';
      if (startBtn) startBtn.textContent   = '以訪客開始';
    }
  }

  // ────────────────────────────────────────────────────────
  // GAME SCREEN
  // ────────────────────────────────────────────────────────

  /**
   * Render the full game UI from current engine state.
   */
  renderGame() {
    this.renderPortfolio();
    this.renderLifeStats();
    this.renderTicker();
    this.renderTimeLine();
    this.renderStats();
    
    // Handle childhood locked state
    const actionsPanel = document.querySelector('.panel-actions');
    const touchBtn = document.getElementById('btn-assistive-touch');
    if (window.gameEngine.state.age < 18) {
      if (actionsPanel) actionsPanel.classList.add('locked');
      if (touchBtn) touchBtn.style.display = 'none';
    } else {
      if (actionsPanel) actionsPanel.classList.remove('locked');
      if (touchBtn && window.innerWidth <= 768) touchBtn.style.display = 'flex';
    }
  }

  renderPortfolio() {
    const s  = window.gameEngine.state;
    const nw = window.gameEngine.getNetWorth();

    // Net worth
    const el = document.getElementById('portfolio-networth');
    if (el) {
      el.textContent = GameEngine.formatNTD(nw);
      el.className = 'portfolio-net-worth-value ' + (nw >= s.startNetWorth ? 'color-up' : 'color-down');
    }

    // Return badge
    const ret = document.getElementById('portfolio-return');
    if (ret) {
      const pct = s.startNetWorth > 0 ? (nw / s.startNetWorth - 1) * 100 : (nw > 0 ? 100 : 0);
      ret.textContent = GameEngine.formatPct(pct);
      ret.className   = 'stat-badge ' + (pct >= 0 ? 'stat-up' : 'stat-down');
    }

    // Asset breakdown
    const assets = [
      { key: 'cash',       icon: '💵', name: '現金', color: '' },
      { key: 'twStock',    icon: '🇹🇼', name: '台股', color: '' },
      { key: 'usStock',    icon: '🇺🇸', name: '美股', color: '' },
      { key: 'crypto',     icon: '₿',  name: '加密', color: '' },
      { key: 'realEstate', icon: '🏠', name: '房產', color: '' },
      { key: 'gold',       icon: '🥇', name: '黃金', color: '' }
    ];

    const list = document.getElementById('asset-list');
    if (!list) return;

    list.innerHTML = assets.map(a => {
      const val  = s.portfolio[a.key] || 0;
      const pct  = nw > 0 ? (val / nw * 100).toFixed(1) : 0;
      return `
        <div class="asset-item">
          <div class="asset-icon">${a.icon}</div>
          <div class="asset-info">
            <div class="asset-name">${a.name}</div>
            <div class="asset-share">${pct}% 配置</div>
          </div>
          <div class="asset-value">
            <div class="asset-amount">${GameEngine.formatNTD(val)}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderLifeStats() {
    const ls = window.gameEngine.state.lifeStats;
    const container = document.getElementById('life-stats-container');
    if (!container || !ls) return;

    const items = [
      { key: 'appearance', name: '顏值', icon: '✨' },
      { key: 'intelligence', name: '智力', icon: '🧠' },
      { key: 'constitution', name: '體質', icon: '💪' },
      { key: 'happiness', name: '快樂', icon: '😊' }
    ];

    container.innerHTML = items.map(i => `
      <div class="stat-cell">
        <div class="stat-cell-value" style="font-size: 1.1rem; text-shadow: 0 0 10px var(--c-accent-glow);">${i.icon} ${Math.max(0, ls[i.key])}</div>
        <div class="stat-cell-label">${i.name}</div>
      </div>
    `).join('');

    const seedEl = document.getElementById('dashboard-seed');
    if (seedEl) seedEl.textContent = window.gameEngine.state.seed;
  }

  renderTicker() {
    const prices = window.gameEngine.state.prices;

    const items = [
      { key: 'twStock',    label: 'TWSE',   icon: '' },
      { key: 'usStock',    label: 'S&P500',  icon: '' },
      { key: 'crypto',     label: 'BTC',    icon: '' },
      { key: 'realEstate', label: 'HOUSE',  icon: '' }
    ];

    const container = document.getElementById('market-ticker');
    if (!container) return;

    container.innerHTML = `<div class="ticker-grid">` + items.map(item => {
      const val  = prices[item.key];
      const pct  = ((val - 100) / 100 * 100).toFixed(2);
      const cls  = parseFloat(pct) >= 0 ? 'up' : 'down';
      return `
        <div class="ticker-item">
          <div class="ticker-name">${item.label}</div>
          <div class="ticker-value">${val.toFixed(1)}</div>
          <div class="ticker-change ${cls}">${GameEngine.formatPct(parseFloat(pct))}</div>
        </div>
      `;
    }).join('') + `</div>`;
  }

  renderTimeLine() {
    const s = window.gameEngine.state;
    const timeEl = document.getElementById('game-time');
    if (timeEl) {
      if (s.age < 18) {
        timeEl.textContent = `第 ${s.year} 年 ( ${s.age} 歲 )`;
      } else {
        timeEl.textContent = `第 ${s.year} 年 ${s.month} 月 ( ${s.age} 歲 )`;
      }
    }

    const nextBtn = document.getElementById('btn-next-month');
    if (nextBtn) {
      nextBtn.innerHTML = s.age < 18 ? '長大一歲 ▶' : '下一個月 ▶';
    }

    // Year progress bar
    const progressEl = document.getElementById('year-progress');
    if (progressEl) {
      progressEl.style.width = s.age < 18 ? '100%' : `${(s.month / 12 * 100).toFixed(1)}%`;
    }

    // Life progress (up to 100 max)
    const lifeEl = document.getElementById('life-progress');
    if (lifeEl) {
      lifeEl.style.width = `${Math.min(s.age, 100)}%`;
    }
  }

  renderStats() {
    const s  = window.gameEngine.state;

    const map = {
      'stat-mdd':    `${s.stats.mdd.toFixed(1)}%`,
      'stat-annual': `${GameEngine.formatPct(window.gameEngine.getAnnualReturn())}`,
      'stat-months': `${(s.year - 1) * 12 + s.month}`,
      'stat-achievements': `${s.achievements?.length || 0}`
    };

    for (const [id, val] of Object.entries(map)) {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    }
  }

  // ────────────────────────────────────────────────────────
  // EVENT RENDERING
  // ────────────────────────────────────────────────────────

  /**
   * Render a market event card in the event feed.
   * @param {Object|null} event
   * @param {Object} priceChanges
   */
  renderEvent(event, priceChanges) {
    const feed = document.getElementById('event-feed');
    if (!feed) return;

    // Collapse existing cards into a single line summary
    const existingCards = feed.querySelectorAll('.event-card, .quiet-card');
    existingCards.forEach(c => {
      let title = c.querySelector('.event-title')?.textContent || '平靜的一個月';
      let desc = c.querySelector('.event-desc')?.textContent || '';
      const meta = c.querySelector('.event-meta')?.textContent || '';
      const selectedChoice = c.querySelector('.event-choices strong')?.textContent || '';
      const hasButtons = c.querySelectorAll('.choice-btn').length > 0;
      
      // If the title is an English ID from Life-TW (e.g. CHAIN_YAKUZA), use the description instead
      if (/^[A-Za-z_0-9]+$/.test(title) && desc) {
        title = desc;
      }
      
      c.className = 'collapsed-log';
      if (selectedChoice) {
        c.innerHTML = `<span class="log-meta">[${meta}]</span> <span class="log-title">${title}</span> — <span class="log-choice" style="color:var(--c-accent)">選擇了: ${selectedChoice}</span>`;
      } else if (hasButtons) {
        c.innerHTML = `<span class="log-meta">[${meta}]</span> <span class="log-title">${title}</span> — <span class="log-choice" style="color:var(--c-text-3)">(未作選擇)</span>`;
      } else {
        c.innerHTML = `<span class="log-meta">[${meta}]</span> <span class="log-title">${title}</span>`;
      }
    });

    if (!event) {
      // Quiet month — show a simple market update
      const card = document.createElement('div');
      card.className = 'quiet-card'; // Use quiet-card to distinguish before collapse
      const nw   = window.gameEngine.getNetWorth();
      const s    = window.gameEngine.state;
      const pct  = s.startNetWorth > 0 ? (nw / s.startNetWorth - 1) * 100 : (nw > 0 ? 100 : 0);
      card.innerHTML = `
        <div class="event-header">
          <div class="event-icon neutral">📊</div>
          <div>
            <div class="event-title">平靜的一個月</div>
            <div class="event-meta">第 ${s.year} 年 ${s.month} 月</div>
          </div>
        </div>
        <div class="event-desc">
          市場平穩波動，無重大事件。保持投資紀律，持續定期定額是這個月最佳策略。
        </div>
        <div class="flex gap-3 items-center">
          <span class="stat-badge ${pct >= 0 ? 'stat-up' : 'stat-down'}">
            ${GameEngine.formatPct(pct)} 總報酬
          </span>
          <span class="caption">淨值 ${GameEngine.formatNTD(nw)}</span>
        </div>
      `;
      feed.prepend(card);
      return;
    }

    const card = document.createElement('div');
    card.className = 'event-card';

    const iconClass = event.sentiment === 'positive' ? 'positive'
      : event.sentiment === 'negative' ? 'negative'
      : event.sentiment === 'critical' ? 'negative'
      : 'neutral';

    const choicesHTML = event.choices.map((c, i) => `
      <button class="choice-btn" data-event-id="${event.id}" data-choice="${i}">
        <span>${c.text}</span>
        <span class="caption" style="flex-shrink:0">${this._riskLabel(c.risk)}</span>
      </button>
    `).join('');

    let displayTitle = event.title;
    // If the title is just an English ID (Life-TW auto-generated), show "人生軌跡" instead
    if (/^[A-Za-z_0-9]+$/.test(displayTitle)) {
      displayTitle = "人生軌跡";
    }

    card.innerHTML = `
      <div class="event-header">
        <div class="event-icon ${iconClass}">${event.icon || '📰'}</div>
        <div>
          <div class="event-title">${displayTitle}</div>
          <div class="event-meta">${window.gameEngine.state.year} 年 ${window.gameEngine.state.month} 月</div>
        </div>
      </div>
      <div class="event-desc">${event.description}</div>
      <div class="event-choices">
        ${choicesHTML}
      </div>
    `;

    // Bind choice buttons
    card.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const choiceIdx = parseInt(btn.dataset.choice);
        window.gameEngine.applyEventChoice(event, choiceIdx);
        const choice = event.choices[choiceIdx];
        const choicesContainer = card.querySelector('.event-choices');

        // Build effect summary from choice data
        const eff = choice.effect || {};
        const effectBadges = [];
        const statLabels = { appearance:'顏值', intelligence:'智力', constitution:'體質', happiness:'快樂' };
        const mktLabels  = { twStock:'台股', usStock:'美股', crypto:'加密', realEstate:'房產', gold:'黃金', cash:'現金' };
        Object.entries(statLabels).forEach(([k, label]) => {
          if (eff[k]) effectBadges.push({ label, val: eff[k], isStat: true });
        });
        Object.entries(mktLabels).forEach(([k, label]) => {
          if (eff[k]) effectBadges.push({ label, val: eff[k], isStat: false });
        });

        const badgesHTML = effectBadges.map(b => {
          const positive = b.val > 0;
          const display  = positive ? `+${b.isStat ? b.val : (b.val*100).toFixed(0)+'%'}` : `${b.isStat ? b.val : (b.val*100).toFixed(0)+'%'}`;
          const color = positive ? 'var(--c-up)' : 'var(--c-down)';
          const bg    = positive ? 'hsla(142,70%,45%,0.12)' : 'hsla(355,75%,55%,0.12)';
          return `<span style="display:inline-flex;align-items:center;gap:3px;padding:2px 7px;border-radius:100px;font-size:0.72rem;font-weight:700;background:${bg};color:${color};">${b.label} ${display}</span>`;
        }).join('');

        choicesContainer.innerHTML = `
          <div style="border-left: 2px solid var(--c-accent); padding-left: 8px;">
            <div class="caption" style="color: var(--c-text-2); margin-bottom:5px;">你選擇了：<strong style="color: var(--c-text);">${choice.text}</strong></div>
            ${effectBadges.length > 0 ? `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:4px;">${badgesHTML}</div>` : ''}
          </div>
        `;
        this.renderPortfolio();
        this.renderStats();
      });
    });

    feed.prepend(card);
    feed.scrollTop = 0;

    // Keep feed from growing too large (allow up to 50 logs for history)
    while (feed.children.length > 50) {
      feed.removeChild(feed.lastChild);
    }
  }

  _riskLabel(risk) {
    const map = {
      extreme: '⚠️ 極高風險',
      high:    '🔴 高風險',
      medium:  '🟡 中風險',
      low:     '🟢 低風險',
      safe:    '✅ 安全',
      none:    '—'
    };
    return map[risk] || '—';
  }

  // ────────────────────────────────────────────────────────
  // ACHIEVEMENT UNLOCK POPUP
  // ────────────────────────────────────────────────────────

  showAchievementUnlock(achievement) {
    this.showToast(
      `🎉 成就解鎖：${achievement.icon || '🏆'} ${achievement.title || achievement.name || '成就'}！`,
      'success',
      4000
    );
  }

  // ────────────────────────────────────────────────────────
  // END SCREEN
  // ────────────────────────────────────────────────────────

  renderEndScreen() {
    const s  = window.gameEngine.state;
    const nw = window.gameEngine.getNetWorth();
    const pct = (s.startNetWorth && s.startNetWorth > 0)
      ? ((nw / s.startNetWorth - 1) * 100)
      : (nw > 0 ? 100 : (nw < 0 ? -100 : 0));

    const titleEl   = document.getElementById('end-title');
    const reasonEl  = document.getElementById('end-reason');
    const nwEl      = document.getElementById('end-networth');
    const retEl     = document.getElementById('end-return');
    const mddEl     = document.getElementById('end-mdd');
    const monthsEl  = document.getElementById('end-months');
    const achGrid   = document.getElementById('achievements-grid');

    if (titleEl)  titleEl.textContent  = s.endReason || '人生總結';
    if (reasonEl) reasonEl.textContent = s.endMessage || '';
    if (nwEl)     nwEl.textContent     = GameEngine.formatNTD(nw);
    if (retEl)    retEl.textContent    = GameEngine.formatPct(pct);
    if (mddEl)    mddEl.textContent    = `${(s.stats.mdd || 0).toFixed(1)}%`;
    if (monthsEl) monthsEl.textContent = `${(s.year - 1) * 12 + s.month}`;

    if (achGrid && s.achievements.length > 0) {
      achGrid.innerHTML = s.achievements.map((id, i) => {
        const ach = window.gameEngine.achievements.find(a => a.id === id);
        if (!ach) return '';
        return `
          <div class="achievement-chip" style="animation-delay: ${i * 0.1}s">
            <div class="achievement-icon">${ach.icon || '🏆'}</div>
            <div class="achievement-name">${ach.title || ach.name || '成就'}</div>
          </div>
        `;
      }).join('');
    }

    this.showScreen('end');
  }

  // ────────────────────────────────────────────────────────
  // NET WORTH CHART
  // ────────────────────────────────────────────────────────

  updateChart(netWorth) {
    this.chartData.push(netWorth);

    const canvas = document.getElementById('networth-chart');
    if (!canvas) return;

    const ctx  = canvas.getContext('2d');
    const W    = canvas.offsetWidth;
    const H    = canvas.offsetHeight || 80;
    canvas.width  = W * devicePixelRatio;
    canvas.height = H * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const data = this.chartData;
    if (data.length < 2) return;

    const min = Math.min(...data) * 0.95;
    const max = Math.max(...data) * 1.05;
    const range = max - min || 1;

    ctx.clearRect(0, 0, W, H);

    // Gradient fill
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0,   'hsla(220,90%,60%,0.3)');
    grad.addColorStop(1,   'hsla(220,90%,60%,0)');

    ctx.beginPath();
    data.forEach((v, i) => {
      const x = (i / (data.length - 1)) * W;
      const y = H - ((v - min) / range * H * 0.85) - H * 0.05;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });

    // Close path for fill
    ctx.lineTo(W, H);
    ctx.lineTo(0, H);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = (i / (data.length - 1)) * W;
      const y = H - ((v - min) / range * H * 0.85) - H * 0.05;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = 'hsl(220,90%,60%)';
    ctx.lineWidth   = 2;
    ctx.lineJoin    = 'round';
    ctx.stroke();
  }

  // ────────────────────────────────────────────────────────
  // TOAST NOTIFICATIONS
  // ────────────────────────────────────────────────────────

  showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast      = document.createElement('div');
    toast.className  = `toast toast-${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    const timer = setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, duration);

    this._toastTimers.push(timer);
  }

  // ────────────────────────────────────────────────────────
  // TRADE MODAL
  // ────────────────────────────────────────────────────────

  showTradeModal(action, asset, assetName) {
    const overlay = document.getElementById('trade-modal');
    const titleEl = document.getElementById('trade-modal-title');
    const assetEl = document.getElementById('trade-asset-name');
    const priceEl = document.getElementById('trade-price');
    const balEl   = document.getElementById('trade-balance');
    const inputEl = document.getElementById('trade-amount');
    const confirmEl = document.getElementById('trade-confirm-btn');

    if (!overlay) return;

    const prices = window.gameEngine.state.prices;
    const price  = window.gameEngine._getUnitPrice(asset);
    const cash   = window.gameEngine.state.portfolio.cash;

    if (titleEl)   titleEl.textContent  = action === 'buy' ? '買入' : '賣出';
    if (assetEl)   assetEl.textContent  = assetName;
    if (priceEl)   priceEl.textContent  = GameEngine.formatNTD(price);
    if (balEl)     balEl.textContent    = GameEngine.formatNTD(action === 'buy' ? cash : window.gameEngine.state.portfolio[asset]);
    if (inputEl)   inputEl.value        = '';

    overlay.classList.add('visible');

    // Bind confirm
    if (confirmEl) {
      confirmEl.onclick = () => {
        const amount = parseInt(inputEl?.value || 0) * 10000;
        if (amount <= 0) { this.showToast('請輸入有效金額', 'error'); return; }

        let result;
        if (action === 'buy') {
          result = window.gameEngine.buy(asset, amount);
        } else {
          result = window.gameEngine.sell(asset, Math.min(1, amount / (window.gameEngine.state.portfolio[asset] || 1)));
        }

        if (result.success) {
          this.showToast(
            action === 'buy'
              ? `✅ 買入成功！${GameEngine.formatNTD(amount)}`
              : `✅ 賣出成功！獲利 ${GameEngine.formatNTD(result.profit)}`,
            'success'
          );
          this.renderPortfolio();
          this.renderStats();
          overlay.classList.remove('visible');
        } else {
          this.showToast(`❌ ${result.reason}`, 'error');
        }
      };
    }
  }

  closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.remove('visible');
  }
}

window.ui = new UI();
