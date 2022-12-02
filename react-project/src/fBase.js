import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2b2Ijo1oPSZg00nr9x1XK2sliyx_t71I",
  authDomain: "checkchack-cba2a.firebaseapp.com",
  projectId: "checkchack-cba2a",
  storageBucket: "checkchack-cba2a.appspot.com",
  messagingSenderId: "1005964855023",
  appId: "1:1005964855023:web:31b93093a3cb45dd5a7d1a",
  measurementId: "G-E56E46EQMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authService = getAuth();
export const dbService = getFirestore();
// const analytics = getAnalytics(app);