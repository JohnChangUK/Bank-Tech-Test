(function(exports) {

function Account() {
    this.balance = 0;
    this.transactionsArray = [];
}

Account.prototype.displayBalance = function() {
    return this.balance;
};

Account.prototype.displayTransactions = function() {
    return this.transactionsArray;
};

Account.prototype.withdraw = function(amount) {
    transaction = new Transaction();
    transaction.withdrawMoney(amount);
    transaction.balance += this.balance - amount;
    this.transactionsArray.push(transaction);
    this.balance -= transaction.withdrawal;
};

Account.prototype.deposit = function(amount) {
    transaction = new Transaction();
    transaction.depositMoney(amount);
    transaction.balance += this.balance + amount;
    this.transactionsArray.push(transaction);
    this.balance += transaction.deposit;
};

exports.Account = Account;

})(this);