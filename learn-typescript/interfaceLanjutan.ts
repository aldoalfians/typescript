// Interface optional Property
// Berfungsi untuk mengabaikan property yang sifatnya optional
// Symbol optional (?)

interface Teacher {
	name: string;
	age: number;
	phone?: number;
}

let teacher: Teacher = { name: "Aldo", age: 18 };
// Seharusnya klo tidak menggunakan optional maka ERROR
// =========================================================================================

// Interface ReadOnly

interface Student {
	readonly name: string;
	readonly age: number;
	NIM: number;
}

let student: Student = { name: "Aldo", age: 20, NIM: 1110222 };
// ReadOnly hanya membaca sekali tidak bisa diubah.
// student.age = 20; // ERROR karen data berubah sedangkan propertnya read ONly
student.NIM = 2020202; // Tidak error karena tidak menggunakan readOnly
console.log(student);
// ================================================================================================

// Interface Inheritance

interface Vehicle10 {
	name: string;
	wheels: number;
}

interface Taxi extends Vehicle10 {
	doors: number;
}

class Limo implements Taxi {
	name: string;
	wheels: number;
	doors: number;

	constructor(n: string, w: number, d: number) {
		this.name = n;
		this.wheels = w;
		this.doors = d;
	}
}

const limo = new Limo("Limo", 4, 4);
console.log(limo);
// ===============================================================================================================

// Interface Extends Class
class Book {
	title: string;
	pages: number;

	constructor(t: string, p: number) {
		this.title = t;
		this.pages = p;
	}
}

interface BestBiography extends Book {
	person(): void;
}

class Biography implements BestBiography {
	title: string;
	pages: number;
	constructor(t: string, p: number) {
		this.title = t;
		this.pages = p;
	}

	person(): void {
		console.log("Reading");
	}
}

const bookBiography = new Biography("Bj habibie", 1);
console.log(bookBiography);
bookBiography.person();
