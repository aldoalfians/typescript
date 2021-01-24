class Animal2 {
	name: string;
	foot: number;

	constructor(n: string, f: number) {
		this.name = n;
		this.foot = f;
	}
}

const animal2 = new Animal2("Fish", 2);
// using constructor
// lebih mudah tinggal memasukan isi parameternya
// dari pada tidak menggunakan consturctor contoh
// animal12.name = "fish" // seperti ini
console.log(animal2);

// cara lebih singkat menangani consturctor
class Person {
	constructor(public name: string, public age: number) {}
}

const person = new Person("Aldo", 18);
console.log(person);
