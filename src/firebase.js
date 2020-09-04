import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBTIYbUUvEOZVabvFkq6niIAotDsHB11cQ",
    authDomain: "tinder-clone-6ae38.firebaseapp.com",
    databaseURL: "https://tinder-clone-6ae38.firebaseio.com",
    projectId: "tinder-clone-6ae38",
    storageBucket: "tinder-clone-6ae38.appspot.com",
    messagingSenderId: "475652697784",
    appId: "1:475652697784:web:eb2b2dd536d6a4c2364e4d",
    measurementId: "G-1VWB72SZJJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
