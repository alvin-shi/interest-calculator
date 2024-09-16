# Interest Calculator

A simple CLI to be used to calculate the final balance of a term deposit

### Requirements
This project was developed with Node.js `v20.17.0`. To install node, you can use
`fnm`. The provided `.node-version` should also work with `nvm` but has not been 
tested. 

Alternatively, you can use the provided `Dockerfile`.

##### Linux/macOS
```bash
brew install fnm
fnm install
```

### Usage
A [helper script](./interest-calculator) has been created to make testing this 
CLI easier.

#### Locally
```bash
npm install

# help
./interest-calculator term-deposit -h

# example
./interest-calculator term-deposit -a 10000 -r 1.1 -t 3 -f maturity 

# running the tests
npm test
```

#### Docker
```bash
docker compose build cli

# help
docker compose run cli sh ./interest-calculator term-deposit -h

# example
docker compose run cli sh ./interest-calculator term-deposit -a 10000 -r 1.1 -t 3 -f maturity

# running the tests
docker compose run cli npm test
```

### Troubleshooting
If for some reason the bash script fails to run due to permission errors, run
the following command:

```bash
chmod +x ./interest-calculator
```

### Assumptions
- Term length can not be shorter than a years

This assumption was made to simplify the problem around the following points:
- Total term length being shorter than the interest paid period
- Interest paid period not dividing nicely into the total term

### Design Decisions
- This CLI was written in a way to try replicate an API MVC structure.
- The choice of typescript was mainly due to personal comfort.

### Trade offs
**Term length in years**
The term deposit length was chosen to be years to prevent weirdness around
the interest paid period not nicely dividing the total term. The result of this
was that any time the term length needed to be used, it required transforming into
months.

As it's a small application, it shouldn't be too big of a deal.

### Next steps
- Integration test for main CLI program
- A "view" layer function to handle all the data to output transformations
- Look into IEEE rounding standards
- Less hacky input validation
- Supporting shorter term lengths
- Potential edge cases:
    - Total term is not neatly divisible by the interest paid period
- Figure out how to install the CLI so it doesn't require `npx tsx ...` to run
- Remove magic numbers in the code
- Potentially convert years to months using the commander custom parser to remove
need of converting it all over the code

### Notes
- No tests for commander configuration because it was taking too long to figure
out how to integration test it
- Not sure if BigNumber is the way to approach precision
- Some of the arithmatic was written to reduce the transformations upon it. Now
that BigNumber handles most of it, it is probably unnecessary

