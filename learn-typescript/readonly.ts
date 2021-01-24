// ReadOnlu
// digunakan untuk suatu property yg datanya tida dapat di ubah / immutable

class Person3 {
	readonly gender: string = "Male";
}

const person3 = new Person3();
// person3.gender = "Female"; // ERROR!!! tidak dapat diubah karana using readOnly
