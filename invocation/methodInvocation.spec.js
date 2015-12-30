var myBankAccount = require('./methodInvocation.js');

describe('Method Invocation', function() {

	it('we can access to "this" inside of object function because is a property of the object', function(){
		myBankAccount.deposit();

		expect(myBankAccount.show_balance()).toBeDefined();
		expect(myBankAccount.deposit()).toEqual(2);
	});
});