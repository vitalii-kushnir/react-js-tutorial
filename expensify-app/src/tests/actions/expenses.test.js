import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: 'xxx-yyy'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'xxx-yyy'
    });
});

test('should setup edit expense action object', () => {

    const updates = {
        description: 'new description'
    };

    const action = editExpense('xxx-yyy', updates);

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'xxx-yyy',
        updates
    });
});

test('should setup remove expense action with provided values', () => {
    const expenseData = {
        description: 'Rent',
        note: 'It was the last month rent',
        amount: 1000,
        createdAt: 1000
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup remove expense action with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: '',
            createdAt: 0,
            id: expect.any(String)
        }
    });
});