var myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc: 1;
	}
}

myObject.increment();
console.log(myObject.value);

myObject.increment(4);
console.log(myObject.value);