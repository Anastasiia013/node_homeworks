function greetUser(name: string): void {
  console.log(`Привет, ${name}!`);
}

greetUser("Anastasiia");

interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: Person): void {
  console.log(
    `Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`
  );
}

const person: Person = {
  name: "Anastasiia",
  age: 27,
  city: "Los-Angeles",
};

printPersonInfo(person);

function squareNumber(num: number): number {
  return num * num;
}

console.log(squareNumber(2));

function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(3));

interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(student: Student): void {
  console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

const student: Student = {
  name: "Mike",
  grade: 5,
};

printStudentInfo(student);

function logMessage(message: string): void {
  console.log(message);
}

const message: string = "Hello World";

logMessage(message);