// Visibility or Access modifier
// Yang dapat mengatur dan membatasi akses dari property atau method pada class
// ada 3 visibility
// public = dapat dipanggil dari mana saja
// protected =  hanya dapat digunakan pada class itu sendiri beserta turunannya
// private = hanya bisa dipanggil di dalem kelas itu sendiri

// Example

class Vehicle {
	public nameCar: string;
	private release: number;
	protected car: boolean;

	constructor(m: string, r: number, c: boolean) {
		this.nameCar = m;
		this.release = r;
		this.car = c;
	}

	driveCar() {
		// this.release;
		// this.car;
		// this.nameCar
		// semua property public private protected masih dapat digunakan dis sini di method drive car
	}
}

class Car2 extends Vehicle {
	private wheels: number = 4;
	private seats: number = 4;
	private exhaust: number = 1;

	chassis() {
		console.log(this.wheels + this.wheels + this.seats);
		// this.car // property car protected yang dimana masih bisa digunakan karena turunana dari class vehicle
		// this.nameCar // propertynya public bisa digunakan dimana saja
		// this.release // ERROR!!!!! hanya bisa digunakan didalem class itu sendiri
	}
}

const car2 = new Car2("avanza", 2013, true);
console.log(car2);
car2.chassis();
