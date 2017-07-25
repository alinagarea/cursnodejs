var myValidator = require('./modules/passwordValidator');


var password = 'testetestetestegratis';
var valid = myValidator.validPassword(password);


console.log(" Your password " + password + " is " + valid);
