// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMjmQ1N5adi-LIuAvQ5S4aLuCkSTs-PW0",
    authDomain: "coderhouse-el-almacen.firebaseapp.com",
    projectId: "coderhouse-el-almacen",
    storageBucket: "coderhouse-el-almacen.appspot.com",
    messagingSenderId: "692870518117",
    appId: "1:692870518117:web:c3c6559e082e32f5057d8c",
    measurementId: "G-K1WP6R0H0L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);
