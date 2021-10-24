import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCDPoqAdAAGBSTHsO0fWdSPTIC6GQ5P16I",
    authDomain: "neomush-desn9002.firebaseapp.com",
    projectId: "neomush-desn9002",
    storageBucket: "neomush-desn9002.appspot.com",
    messagingSenderId: "611949112320",
    appId: "1:611949112320:web:02c30d964e76685a58bce5",
    measurementId: "G-CFD30TVLHP"
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore();
