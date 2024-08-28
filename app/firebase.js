// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASN_eqTmmgZUwvmgtkOGwv0oAvmPOZZZk",
  authDomain: "flashcardsaas-ec95a.firebaseapp.com",
  projectId: "flashcardsaas-ec95a",
  storageBucket: "flashcardsaas-ec95a.appspot.com",
  messagingSenderId: "260808354346",
  appId: "1:260808354346:web:3c22a59acfa14b973fb153",
  measurementId: "G-6ZCPGLW07N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);