import type { Config } from ".";

type ChainSpecificConfig = Omit<Config, "chainName">;

const Factory_address = "";
const Router_address = "";
const XPad_address = "";

const WETH_JUCHAIN_TESTNET_ADDRESS =
  "0x4200000000000000000000000000000000000006"; // TODO: add correct address

const FEE_RECIPIENT = "0x16EE106a08e8F76Fe50e4C460790C8B184998ae5";

const chainSpecificConfig: ChainSpecificConfig = {
  owner: "0x16EE106a08e8F76Fe50e4C460790C8B184998ae5",
  contractAddress: {
    Factory: Factory_address,
    Router: Router_address,
    XPad: XPad_address,
  },
  constructorArguments: {
    Factory: [FEE_RECIPIENT],
    Router: [
      Factory_address, // factory_
      WETH_JUCHAIN_TESTNET_ADDRESS, // weth_
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
  chainName: "juchain",
  ...chainSpecificConfig,
};
