const add = (a: number, b: number) => {
  return a - b; // return number
  // return akqdiqidjqidjq // return string ERROR
};
console.log(add(2, 5));

// function auto return void
const age = (a: number, b: number) => {
  a + b; // age disini auto return void, karena tidak mereturn apapun "return"
};
console.log(age(20, 19));

// Anonymous Functions
function divide(a: number, b: number): number {
  return a / b;
}
console.log(divide(10, 2));

const subtract = function (a: number, b: number) {
  return a - b;
};
console.log(subtract(20, 10));

// return Void and never
const logger = (message: string): void => {
  console.log(message); // return void
  // VOID not Return Anything as return null and undefined
  // dapat juga tidak di declare sebagai void kalo tidak mereturn sesuatu

  // return "wlwlwl" ini harus mengembalikan string not void
};

const throwError = (message: string): never => {
  throw new Error(message); // never return anything
};

// Destructuring annotation
const todayWeathers = {
  date: new Date(),
  weather: "Rainy",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather(todayWeathers);

// you can to this like as
// const logWeather = ({date, weather}: { date: Date; weather: string }): void => {
//   console.log(date);
//   console.log(weather);
// };
// logWeather(todayWeathers);
