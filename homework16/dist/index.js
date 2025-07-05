"use strict";
function greetUser(name) {
    console.log(`Привет, ${name}!`);
}
greetUser("Anastasiia");
function printPersonInfo(person) {
    console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}
const person = {
    name: "Anastasiia",
    age: 27,
    city: "Los-Angeles",
};
printPersonInfo(person);
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(2));
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(3));
function printStudentInfo(student) {
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}
const student = {
    name: "Mike",
    grade: 5,
};
printStudentInfo(student);
function logMessage(message) {
    console.log(message);
}
const message = "Hello World";
logMessage(message);
