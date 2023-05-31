// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyDH_ML2aRX1M8EK_ubymJDhkkJwPUldcro",
  // authDomain: "fir-auth-email-link.firebaseapp.com",
  // projectId: "fir-auth-email-link",
  // storageBucket: "fir-auth-email-link.appspot.com",
  // messagingSenderId: "56870497966",
  // appId: "1:56870497966:web:118ed2f7f056995c82073f",
  // measurementId: "G-1M56SMBHQ1"
  
  apiKey: "AIzaSyBQpxQpEeZzQK-fFs3J84bP8Ni6h76Iq_0",
  authDomain: "web-test-auth-7379d.firebaseapp.com",
  projectId: "web-test-auth-7379d",
  storageBucket: "web-test-auth-7379d.appspot.com",
  messagingSenderId: "737660699760",
  appId: "1:737660699760:web:854aa72903c318a6e3e0b5",
  measurementId: "G-VQ46QX4CCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const authh = getAuth(app);
export default authh;
