import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDuCBenU-J78uWJm9vANTUeR93tDFkg98M",
    authDomain: "learner-app-79c7d.firebaseapp.com",
    projectId: "learner-app-79c7d",
    storageBucket: "learner-app-79c7d.appspot.com",
    messagingSenderId: "738823945870",
    appId: "1:738823945870:web:e815b2037bf730622013df",
    measurementId: "G-HTFSJ6ZE46"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;