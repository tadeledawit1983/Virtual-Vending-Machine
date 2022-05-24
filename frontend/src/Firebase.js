// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
export const auth = getAuth();
const app = initializeApp(firebaseConfig);
export db = getFirestore()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot)
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};