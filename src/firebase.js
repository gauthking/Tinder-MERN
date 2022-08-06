import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    CONFIG REMOVED DUE TO SECURITY PURPOSES
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const authentication = getAuth(app);

export { authentication, db }
