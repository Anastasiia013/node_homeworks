// Домашняя работа 19

// Задание 1

// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.

const sumEvenNumbers = (array: number[]): number => {
  return array.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
};

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

// Задание 2

// Определите интерфейс `StringToBooleanFunction` для функции, которая принимает строку и возвращает `boolean` (например, проверяет, является ли строка пустой). Реализуйте такую функцию.

interface StringToBooleanFunction {
  (input: string): boolean;
}

const isStringEmpty: StringToBooleanFunction = (str) => str.length === 0;

console.log(isStringEmpty(""));
console.log(isStringEmpty("hello"));

// Задание 3

// Создайте тип `CompareStrings` для функции, принимающей две строки и возвращающей `boolean` (например, для проверки равенства строк). Напишите функцию, соответствующую этому типу.

type CompareStrings = (a: string, b: string) => boolean;

const areStringsEqual: CompareStrings = (a, b) => a === b;

console.log(areStringsEqual("test", "test"));
console.log(areStringsEqual("abc", "def"));

// Задание 4

// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.

const getLastElement = <T>(array: T[]): T | undefined => {
  return array[array.length - 1];
};

console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(["a", "b", "c"]));

// Задание 5

// Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.

const makeTriple = <T>(first: T, second: T, third: T): T[] => {
  return [first, second, third];
};

console.log(makeTriple(1, 2, 3));
console.log(makeTriple("x", "y", "z"));
