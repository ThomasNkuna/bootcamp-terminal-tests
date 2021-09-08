var isFromBellville = require('../isFromBellville');
let assert = require("assert");

describe('isFromBellville test' , function(){

    it('returns "true" if RegNumber is from Bellville' , function(){
           assert.equal(isFromBellville('CY 123'), true);
        });
    
    it('returns "false" if RegNumber is not from Bellville' , function(){
          assert.equal(isFromBellville('CJ 123'), false);
        });
    
    });
    