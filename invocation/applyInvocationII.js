/*
	Another apply invocation. We can use shoe_balance function in an object that doesn¡t have that method.
*/
var BankAccount = function(balance){
	this.balance = typeof balance === 'number' ? balance : 0; 
}

BankAccount.prototype.deposit = function (money_in) {
	this.balance += typeof money_in === 'number' ? money_in : 1;
}

BankAccount.prototype.show_balance = function () {
	return this.balance;
}



module.exports = BankAccount;