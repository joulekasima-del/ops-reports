// ════════════════════════════════════════════════════════════
//  firebase-config.js
//  ⚠ FILL IN YOUR OWN VALUES BEFORE DEPLOYING
//  See README.md for step-by-step setup guide
// ════════════════════════════════════════════════════════════

// ── Step 1: Replace this with YOUR Firebase project config ──
//    Firebase Console → Project Settings → Your apps → Web app
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// ── Step 2: Replace this with your Google OAuth 2.0 Client ID ──
//    Google Cloud Console → APIs & Services → Credentials
//    (Only needed if using Google Tasks meeting integration)
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_OAUTH_CLIENT_ID.apps.googleusercontent.com";

// ── Initialize Firebase ──────────────────────────────────────
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Optional: Enable offline persistence (works offline too!)
// db.enablePersistence().catch(err => console.warn('Persistence failed:', err));
