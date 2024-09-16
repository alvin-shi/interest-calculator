import BigNumber from "bignumber.js"

import { getInterestPeriodLength } from "../../src/services/getInterestPeriodLength"
import { Frequency } from "../../src/types/frequency"

describe("when the term length is 1 year", () => {
  const termLength = new BigNumber(1)

  describe("when frequency is monthly", () => {
    it("returns 1", () => {
      expect(getInterestPeriodLength(Frequency.Monthly, termLength)).toEqual(
        new BigNumber(1),
      )
    })
  })

  describe("when frequency is quarterly", () => {
    it("returns 3", () => {
      expect(getInterestPeriodLength(Frequency.Quarterly, termLength)).toEqual(
        new BigNumber(3),
      )
    })
  })

  describe("when frequency is annually", () => {
    it("returns 12", () => {
      expect(getInterestPeriodLength(Frequency.Annually, termLength)).toEqual(
        new BigNumber(12),
      )
    })
  })

  describe("when frequency is at maturity", () => {
    it("returns 12", () => {
      expect(getInterestPeriodLength(Frequency.AtMaturity, termLength)).toEqual(
        new BigNumber(12),
      )
    })
  })
})

describe("when frequency is at maturity", () => {
  describe("when term length is 3 years", () => {
    const termLength = new BigNumber(3)

    it("returns 36", () => {
      expect(getInterestPeriodLength(Frequency.AtMaturity, termLength)).toEqual(
        termLength.multipliedBy(new BigNumber(12)),
      )
    })
  })
})
