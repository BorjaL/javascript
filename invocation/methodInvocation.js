var myBankAccount = {
	balance: 0,
	deposit: function (money_in) {
		this.balance += typeof money_in === 'number' ? money_in : 1;
		return this.balance;
	},
	show_balance: function() {
		return this.balance;
	}
}

module.exports = myBankAccount;