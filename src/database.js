import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDcb1ngi5CLbOII4IFo0e2xSl6dlyz4daw",
    authDomain: "congtyalta-a0130.firebaseapp.com",
    projectId: "congtyalta-a0130",
    storageBucket: "congtyalta-a0130.appspot.com",
    messagingSenderId: "842876001001",
    appId: "1:842876001001:web:5582e5aea5941c83b12e78",
    measurementId: "G-8TVVSPVZB6"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;