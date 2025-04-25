// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDw7u3Jdk-t-_tMl-Zphg9MG48IJb3_oRk",
    authDomain: "proyectofinalreact-470d1.firebaseapp.com",
    projectId: "proyectofinalreact-470d1",
    // storageBucket: "proyectofinalreact-470d1.appspot.com",
    messagingSenderId: "1024740402437",
    appId: "1:1024740402437:web:476d2deaf7757985da036c"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);