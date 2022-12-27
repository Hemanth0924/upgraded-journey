import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {

    apiKey: "AIzaSyDY-AwNVT5yT7PSU89v0RIGPzo8fEoGYug",
  
    authDomain: "project-f9be1.firebaseapp.com",
  
    projectId: "project-f9be1",
  
    storageBucket: "project-f9be1.appspot.com",
  
    messagingSenderId: "437502819330",
  
    appId: "1:437502819330:web:acd2e1f108134a3ce7fb1b"
  
  };
  
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
