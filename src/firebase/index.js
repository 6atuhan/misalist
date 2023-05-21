// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQGK5E5DOECfLj1vbl1x3g5tujQAFvdco",
  authDomain: "misalist-138b8.firebaseapp.com",
  projectId: "misalist-138b8",
  storageBucket: "misalist-138b8.appspot.com",
  messagingSenderId: "971277983022",
  appId: "1:971277983022:web:5101cab6da0576ad4aaebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db }    