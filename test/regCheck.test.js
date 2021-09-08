
var regCheck = require('../regCheck');
let assert = require("assert");

describe('Provinces registration numbers test' , function(){

    it('returns "true" if RegNumber is from province' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        });
    it('returns "false" if RegNumber is not from province' , function(){
          assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
          assert.equal(regCheck('5566 L', 'M'), false);
          assert.equal(regCheck('ERT 123 EC', 'GP'), false);
          assert.equal(regCheck('FGT 123 MM', 'MP'), false);
        });  
    
    });