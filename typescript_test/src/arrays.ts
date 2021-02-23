// Basic Array
const carMakes = ["toyota", "honda", "daihatsu"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// typed Array
// Help with inference when extracting values
const nameCats = ["comeng", "tumpi", "samin"];
const cat = nameCats[0]; // string
console.log(cat);
const myCat = nameCats.pop(); // string
console.log(myCat);

// prevent incompatible values
// nameCats.push(2000); // ERROR Argument of type 'number' is not assignable to parameter of type 'string'

// Help with "map"
nameCats.map((cat: string): string => {
  return cat.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [];
importantDates.push("2021-12-23");
importantDates.push(new Date());
console.log(importantDates);
