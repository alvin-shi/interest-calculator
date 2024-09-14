export const calculateRate = (
  annualRate: number,
  interestPeriodInMonths: number,
) => {
  return (annualRate * interestPeriodInMonths) / 12
}
