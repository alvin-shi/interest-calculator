import BigNumber from "bignumber.js"

import { Frequency } from "../types/frequency"

export const getInterestPeriodLength = (
  interestPaidFrequency: Frequency,
  termLengthInYears: BigNumber,
): BigNumber => {
  switch (interestPaidFrequency) {
    case Frequency.Monthly:
      return new BigNumber(1)
    case Frequency.Quarterly:
      return new BigNumber(3)
    case Frequency.Annually:
      return new BigNumber(12)
    case Frequency.AtMaturity:
      return termLengthInYears.multipliedBy(12)
  }
}
