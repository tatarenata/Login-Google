// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBOZs7ncAlNqFPF694ZJIH6_PvNoT9an0",
  authDomain: "login-renata-12bfb.firebaseapp.com",
  projectId: "login-renata-12bfb",
  storageBucket: "login-renata-12bfb.appspot.com",
  messagingSenderId: "474817870063",
  appId: "1:474817870063:web:c49ff58495895b67a1c31a",
  measurementId: "G-VL1XS28Z6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth