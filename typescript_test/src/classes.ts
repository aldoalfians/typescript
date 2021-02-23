class Vehicle {
  // public drive(): void {
  //   console.log("chugga chugga ");
  // }

  public honk(): void {
    console.log("beep ");
  }
}
const vehicle = new Vehicle();
// vehicle.drive();
vehicle.honk();

// Basic Inheritance

class Car extends Vehicle {
  private drive(): void {
    // karena code run dari atas ke bawah maka drive() didalam class Car yg akan dijalankan
    console.log("vroom");
    // karena ini mewarasi vehicle method akan Error kalo menggunakan Private
  }

  startDrivingProcess(): void {
    this.drive();
  }
}
const car = new Car();
car.startDrivingProcess();
car.honk();

// Access modifier
// 1) Public adalah label yang berfungsi untuk menentukan sifat akses ke semua member yang
// mengikutinya (di bawahnya), sehingga memiliki sifat dapat di akses dari manapun. Dapat di
// akses dari dalam class itu sendiri, dari anak class (derived class) dan juga dari luar class.

// 2) Private adalah label yang berfungsi untuk menentukan sifat akses ke semua member yang
// mengikutinya menjadi memiliki sifat yang tidak dapat di akses dari manapun kecuali melalui
// friend function dan dari dalam class itu sendiri.

// 3) Protected adalah label yang berfungsi untuk menentukan sifat akses semua member yang
// mengikutinya, sehingga memiliki sifat yang tidak dapat diakses dari luar class tapi masih
// dapat di akses dari dalam class maupun anak class (derived class).

// Field in Classes
// Constructor

// class Colors {
//   colors: string;
//   constructor(c: string) {
//     this.colors = c;
//   }
// }
// untuk menggunakan argumen pada class Colors kita harus menggunkaan contructor
// const color = new Colors("black");
// console.log(color);

// cara lebih singkat mengenai constructor yanitu menggunakan access modifiers
class Employee {
  constructor(public employeeIt: string) {}
}
const employeeIt = new Employee("IT");
console.log(employeeIt.employeeIt);

class Accounting extends Employee {
  // karena kita disini menginheritance maka kita harus menggunakan super call
  constructor(public employeeAccount: string) {
    super(employeeAccount);
  }
}

const accounting = new Accounting("Accounting");
console.log(accounting.employeeAccount);
