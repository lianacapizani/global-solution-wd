import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDvS0s0PGgl3mkE9tsSn8MjswicrHu8LEM",
  authDomain: "alertaja-app.firebaseapp.com",
  projectId: "alertaja-app",
  storageBucket: "alertaja-app.firebasestorage.app",
  messagingSenderId: "1008998264084",
  appId: "1:1008998264084:web:96cafaf1bc884e82c6a601"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
