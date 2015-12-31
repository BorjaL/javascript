var addFunction = require('./applyInvocation.js');

describe('Apply invocation', function(){

	it('With method apply of Function class we can use this inside a function', function(){
		
		var array_for_parameters = [3,4]
		var this_for_add = {
			my_values: [1,2]
		}

		var sum = addFunction.apply(this_for_add, array_for_parameters);

		expect(sum).toEqual(10);
	});
});