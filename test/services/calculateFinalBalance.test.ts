import { Frequency } from "../../src/types/frequency"
import { calculateFinalBalance } from "../../src/services/calculateFinalBalance"

const startingAmount = 10000
const annualRate = 1.1

describe("when the term length is one year", () => {
  const termLength = 1

  describe("when interest paid frequency is monthly", () => {
    const frequency = Frequency.Monthly

    it("returns 10111.56", () => {
      expect(
        calculateFinalBalance(
          startingAmount,
          annualRate,
          termLength,
          frequency,
        ),
      ).toEqual(10111.56)
    })
  })

  describe("when interest paid frequency is quarterly", () => {
    const frequency = Frequency.Quarterly

    it("returns 10110.45", () => {
      expect(
        calculateFinalBalance(
          startingAmount,
          annualRate,
          termLength,
          frequency,
        ),
      ).toEqual(10110.45)
    })
  })

  describe("when interest paid frequency is annually", () => {
    const frequency = Frequency.Annually

    it("returns 10110", () => {
      expect(
        calculateFinalBalance(
          startingAmount,
          annualRate,
          termLength,
          frequency,
        ),
      ).toEqual(10110)
    })
  })

  describe("when interest paid frequency is at maturity", () => {
    const frequency = Frequency.AtMaturity

    it("returns 10110", () => {
      expect(
        calculateFinalBalance(
          startingAmount,
          annualRate,
          termLength,
          frequency,
        ),
      ).toEqual(10110)
    })
  })
})

describe("when the term length is 3 years", () => {
  const termLength = 3

  describe("when interest is paid at maturity", () => {
    const frequency = Frequency.AtMaturity

    it("returns 10330", () => {
      expect(
        calculateFinalBalance(
          startingAmount,
          annualRate,
          termLength,
          frequency,
        ),
      ).toEqual(10330)
    })
  })
})
