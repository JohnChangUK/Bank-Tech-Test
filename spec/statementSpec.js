describe('Statement', function() {
    var statement;
    var account;

    beforeEach(function() {
        account = new Account();
        account.deposit(500);
        account.withdraw(200);
        statement = new Statement(account);
    });

    describe('Statement', function() {
        it('must have an existing account when instantiating a new Statement', function() {
            expect(statement.displayAccount()).toEqual(account);
        });
    });

    describe('Displaying the transactions', function() {
        it('should display the transactions array', function() {
            expect(statement.showTransactions()).toEqual(jasmine.any(Array));
        });
    });

    describe('Displaying Transactions', function() {
        it('the header should have this format', function() {
            expect(statement.displayHeaders()).toEqual("    date   ||  credit  ||  debit  || balance \n");
        });

        it('should output the transactions in order', function() {
            expect(statement.displayTransactions()).toEqual(jasmine.any(Array));
        });
    });
});