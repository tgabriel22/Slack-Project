// Import needed functions from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGl4dZx0vPaPNbQ0xmC8VCdmkGBKsVp4k",
  authDomain: "slack-project-81365.firebaseapp.com",
  projectId: "slack-project-81365",
  storageBucket: "slack-project-81365.appspot.com",
  messagingSenderId: "969137570518",
  appId: "1:969137570518:web:b71dd17555ca07995c7f77",
  measurementId: "G-L3MY9CTV9C",
};

// ========  Initialize Firebase ========

// initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Create an instance of the Google provider object
export const provider = new GoogleAuthProvider();
