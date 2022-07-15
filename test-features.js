var assert = require('assert')

describe('Test features', function (){

    var num1 = 10;

    var num2 = 10;

it.only('Addition', function (){
    var num3= num1+num2;
    assert.equal(num3,20);
})

it.skip ('subtraction', function (){
    num3 = num1-num2;
    assert.equal(num3, 0)
})
 
it ('Pending test, without callback function')
})