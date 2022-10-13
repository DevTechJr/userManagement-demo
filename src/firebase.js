// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBanWkZPKOFEgcUgyBnIxso3sjPlBe7LN0",
  authDomain: "crud-trial-5dde1.firebaseapp.com",
  projectId: "crud-trial-5dde1",
  storageBucket: "crud-trial-5dde1.appspot.com",
  messagingSenderId: "243820138919",
  appId: "1:243820138919:web:f9a4a2002fefa0b49d2682",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
