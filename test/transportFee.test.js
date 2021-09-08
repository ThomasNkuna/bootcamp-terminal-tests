var transportFee = require('../transportFee');
let assert = require("assert");

describe('Transportation fee test' , function(){

    it('returns "R20" for morning shift' , function(){
          assert.equal(transportFee('morning'), 'R20');
        });
    
    it('returns "R10" for afternoon shift' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
          
        });
    
        it('returns "free" for night shift' , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    
          
        });
    
    });