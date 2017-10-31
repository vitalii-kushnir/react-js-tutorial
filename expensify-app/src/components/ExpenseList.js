import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expences'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map( item => <ExpenseListItem key={item.id} {...item} />)}

    </div>
);

const mapStateToProp = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProp)(ExpenseList);
