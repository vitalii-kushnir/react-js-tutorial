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

database
    .ref()
    .set({
        name: "kusha",
        age: 29,
        location: {
            city: 'Cologne'
        }
    })
    .then(() => {
        console.log("Data is saved");
    })
    .catch((e) => {
        console.log("This failed", e);
    });

database.ref('age').set(23);
database.ref('location/city').set('Kyiv');