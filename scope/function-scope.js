/*
	Javascript have function scope. The variable is visible inside the function. 
	Even inside an inner function.
*/

var foo = function (){
	var a = 3, b = 5;

	console.log("Just declared a: " + a);
	console.log("Just declared b: " + b);
	//console.log(c); undefined

	var bar = function () {
		var b = 7, c =11;

		console.log("Inner function a: " + a);
		console.log("Inner function b: " + b);
		console.log("Inner function c: " + c);

		a += b + c;

		console.log("After operations inner function a: " + a);
		console.log("After operations inner function b: " + b);
		console.log("After operations inner function c: " + c);
	};

	bar();

	console.log("At the end of the function a: " + a);
	console.log("At the end of the function b: " + b);
	//console.log(c); undefined
}

foo();

//console.log(a); undefined