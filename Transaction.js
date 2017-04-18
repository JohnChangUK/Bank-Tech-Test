function Transaction() {};

Transaction.prototype.getDate = function() {
    return this.date;
};

Transaction.prototype.add5 = function(value) {
    return value + 5;
}

Transaction.prototype.getAmount = function() {
    return this.amount;
};

module.exports = Transaction;