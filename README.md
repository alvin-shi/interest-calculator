# Interest Calculator

A simple CLI to be used to calculate the final balance of a term deposit

### Requirements
This project was developed with Node.js `v20.17.0`. To install node, you can use
`fnm`. The provided `.node-version` should also work with `nvm` but has not been 
tested. Alternatively, you can use the provided `Dockerfile`.

##### Linux/macOS
```bash
brew install fnm
fnm install
```
### Usage
#### Locally
```bash
npm install

# help
./interest-calculator term-deposit -h

# example
./interest-calculator term-deposit -a 10000 -r 1.1 -t 3 -f maturity 
```

#### Docker
```bash
docker compose build cli

# help
docker compose run cli sh ./interest-calculator term-deposit -h

# example
docker compose run cli sh ./interest-calculator term-deposit -a 10000 -r 1.1 -t 3 -f maturity
```

### Troubleshooting
If for some reason the bash script fails to run due to permission errors, run
the following command:

```bash
chmod +x ./interest-calculator
```

### Notes
- No tests for commander configuration because it was taking too long to figure
out how to integration test it
- Not sure if BigNumber is the way to approach precision

### Next steps
- Look into IEEE rounding standards
- Input validation for the numbers
- Supporting shorter term lengths
- Potential edge cases:
    - Total term is not neatly divisible by the interest paid period
- Figure out how to install the CLI so it doesn't require `npx tsx ...` to run
- Remove magic numbers in the code
