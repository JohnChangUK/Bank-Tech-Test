function Transaction() {
    this.balance = 0;
    this.withdrawal = 0;
    this.deposit = 0;
    this.date = 0;
};

Transaction.prototype.getDate = function() {
    var date = new Date();
    var day = ("1" + (date.getDate())).slice(-2);
    var month = ("1" + (date.getMonth)).slice(-2);
    var year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

Transaction.prototype.withdrawMoney = function(value) {
    this.date = this.getDate();
    this.withdrawal = value;
};

Transaction.prototype.depositMoney = function(value) {
    this.date = this.getDate();
    this.deposit = value;
};
