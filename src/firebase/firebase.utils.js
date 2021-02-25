import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAf8Dk1ld8HDSs-Qxntn1T1q0JIL1HbfVA",
  authDomain: "react-ecommerce-cd17d.firebaseapp.com",
  projectId: "react-ecommerce-cd17d",
  storageBucket: "react-ecommerce-cd17d.appspot.com",
  messagingSenderId: "545642433789",
  appId: "1:545642433789:web:0fa6db7e531f33a1040294",
  measurementId: "G-1EX6MBPKQ0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
