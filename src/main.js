class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  forward() {
    this.position += 1;
  }
}

const myCar = new Car('Hyundai');
