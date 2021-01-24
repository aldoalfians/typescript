// Generics
const names2: Array<string | number> = []; // using unions
const names: Array<string> = []; // this is string[]
// names[0].split(" ");

const promise: Promise<string> = new Promise((resolve) => {
	setTimeout(() => {
		resolve("this is done");
	}, 2000);
});

promise.then((data) => data.split(" "));

// ==============================================================================

// Generic Function
function merge<T, U>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}
// console.log(merge({ nama: "Aldo" }, { age: 18 })); // correct
// const mergeObj = merge({ name: "Aldo" }, { age: 18 });
// mergeObj.name; // ERROR!!! because property does not exist on type "Object"
// Solution using <T, U> added a type variable T and U to the identity function
// mergeObj.name = "Boatd";
// console.log(mergeObj);
const mergeObj = merge({ name: "Aldo", hobbies: ["Rebahan"] }, { age: 18 });
const mergeObj2 = merge<{ name: string; hobbies: string[] }, { age: number }>(
	{ name: "Aldo", hobbies: ["Rebahan"] },
	{ age: 18 }
);
console.log(mergeObj2);

// Working with Constraints
function merge2<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}
const mergeObject = merge2(
	{ name: "BOATD", hobbies: ["Rebahan"] },
	{ age: 18 }
);
console.log(mergeObject.name);
// Working with Constraints

// Another Generic Function
interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = "Got no value";
	if (element.length === 1) {
		descriptionText = "Got 1 element.";
	} else {
		descriptionText = "Got " + element.length + " elements";
	}
	return [element, descriptionText];
}

console.log(countAndDescribe(["Rebahan", "Boker"]));
// Another Generic Function

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return "Value: " + obj[key];
}
const printResult = extractAndConvert({ Name: "Aldo" }, "Name");
// klo "name" string ini diganti age = Error karan tidak sesuai dengan property name:
console.log(printResult);
// =======================================================================================
// =======================================================================================