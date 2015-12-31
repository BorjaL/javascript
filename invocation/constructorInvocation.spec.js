var BankAccount = require('./constructorInvocation.js');

describe('Constructor invocation', function(){

	it('When you invoke a constructor, "this" is bound to the new object', function(){
		var myBankAccount = new BankAccount(5);
		myBankAccount.deposit(2);

		expect(myBankAccount.show_balance()).toEqual(7);
	});
});