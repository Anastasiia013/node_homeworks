type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: "Anastasiia",
  permissions: ["manage-users", "edit-content"],
  email: "anastasiia@example.com",
};

console.log(adminUser);

type Car = {
  make: string;
  model: string;
  engine: {
    type: string;
    horsepower: number;
  };
  year?: number;
};

const car: Car = {
  make: "Toyota",
  model: "Corolla",
  engine: {
    type: "Hybrid",
    horsepower: 120,
  },
  year: 2023,
};

function printCarInfo(car: Car): void {
  console.log(`Марка: ${car.make}`);
  console.log(`Модель: ${car.model}`);
  console.log(`Двигатель: ${car.engine.type}, ${car.engine.horsepower} л.с.`);
  if (car.year !== undefined) {
    console.log(`Год выпуска: ${car.year}`);
  }
}

printCarInfo(car);

interface Product {
  name: string;
  price: number;
}

function calculateDiscount(product: Product, discount: number): number {
  return product.price - product.price * (discount / 100);
}

const product: Product = { name: "Laptop", price: 1000 };
console.log(calculateDiscount(product, 15));

interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: "John", salary: 3000 },
  { name: "Ana", salary: 4000 },
  { name: "Kate", salary: 3500 },
];

function getSalaries(employees: Employee[]): number[] {
  return employees.map(emp => emp.salary);
}

console.log(getSalaries(employees));

interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstName: "Anna",
  lastName: "Ivanova",
  grade: 5,
};

function printStudentInfo(student: Student): void {
  console.log(`Имя: ${student.firstName} ${student.lastName}`);
  console.log(`Оценка: ${student.grade}`);
}

printStudentInfo(student);

interface ConcatStrings {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1, str2) => {
  return str1 + str2;
};

console.log(concatStrings("Hello, ", "Anastasiia!"));
