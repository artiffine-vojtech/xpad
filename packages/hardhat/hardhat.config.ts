import fs from "fs";
import path from "path";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import { task } from "hardhat/config";
import { HardhatUserConfig } from "hardhat/types";
// TODO yarn add -D @nomiclabs/hardhat-etherscan
// import '@nomiclabs/hardhat-etherscan'

import { config as envConfig } from "./.env/vars";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("tasksOnInit", "Delete localContractAddress.ts", async (_args, hre) => {
  const contractsDir = path.join(hre.config.paths.root, "../hardhat-types/src");
  const filePath = path.join(contractsDir, "/localContractAddress.ts");
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log("File localContractAddress.ts deleted");
  } else {
    console.log("File localContractAddress.ts not found");
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig & {
  typechain: {};
} = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200, // Optimizer settings for gas efficiency
          },
          viaIR: true, // Enable Intermediate Representation for deeper stack handling
        },
      },
    ],
  },
  // paths: {
  //   artifacts: '../frontend/artifacts',
  // },
  networks: {
    hardhat: {
      chainId: 1337,
      mining: {
        auto: true,
        interval: 12000,
      },
    },
    crossfi: {
      url: `https://rpc.mainnet.ms`,
      accounts: [`0x${envConfig.CROSSFI_PRIVATE_KEY}`],
    },
    crossfitestnet: {
      url: `https://rpc.testnet.ms`,
      accounts: [`0x${envConfig.CROSSFI_TESTNET_PRIVATE_KEY}`],
    },
  },
  typechain: {
    outDir: "../hardhat-types/src",
  },
};

export default config;
