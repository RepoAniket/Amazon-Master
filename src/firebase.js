import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCIKchprNZsbu2KdJQzARje-hQPaw91n8U",
    authDomain: "clone-10bb4.firebaseapp.com",
    databaseURL: "https://clone-10bb4.firebaseio.com",
    projectId: "clone-10bb4",
    storageBucket: "clone-10bb4.appspot.com",
    messagingSenderId: "262578772974",
    appId: "1:262578772974:web:9833d51b101088e9948cff",
    measurementId: "G-9M11533Q7X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};