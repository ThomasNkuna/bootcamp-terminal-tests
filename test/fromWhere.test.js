var fromWhere = require('../fromWhere');
let assert = require("assert");
describe('The town the car is from test' , function(){

    it('returns "RegNumber" from town the car is from' , function(){
     assert.equal(fromWhere('CY'), 'Bellville');
     assert.equal(fromWhere('CJ'), 'Paarl');
     assert.equal(fromWhere('CA'), 'Cape Town');
     assert.equal(fromWhere('CC'), 'Some other place!');
        });
    
    it('returns "other" for a car from a different town' , function(){
     assert.equal(fromWhere('CC'), 'Some other place!');
          
        });
    
    });