import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDrnWKYdpm_5JRGRkoO2fmHXonwbdoq72Y",
  authDomain: "olx-clone-771aa.firebaseapp.com",
  projectId: "olx-clone-771aa",
  storageBucket: "olx-clone-771aa.appspot.com",
  messagingSenderId: "844156781359",
  appId: "1:844156781359:web:24b216d4b5cb9422d017da",
  measurementId: "G-BSK952P51H",
};

firebase.initializeApp(config);

export default firebase.firestore();
