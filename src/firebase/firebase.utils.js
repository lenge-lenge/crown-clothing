import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCtxWoSr3FkK_Z27y0lSvCXiMVKS4pM0lc",
  authDomain: "crown-db-334dd.firebaseapp.com",
  databaseURL: "https://crown-db-334dd.firebaseio.com",
  projectId: "crown-db-334dd",
  storageBucket: "crown-db-334dd.appspot.com",
  messagingSenderId: "1017896223405",
  appId: "1:1017896223405:web:fed98999c2f8e4f50fbc24",
  measurementId: "G-76G3H3NKT7"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;