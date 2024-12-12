import type { Config } from ".";

type ChainSpecificConfig = Omit<Config, "chainName">;

const Factory_address = "0x9C8c44c785abb7506aD2815CEC8c817b0524e94F";
const Router_address = "0xA3EbC69D23fD7F9A5f2cF7f135a212b5f23b3f23";
const XPad_address = "0x06b70f7ab6d2aad6312f160defe93c61666b3773";

const WETH_CROSSFI_TESTNET_ADDRESS =
  "0xCEb93FDb1381BeA0b1a8634B2e538FD814513901"; // custom deployed WETH address
// "0x4200000000000000000000000000000000000006"; // TODO: add correct address

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
  chainName: "crossfi testnet",
  ...chainSpecificConfig,
};
