var totalPhoneBill = require('../totalPhoneBill');
let assert = require("assert");

describe('the total bill for the data provided test' , function(){

    it('returns "R7.45" for call, sms, call, sms and sms costs ' , function(){
          assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        });
    
    it('returns "R3.40" for call and sms' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
          
        });
    
        it('returns "R1.30" for sms and sms costs' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    
        });
    
    });