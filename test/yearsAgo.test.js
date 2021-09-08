var yearsAgo = require('../yearsAgo');
let assert = require("assert");

describe('How many years ago test' , function(){

    it('returns "years ago from current year" for given current year ' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        });
    
    it('returns "years ago from current year" for given current year' , function(){
          assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
        });
    
    });