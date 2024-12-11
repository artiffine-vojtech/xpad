// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { formatEther } from "@ethersproject/units";

import type { xPadSol } from "../../hardhat-types/src/contracts";
import { Artifacts } from "./config";
import { contractFactory } from "./utils/contractFactory";

const CONTRACT_ARTIFACT_NAME: Artifacts = Artifacts.XPad;

async function main() {
  // prepare the contract
  const { contract, config } = await contractFactory<xPadSol.XPad>({
    nameOrAbi: CONTRACT_ARTIFACT_NAME,
    useLedgerSigner: false,
    ignoreOwnerAddessCheck: true,
  });

  const blockNumber = await contract.provider.getBlockNumber();
  console.log("blockNumber", blockNumber);
  const block = await contract.provider.getBlock(blockNumber);
  console.log("timestamp", block.timestamp);
  const adminAddress = await contract.signer.getAddress();

  console.log("adminAddress", adminAddress);
  console.log(
    "balance",
    formatEther(await contract.provider.getBalance(adminAddress))
  );
  console.log("launchFee", await contract.launchFee());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
