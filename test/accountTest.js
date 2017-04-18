var assert = require('chai').assert;
var Account = require('../Account');

describe('Account Constructor', function() {

var account;

describe('The Account', function() {

    beforeEach(function() {
    account = new Account();
    });

    it('first should return the Account', function() {
        assert.isFunction(account, 'object');
    });

});

});