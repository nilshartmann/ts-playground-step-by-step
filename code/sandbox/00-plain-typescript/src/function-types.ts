function functiontypes() {
	type CalcOperation = (a: number, b: number) => number;

	const AddOperation:CalcOperation = function(a,b) { return a + b };
	const DivideOperation:CalcOperation = function(a,b) { return a / b };
	const SqrtOperation = function (a: number) { return Math.sqrt(a) };

	function calculator(operation: CalcOperation, a: number, b: number) {
		operation(a, b);
	}

	calculator(AddOperation, 2, 3); // 5
	calculator(SqrtOperation, 3); // ERROR


}
