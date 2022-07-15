describe ('Mocha Hooks', function(){

    
it ('Mocha hooks test', function (){
    console.log('executing hooks test')
})
    before ('Before the test', function (){
        console.log('before');
    })
    beforeEach ('Before-each hook', function (){
        console.log('before each hook')
    })
    after('After hook', function (){
        console.log('after hook')
    })

    afterEach ('After Each hook', function (){
        var x= 10; var z=10; var q = x+z; 
       // console.assert('Expression returned ' )
        console.log(q)
    })    

}) 
