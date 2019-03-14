var testCase = require('mocha').describe;
var it = require('mocha').it;
var expect = require('chai').expect;

testCase('Bools', function() {
    it('should return true', function() {
        var isValid = true;
        expect(isValid).to.be.true;
    });
    it('should return false', function() {
        var isValid = false;
        isValid.should.equal(false);
    });
});
