//DECORATORS
// function Logger(constructor: Function) {
// 	console.log("Logging....");
// 	console.log(constructor);
// }

// @Logger
// class Person {
// 	name = "Aldo";

// 	constructor() {
// 		console.log("Creating Person Object");
// 	}
// }

// const person = new Person();

// console.log(person);

// Working with Decorators Factory
function Logger(Login: string, hookClass: string) {
	console.log("LOGGER FACTORY");
	return function (constructor: any) {
		// Using Returning a function
		console.log(Login);
		console.log(constructor);
		const classesLogin = document.getElementById(hookClass);
		if (classesLogin) {
			classesLogin.innerHTML = Login;
		}
	};
}

function WithTemplate(template: string, hookId: string) {
	console.log("TEMPLATE FACTORY");
	return function <T extends { new (...args: any[]): { name: string } }>(
		originalConstructor: T
	) {
		// Using Returning a class in a class decorators
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super();
				console.log("Rendering Template");
				const hookEl = document.getElementById(hookId);
				if (hookEl) {
					hookEl.innerHTML = template;
					hookEl.querySelector("h1")!.textContent = this.name;
				}
			}
		};
	};
}

@Logger("LOGGING", "classes")
@WithTemplate("<h1>My person Object</h1>", "app")
class Person {
	name = "Aldo";

	constructor() {
		console.log("Creating Person Object");
	}
}

const person = new Person();

console.log(person);
// =========================================================================================================

// Property Decorators
function Log(target: any, propertyName: string | Symbol) {
	console.log("Property Decorators");
	console.log(target, propertyName);
}

// Accessor & Parameter Decorators

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log("Accessor Decorators");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function Log3(
	target: any,
	name: string | Symbol,
	descriptor: PropertyDescriptor
) {
	console.log("Method Decorators");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
	console.log("Parameter Decorators");
	console.log(target);
	console.log(name);
	console.log(position);
}

class Product {
	@Log
	title: string;
	private _price: number;

	@Log2
	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error("Invalid Price - should be positive!");
		}
	}

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	@Log3 // @Log3 is mind using Method Decorators
	getPriceWithTax(@Log4 tax: number) {
		// @Log4 is mind using parameter Decorators
		return this._price * (1 - tax);
	}
}
// Property Decorators
// ======================================================================================================

// Creating an Autobind Decorator

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
	console.log("TESTING AUTO BIND");
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		},
	};
	return adjDescriptor;
}

class Printer {
	message = "This Works";

	@Autobind
	showMessage() {
		console.log(this.message);
	}
}

const p = new Printer();

const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage.bind(p)); // this works
button.addEventListener("click", p.showMessage);
// ========================================================================================================

// Validation with Decorators

interface ValidatorConfig {
	[property: string]: {
		[validatableProp: string]: string[]; // ["required", "positive"]
	};
}

const registeredValidators: ValidatorConfig = {};

function RequiredTitle(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		[propName]: ["required"],
	};
}

function PositiveNumber(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		[propName]: ["positive"],
	};
}

function Validate(obj: any) {
	const objValidationConfig = registeredValidators[obj.constructor.name];
	if (!objValidationConfig) {
		return true;
	}
	for (const prop in objValidationConfig) {
		for (const validator of objValidationConfig[prop]) {
			switch (validator) {
				case "required":
					return !!obj[prop];
				case "positive":
					return obj[prop] >= 0;
			}
		}
	}
	return true;
}

class Course {
	@RequiredTitle
	title: string;
	@PositiveNumber
	price: number;

	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const titleEl = document.getElementById("title") as HTMLInputElement;
	const priceEl = document.getElementById("price") as HTMLInputElement;

	const title = titleEl.value;
	const price = +priceEl.value;

	const createdCourse = new Course(title, price);
	if (!Validate(createdCourse)) {
		alert("Invalid input, please try again");
		return;
	}
	console.log(createdCourse);
});
