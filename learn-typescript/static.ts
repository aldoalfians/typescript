// Static
// Static merupakan property atau method yang menempel pada class itu sendiri jadi bukan pada object yang dihasilkan
// kalo methode atau property yg biasa harus menginstasiasi class dulu / harus membuat object terlebih dahulu untuk mengakses property dan method
// Static bersifat global

class Ayam {
	static kaki: number = 2;

	static jalan() {
		console.log(`ayam berjalan menggunakan ${this.kaki} kaki`);
	}

	getKaki() {
		// console.log(this.kaki) ERROR!!! karena this mengandung property dari object
		console.log(Ayam.kaki); // correct karana Ayam ini static, static menempel pada class
	}
}

console.log(Ayam.jalan());
const ayam = new Ayam();
ayam.getKaki();
