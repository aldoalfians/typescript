// Generics
// Berfungsi menjadikan sebuah function, class, dan interface yang miliki type dinamis

// FYI
// Kalo menggunakan type data "any" tidak terditeksi apa yang kita input

function getData(value: any) {
	return value;
}

const data = getData("ini data 1");
console.log(data); // output ini data

// Function type generic
// FYI
// Kalo menggunakan generic "<T>" yang bila isinya string, number, dll dia akan langsung mengetahui
function getData2<T>(value: T): T {
	return value;
}

const data1 = getData2(["aldo"]);
data1.push("boetd");
console.log(data1);
// ==============
// dapat juga sepert ini
const data2 = getData2<string>("Aldo"); // dapat juga seperti ini yang hanya menerima string
console.log(data2);

const data3 = getData2<number>(2); // dapat juga seperti ini yang hanya menerima number
console.log(data3);

// ===========================================
// Generics interFace

interface Generics<T> {
	propA: T;
}

function genericsFunction<T>(value: T): Generics<T> {
	let data: Generics<T> = {
		propA: value,
	};
	return data;
}
console.log(genericsFunction<string>("aldo"));
// =====================================================================================================================

// Generics type

type Generic<T> = {
	propA: T;
};

function genericFunction<T>(value: T): Generic<T> {
	let data: Generic<T> = {
		propA: value,
	};
	return data;
}
console.log(genericFunction<string>("boetd"));
//======================================================================

// Generics Class
interface Generics1<T> {
	propA: T;
	methodA(): T;
}

class GenericsClass<T> implements Generics1<T> {
	propA: T;

	constructor(p: T) {
		this.propA = p;
	}

	methodA(): T {
		return this.propA;
	}
}

const genericsClass = new GenericsClass<number>(20202);
console.log(genericsClass.propA.toFixed(2));
