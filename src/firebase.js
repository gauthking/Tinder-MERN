import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC_tDQ376mpVnQkPOx3f0bUhiaZyFbCDyc",
    authDomain: "tinder-clone-f3767.firebaseapp.com",
    projectId: "tinder-clone-f3767",
    storageBucket: "tinder-clone-f3767.appspot.com",
    messagingSenderId: "113075144558",
    appId: "1:113075144558:web:07017e4550f6693d78237f"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const authentication = getAuth(app);

export { authentication, db }
