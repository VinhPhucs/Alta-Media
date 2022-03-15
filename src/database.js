import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBNtI4qC19vOz7Wx9V9f6i1bNI3uZUc_zw",
  authDomain: "react-media-6d0a1.firebaseapp.com",
  projectId: "react-media-6d0a1",
  storageBucket: "react-media-6d0a1.appspot.com",
  messagingSenderId: "827094896724",
  appId: "1:827094896724:web:529100b401b53a244f5dc1",
  measurementId: "G-72SJ62FPQ7"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;