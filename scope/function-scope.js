/*
	Javascript has function scope. The variable is visible inside the function. 
	Even inside an inner function.
*/

var function_scope = function (param1, param2){
	var a = param1, b = param2;

	var inner_function = function () {
		var b = 10, c =5;

		a += b + c;
	};
	
	inner_function();

	return a + b;
}

module.exports = function_scope;