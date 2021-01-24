const userName = "Aldo";
// userName = "Boatd"; // ERROR !!! because const can't be change value
let age = 18;
age = 19;

// let result; //correct
// function add(a: number, b: number) {
//let result; // ERROR // Let must be global variable
//result = a + b;
//return result;
//}
// console.log(result);

// if (age > 10) {
// 	var isOld = true;
// }
// console.log(isOld); // If on javaScript is true var still cacat

// Arrow Function
const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
	console.log(output);

const button = document.querySelector("button");
if (button) {
	button.addEventListener("click", (event) => console.log(event));
}
printOutput(add(10, 1));
// Arrow Function

// Spread Operator
//const hobbies = ["Rebahan", "Boker"];
// const activeHobbies = [...hobbies]; // output ["Rebahan", "Boker"]
//const activeHobbies = ["Beban Ortu"];
//activeHobbies.push(...hobbies); // output ["Beban ortu", "Rebahan", "Boker"]
//console.log(activeHobbies);

const person: {
	name: string;
	age: number;
} = {
	name: "Aldo",
	age: 19,
};

const getDataPerson = { ...person };
console.log(getDataPerson); // output {name: "Aldo", age: 19}
// Spread Operator

//Rest Parameter
const added = (...numbers: number[]) => {
	return numbers.reduce((curResult, curValue) => {
		return curResult + curValue;
	}, 0);
};

const addNumbers = added(5, 10, 2, 3.7);
console.log(addNumbers);
// Rest Parameter

//Array & object Destructuring
const hobbies = ["Rebahan", "Boker"];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const people: {
	names: string;
	ages: number;
} = {
	names: "Aldo",
	ages: 19,
};

const { names, ages } = people;
console.log(names, ages, people);
