export default (expenses) => {
    return expenses
        .map((item) => item.amount)
        .reduce((sum, value) => sum + value, 0);
};
