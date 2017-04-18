function Statement(account) {
    this.account = account;
};

Statement.prototype.displayAccount = function() {
    return this.account;
};

Statement.prototype.displayHeaders = function() {
    return("   date    ||  credit  ||  debit  || balance \n");
};

Statement.prototype.displayTransactions = function() {
    
}