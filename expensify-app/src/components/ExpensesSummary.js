import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total'
import selectedExpenses from '../selectors/expenses'

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWorld = expenseCount === 1 ? 'expense' : 'expenses';
    const formatedExpensesTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWorld} totalling {formatedExpensesTotal}</h1>
        </div>
    )
};

const mapStateToProp = (state) => {
    const visibleExpenses = selectedExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProp)(ExpensesSummary);
