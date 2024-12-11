// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import cliSelect from "cli-select";
import chalk from "chalk";
import prompt from "prompt-sync";
import { ContractTransaction } from "@ethersproject/contracts";

import type { xPadSol } from "../../hardhat-types/src/contracts/";
import {
  awaitAndPrintTransactionResult,
  promptUserForGasPrice,
} from "./utils/tasks";
import { contractFactory } from "./utils/contractFactory";
import { Artifacts } from "./config";

const CONTRACT_ARTIFACT_NAME: Artifacts = Artifacts.XPad;
const USE_LEDGER_SIGNER = false;

enum Options {
  setFeeTo = "setFeeTo",
}

async function main() {
  // prepare the contract
  const { contract, chainId, config } = await contractFactory<xPadSol.XPad>({
    nameOrAbi: CONTRACT_ARTIFACT_NAME,
    useLedgerSigner: USE_LEDGER_SIGNER,
  });

  // get user options
  console.log(`Select function to call on smart contract:`);
  const { value: selectedMethod } = await cliSelect({
    values: Options,
    unselected: "◯",
    selected: chalk.greenBright("●"),
    valueRenderer: (value, selected) => {
      if (selected) {
        return chalk.greenBright(value);
      }
      return value;
    },
  });

  // prompt confirm
  const confirm = prompt()(
    `Do you want to call function ${chalk.greenBright(
      selectedMethod
    )} on chain ${chalk.greenBright(chainId)}: (y/n) `
  );
  if (confirm !== "y") {
    process.exit(1);
  }

  const gasPrice = await promptUserForGasPrice(contract.signer);

  // do the work
  console.log("Communicating with the blockchain...");
  let res: ContractTransaction | ContractTransaction[] | undefined = undefined;
  switch (selectedMethod) {
    case Options.setFeeTo:
      const FEE_RECIPIENT = "";
      if (!FEE_RECIPIENT) {
        console.error("Missing fee recipient!", FEE_RECIPIENT);
        process.exit(1);
      }
      res = await contract.setFeeTo(FEE_RECIPIENT, {
        gasPrice,
        type: USE_LEDGER_SIGNER ? 1 : undefined,
      });
      break;

    default:
      console.error("Invalid selection!");
      break;
  }

  if (!res) {
    console.error(
      "Missing contract transaction! But the operation was probably completed."
    );
    return;
  }

  await awaitAndPrintTransactionResult(res);

  console.log(
    chalk.greenBright(
      `\n🚀 Operation ${selectedMethod} succeded! Hash: ${
        Array.isArray(res)
          ? res.forEach((item) => `\n${item.hash}\n`)
          : res.hash
      }`
    )
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
