import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBxvyyJY3_qo4jy4bIViZKQ8ZsQbW4uTLg",
  authDomain: "e-rider-56336.firebaseapp.com",
  projectId: "e-rider-56336",
  storageBucket: "e-rider-56336.appspot.com",
  messagingSenderId: "406127219600",
  appId: "1:406127219600:web:1b07454bd0c6a54b80d915"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
