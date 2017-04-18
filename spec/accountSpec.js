describe('Account', function() {
    var account;

    beforeEach(function() {
        account = new Account();
    });

    describe('The account must', function() {
        it('start with a balance of zero', function() {
            expect(account.displayBalance()).toEqual(0);
        });

        it('start with no previous transactions', function() {
            expect(account.displayTransactions()).toEqual([]);
        });
    });

describe('When withdrawing money', function() {
    it('reduces the balance', function() {
        account.deposit(50);
        account.withdraw(40);
        expect(account.displayBalance()).toEqual(10);
    });

    it('maintains a record of balance during the time', function() {
        account.deposit(100);
        account.deposit(100);
        expect(account.displayTransactions()[1].balance).toEqual(200);
    });
});

describe('When withdrawing', function() {
    it('should reduce the balance', function() {
        account.deposit(200);
        account.withdraw(100);
        expect(account.displayTransactions()[1].balance).toEqual(100);
    });
});

});