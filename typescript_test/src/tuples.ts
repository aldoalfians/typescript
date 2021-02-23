const drink = {
  color: "blue",
  carbonated: true,
  sugar: 40,
};

// let pepsi: [string, boolean, number] = ["blue", true, 40];
// bisa seperti ini juga menggunakan type
type Drink = [string, boolean, number];
let pepsi: Drink = ["blue", true, 40];
// jika pepsi ini diganti nilainya mislkan index ke 0 jadi number maka Error
// pepsi[0] = 20; // ERROR Type 'number' is not assignable to type 'string'.
