var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const converter = require("../arabroman");

describe('a to r', function() {
    it('a to r funkcija', function () {
      konverter();
    });

    it("a 1 = r I", function() {
        assert.strictEqual(konverter(1), "I"); 
    });

    it("a 2 = r II", function() {
       assert.strictEqual(konverter(2), "II"); 
    });

    it("a 3 = r III", function() {
        assert.strictEqual(konverter(3), "III"); 
     });

     it("a 4 = r IV", function() {
        assert.strictEqual(konverter(4), "IV"); 
     });

     it("a 5 = r V", function() {
      assert.strictEqual(konverter(5), "V"); 
   });

   it("a 6 = r VI", function() {
      assert.strictEqual(konverter(6), "VI"); 
   });
     it("a 9 = r IX", function() {
      assert.strictEqual(konverter(9), "IX"); 
   });

     

});