// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import fs from "fs";
import path from "path";
import { Contract } from "ethers";
import { config as hardhatConfig, ethers } from "hardhat";
import prompt from "prompt-sync";
import cliSelect from "cli-select";
import chalk from "chalk";

import { Artifacts, getConfigByChainId } from "./config";
import {
  promptUserForGasPrice,
  awaitAndPrintTransactionResult,
} from "./utils/tasks";
import { formatContractTransaction } from "./utils";
import { getLedgerSigner } from "./utils/ledgerSigner";
import { formatPriceByChain } from "./utils/formattingUtils";

const USE_LEDGER_SIGNER = false;

async function deployMulticallContract() {
  const confirm = prompt()(`Do you want deploy Multicall contract?: (y/n) `);
  if (confirm !== "y") {
    console.log("Nothing deployed");
    return;
  }
  console.log("Deploying multicall contract...");
  const MulticallContract = await ethers.getContractFactory("Multicall");
  const multicallContract = await MulticallContract.deploy();
  await multicallContract.deployed();
  saveFrontendFiles(multicallContract, "MulticallContract");
  console.log("Multicall deployed to:", multicallContract.address);
}

async function main() {
  // get user options - select contract to deploy
  const { value: selectedArtifact } = await cliSelect({
    values: Artifacts,
    unselected: "◯",
    selected: chalk.greenBright("●"),
    valueRenderer: (value, selected) => {
      if (selected) {
        return chalk.greenBright(value);
      }
      return value;
    },
  });

  // prepare the signer
  const signer = await (async () => {
    if (USE_LEDGER_SIGNER) {
      return await getLedgerSigner();
    } else {
      const [firstSigner] = await ethers.getSigners();
      return firstSigner;
    }
  })();

  // get chain id and config
  const chainId = await signer.getChainId();
  const config = getConfigByChainId(chainId);
  const isLocalChain = chainId === 1337;

  // prepare the factory
  const Contract_factory = await ethers.getContractFactory(
    selectedArtifact,
    signer
  );

  // print out detail of contract
  const signerAddress = await Contract_factory.signer.getAddress();
  const balance = await Contract_factory.signer.getBalance();
  console.log(
    `Chain ID: ${chainId} (${config.chainName}).
      \nDeploying the contract ${selectedArtifact} with the account:`,
    signerAddress,
    `balance: ${formatPriceByChain(balance, chainId)}`
  );

  // check if signer address is same as in config
  if (config.owner !== signerAddress) {
    throw new Error(
      `Signer address ${signerAddress} is not in the config file for chain id ${chainId}`
    );
  }

  const constructorArguments =
    config.constructorArguments[selectedArtifact] ?? [];
  console.log("Constructor args:", constructorArguments);

  const gasPrice = await promptUserForGasPrice(signer);
  console.log("Deploying contracts...");

  // deploy multichain only on localhost
  if (isLocalChain) {
    await deployMulticallContract();
  }

  // deploy the main contract
  const contract = await Contract_factory.deploy(...constructorArguments, {
    gasPrice,
    type: USE_LEDGER_SIGNER ? 1 : undefined,
  });

  console.log("Deploying contract to address: ", contract.address);
  console.log(formatContractTransaction(contract.deployTransaction));

  await contract.deployed();

  await awaitAndPrintTransactionResult(contract.deployTransaction);

  if (isLocalChain) {
    saveFrontendFiles(contract, selectedArtifact);
  }
  console.log(`${selectedArtifact} deployed to: ${contract.address}`);
}

const FILE_NAME = "localContractAddress.ts";
function saveFrontendFiles(contract: Contract, contractName: string) {
  const contractsDir = path.join(
    hardhatConfig.paths.root,
    "../hardhat-types/src"
  );

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  // remove from file if line starting with `export const ${contractName}_address exists
  const contractsFile = path.join(contractsDir, FILE_NAME);
  if (fs.existsSync(contractsFile)) {
    const data = fs
      .readFileSync(contractsFile, "utf8")
      .split("\n")
      .filter(
        (line) => !line.startsWith(`export const ${contractName}_address`)
      )
      .join("\n");
    fs.writeFileSync(contractsFile, data);
  }

  fs.appendFileSync(
    contractsFile,
    `export const ${contractName}_address = '${contract.address}'\n`
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
