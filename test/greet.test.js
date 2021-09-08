var greet = require('../greet');
let assert = require("assert");

describe('greet test' , function(){
    it('returns "Hello, Bob" when I greet Bob' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
    });
    
    it('returns "Hello, Sam" when I greet Sam' , function(){
        assert.equal(greet('Sam'), 'Hello, Sam');
    });

});
