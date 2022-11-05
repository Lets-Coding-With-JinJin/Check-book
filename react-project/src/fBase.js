import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBGZKDGABXzKKUqasgIZMtCdZ7I0xx4UAI",
  authDomain: "nwitter-55a3a.firebaseapp.com",
  projectId: "nwitter-55a3a",
  storageBucket: "nwitter-55a3a.appspot.com",
  messagingSenderId: "102065092369",
  appId: "1:102065092369:web:613d68b9f03176809dbeb0"
  };

  const app = initializeApp(firebaseConfig);
  export const authService = getAuth();
  export const dbService=getFirestore();