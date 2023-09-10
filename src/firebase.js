// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEdAhLC2T9aqpj7oJfPxuDkDj2tPtz1VM",
  authDomain: "innovate-website-b4d9a.firebaseapp.com",
  projectId: "innovate-website-b4d9a",
  storageBucket: "innovate-website-b4d9a.appspot.com",
  messagingSenderId: "869816469530",
  appId: "1:869816469530:web:c180f13b49d5fdf90329a3",
  measurementId: "G-BVKHDZV13E"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export { firestore };
