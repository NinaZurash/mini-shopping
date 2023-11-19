// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDliJsO4IRVlcTocdmD3BaezCqmfOYDXF8",
  authDomain: "mini-shopping-16778.firebaseapp.com",
  projectId: "mini-shopping-16778",
  storageBucket: "mini-shopping-16778.appspot.com",
  messagingSenderId: "768859662176",
  appId: "1:768859662176:web:dedd0ebdf923b2cb76e005",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
