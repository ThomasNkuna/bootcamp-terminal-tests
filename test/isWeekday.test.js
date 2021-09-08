var isWeekday = require('../isWeekday');
let assert = require("assert");

describe('To find out if the parameter passed in is a day of the week test' , function(){

    it('returns "true" if the parameter passed in is a day of the week test ' , function(){
        assert.equal(isWeekday('Monday'), true);
        });
    
    it('returns "false" if the parameter passed in is not a day of the week test ' , function(){
          
         assert.equal(isWeekday('Saturday'), false);
        });
    
    });