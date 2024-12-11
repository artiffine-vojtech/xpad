import type { Config } from ".";

type ChainSpecificConfig = Omit<Config, "chainName">;

const Factory_address = ""; // TODO: add correct address
const Router_address = ""; // TODO: add correct address
const XPad_address = ""; // TODO: add correct address

const WETH_CROSSFI_TESTNET_ADDRESS =
  "0x4200000000000000000000000000000000000006"; // TODO: add correct address

const FEE_RECIPIENT = "0x";

const chainSpecificConfig: ChainSpecificConfig = {
  owner: "0xEb5e4DA69234f8117CDF72828EeC967c65aCC0C6", // TODO: add correct address
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

export default {
  chainName: "crossfi mainnet",
  ...chainSpecificConfig,
};
