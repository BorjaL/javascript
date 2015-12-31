var myBankAccount = require('./closure.js').myBankAccount;
var bankAccountParameters = require('./closure.js').bankAccountParameters;

describe('Closure scope', function(){

	it('we can not access to the attributes directly but we can access throug the functions', function(){
		
		myBankAccount.deposit(5);

		expect(myBankAccount.balance).not.toBeDefined();
		expect(myBankAccount.show_balance()).toEqual(5);
	});

	it('we can not access to the attributes even if they are parameters of the function', function(){

		var myBankAccountParameters = bankAccountParameters(100);
		myBankAccountParameters.deposit(50);

		expect(myBankAccountParameters.balance).not.toBeDefined();
		expect(myBankAccountParameters.show_balance()).toEqual(150);
	});
});