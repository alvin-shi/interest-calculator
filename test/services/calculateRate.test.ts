import BigNumber from "bignumber.js"
import { calculateRate } from "../../src/services/calculateRate"

describe("when the interest rate of 12%", () => {
  const annualRate = new BigNumber(12)

  describe("when interest is paid monthly", () => {
    it("has an interest period rate of 1%", () => {
      const termLength = new BigNumber(1)
      const periodPerYear = new BigNumber(12)
      expect(calculateRate(annualRate, termLength)).toEqual(
        annualRate.dividedBy(periodPerYear),
      )
    })
  })

  describe("when interest is paid quarterly", () => {
    it("has an interest period rate of 3%", () => {
      const termLength = new BigNumber(3)
      const periodPerYear = new BigNumber(4)
      expect(calculateRate(annualRate, termLength)).toEqual(
        annualRate.dividedBy(periodPerYear),
      )
    })
  })

  describe("when interest is paid at maturity", () => {
    describe("when investment term is 3 years", () => {
      const investmentTerm = new BigNumber(3)
      it("has an interest period rate of 36%", () => {
        const monthPerYear = new BigNumber(12)
        expect(
          calculateRate(annualRate, investmentTerm.multipliedBy(monthPerYear)),
        ).toEqual(annualRate.multipliedBy(investmentTerm))
      })
    })
  })
})
