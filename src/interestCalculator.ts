import { Command, InvalidOptionArgumentError, Option } from "commander"
import BigNumber from "bignumber.js"

import { Frequency } from "./types/frequency"
import { Input } from "./types/input"
import { calculateFinalBalance } from "./services/calculateFinalBalance"

const cli = (): Command => {
  const program = new Command()
  program.name("interest-calculator").description("CLI to calculate interest")

  program
    .command("term-deposit")
    .description("Calculate the final balance for a term deposit")
    .requiredOption(
      "-a, --amount [deposit]",
      "Initial deposit amount",
      validateNumber,
    )
    .requiredOption(
      "-r, --rate [interest rate]",
      "Annual interest rate",
      validateNumber,
    )
    .requiredOption(
      "-t, --term [term]",
      "Term deposit term in years",
      validateNumber,
    )
    .addOption(
      new Option(
        "-f, --frequency [frequency]",
        "Interest paid frequency",
      ).choices(frequencyOptions()),
    )
    .action(termDepositHandler)

  return program
}

const termDepositHandler = (options: Input): void => {
  const finalBalance: BigNumber = calculateFinalBalance(
    new BigNumber(options.amount),
    new BigNumber(options.rate),
    new BigNumber(options.term),
    options.frequency as Frequency,
  )

  console.log(`Final Balance: \$${finalBalance.toFormat(2)}`)
}

const frequencyOptions = (): string[] => {
  return Object.values(Frequency) as string[]
}

const validateNumber = (value: string): string => {
  if (isNaN(value)) throw new InvalidOptionArgumentError("is not a number")
  return value
}

cli().parse()
