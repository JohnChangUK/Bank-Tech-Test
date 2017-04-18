var assert = require('chai').assert;
var Transaction = require('../Transaction');

describe('Transaction', function() {
    
    var transaction = new Transaction();
    var result = transaction.add5(5);

    it('adds 5 to the Transaction', function() {
        assert.equal(result, 10);
    });

    it('should return type number', () => {
        assert.typeOf(result, 'number');
    });
});