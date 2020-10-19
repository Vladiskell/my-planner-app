import firebase from 'firebase/app';
// import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCt23OJLgbzemFmg7tXQPCmPPnWdYlh74",
    authDomain: "my-planner-27500.firebaseapp.com",
    databaseURL: "https://my-planner-27500.firebaseio.com",
    projectId: "my-planner-27500",
    storageBucket: "my-planner-27500.appspot.com",
    messagingSenderId: "111167307771",
    appId: "1:111167307771:web:5fad90a8c9ae2f9eb3955e"
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

export { firestore, firebase as default }
