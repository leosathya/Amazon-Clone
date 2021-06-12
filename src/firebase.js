import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBs-iAHwMZGBWD9aRYIGueGZbHh1ruKedI",
    authDomain: "clone-d5a00.firebaseapp.com",
    projectId: "clone-d5a00",
    storageBucket: "clone-d5a00.appspot.com",
    messagingSenderId: "71574467897",
    appId: "1:71574467897:web:024cda02087c5f30f3a4e8",
    measurementId: "G-PBP54VE3P9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()

  export {db, auth}