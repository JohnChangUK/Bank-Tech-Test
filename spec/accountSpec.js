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
});

});