// Inheritance / pewarisan dapat menurunkan property kepada class lain yg di extendsnya

class Person1 {
	name: string = "";
	age: number = 0;
}

class Person2 extends Person1 {
	place: string = "";

	hobbies() {
		console.log(
			`Hi i am ${this.name} ${this.age} years old, i am from ${this.place} and i like rebahan `
		);
	}
}

const person2 = new Person2();
person2.name = "Boatd";
person2.age = 19;
person2.place = "ciledug";
console.log(person2);
person2.hobbies();
// Kesimpulannya bahwa class person1 mewarisi person2;
// yang dimana person 2 mendapatkan porperty yang di ada person1
// tidak hanya property, method juga dapat diwariskan
