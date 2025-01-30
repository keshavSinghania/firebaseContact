// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmp8HtHyCW_FupS8_rg1au3CeKVye8a1o",
  authDomain: "vite-contact-8cb07.firebaseapp.com",
  projectId: "vite-contact-8cb07",
  storageBucket: "vite-contact-8cb07.firebasestorage.app",
  messagingSenderId: "693079802785",
  appId: "1:693079802785:web:80c2228a6f16cc99cd41e0"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)