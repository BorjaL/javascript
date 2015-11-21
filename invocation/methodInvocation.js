/*
	In this example we can see that we can access to 'this' of myBankAccount, inside of the function.

	This is because the function is stored as property of the object myBankAccount.
*/
var myBankAccount = {
	balance: 0,
	deposit: function (money_in) {
		this.balance += typeof money_in === 'number' ? money_in : 1;
	},
	show_balance: function() {
		console.log(this.balance);
	}
}

myBankAccount.deposit();
myBankAccount.show_balance();

myBankAccount.deposit(4);
myBankAccount.show_balance();