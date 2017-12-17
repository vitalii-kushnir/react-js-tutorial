import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBADV73b-Qq8Xo3jvAqBXLXMUkXsWGbIec",
    authDomain: "expensify-2a13e.firebaseapp.com",
    databaseURL: "https://expensify-2a13e.firebaseio.com",
    projectId: "expensify-2a13e",
    storageBucket: "expensify-2a13e.appspot.com",
    messagingSenderId: "1050065714259"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};