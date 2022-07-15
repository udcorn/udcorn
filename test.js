var assert = require ('assert');

describe ('Mathematical Operations - test suit', function(){

    it('Addition of two numbers', function(){
        var a = 10 ;
        var c = 10 ; 

        var z = a+c;

        assert.equal(z,20);

    })

    it('Subtraction of two numbers', function(){
        var a = 10 ;
        var c = 10 ; 

        var z = a-c;

        assert.equal (z, 0)

    })
    
    it('Multiplication of two numbers', function(){
        var a = 10 ;
        var c = 10 ; 

        var z = a*c;

        assert.equal(z,100);
    })
    it('Division of two numbers', function(){
        var a = 10 ;
        var c = 10 ; 

        var z = a/c;

        assert.equal(z,0);
    })

})