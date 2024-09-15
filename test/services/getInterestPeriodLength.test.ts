import { getInterestPeriodLength } from "../../src/services/getInterestPeriodLength"
import { Frequency } from "../../src/types/frequency"

describe("when frequency is monthly", () => {
  it("returns 1", () => {
    expect(getInterestPeriodLength(Frequency.Monthly, 1)).toEqual(1)
  })
})

describe("when frequency is quarterly", () => {
  it("returns 3", () => {
    expect(getInterestPeriodLength(Frequency.Quarterly, 1)).toEqual(3)
  })
})

describe("when frequency is annually", () => {
  it("returns 12", () => {
    expect(getInterestPeriodLength(Frequency.Annually, 1)).toEqual(12)
  })
})

describe("when frequency is at maturity", () => {
  describe("when term length is 3 years", () => {
    const termLength = 3

    it("returns 36", () => {
      expect(getInterestPeriodLength(Frequency.AtMaturity, termLength)).toEqual(
        termLength * 12,
      )
    })
  })
})
