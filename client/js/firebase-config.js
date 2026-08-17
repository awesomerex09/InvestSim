// ============================================================
// InvestSim — Firebase Configuration (PLACEHOLDER)
// Replace all placeholder values with your actual Firebase config
// See DeveloperNote_Firebase.md for setup instructions
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCOI431GvuzRRnnr84wOfZF0MLM1FBx6-4",
  authDomain: "investsim-c0420.firebaseapp.com",
  projectId: "investsim-c0420",
  storageBucket: "investsim-c0420.firebasestorage.app",
  messagingSenderId: "986957850647",
  appId: "1:986957850647:web:0183248ca04e1142e71452",
  measurementId: "G-XP2ZRKYEVZ"
};

// Your Google account UID (for Admin access check)
// After first login, get this from Firebase Console → Authentication → Users
const ADMIN_UID = "YOUR_ADMIN_UID";

// Export for use in other modules
window.firebaseConfig = firebaseConfig;
window.ADMIN_UID = ADMIN_UID;
