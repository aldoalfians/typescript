// Aliases custom types
type Combinable = number | string;
type Conversion = "as-number" | "as-text";

// Union types
function combine(
	input1: Combinable, // using aliases types Combinable = number and string
	input2: number | string, // union types no using aliases types
	resultConversion: Conversion //Conversion = aliases custom,
	//before using aliases types"as-number" | "as-text"
	//parameter ke 3 union dan literal types
) {
	let result;
	if (
		(typeof input1 === "number" && typeof input2 === "number") || resultConversion === "as-number"
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;

	// way literal 1
	// if (resultConversion === "as-number") {
	// 	return +result;
	// } else {
	// 	return result.toString();
	// }
}

const combineAges = combine(30, 20, "as-number"); // argument ke 3 = literal types
console.log(combineAges);

const combineAge = combine("30", "25", "as-number"); // argument ke 3 = literal types
console.log(combineAge);

const combineNames = combine("Aldo", "Alfiansyah", "as-text"); // argument ke 3 = literal types
console.log(combineNames);
