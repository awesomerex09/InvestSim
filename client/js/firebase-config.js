// ============================================================
// InvestSim — Firebase Configuration (PLACEHOLDER)
// Replace all placeholder values with your actual Firebase config
// See DeveloperNote_Firebase.md for setup instructions
// ============================================================

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Your Google account UID (for Admin access check)
// After first login, get this from Firebase Console → Authentication → Users
const ADMIN_UID = "YOUR_ADMIN_UID";

// Export for use in other modules
window.firebaseConfig = firebaseConfig;
window.ADMIN_UID = ADMIN_UID;
