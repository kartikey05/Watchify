import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import  'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAL4gWwnqpYzQhjex7jwb0e16LiVRWJEd0",
  authDomain: "netflix-clone-95300.firebaseapp.com",
  projectId: "netflix-clone-95300",
  storageBucket: "netflix-clone-95300.appspot.com",
  messagingSenderId: "541515503654",
  appId: "1:541515503654:web:4f8ecfb0d84f2b6e74eee7"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();

export{auth};
export default db;