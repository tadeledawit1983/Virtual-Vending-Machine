// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAQkklRyif8YaiSNhk_15zEFIN099L8aKk",
    authDomain: "virtual-vending-machine-6654b.firebaseapp.com",
    projectId: "virtual-vending-machine-6654b",
    storageBucket: "virtual-vending-machine-6654b.appspot.com",
    messagingSenderId: "1017834279574",
    appId: "1:1017834279574:web:3af52ca5fe2005103ca8b7",
    measurementId: "G-MJXH8GRXYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
