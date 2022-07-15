var assert = require ('assert');
// Suite levle timeout 
// test level timeout 
// hooks level timeout 
describe ('Mathematical Operations - test suit', function(){

    this.beforeEach (function (done){
        this.timeout(500)
        
        setTimeout(done,0000)
    })

    this.timeout(5000)

    it('Addition of two numbers', function (done){
        
    this.timeout(5000);

    setTimeout(done,4000)
    
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

        assert.equal(z,1);
    })

})