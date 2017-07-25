var chai = require('chai');
var passwordValidator = require('../modules/passwordValidator');

describe("passwordValidator", function() {
   describe(".validPassword(password)", function() {

       it("accept doar testetestetestegratis ...", function(){
           //test with wrong value
           var wrongPass = '01';
           var valid = passwordValidator.validPassword(wrongPass);
           chai.expect(valid).to.be.equal(false); //chai check

          //test with good value
          var goodPass = 'testetestetestegratis';
          var valid2 = passwordValidator.validPassword(goodPass);
          chai.expect(valid2).to.be.equal(true);//chai
       });
        
   });
});
