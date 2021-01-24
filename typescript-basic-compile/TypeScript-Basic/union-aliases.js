"use strict";
// Union types
function combine(input1, // using aliases types Combinable = number
input2, // union types no using aliases types
resultConversion //Conversion = aliases custom,
//before using aliases types"as-number" | "as-text"
//parameter ke 3 union dan literal types
) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
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
var combineAges = combine(30, 20, "as-number"); // argument ke 3 = literal types
console.log(combineAges);
var combineAge = combine("30", "25", "as-number"); // argument ke 3 = literal types
console.log(combineAge);
var combineNames = combine("Aldo", "Alfiansyah", "as-text"); // argument ke 3 = literal types
console.log(combineNames);
