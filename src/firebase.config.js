// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB-lGdFkqZewBr6cvgprWGXw4yRzyMxHOY",
  authDomain: "e-commerce-db-1a3c0.firebaseapp.com",
  databaseURL: "https://e-commerce-db-1a3c0-default-rtdb.firebaseio.com",
  projectId: "e-commerce-db-1a3c0",
  storageBucket: "e-commerce-db-1a3c0.firebasestorage.app",
  messagingSenderId: "715061931615",
  appId: "1:715061931615:web:95453319033e80c85d35ea",
  measurementId: "G-FKKW90S2G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app