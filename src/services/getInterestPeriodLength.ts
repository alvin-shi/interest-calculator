import { Frequency } from "../types/frequency"

export const getInterestPeriodLength = (
  interestPaidFrequency: string,
  termLengthInYears: number,
): number | null => {
  switch (interestPaidFrequency) {
    case Frequency.Monthly:
      return 1
    case Frequency.Quarterly:
      return 3
    case Frequency.Annually:
      return 12
    case Frequency.AtMaturity:
      return termLengthInYears * 12
    default:
      return null
  }
}
