var testCase = require('mocha').describe;
var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

testCase('Bools', function(){
    it('should return true', function(){
          var isValid = true
          expect(isValid).to.be.true;
    });
    it('should return false', function(){
          var isValid = false
          isValid.should.equal(false);
    });
});