var BankAccount = require('./applyInvocationII.js');

describe('Another Apply invocation', function(){

	it('With method apply of Function class we can use a function of a prototype passing a fake this object', function(){
		
		var fake_balance = {
			balance: 1000000
		}

		var my_balance = BankAccount.prototype.show_balance.apply(fake_balance);

		expect(my_balance).toEqual(1000000);
	});
});