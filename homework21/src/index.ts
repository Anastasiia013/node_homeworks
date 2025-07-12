// Задание 1
// Абстрактный класс Animal
//     Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
//     Затем создайте классы `Dog` и `Cat`, которые наследуют `Animal` и реализуют метод `makeSound()` по-своему (`Dog` должен возвращать "Bark", а `Cat` — "Meow").
//     Создайте массив типа `Animal[]`, включающий объекты `Dog` и `Cat`, и вызовите метод `makeSound()` для каждого элемента массива.

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((animal) => {
  console.log(animal.makeSound());
});

// Задание 2
// Абстрактный класс Shape с цветом
//     Создайте абстрактный класс `ColoredShape`, который наследует `Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.
//     Реализуйте классы `ColoredCircle` и `ColoredRectangle`, которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.
//     Выведите площадь и цвет для каждого объекта.

abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    super();
    this.radius = radius;
    this.color = color;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class ColoredRectangle extends ColoredShape {
  width: number;
  height: number;
  color: string;

  constructor(width: number, height: number, color: string) {
    super();
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const shapes: ColoredShape[] = [
  new ColoredCircle(5, "red"),
  new ColoredRectangle(4, 6, "blue"),
];

shapes.forEach((shape) => {
  console.log(
    `Color: ${shape.color}, Area: ${shape.calculateArea().toFixed(2)}`
  );
});

// Задание 3
// Абстрактный класс Appliance
//     Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
//     Затем создайте классы `WashingMachine` и `Refrigerator`, которые наследуют `Appliance` и реализуют методы `turnOn()` и `turnOff()`, выводя соответствующие сообщения.
//     Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`, и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("Washing machine is ON.");
  }

  turnOff(): void {
    console.log("Washing machine is OFF.");
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Refrigerator is ON.");
  }

  turnOff(): void {
    console.log("Refrigerator is OFF.");
  }
}

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

appliances.forEach((appliance) => {
  appliance.turnOn();
  appliance.turnOff();
});

// Задание 4
// Абстрактный класс Account
//     Создайте абстрактный класс `Account` с абстрактными методами `deposit(amount: number)` и `withdraw(amount: number)`.
//     Реализуйте классы `SavingsAccount` и `CheckingAccount`, которые наследуют `Account`.
//     В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.
//     В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии.
//     Проверьте работу методов на объектах обоих классов.

abstract class Account {
  protected balance: number = 0;
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  private interestRate: number;

  constructor(interestRate: number) {
    super();
    this.interestRate = interestRate;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposit ${amount}, new balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdraw ${amount}, new balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  applyInterest(): void {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(
      `Interest applied: ${interest.toFixed(
        2
      )}, new balance: ${this.balance.toFixed(2)}`
    );
  }
}

class CheckingAccount extends Account {
  private fee: number;

  constructor(fee: number) {
    super();
    this.fee = fee;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposit ${amount}, new balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    const total = amount + this.fee;
    if (total <= this.balance) {
      this.balance -= total;
      console.log(
        `Withdraw ${amount} (+fee ${this.fee}), new balance: ${this.balance}`
      );
    } else {
      console.log("Insufficient funds including fee");
    }
  }
}

const savings = new SavingsAccount(10);
savings.deposit(1000);
savings.applyInterest();
savings.withdraw(300);

const checking = new CheckingAccount(2);
checking.deposit(500);
checking.withdraw(100);

// Задание 5
// Абстрактный класс Media
//     Создайте абстрактный класс `Media` с абстрактным методом `play()`.
//     Затем создайте классы `Audio` и `Video`, которые наследуют `Media` и реализуют метод `play()` по-своему (например, `Audio` выводит "Playing audio", а `Video` — "Playing video").
//     Создайте массив типа `Media[]`, включающий объекты `Audio` и `Video`, и вызовите метод `play()` для каждого элемента массива.

abstract class Media {
  abstract play(): void;
}

class Audio1 extends Media {
  play(): void {
    console.log("Playing audio");
  }
}

class Video extends Media {
  play(): void {
    console.log("Playing video");
  }
}

const mediaList: Media[] = [new Audio1(), new Video()];

mediaList.forEach((media) => media.play());