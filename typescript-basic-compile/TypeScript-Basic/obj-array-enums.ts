// TypeScript Object & Array
const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // tuples
} = {
	name: "Aldo Alfiansyah",
	age: 18,
	hobbies: ["rebahan", "boker"],
	role: [7, "doe"],
};
person.role.push("jhon");
// person.role[1] = 10; ERROR!!! because index 1 is string
console.log(person.role);

// person.role = [7, "doe", "jhon"], ERROR because "Jhon" haven't index in role.

console.log(person.name);
// TypeScript Object & Array

// looping
for (let hobby of person.hobbies) {
	console.log(hobby); // rebhan and boker
	// console.log(hobby.map()) //ERROR!!! MAP does not exist on type string because it doesn't
}
// looping

// Array TypeScript
// let myHobbies: any[]; // all of them the solution using any[]
// myHobbies = ["Rebahan", 1] // this is wrong because input number
let myHobbies: string[];
myHobbies = ["Rebahan"];
// Array TypeScript

// Working with enums
enum Cars {
	DEALER,
	CASH,
	HOME,
} // behind the scenes it's a number "DEALER 0", "CASH 1", "HOME 2"

const car = {
	ayla: Cars.DEALER,
};

if (car.ayla === Cars.CASH) {
	console.log("cash");
}
// Working with enums

// JavaScript Object & Array
// const person = {
// 	name: "Aldo Alfiansyah",
// 	age: 18,
// 	hobbies: ["Rebahan", "Boker"],
// };
// JavaScript Object & Array
