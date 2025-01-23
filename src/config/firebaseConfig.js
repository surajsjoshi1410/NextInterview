// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Firebase storage
import { getAuth } from "firebase/auth"; // Firebase authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUpbTok-EOyWK01Cd04zjIlqBnN70RVYk",
  authDomain: "next-interview-2f671.firebaseapp.com",
  projectId: "next-interview-2f671",
  storageBucket: "next-interview-2f671.firebasestorage.app",
  messagingSenderId: "690381702065",
  appId: "1:690381702065:web:6a24db0417c04cb6387390",
  measurementId: "G-WN5P38DBYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export Firebase Auth instance
export const storage = getStorage(app); // Export Firebase Storage instance

export default app;