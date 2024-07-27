import {useState} from 'react';

interface LoanData {
  amount: number;
  interestRate: number;
  term: number;
  disbursementDate: string;
  commission: number;
}

interface AmortizationItem {
  month: number;
  date: string;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
  svsd: number;
  totalPayment: number;
  overdueInterest: number;
}

export const useLoanCalculator = () => {
  const [amortizationPlan, setAmortizationPlan] = useState<AmortizationItem[]>(
    [],
  );

  const calculateLoan = (loanData: LoanData) => {
    const {amount, interestRate, term, commission, disbursementDate} = loanData;
    const amountToFinance = amount + (amount * commission) / 100;
    const monthlyInterestRate = interestRate / 100 / 12;
    const levelPayment =
      (amountToFinance *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, term)) /
      (Math.pow(1 + monthlyInterestRate, term) - 1);

    const plan: AmortizationItem[] = [];
    let balance = amountToFinance;

    const startDate = new Date(disbursementDate);

    for (let month = 1; month <= term; month++) {
      const interest = balance * monthlyInterestRate;
      const principal = levelPayment - interest;
      const svsd = Math.max(balance * 0.0015, 2);

      const overdueDays = 30;
      const overdueInterest = calculateOverdueInterest(
        balance,
        interestRate,
        overdueDays,
      );

      const paymentDate = new Date(startDate);
      paymentDate.setMonth(paymentDate.getMonth() + month - 1);
      const formattedDate = `${paymentDate.getFullYear()}-${(
        '0' +
        (paymentDate.getMonth() + 1)
      ).slice(-2)}-${('0' + paymentDate.getDate()).slice(-2)}`;
      balance -= principal;

      plan.push({
        month,
        date: formattedDate,
        payment: levelPayment,
        principal,
        interest,
        balance,
        svsd,
        totalPayment: levelPayment + svsd,
        overdueInterest,
      });
    }

    setAmortizationPlan(plan);
    const tcea = ((Math.pow(1 + monthlyInterestRate, 12) - 1) * 100).toFixed(2);
    return plan;
  };

  const calculateOverdueInterest = (
    principal: number,
    annualInterestRate: number,
    overdueDays: number,
  ): number => {
    const dailyInterestRate = ((annualInterestRate / 100) * 0.5) / 360;
    return principal * dailyInterestRate * overdueDays;
  };

  return {
    amortizationPlan,
    calculateLoan,
    calculateOverdueInterest,
  };
};
