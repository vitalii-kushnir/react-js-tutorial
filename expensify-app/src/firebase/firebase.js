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

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});

// child_removed event
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed event
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log('Child Changed', snapshot.key, snapshot.val());
});

// child_added event
database.ref('expenses').on('child_added', (snapshot) => {
    console.log('Child Added', snapshot.key, snapshot.val());
});


database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 4534645767
});

database.ref('expenses').push({
    description: 'Phone Bill',
    note: '',
    amount: 1000,
    createdAt: 4534645799
});