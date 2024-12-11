import path from "path";
import { config as hardhatConfig } from "hardhat";

import type { Config } from ".";
// the contract address module can be missing at this point
let Factory_address = "";
let Router_address = "";
let XPad_address = "";
let MulticallContract_address = "";
try {
  const contractsFile = path.join(
    hardhatConfig.paths.root,
    "../hardhat-types/src",
    "/localContractAddress.ts"
  );
  const config = require(contractsFile);
  Factory_address = config.Factory_address || "";
  Router_address = config.Router_address || "";
  XPad_address = config.XPad_address || "";
  MulticallContract_address = config.MulticallContract_address || "";
} catch (e) {
  console.log("File localContractAddress not found");
}

const WETH_CROSSFI_TESTNET_ADDRESS =
  "0x4200000000000000000000000000000000000006";

const FEE_RECIPIENT = "0x";

type ChainSpecificConfig = Omit<Config, "chainName">;

const chainSpecificConfig: ChainSpecificConfig = {
  owner: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  contractAddress: {
    Factory: Factory_address,
    Router: Router_address,
    XPad: XPad_address,
  },
  constructorArguments: {
    Factory: [FEE_RECIPIENT],
    Router: [
      Factory_address, // factory_
      WETH_CROSSFI_TESTNET_ADDRESS, // weth_
      3, // _fee 3%
    ],
    XPad: [
      Factory_address, // factory_
      Router_address, // router_
      FEE_RECIPIENT, // fee_to
      10, // _fee 10%
    ],
  },
};

const config: Config = {
  chainName: "localhost",
  ...chainSpecificConfig,
};

export default config;
