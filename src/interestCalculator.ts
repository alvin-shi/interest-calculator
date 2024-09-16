import { Command, Option } from "commander"

import { Frequency } from "./types/frequency"
import { Input } from "./types/input"
import { calculateFinalBalance } from "./services/calculateFinalBalance"
import BigNumber from "bignumber.js"

const cli = (): Command => {
  const program = new Command()
  program
    .name('interest calculator')
    .description('CLI to calculate interest')

  program.command('term-deposit')
    .description('Calculate the final balance for a term deposit')
    .requiredOption('-a, --amount [deposit]', 'Initial deposit amount')
    .requiredOption('-r, --rate [interest rate]', 'Annual interest rate')
    .requiredOption('-t, --term [term]', 'Term deposit term in years')
    .addOption(
      new Option('-f, --frequency [frequency]', 'Interest paid frequency')
        .choices(frequencyOptions())
    )
    .action(termDepositHandler)

  return program
}

const termDepositHandler = (options: Input): void => {
  console.log(calculateFinalBalance(
    new BigNumber(options.amount),
    new BigNumber(options.rate),
    new BigNumber(options.term),
    options.frequency as Frequency,
  ))
}

const frequencyOptions = (): string[] => {
  return Object.values(Frequency) as string[]
}

cli().parse()
