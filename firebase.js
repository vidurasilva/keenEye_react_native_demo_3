import firebase from "firebase";
// import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK0nJvB5bjDN3TpwBwr8klfxp0xZ8zerE",
  authDomain: "keeneye-reactnative.firebaseapp.com",
  projectId: "keeneye-reactnative",
  storageBucket: "keeneye-reactnative.appspot.com",
  messagingSenderId: "744434030037",
  appId: "1:744434030037:web:015379a207d91269c6d95c",
};

// Initialize Firebase
// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// const app = initializeApp(firebaseConfig);
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export default firebase;
