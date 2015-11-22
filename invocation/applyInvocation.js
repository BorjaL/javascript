/*
	In Javascript functions can have another methods. The 'apply' method let us invoke a function.
	There is two parameters. The first one is the value that should be bound to this.
	The second is an aaray of parameters.
*/
var add = function (){
	console.log("Values on this: " + this.array[0] + " and " + this.array[1]);
	console.log("Values on arguments: " + arguments[0] + " and " + arguments[1]);
	return arguments[0] + arguments[1];
}

var array_for_parameters = [3,4]
var this_for_add = {
	array: [1,2]
}

var sum = add.apply(this_for_add, array_for_parameters);

console.log(sum);