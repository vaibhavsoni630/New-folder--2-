// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzkUeKMPvGTjKk6lgIK1O5kG54HdRsnZI",
  authDomain: "skill-tank-project.firebaseapp.com",
  projectId: "skill-tank-project",
  storageBucket: "skill-tank-project.appspot.com",
  messagingSenderId: "992564523251",
  appId: "1:992564523251:web:80bd9f6dc0484776b48786",
  measurementId: "G-4HS3KGL1XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
