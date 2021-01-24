// NameSpace
// Mengapa meggunakan nameSpace karena misalkan kita memasukan nama class yang sama atau const dllnya sama
// Typescript mengetahuinya karena bersifat global yang dimana kita harus menggunakan nameSpace agar sama tapi tidak Error

// Before NameSpace

// class Person {

// } // Error karena class person sudah digunakan

// After NameSpace

namespace Persons {
	export class Person {
		name: string;

		constructor(n: string) {
			this.name = n;
		}
	}

	export const person = new Person("Aldo");
	console.log(person);
	// NOT ERROR CAUSE USING NAMESPACE
}

// cara mendapatkan class Person diluar NameSpace agar tidak error, gunakan export
const person1 = new Persons.Person("Boatd");
console.log(person1);
// cara mendapatkan class Person diluar NameSpace agar tidak error, gunakan export
