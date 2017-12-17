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

database.ref('notes').push({
    body: 'This is my note',
    title: 'Second note'
});

database.ref('notes/-L0ZPM5MH-ioCnko5Fuc').update({
    body: 'new body'
});

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         console.log('Data from DB', snapshot.val());
//     });
//
// database.ref().on('value', (snapshot) => {
//     console.log('Data from DB', snapshot.val());
// });

// database
//     .ref()
//     .set({
//         name: "kusha",
//         age: 29,
//         location: {
//             city: 'Cologne',
//             country: 'Germany'
//         }
//     })
//     .then(() => {
//         console.log("Data is saved");
//     })
//     .catch((e) => {
//         console.log("This failed", e);
//     });
//
// database.ref('age').set(23);
// database.ref('location/city').set('Kyiv');
//
// database.ref()
//     .update({
//         name: 'Vitalii',
//         age: null,
//         job: 'Software Developer',
//         'location/country': 'Ukraine'
//     });

// remove data from the DB with the set() method
// database.ref('age').set(null);

// remove data from the DB with the remove() method
// database
//     .ref('age')
//     .remove()
//     .then(() => {
//         console.log('Age was removed');
//     });