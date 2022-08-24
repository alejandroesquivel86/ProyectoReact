// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrsM56k1sLTRE0sBrvD7c2apuLVaHrSCc",
    authDomain: "ecommerce-esquivel.firebaseapp.com",
    projectId: "ecommerce-esquivel",
    storageBucket: "ecommerce-esquivel.appspot.com",
    messagingSenderId: "38398618163",
    appId: "1:38398618163:web:b3b9ff683c75d8d69dd146"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db