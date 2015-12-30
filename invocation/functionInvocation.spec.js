var myBankAccount = require('./functionInvocation.js');

describe('Function invocation', function(){

	it('we can not access to "this" inside of a function out of the object', function(){
		expect(myBankAccount.show_balance_outter_function()).not.toBeDefined();
	});

	it('we can not access to "this" inside of an inner function, not a property of the object', function(){
		expect(myBankAccount.show_balance_inner_function()).not.toBeDefined();
	});

	it('we can access to "this" inside of an inner function, with a workaround', function(){
		expect(myBankAccount.show_balance_inner_function_workaround()).toBeDefined();
	});
	
});