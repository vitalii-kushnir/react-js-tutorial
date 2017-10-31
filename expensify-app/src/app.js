import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {addExpense} from './actions/expenses'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();
store.dispatch(addExpense({description: 'Rent', amount: 5555555, createdAt: -1000}));
store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 1000}));
store.dispatch(addExpense({description: 'Water bill', amount: 185000, createdAt: 2000}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

