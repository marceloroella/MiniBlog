// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXJ5zfJurD9ngkyTvYrGIRR05BG6XycDI",
  authDomain: "miniblog-96b99.firebaseapp.com",
  projectId: "miniblog-96b99",
  storageBucket: "miniblog-96b99.appspot.com",
  messagingSenderId: "119769243242",
  appId: "1:119769243242:web:d7264140ed9b7d93423413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
