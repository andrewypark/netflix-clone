import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkCjM62P1lKj5rTIDc1G8CG0TNbVl2Ugk",
  authDomain: "netflix-clone-4cdb5.firebaseapp.com",
  projectId: "netflix-clone-4cdb5",
  storageBucket: "netflix-clone-4cdb5.appspot.com",
  messagingSenderId: "346687700342",
  appId: "1:346687700342:web:cdff1df2c560b3f0368e57"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;