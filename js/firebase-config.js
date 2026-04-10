const firebaseConfig = {
  apiKey: "AIzaSyCoCEMnY1OEdEAAxlj0Q5enMHwvXqs0QdU",
  authDomain: "ops-reports-progression.firebaseapp.com",
  projectId: "ops-reports-progression",
  storageBucket: "ops-reports-progression.firebasestorage.app",
  messagingSenderId: "409866712447",
  appId: "1:409866712447:web:3ca2ec71ba03015817564a",
  measurementId: "G-Q8K7CLDPSQ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
