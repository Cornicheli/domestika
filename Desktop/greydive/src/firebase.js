import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA89sAUeQijd33c52eXZltVX3mGsv0bleA",
  authDomain: "challenge-greydive-bee81.firebaseapp.com",
  databaseURL: "https://challenge-greydive-bee81-default-rtdb.firebaseio.com",
  projectId: "challenge-greydive-bee81",
  storageBucket: "challenge-greydive-bee81.appspot.com",
  messagingSenderId: "1065063569663",
  appId: "1:1065063569663:web:eef944feff407fafb314ca",
  measurementId: "G-RB8D3BZKLT",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
