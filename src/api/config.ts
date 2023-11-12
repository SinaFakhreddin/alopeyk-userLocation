// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGvl8W7m4stdOL2cG9J2xAMKRAxfhxkiY",
    authDomain: "alopeyk-getlocation.firebaseapp.com",
    projectId: "alopeyk-getlocation",
    storageBucket: "alopeyk-getlocation.appspot.com",
    messagingSenderId: "738806336726",
    appId: "1:738806336726:web:3db1d98d99945eaeba4d77"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;