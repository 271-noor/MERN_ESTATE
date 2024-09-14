// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate271.firebaseapp.com",
  projectId: "mern-estate271",
  storageBucket: "mern-estate271.appspot.com",
  messagingSenderId: "145339247549",
  appId: "1:145339247549:web:e027785e89f9aa90fc80d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);