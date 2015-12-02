/*
	A function can access to the context in which it was created. This is called closure.

	We have two examples:

	- Instead of an object itself, we assign the result of invoking a function, that is an object.
	  This object has access to the function variables, creating private variables. Kind of cool eh!

	- Instead of constructor invocation, we can create a function returning an object. With the access of the function
	  variables we can make them private. Even the parameters :)
*/

var myBankAccount = (function (){
	var balance = 0;

	return {
		deposit: function (money_in) {
			balance += typeof money_in === 'number' ? money_in : 1;
		},
		show_balance: function() {
			console.log(balance);
		}
	};
}());

console.log("Example 1");
myBankAccount.deposit();
myBankAccount.show_balance();
myBankAccount.deposit(2);
myBankAccount.show_balance();


var bankAccount = function (balance){
	return {
		deposit: function (money_in) {
			balance += typeof money_in === 'number' ? money_in : 1;
		},
		show_balance: function() {
			console.log(balance);
		}
	};
}

console.log("Example 2");
var myOtherBankAccount = bankAccount(100);
myOtherBankAccount.deposit();
myOtherBankAccount.show_balance();
myOtherBankAccount.deposit(200);
myOtherBankAccount.show_balance();