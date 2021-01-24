class Animal1 {
	name: string = "";
	foot: number = 0;
	jump: boolean = true;

	breathe() {
		console.log(`${this.name} still breathe`);
	}
}

const animal1 = new Animal1();
animal1.name = "rabbit";
animal1.foot = 4;
animal1.jump = true;
console.log(animal1);
animal1.breathe();
