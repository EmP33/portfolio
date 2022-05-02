import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB8tQmiDRtsrJD0agOiLAPFec-1jjLUnf8",
  authDomain: "em-p33.firebaseapp.com",
  databaseURL: "https://em-p33-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "em-p33",
  storageBucket: "em-p33.appspot.com",
  messagingSenderId: "407441599161",
  appId: "1:407441599161:web:58581eb491b6947bdc4968",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
