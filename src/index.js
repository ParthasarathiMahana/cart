import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBwQQTE0wSzrYXZaa8opLdGatueYfKRrm0",
  authDomain: "cart-623c7.firebaseapp.com",
  projectId: "cart-623c7",
  storageBucket: "cart-623c7.appspot.com",
  messagingSenderId: "59803323004",
  appId: "1:59803323004:web:db88eaa08a9a518b4c17f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default app;