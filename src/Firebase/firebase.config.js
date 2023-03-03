// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxPwbRGjQacwNIKBFM4eGonKK6RD0r2Xg",
  authDomain: "banao-mern-stack-project.firebaseapp.com",
  projectId: "banao-mern-stack-project",
  storageBucket: "banao-mern-stack-project.appspot.com",
  messagingSenderId: "575150458721",
  appId: "1:575150458721:web:a0afbe09028859338ee720"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;