function add(num1: number, num2: number, showResult: boolean, phrase: string) {
	// if (typeof num1 !== "number" || typeof num2 !== "number") {
	// 	throw new Error("Incorrect input");
	// }
	// IMPORTANT!!! TypeScript must be specified as number, string, boolean
	// JavaScript don't understand as number, string, boolean (Just JavaScript parameter = num1,num2,showResult, phrase)
	const result = num1 + num2;
	if (showResult) {
		console.log(phrase + result);
	} else {
		return result;
	}
}

const number1 = 5;
// can also if using let
// let number1: number;
// number1 = 5; 
const number2 = 5.2;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
