// INTERFACE
// Merupakan sebuah perjanjian atau kontrak yang mana method atau property yang disepakati didalam interface
// Kemudiam Harus di Implementasikan dalam class tersebut
// Example

interface AndroidPhone {
	name: string;
	menu(): void;
	home(): void;
	back(): void;
}

class Samsung implements AndroidPhone {
	name: string;

	constructor(n: string) {
		this.name = n;
	}

	menu(): void {
		console.log("Menu tapped");
	}
	home(): void {
		console.log("Home tapped");
	}
	back(): void {
		console.log("back tapped");
	}
}

class Asus implements AndroidPhone {
	name: string;

	constructor(n: string) {
		this.name = n;
	}

	menu(): void {
		console.log("Menu tapped -- Phone");
	}
	home(): void {
		console.log("Home tapped -- Phone");
	}
	back(): void {
		console.log("back tapped -- Phone");
	}
}

class GameA {
	protected phone: AndroidPhone;

	constructor(p: AndroidPhone) {
		this.phone = p;
	}

	back() {
		console.log("Back to game menu -- Game");
	}

	menu() {
		this.phone.menu(); // ini tombol mengarah ke menu yang di hp bukan di game
	}

	home() {
		this.phone.home(); // ini tombol mengarah ke home yang di hp bukan di game
	}
}

const samsung = new Samsung("tipe A");
const game = new GameA(samsung);
game.back();
game.menu();
game.home();
console.log(game);

// ===========================================================================================================

interface ApplePhone {
	home(): void;
}

class Iphone implements ApplePhone {
	name: string;

	constructor(n: string) {
		this.name = n;
	}

	home(): void {
		console.log("Back home -- phone");
	}
}

const iphone = new Iphone("IP 10");
// const game2 = new GameA(iphone);// ERROR!!! karena bukan dari bagian propert Android
// kegunaan interface ini sebagai antar muka dan untuk mengenali apakah parameter sudah cocok dengan apa yg diminta oleh oleh property yg diminta
