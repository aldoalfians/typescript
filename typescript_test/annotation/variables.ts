const age: number = 5; // Correct
// const age: number = true; // false becasue true is boolean
namespace Person {
  let name: string = "Aldo";
  name = "Boetd"; // Correct
  //name = 1231231 // error Type 'number' is not assignable to type 'string'
  console.log(name);
}

let fast: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//

// Array
let colors: string[] = ["red", "green", "blue"];
colors.push("yellow");
console.log(colors);
[...colors];
console.log(colors);

// Classes
class Car {
  wheels: number;
  doors: number;
  constructor(w: number, d: number) {
    this.wheels = w;
    this.doors = d;
  }
}
let car: Car = new Car(20, 20);
car.wheels = 4;
car.doors = 2;
console.log(car);

// Object literal

const Point: { x: number; y: number } = {
  x: 20,
  y: 10,
};
const point = Point;
point.x;
point.y;
console.log(`I get the point ${point.x} i get point also ${point.y}`);

// function

const logNumber: (i: number) => void = (i: number) => {
  return i + 1;
};
console.log(logNumber(2));

// When to use annotations
// 1) Function that returns the "any" types
interface Point {
  x: number;
  y: number;
}
const json = `{"x":10, "y":5 }`;
// const coordinates: { x: number; y: number } = JSON.parse(json); if using object literal
const coordinates: Point = JSON.parse(json);
console.log(coordinates);
coordinates.x = 20;
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
let color = ["red", "green", "blue"];
let foundColor: boolean;

for (let i = 0; i < color.length; i++) {
  if (color[0] === "red") {
    foundColor = true;
  } else {
    foundColor = false;
  }
}
console.log(foundColor);

// 3) variabel yang tipenya tidak dapat disimpulkan dengan benar
let numbers = [-5, -9, 10];
// let numberAboveZero = false; ERROR Type 'number' is not assignable to type 'boolean'
let numberAboveZero: number | boolean = false; // fix issue

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
console.log(numberAboveZero);
