import BigNumber from "bignumber.js"

import { Frequency } from "../types/frequency"
import { calculateRate } from "./calculateRate"
import { getInterestPeriodLength } from "./getInterestPeriodLength"

export const calculateFinalBalance = (
  startingAmount: BigNumber,
  annualRatePercent: BigNumber,
  termLengthYears: BigNumber,
  interestPaidFrequency: Frequency,
): BigNumber => {
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
  const finalCompoundRate = new BigNumber(1).plus(percentToDecimal(interestPeriodRate))  

  return finalCompoundRate.pow(numCompounds).multipliedBy(startingAmount)
}

const calculateNumberCompounds = (
  termLengthYears: BigNumber,
  interestPeriodLength: BigNumber,
): BigNumber => {
  return termLengthYears.multipliedBy(new BigNumber(12)).dividedBy(interestPeriodLength)
}

const percentToDecimal = (percent: BigNumber): BigNumber => {
  return percent.dividedBy(new BigNumber(100))
}
