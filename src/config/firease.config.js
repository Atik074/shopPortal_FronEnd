// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Kjdn43EVM0k6poFBmZOzJ3hg1y56_eE",
  authDomain: "shopprortal.firebaseapp.com",
  projectId: "shopprortal",
  storageBucket: "shopprortal.firebasestorage.app",
  messagingSenderId: "404570091265",
  appId: "1:404570091265:web:9a28269144c9ccb8167500",
  measurementId: "G-PMBT859NJN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);