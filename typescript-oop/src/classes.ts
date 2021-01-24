// Class
class Department1 {
	name1: string; // like object but class is haven't key value

	constructor(n1: string) {
		this.name1 = n1;
	}
	describe(this: Department1) {
		console.log("Department " + this.name1);
	}
}

const chef = new Department1("Chef cooking");
chef.describe();

const chefCopy = { name1: "DUMMY", describe: chef.describe };
// chefCopy.describe(); // output undefined before added property string
chefCopy.describe();
// Class

// ==========================================================================================================

//Private and Public
abstract class Department2 {
	// Using Static
	static buildCompany = 2021;
	// using Shorthand initialization
	// id: string;
	// name2: string;
	// private employees: string[] = []; // Private property are really only accessible from inside the class
	// protected is like private but unlike private
	protected employees: string[] = [];
	constructor(protected readonly id: string, public name2: string) {
		// this.id = id
		// this.name2 = n2;
	}

	static createEmployee(name2: string) {
		return { name2: name2 };
	}

	// describe(this: Department2) {
	// 	console.log(`Department (${this.id}): ${this.name2}`);
	// }
	// Using abstract
	abstract describe(this: Department2): void;

	addEmployee(employee: string) {
		// this.id="(d2)" // ERROR Because Read-only
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

// Inheritance
class ITDepartment extends Department2 {
	admins: string[];
	constructor(id: string, admins: string[]) {
		super(id, "IT");
		this.admins = admins;
	}
	describe() {
		console.log("IT Department - ID: " + this.id);
	}
}

const it = new ITDepartment("D1", ["Boatd"]);
it.addEmployee("Aldo");
it.addEmployee("Boetd");

// Example private employees: string[] = [];
// Correct but if property employees give a private is that ERROR!!!
// it.employees[2] = "samin";
// Correct but if property employees give a private is that ERROR!!!

it.describe();
it.name2 = "New Name";
it.printEmployeeInformation();
console.log(it);

class AccountingDepartment extends Department2 {
	protected lastReport: string;
	private static instance: AccountingDepartment;

	// Using Getter
	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error("No Report Found");
	}

	// Using Setter
	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error("Please pass in a valid value");
		}
		this.addReport(value);
	}

	// Using Singletons & Private Constructor
	private constructor(id: string, private reports: string[]) {
		super(id
			, "Accounting");
		this.lastReport = reports[0];
	}

	static getInstance() {
		if (AccountingDepartment.instance) {
			return this.instance;
		}
		this.instance = new AccountingDepartment("D2", []);
		return this.instance;
	}

	describe() {
		console.log("Accounting Department - ID: " + this.id);
	}

	addEmployee(name: string) {
		if (name === "Aldo") {
			return;
		}
		this.employees.push(name);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}
	printReport() {
		console.log(this.reports);
	}
}

const employee1 = Department2.createEmployee("Aldo");
console.log(employee1, Department2.buildCompany);

// ====================================================================================================

// const accounting = new AccountingDepartment("D2", []);
// Using Singletons & Private Constructor
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Aldo");
accounting.addEmployee("Boetd");
// accounting.printReport();
// accounting.printEmployeeInformation();
accounting.describe();
