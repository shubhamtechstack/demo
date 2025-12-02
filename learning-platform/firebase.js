// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxj8aeraLFB_iUfEeUwfDm76qHjHJq7yE",
  authDomain: "learning-platform-a1a0a.firebaseapp.com",
  projectId: "learning-platform-a1a0a",
  storageBucket: "learning-platform-a1a0a.firebasestorage.app",
  messagingSenderId: "972423995616",
  appId: "1:972423995616:web:09f628b9ce2855763a7085",
  measurementId: "G-FEQ0TL4BMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);