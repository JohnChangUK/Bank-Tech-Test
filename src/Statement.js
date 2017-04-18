(function(exports) {

function Statement(account) {
    this.account = account;
};

Statement.prototype.displayAccount = function() {
    return this.account;
};

Statement.prototype.showTransactions = function() {
    return this.displayAccount().displayTransactions();
};

Statement.prototype.displayHeaders = function() {
    return("    date   ||  credit  ||  debit  || balance \n");
};

Statement.prototype.displayTransactions = function() {
    var transactions = this.showTransactions();
    var transactionsArray = [];
    for(i = 0; i < transactions.length; i++) {
        var date = transactions[i].date;
        var deposit = transactions[i].deposit.toFixed(2);
        if(deposit == 0.00) {
            deposit = "     ";
        }
        var withdrawal = transactions[i].withdrawal.toFixed(2);
        if(withdrawal == 0.00) {
            withdrawal = "     ";
        }
        var balance = transactions[i].balance.toFixed(2);
        transactionsArray.push(`${date} || ${deposit} || ${withdrawal} || ${balance} `);
    }
    return transactionsArray;
};

Statement.prototype.displayString = function() {
    var transactionsArray = this.displayTransactions();
    return transactionsArray.join(('\r\n'));
};

Statement.prototype.displayStatement = function() {
    console.log(this.displayHeaders(), this.displayString());
};

exports.Statement = Statement;

})(this);