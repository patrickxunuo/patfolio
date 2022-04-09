// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAl8Fkig1wrBvXq4NShnONWLOTULrpfFZQ",
    authDomain: "patfoliopatfolio.firebaseapp.com",
    projectId: "patfoliopatfolio",
    storageBucket: "patfoliopatfolio.appspot.com",
    messagingSenderId: "139128863582",
    appId: "1:139128863582:web:e02d40c7ad8b7616832dcf",
    measurementId: "G-QHJL7QB1ZH"
}

firebase.initializeApp(config);
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export {projectFirestore, projectStorage, timestamp}
