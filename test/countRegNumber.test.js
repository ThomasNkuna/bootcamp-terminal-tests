var countRegNumber = require('../countRegNumber');
let assert = require("assert");

describe('Counting registration numbers test' , function(){

    it('returns "3" for three sets of registration numbers' , function(){
           var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
           assert.equal(regCount, 3);
        });
    
    it('returns "1" for only one set of registration numbers' , function(){
          var regCount = countRegNumber('CA 182736')
          assert.equal(regCount, 1);
        });
    
    });