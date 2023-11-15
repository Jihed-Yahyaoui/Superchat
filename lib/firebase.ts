import { initializeApp } from "firebase/app";

// The web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "superchat-b0ce7.firebaseapp.com",
  projectId: "superchat-b0ce7",
  storageBucket: "superchat-b0ce7.appspot.com",
  messagingSenderId: "588718766101",
  appId: "1:588718766101:web:a63de202b7ad545796b61c",
  measurementId: "G-E4ZVY24ET5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
