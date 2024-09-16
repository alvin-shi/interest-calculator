import BigNumber from "bignumber.js"

export const calculateRate = (
  annualRate: BigNumber,
  interestPeriodInMonths: BigNumber,
) => {
  return annualRate.multipliedBy(interestPeriodInMonths).dividedBy(12)
}
