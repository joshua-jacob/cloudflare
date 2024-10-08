// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCH14WPgAebyaCbdhmP4O4GXz_VnVtydVI",
  authDomain: "webdev-f06b8.firebaseapp.com",
  projectId: "webdev-f06b8",
  storageBucket: "webdev-f06b8.appspot.com",
  messagingSenderId: "218256549719",
  appId: "1:218256549719:web:db1f0cae5b4279dee0c012"
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db