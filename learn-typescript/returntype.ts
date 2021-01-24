// Return type
// Berfungsi mengatur type apa yg dikemablikan pada sebuah method

class Hotel {
	private room: number = 400;

	getRoom(): number {
		// method getRoom disini return number karena property room number, kalo return string maka ERROR
		return this.room;
	}

	selectRoom(): void {
		// using void method tidak mengembalikann apa-apa
		// using void tidak boleh ada returnnya
		console.log("Silahkan dipilih kamar no ");
	}

	async bookingRoom(): Promise<number> {
		return 23;
	}
}
