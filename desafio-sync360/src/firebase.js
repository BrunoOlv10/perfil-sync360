// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC28HF7eIRphjovWXf--RvK1mrytufGfrs",
  authDomain: "perfil-sync360.firebaseapp.com",
  projectId: "perfil-sync360",
  storageBucket: "perfil-sync360.appspot.com",
  messagingSenderId: "369267964720",
  appId: "1:369267964720:web:a8da5df8275010361126f5",
  measurementId: "G-5G638DFD6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};