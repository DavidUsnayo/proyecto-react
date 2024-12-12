import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCE5gbW23EZfIXb145xIchdPPZVb1GHA0Q",
    authDomain: "pedido-eb549.firebaseapp.com",
    projectId: "pedido-eb549",
    storageBucket: "pedido-eb549.firebasestorage.app",
    messagingSenderId: "903680573422",
    appId: "1:903680573422:web:3b07f43c62a19f987b58ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
