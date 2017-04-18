function Account() {
    this.balance = 0;
    this.transactionsArray = [];
}

Account.prototype.currentBalance = function() {
    return this.balance;
};

Account.prototype.showTransactions = function() {
    return this.transactions;
};

Account.prototype.withdraw = function(amount) {
    transaction = new Transaction();
    transaction.withdrawAmount(amount);
    transaction.balance += this.balance - amount;
    this.transactionsArray.push(transaction);
    this.balance += transaction.withdraw;
};

Account.prototype.deposit = function(amount) {
    transaction = new Transaction();
    transaction.depositAmount(amount);
    transaction.balance += this.balance + amount;
    this.transactionsArray.push(transaction);
    this.balance += transaction.deposit;
};

module.exports = Account;