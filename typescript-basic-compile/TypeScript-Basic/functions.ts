// Function Return type & void
function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number): void {
	//function is void
	console.log("Result: " + num);
}

// console.log(printResult(add(20, 20))); // output undefined = because print function void
printResult(add(20, 20));

// function types
// let combinedValues: Function; // Function is a provided by typeScript
// combinedValues = add; // combinedValues = 7; ERROR!! because this is number
// console.log(combinedValues(8, 8));
let combinedValues: (a: number, b: number) => number;
combinedValues = add;
console.log(combinedValues(8, 8));
// let someValue: undefined;

// Arrow Functions
// Function callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

addAndHandle(10, 20, (result) => {
	// Parameter result is callback from cb: (num: number) => void
	console.log(result);
});
