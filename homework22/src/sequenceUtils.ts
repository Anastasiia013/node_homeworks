export function generateFibonacci(limit: number): number[] {
  const result = [0, 1];
  while (result[result.length - 1] + result[result.length - 2] <= limit) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

export function generatePrimeNumbers(limit: number): number[] {
  const result: number[] = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) result.push(num);
  }
  return result;
}