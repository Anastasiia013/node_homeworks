import { capitalize, reverseString } from "./stringUtils";
import { Finance } from "./finance";
import { UserManagement } from './userManagement';
import { generateFibonacci, generatePrimeNumbers } from './sequenceUtils';

console.log(capitalize("hello"));
console.log(reverseString("TypeScript"));

const loan = Finance.LoanCalculator.calculateMonthlyPayment(10000, 5, 2);
console.log(`Loan monthly payment: €${loan.toFixed(2)}`);

const tax = Finance.TaxCalculator.calculateTax(50000, 20);
console.log(`Income tax: €${tax}`);

const admin = new UserManagement.Admin.AdminUser("Anastasiia", "anastasiia@example.com");
console.log(admin.getInfo());

admin.setSuperAdmin(true);
console.log(admin.getInfo());

console.log("Fibonacci:", generateFibonacci(50));
console.log("Primes:", generatePrimeNumbers(20));

