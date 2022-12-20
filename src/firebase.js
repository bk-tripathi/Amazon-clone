// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCVIlZMVHSu6HqPKoiOTSN0DPNBGgc1Emo",
    authDomain: "clone-4a58c.firebaseapp.com",
    projectId: "clone-4a58c",
    storageBucket: "clone-4a58c.appspot.com",
    messagingSenderId: "137328780728",
    appId: "1:137328780728:web:1d7fca2848ee4793509b4d",
    measurementId: "G-DQ36LPL4RE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};