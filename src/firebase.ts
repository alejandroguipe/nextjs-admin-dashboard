import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChv1IaDTsQ9nr8qqZytRIYDoBkBjljoAY",
  authDomain: "nomicash-6d95c.firebaseapp.com",
  projectId: "nomicash-6d95c",
  storageBucket: "nomicash-6d95c.firebasestorage.app",
  messagingSenderId: "978447138366",
  appId: "1:978447138366:web:ee62de0321b100939d1b6f",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
