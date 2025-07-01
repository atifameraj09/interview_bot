import { initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'; 
const firebaseConfig = {
  apiKey: "AIzaSyBvxxa8XgK0wViwpD-qzIfeXtQCuqe_wic",
  authDomain: "prepwise-5de62.firebaseapp.com",
  projectId: "prepwise-5de62",
  storageBucket: "prepwise-5de62.firebasestorage.app",
  messagingSenderId: "31579036176",
  appId: "1:31579036176:web:a35f1ddf82eff81795c895",
  measurementId: "G-P6N8JB6VWX"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app); 