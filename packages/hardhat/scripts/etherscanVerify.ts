// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import hre, { ethers } from "hardhat";
import chalk from "chalk";
import prompt from "prompt-sync";

import { Artifacts, getConfigByChainId } from "./config";

const CONTRACT_ARTIFACT_NAME: Artifacts = Artifacts.XPad;

async function main() {
  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  const chainId = await deployer.getChainId();
  const config = getConfigByChainId(chainId);

  const contractAddress = config.contractAddress[CONTRACT_ARTIFACT_NAME];

  if (!contractAddress) {
    console.error("Missing contract address in config!");
    process.exit(1);
  }

  console.log(`Chain ID: ${chainId} (${config.chainName}).`);

  // prompt confirm
  const confirm = prompt()(
    `Do you want to publish source code for ${CONTRACT_ARTIFACT_NAME} contract ${chalk.greenBright(
      contractAddress
    )} on etherscan ${chalk.greenBright(
      `${chainId} (${config.chainName})`
    )}: (y/n) `
  );
  if (confirm !== "y") {
    process.exit(1);
  }

  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: config.constructorArguments[CONTRACT_ARTIFACT_NAME],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
