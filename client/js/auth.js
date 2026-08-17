// ============================================================
// InvestSim — Authentication Module
// Handles Google Sign-In and auth state management
// ============================================================

class AuthService {
  constructor() {
    this.app    = null;
    this.auth   = null;
    this.user   = null;
    this._onChangeCallbacks = [];
    this._initialized = false;
  }

  /**
   * Initialize Firebase Auth.
   * Must be called AFTER firebase-config.js is loaded.
   */
  async init() {
    if (this._initialized) return;

    // Check if Firebase config is real (not placeholder)
    if (window.firebaseConfig.apiKey === "YOUR_API_KEY") {
      console.warn('[Auth] Firebase is not configured. Running in offline/guest mode.');
      this._initialized = true;
      return;
    }

    // Dynamically import Firebase SDK (CDN)
    const { initializeApp }   = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
      = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');

    this.app  = initializeApp(window.firebaseConfig);
    this.auth = getAuth(this.app);
    this._GoogleAuthProvider = GoogleAuthProvider;
    this._signInWithPopup = signInWithPopup;
    this._signOut = signOut;

    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
      this._onChangeCallbacks.forEach(cb => cb(user));
    });

    this._initialized = true;
  }

  /**
   * Sign in with Google popup.
   * @returns {Promise<firebase.User>}
   */
  async signInWithGoogle() {
    if (!this.auth) throw new Error('Auth not initialized');
    const provider = new this._GoogleAuthProvider();
    const result = await this._signInWithPopup(this.auth, provider);
    return result.user;
  }

  /**
   * Sign out the current user.
   */
  async signOut() {
    if (!this.auth) return;
    await this._signOut(this.auth);
    this.user = null;
  }

  /**
   * Register a callback for auth state changes.
   * @param {Function} callback
   */
  onAuthChange(callback) {
    this._onChangeCallbacks.push(callback);
    // Immediately call with current state
    if (this._initialized) callback(this.user);
  }

  /**
   * Returns true if the signed-in user is the admin.
   */
  isAdmin() {
    return this.user && this.user.uid === window.ADMIN_UID;
  }

  /**
   * Returns current user display name or '訪客'.
   */
  getDisplayName() {
    return this.user?.displayName || '訪客玩家';
  }

  /**
   * Returns current user avatar URL or null.
   */
  getPhotoURL() {
    return this.user?.photoURL || null;
  }
}

window.authService = new AuthService();
