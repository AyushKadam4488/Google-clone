// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8_dj8stqenPa7-Nq9s2EsJBZkPrhU8O8",
  authDomain: "clone-bfe0a.firebaseapp.com",
  projectId: "clone-bfe0a",
  storageBucket: "clone-bfe0a.appspot.com",
  messagingSenderId: "94509905321",
  appId: "1:94509905321:web:c6c9ba78b4c4745611c0b8",
  measurementId: "G-401EJTGDXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);