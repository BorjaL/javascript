var function_scope = require('./function-scope.js');

describe('Function scope', function(){

	it('we can access to an variable inside of all the function, even inner functions', function(){

		expect(function_scope(1,2)).toEqual(18);
	});
});