/*
	When a function is not the property of an object, then is invoked as a function.
	So the 'this' object is bound to the global object. Ouch!

	When you want to employ an inner function to help the functionality of an object,
	a workaround have to be done. It is to create a variable and then asign 'this' object to it.
*/

var outFunction = function(){
	return this.balance;
}

var myBankAccount = {
	balance: 0,
	deposit: function (money_in) {
		this.balance += typeof money_in === 'number' ? money_in : 1;
	},
	show_balance_outter_function: function() {

		return outFunction();
	},
	show_balance_inner_function: function() {

		var return_balance = function (){
			return this.balance;
		};

		return return_balance();
	},
	show_balance_inner_function_workaround: function() {

		var return_balance = function (that){
			return that.balance;
		}(this);

		return return_balance;
	}
}

module.exports = myBankAccount;