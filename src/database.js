import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOxl26zk1R0su75XN6Ig1uoHtG95mCqes",
    authDomain: "altamedia-4145a.firebaseapp.com",
    projectId: "altamedia-4145a",
    storageBucket: "altamedia-4145a.appspot.com",
    messagingSenderId: "261248466477",
    appId: "1:261248466477:web:56046c658a0205c1aa42a4",
    measurementId: "G-G2NZHEWZP2"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;