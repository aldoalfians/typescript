// INTERSECTION TYPES
type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: "Aldo",
	privileges: ["create-server"],
	startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Function Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
	if (typeof a === "string" || typeof b === "string") {
		return a.toString() + b.toString();
	}
	return a + b;
}

const result = add("Aldo ", "Boetd");
result.split(" ");
console.log(result);

// Union type custom object Type
type UnknownEmployee = Admin | Employee;
const printEmployeeInformation = (emp: UnknownEmployee) => {
	console.log("Name: " + emp.name);
	if ("privileges" in emp) {
		console.log("Privileges: " + emp.privileges);
	}
	if ("startDate" in emp) {
		console.log("Start Date: " + emp.startDate);
	}
};

printEmployeeInformation(e1);
// ===========================================================================================

class Car {
	drive() {
		console.log("Driving....");
	}
}

class Truck {
	drive() {
		console.log("Driving a truck....");
	}
	loadCargo(amount: number) {
		console.log("Loading cargo...." + amount);
	}
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

const printVehicle = (vehicle: Vehicle) => {
	vehicle.drive();
	if (vehicle instanceof Truck) {
		// can using "loadCargo" in vehicle / vehicle instanceof Truck(JavaScript punya)
		vehicle.loadCargo(1000);
	}
};

printVehicle(v1);
printVehicle(v2);
// ===========================================================================================================
// Discriminated Unions
interface Bird {
	type: "bird";
	flayingSpeed: number;
}

interface Horse {
	type: "horse";
	runningSpeed: number;
}

type Animal = Bird | Horse;
const moveAnimal = (animal: Animal) => {
	let speed;
	switch (animal.type) {
		case "bird":
			speed = animal.flayingSpeed;
			break;
		case "horse":
			speed = animal.runningSpeed;
			break;
	}
	console.log("Moving at speed: " + speed);
};

moveAnimal({ type: "bird", flayingSpeed: 20 });
moveAnimal({ type: "horse", runningSpeed: 30 });

const paragraph = document.getElementById("message-output")!;
paragraph.innerHTML = "BISA GILA";

// const userInput = <HTMLInputElement>document.getElementById("user-input")!; //way 1
// const userInput = document.getElementById("user-input")! as HTMLInputElement; //way 2
const userInput = document.getElementById("user-input")!;
if (userInput) {
	(userInput as HTMLInputElement).value = "Hello"; // way 3
}

interface ErrorContainer {
	//{email: "Not a valid email", username: "Must start with a capital character "}
	[prop: string]: string;
}

const errorBag: ErrorContainer = {
	email: "Not a valid email",
	username: "Must start with a capital character",
};
