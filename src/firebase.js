import firebase from 'firebase/app';

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();