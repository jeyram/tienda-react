import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDqFBGdQK1dg5a1xAIM_NIxysL2_NoDjK4",
  authDomain: "tienda-yza.firebaseapp.com",
  projectId: "tienda-yza",
  storageBucket: "tienda-yza.appspot.com",
  messagingSenderId: "66138749003",
  appId: "1:66138749003:web:2c4318471512db3a1535ce"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();