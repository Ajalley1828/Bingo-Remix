import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBk4oqciHWOljXvmLCQ2eWb8MP-32ArYN4",
    authDomain: "bingo-73956.firebaseapp.com",
    databaseURL: "https://bingo-73956-default-rtdb.firebaseio.com",
    projectId: "bingo-73956",
    storageBucket: "bingo-73956.appspot.com",
    messagingSenderId: "704117700628",
    appId: "1:704117700628:web:c3c964e747b6a0302a0f01",
    measurementId: "G-XJNXBCW1E8"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;