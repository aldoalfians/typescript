// const angkot = {
//   rute: "Aceh-Ambon",
//   noAngkot: 152,
//   beroperasi: true,
// };

// const cetakAngkot = (angkotJalan: {
//   rute: string;
//   noAngkot: number;
//   beroperasi: boolean;
// }) => {
//   console.log(`Tujuan: ${angkotJalan.rute}`);
//   console.log(`NoAngkot: ${angkotJalan.noAngkot}`);
//   console.log(`Angkot Beroperasi? ${angkotJalan.beroperasi}`);
// };
// cetakAngkot(angkot);

// nahh yang diatas tadi ini tidak menggunakan interface
// sekarang coba kita gunakan interface

// Interfaces

interface Angkot {
  rute: string;
  noAngkot: number;
  beroperasi: boolean;
  summary(): string;
}
const angkot = {
  rute: "Aceh-Ambon",
  noAngkot: 152,
  beroperasi: true,
  summary(): string {
    return `Rute: ${this.rute}`;
  },
};

const printAngkot = (angkotJalan: Angkot) => {
  console.log(`Tujuan: ${angkotJalan.rute}`);
  console.log(`NoAngkot: ${angkotJalan.noAngkot}`);
  console.log(`Angkot Beroperasi? ${angkotJalan.beroperasi}`);
  console.log(`Ringkasan ${angkotJalan.summary()}`);
};

printAngkot(angkot);
// =================================================================================

// function with Interfaces
namespace Vehicle {
  // code reuse with interfaces
  interface Cars {
    summary(): string;
  }

  const italianCar = {
    name: "Ferrari",
    year: new Date(),
    newCar: true,
    summary() {
      return `Name Car: ${this.name} `;
    },
  };

  const EuropeanCar = {
    name: "BMW",
    year: new Date(),
    newCar: true,
    summary(): string {
      return `Mr Mor give me a new Car ${this.name}`;
    },
  };

  const printCars = (vehicle: Cars) => {
    console.log(vehicle.summary());
  };

  printCars(italianCar);
  printCars(EuropeanCar);
}
