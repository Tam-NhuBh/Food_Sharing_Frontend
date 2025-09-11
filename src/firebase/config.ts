import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { setLogLevel } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlCVAQAC-artJZ5aF4Ar-6mMGYeixZqiY",
  authDomain: "nomnom-5f0bb.firebaseapp.com",
  projectId: "nomnom-5f0bb",
  storageBucket: "nomnom-5f0bb.appspot.com",
  messagingSenderId: "674313941661",
  appId: "1:674313941661:web:4f06e2f89cba609aa31a74",
  measurementId: "G-9JMBL10K9P",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// bật log debug để thấy request ra ngoài
setLogLevel("debug");

export const auth = getAuth(app);
