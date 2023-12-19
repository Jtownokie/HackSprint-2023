// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgHw1cDHFxN7XkYmfCeqd9XlYlQOfyGnk",
  authDomain: "hacksprint-2023-6d4cc.firebaseapp.com",
  databaseURL: "https://hacksprint-2023-6d4cc-default-rtdb.firebaseio.com",
  projectId: "hacksprint-2023-6d4cc",
  storageBucket: "hacksprint-2023-6d4cc.appspot.com",
  messagingSenderId: "1022968840829",
  appId: "1:1022968840829:web:27534a35877154afae6714",
  measurementId: "G-SSSMTHEJ79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
