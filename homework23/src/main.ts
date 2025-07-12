const delay = (ms: number, value: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Завершен: ${value}`);
      resolve(value);
    }, ms);
  });
};

async function runSequentially() {
  const result1 = await delay(1000, "One");
  const result2 = await delay(500, "Two");
  const result3 = await delay(800, "Three");

  console.log("Все выполнены:", result1, result2, result3);
}

runSequentially();

function processString(str: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.toUpperCase());
    }, Math.random() * 1000);
  });
}

async function processAllStrings(array: string[]) {
  const promises = array.map((str) => processString(str));
  const results = await Promise.all(promises);
  console.log("Результат:", results);
}

processAllStrings(["hello", "world", "typescript"]);

function successAfter(ms: number, value: string): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function failAfter(ms: number, message: string): Promise<string> {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error(message)), ms)
  );
}

async function runWithErrorHandling() {
  try {
    const results = await Promise.all([
      successAfter(500, "OK 1"),
      failAfter(300, "Error"),
      successAfter(400, "OK 2"),
    ]);
    console.log("Результаты:", results);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Неизвестная ошибка", error);
    }
  }
}

runWithErrorHandling();

function wait(ms: number): Promise<number> {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

async function dynamicTimeouts(numbers: number[]) {
  const promises = numbers.map((num) => wait(num));
  const results = await Promise.all(promises);
  console.log("Все завершены (мс):", results);
}

dynamicTimeouts([500, 1000, 200]);
