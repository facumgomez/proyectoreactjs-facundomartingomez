import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv3PERh18yE1dP7bcQ1uEd9XLgv5UJPnE",
  authDomain: "proyectoreactjs-facundogomez.firebaseapp.com",
  projectId: "proyectoreactjs-facundogomez",
  storageBucket: "proyectoreactjs-facundogomez.appspot.com",
  messagingSenderId: "160078187815",
  appId: "1:160078187815:web:371d4560888d92c1e0ed02"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)