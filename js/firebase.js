import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  getFirestore,
  enableIndexedDbPersistence
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvvORjji9DBR5NS-ulWl9PBot-giymjkM",
  authDomain: "em-s-planner.firebaseapp.com",
  projectId: "em-s-planner",
  storageBucket: "em-s-planner.firebasestorage.app",
  messagingSenderId: "45220754405",
  appId: "1:45220754405:web:349e630dd9077fe5f2750c",
  measurementId: "G-2EDY3C852H"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((error) => {
  console.warn("Offline persistence could not be enabled:", error.code);
});
