// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAlQ7GZUPQdypCTde-RjYEQk5ZsbATpstM",
  authDomain: "practical-exam-fb307.firebaseapp.com",
  databaseURL: "https://practical-exam-fb307-default-rtdb.firebaseio.com",
  projectId: "practical-exam-fb307",
  storageBucket: "practical-exam-fb307.appspot.com",
  messagingSenderId: "79032555696",
  appId: "1:79032555696:web:16898e5cdeef38d197c375",
  measurementId: "G-HFP5RG9RLX"
};

export const app = initializeApp(firebaseConfig);