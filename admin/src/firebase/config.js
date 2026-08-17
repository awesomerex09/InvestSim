// ============================================================
// InvestSim Admin — Firebase Configuration (PLACEHOLDER)
// Replace all placeholder values with your actual Firebase config
// ============================================================

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOI431GvuzRRnnr84wOfZF0MLM1FBx6-4",
  authDomain: "investsim-c0420.firebaseapp.com",
  projectId: "investsim-c0420",
  storageBucket: "investsim-c0420.firebasestorage.app",
  messagingSenderId: "986957850647",
  appId: "1:986957850647:web:0183248ca04e1142e71452",
  measurementId: "G-XP2ZRKYEVZ"
};

// Your Admin UID — replace after first login
export const ADMIN_UID = "YOUR_ADMIN_UID";

const app      = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
