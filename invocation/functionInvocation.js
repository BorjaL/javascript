/*
	When a function is not the property of an object, then is invoked as a function.
	So the 'this' object is bound to the global object. Ouch!

	When you want to employ an inner function to help the functionality of an object,
	a workaround have to be done. It is to create a variable and then asign 'this' object to it.
*/

var myBankAccount = {
	balance: 0,
	deposit: function (money_in) {
		this.balance += typeof money_in === 'number' ? money_in : 1;
	},
	show_balance: function() {

		var that = this; // Ugly AF

		var show_in_console = function (){
			console.log(this.balance); //undifined
			console.log(that.balance);
		}

		show_in_console();
	}
}

myBankAccount.deposit();
myBankAccount.show_balance();

myBankAccount.deposit(4);
myBankAccount.show_balance();