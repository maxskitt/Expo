import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBBH2FCqINWmReRXNc9HTGuoMzwuP7QQr0',
  authDomain: 'skitt-ea383.firebaseapp.com',
  projectId: 'skitt-ea383',
  storageBucket: 'skitt-ea383.appspot.com',
  messagingSenderId: '506461200888',
  appId: '1:506461200888:web:4a97b9d1b04b4cd24d360d',
  measurementId: 'G-FDJLZYK9Q7',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};




