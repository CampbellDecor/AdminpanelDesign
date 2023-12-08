

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import {getFirestore} from "firebase/firestore"
import { getMessaging } from "firebase/messaging"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVtlM_CL6pvQKS8tf93TjMd4ySR4oPX-A",
  authDomain: "campbelldecor-c2d1f.firebaseapp.com",
  databaseURL: "https://campbelldecor-c2d1f-default-rtdb.firebaseio.com",
  projectId: "campbelldecor-c2d1f",
  storageBucket: "campbelldecor-c2d1f.appspot.com",
  messagingSenderId: "644792580383",
  appId: "1:644792580383:web:3a7bbb154bd84dbddfd82a"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
export default app;
export const auth = getAuth( app );
export const Storage = getStorage( app );
export const fstore = getFirestore(app);
export const fmessage = getMessaging();
