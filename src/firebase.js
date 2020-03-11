import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB5_-5u_rhWGECSH9J9-R5XN-Xx94ydYuc",
    authDomain: "crud-udemy-c1507.firebaseapp.com",
    databaseURL: "https://crud-udemy-c1507.firebaseio.com",
    projectId: "crud-udemy-c1507",
    storageBucket: "crud-udemy-c1507.appspot.com",
    messagingSenderId: "27318282017",
    appId: "1:27318282017:web:4a29bea569c887a4474060",
    measurementId: "G-1G82QQNYB8"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //pero en versiones actuales 5.x ya no es necesario ejecutar el código:
  //firebaseApp.firestore().settings({timestampsInSnapshots: true})
  export default firebaseApp.firestore()
