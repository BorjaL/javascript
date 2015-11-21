/*
	There is an exception with the function invocations. It's the constructor function.
	If you use the prefix 'new' for invoking a function, a new object is created and 'this' is bound to the new object.
*/
var BankAccount = function(balance){
	this.balance = typeof balance === 'number' ? balance : 0; 
}

BankAccount.prototype.deposit = function (money_in) {
	this.balance += typeof money_in === 'number' ? money_in : 1;
}

BankAccount.prototype.show_balance = function () {
	console.log(this.balance);
}

var myBankAccount = new BankAccount(5);
myBankAccount.deposit();
myBankAccount.show_balance();

var otherBankAccount = new BankAccount();
otherBankAccount.deposit(4);
otherBankAccount.show_balance();