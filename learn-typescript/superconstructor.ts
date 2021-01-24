// Super Consturctor
// super constructor digunakan untuk memanggil class parent yang mana class parent tersebut disi constructor

class Car {
	name: string;
	release: number;

	constructor(n: string, r: number) {
		this.name = n;
		this.release = r;
	}
}

class MyCar extends Car {
	vehicle: boolean;

	constructor(n: string, r: number, v: boolean) {
		// masukan constuctor parameter parent "CAR" ke dalam constructor parameter "MYCAR"
		super(n, r); // super disini adalah constructor parent yaitu Car
		this.vehicle = v;
	}
	// ERROR!!! must contain a "super" call
}

const myCar = new MyCar("odong-odong", 1999, false);
console.log(myCar)
console.log(myCar.vehicle);
