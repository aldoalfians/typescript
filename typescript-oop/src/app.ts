// Interface
// interface Person {
// 	name: string;
// 	age: number;

// 	greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
// 	name: "Aldo",
// 	age: 18,
// 	greet(phrase: string) {
// 		console.log(phrase + " " + this.name);
// 	},
// };

// user1.greet("Hello");
// Interface

// =======================================================================================

// Interface as function types
// type AddFn = (a: number, b: number) => number;

interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
	return n1 + n2;
};

// Extending Inheritance
interface Named {
	readonly name: string;
	outputName?: string;
}
// Using interface with classes
interface Greetable extends Named {
	// can use type Gretable = {}
	// readonly name: string;
	// can use readonly
	// Can't as public private

	greet(phrase: string): void;
}

class Person implements Greetable {
	name: string;
	age = 30;
	constructor(n: string) {
		this.name = n;
	}

	greet(phrase: string) {
		console.log(phrase + " " + this.name);
	}
}

let user1: Greetable;
user1 = new Person("Aldo");
// user1.name = "Boetd" // Error!!! because readonly property
user1.greet("Hello");
console.log(user1);
