// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy3SdCKm7YeKEjZsh6iAl8EAeNRwvgngQ",
  authDomain: "nomnomapp-5ba4a.firebaseapp.com",
  projectId: "nomnomapp-5ba4a",
  storageBucket: "nomnomapp-5ba4a.firebasestorage.app",
  messagingSenderId: "1079300225764",
  appId: "1:1079300225764:web:533674a1da3b03e1050af1",
  measurementId: "G-6W3C5E30SH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }
