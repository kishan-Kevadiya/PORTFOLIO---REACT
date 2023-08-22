// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAxZ99wde5msGQVqawW9Nv4iorTNXVIpMY",
  authDomain: "kishan-s-portfolio-371da.firebaseapp.com",
  projectId: "kishan-s-portfolio-371da",
  storageBucket: "kishan-s-portfolio-371da.appspot.com",
  messagingSenderId: "818785287649",
  appId: "1:818785287649:web:3e897432eeec616614e6a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore()