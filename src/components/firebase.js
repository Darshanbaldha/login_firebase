// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9c8kfNLAMXXfg_u3fNpdp_wwn2A_cMwc",
  authDomain: "gym-d7a59.firebaseapp.com",
  projectId: "gym-d7a59",
  storageBucket: "gym-d7a59.firebasestorage.app",
  messagingSenderId: "1087313178700",
  appId: "1:1087313178700:web:6912d1d6ebcef1916ec4e9",
  measurementId: "G-M9FR3Z10K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
