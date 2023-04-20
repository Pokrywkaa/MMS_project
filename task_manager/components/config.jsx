// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9NlWOWDy9GmyIwT8JzpdNN7JavP0d7rw",
  authDomain: "task-manager-f2d93.firebaseapp.com",
  projectId: "task-manager-f2d93",
  storageBucket: "task-manager-f2d93.appspot.com",
  messagingSenderId: "782207078583",
  appId: "1:782207078583:web:2ff1ba075765c47948bd32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initalize Firestore
export const db = getFirestore(app);