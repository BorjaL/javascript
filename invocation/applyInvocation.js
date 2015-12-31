/*
	In Javascript functions can have another methods. The 'apply' method let us invoke a function.
	There is two parameters. The first one is the value that should be bound to this.
	The second is an aaray of parameters.
*/
var add = function (first, second){

	return first + second + this.my_values[0] + this.my_values[1];
}

module.exports = add