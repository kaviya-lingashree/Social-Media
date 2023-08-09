// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO0KMXDAxxdvZlULOEna-C117EpqF8qLE",
  authDomain: "social-media-cb2d7.firebaseapp.com",
  projectId: "social-media-cb2d7",
  storageBucket: "social-media-cb2d7.appspot.com",
  messagingSenderId: "609678735745",
  appId: "1:609678735745:web:f17a24eadc1f74947d9080"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);