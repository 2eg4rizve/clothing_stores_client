
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEwqr5-tckb8m8mfiuCFWLuGRZFpHi-fU",
  authDomain: "clothing-store-f6eaf.firebaseapp.com",
  projectId: "clothing-store-f6eaf",
  storageBucket: "clothing-store-f6eaf.appspot.com",
  messagingSenderId: "902325699530",
  appId: "1:902325699530:web:d54656c9d68351c2610533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);