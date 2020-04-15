var assert = require('assert');
const fizzBuzz = require("../fizzBuzz");

describe('fizz buzz kao problem', function() {
    it('fizzBuzz funkcija', function () {
        fizzBuzz();
    });

    it("za brojeve djeljive sa 3 ispiši Fizz", function() {
        let result = fizzBuzz(3);
        assert.equal(result,"Fizz")
    });

    it("za brojeve djeljive sa 5 ispiši Buzz", function() {
        let result = fizzBuzz(5);
        assert.equal(result,"Buzz")
    });

    it("za brojeve djeljive sa oba broja ispiši FizzBuzz", function() {
        let result = fizzBuzz(15);
        assert.equal(result,"FizzBuzz")
    });

    it("za sve ostale ispiši undefined", function() {
        let result = fizzBuzz(4);
        assert.equal(result, undefined);
    });

});
