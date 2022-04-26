import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL021xen5YntW4VF_11HnhXBbKpwNqEuU",
  authDomain: "house-marketplace-react-520f7.firebaseapp.com",
  projectId: "house-marketplace-react-520f7",
  storageBucket: "house-marketplace-react-520f7.appspot.com",
  messagingSenderId: "627434414651",
  appId: "1:627434414651:web:451dc8420f9a597311321e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();