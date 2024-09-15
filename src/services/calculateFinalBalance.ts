import { Frequency } from "../types/frequency"
import { calculateRate } from "./calculateRate"
import { getInterestPeriodLength } from "./getInterestPeriodLength"

export const calculateFinalBalance = (
  startingAmount: number,
  annualRatePercent: number,
  termLengthYears: number,
  interestPaidFrequency: Frequency,
): number => {
  const interestPeriodLength = getInterestPeriodLength(
    interestPaidFrequency,
    termLengthYears,
  )
  const interestPeriodRate = calculateRate(
    annualRatePercent,
    interestPeriodLength,
  )
  const numCompounds = calculateNumberCompounds(
    termLengthYears,
    interestPeriodLength,
  )
  const finalCompoundRate = 1 + interestPeriodRate / 100

  return Math.pow(finalCompoundRate, numCompounds) * startingAmount
}

const calculateNumberCompounds = (
  termLengthYears: number,
  interestPeriodLength: number,
): number => {
  return (termLengthYears * 12) / interestPeriodLength
}
