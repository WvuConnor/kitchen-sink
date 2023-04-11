export const enviroment ={
    production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDke7A6hxpTcrgGhSxni8OzjhEX8j-v4k",
  authDomain: "flickr-app-30c57.firebaseapp.com",
  databaseURL: "https://flickr-app-30c57-default-rtdb.firebaseio.com",
  projectId: "flickr-app-30c57",
  storageBucket: "flickr-app-30c57.appspot.com",
  messagingSenderId: "372907600831",
  appId: "1:372907600831:web:6f3cc239cb6468f33e4f0a",
  measurementId: "G-GYT6RF3BDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
