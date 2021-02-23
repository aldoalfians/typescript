namespace Profile {
  const profile = {
    name: "Aldo",
    age: 20,
    coords: {
      lat: 0,
      lng: 15,
    },
    setAge(age: number) {
      this.age = age;
    },
  };

  let { age, name }: { age: number; name: string } = profile;
  const {
    coords: { lat, lng },
  }: { coords: { lat: number; lng: number } } = profile;

  age = 10;
  name = "boetd";
  console.log(age, name);
}
