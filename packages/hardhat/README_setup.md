# XPad Dev Guide

## Setup Instructions

### Prerequisites

1. Install [Node.js](https://nodejs.org/) and [yarn](https://yarnpkg.com/).
2. Clone this repository:
   ```bash
   git clone <repository-url>
   cd xpad-crossfi-memecoin-launchpad
   ```

### Install Dependencies

Run the following command to install project dependencies:

```bash
yarn install
```

### Configure Environment

Create a `.env/vars.ts` file at the root of the project and add your configuration:

```env
import { IConfig } from "./";

export const config: IConfig = {
  // CROSSFI
  CROSSFI_PRIVATE_KEY: "your-private-key"

  // CROSSFI_TESTNET
  CROSSFI_TESTNET_PRIVATE_KEY: "your-private-key"

  // crossfiscan
  CROSSFITESTNETSCAN_API_KEY: "xxx",
  CROSSFISCAN_API_KEY: "xxx",
};
```

---

## Deployment Process

### Step 1: Deploy the Factory Contract

1. Navigate to the `scripts` folder and open `deploy-factory.js`.

   - Replace `0xYourFeeToAddress` with the fee recipient's address.

2. Run the deployment script:

   ```bash
   npx hardhat run scripts/deploy-factory.js --network <network-name>
   ```

   Replace `<network-name>` with your configured network (e.g., `goerli`).

3. Expected output:
   ```
   Deploying Factory contract with account: 0xYourDeployerAddress
   Factory contract deployed to: 0xDeployedFactoryAddress
   ```

### Step 2: Deploy the Router Contract

1. Navigate to the `scripts` folder and open `deploy-router.js`.

   - Provide the `Factory` contract address as a constructor parameter.

2. Run the deployment script:

   ```bash
   npx hardhat run scripts/deploy-router.js --network <network-name>
   ```

3. Expected output:
   ```
   Router contract deployed to: 0xDeployedRouterAddress
   ```

### Step 3: Deploy XPad Contract

1. Navigate to the `scripts` folder and open `deploy-xpad.js`.

   - Provide the `Factory` and `Router` addresses as constructor parameters.

2. Run the deployment script:

   ```bash
   npx hardhat run scripts/deploy-xpad.js --network <network-name>
   ```

3. Expected output:
   ```
   XPad contract deployed to: 0xDeployedXPadAddress
   ```

---

## Usage

1. Interact with the deployed contracts using a web3 library like [ethers.js](https://docs.ethers.org/).
2. Use the provided scripts or a custom frontend to execute key functions like adding liquidity, swapping tokens, and managing pairs.

---

## Troubleshooting

### Common Issues

- **Deployment Fails:**

  - Verify the network URL and private key in your `.env` file.
  - Ensure your wallet has sufficient native tokens for gas fees.

- **Invalid Address Error:**

  - Double-check that the `feeTo` address is valid.

- **Compilation Errors:**
  - Run `npx hardhat compile` to identify and resolve errors.

### Debugging Tips

1. Add `console.log` statements in the deployment scripts for better visibility.
2. Use Hardhat's verbose logging by setting the `DEBUG` environment variable:

   ```bash
   DEBUG=hardhat:* npx hardhat run scripts/deploy-factory.js --network <network-name>

   ```
