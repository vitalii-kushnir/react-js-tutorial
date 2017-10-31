import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const EditExpensePage = (props) => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default EditExpensePage;