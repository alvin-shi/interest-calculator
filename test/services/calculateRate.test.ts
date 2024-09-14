import { calculateRate } from "../../src/services/calculateRate.js"

describe("when the interest rate of 12%", () => {
  const annualRate = 12

  describe("when interest is paid monthly", () => {
    it("has an interest period rate of 1%", () => {
      expect(calculateRate(annualRate, 1)).toEqual(annualRate / 12)
    })
  })

  describe("when interest is paid quarterly", () => {
    it("has an interest period rate of 3%", () => {
      expect(calculateRate(annualRate, 3)).toEqual(annualRate / 12)
    })
  })

  describe("when interest is paid at maturity", () => {
    describe("when investment term is 3 years", () => {
      const investmentTerm = 3
      it("has an interest period rate of 36%", () => {
        expect(calculateRate(annualRate, investmentTerm * 12)).toEqual(
          annualRate * investmentTerm,
        )
      })
    })
  })
})
