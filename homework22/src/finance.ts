export namespace Finance {
  export class LoanCalculator {
    static calculateMonthlyPayment(
      principal: number,
      rate: number,
      years: number
    ): number {
      const monthlyRate = rate / 12 / 100;
      const months = years * 12;
      return (
        (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
      );
    }
  }

  export class TaxCalculator {
    static calculateTax(income: number, rate: number): number {
      return income * (rate / 100);
    }
  }
}