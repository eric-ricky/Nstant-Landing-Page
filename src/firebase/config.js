// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBseCSWafB4FdxhBO0SA1VEJj7AoxQWeXY",
//   authDomain: "nstant-food-delivery.firebaseapp.com",
//   projectId: "nstant-food-delivery",
//   storageBucket: "nstant-food-delivery.appspot.com",
//   messagingSenderId: "855690437384",
//   appId: "1:855690437384:web:9fa3a4851fdc8b16fa82bd",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
