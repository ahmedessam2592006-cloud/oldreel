// ==========================================
// 🔥 FIREBASE CONFIG - Old Reel Agency
// ==========================================

const firebaseConfig = {
  apiKey: "AIzaSyDoyLUMEMEWWECpY8ElCdBKtB3-66ZZGB8",
  authDomain: "oldreel-portfolio.firebaseapp.com",
  databaseURL: "https://oldreel-portfolio-default-rtdb.firebaseio.com",
  projectId: "oldreel-portfolio",
  storageBucket: "oldreel-portfolio.firebasestorage.app",
  messagingSenderId: "770937138976",
  appId: "1:770937138976:web:49a88b41550a9fe89b3145"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

// Admin credentials (hardcoded for initial login)
const ADMIN_EMAIL = "admin@oldreel.com";
const ADMIN_PASSWORD = "oldreeladel1";

// Export for other files
window.firebaseConfig = firebaseConfig;
window.db = db;
window.auth = auth;
