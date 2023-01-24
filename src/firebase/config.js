// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0W8fjz6yLf2UZ0VOm2m0_dkWfAcy6YZY",
  authDomain: "journal-app-fe657.firebaseapp.com",
  projectId: "journal-app-fe657",
  storageBucket: "journal-app-fe657.appspot.com",
  messagingSenderId: "75418776132",
  appId: "1:75418776132:web:ed70534368264d43380211",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
