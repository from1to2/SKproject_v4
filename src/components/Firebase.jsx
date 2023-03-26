import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAf0unhyzbcBYdn5QNB7ek0_GhLJRhLkDM",
    authDomain: "react-project-e9292.firebaseapp.com",
    databaseURL: "https://react-project-e9292-default-rtdb.firebaseio.com",
    projectId: "react-project-e9292",
    storageBucket: "react-project-e9292.appspot.com",
    messagingSenderId: "80982686357",
    appId: "1:80982686357:web:93dceb6d437b48ece5399c",
    measurementId: "G-R8WPYVF98Z"
};
initializeApp(firebaseConfig);

const db = getFirestore();
const storageRef = getStorage();
export { db, storageRef };

