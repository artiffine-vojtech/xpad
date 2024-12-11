import localhostConfig from "./localhost";
import crossfiTestnetConfig from "./crossfiTestnet";
import crossfiConfig from "./crossfi";

import {
  erc20Sol,
  xPadSol,
  Factory__factory,
  Pair__factory,
  Router__factory,
} from "@xpad/hardhat-types/src/factories/contracts";

export enum Artifacts {
  // deployed by the launchpad
  "ERC20" = "ERC20",
  "Pair" = "Pair",
  // the launchpad
  "Factory" = "Factory",
  "Router" = "Router",
  "XPad" = "XPad",
}

export type Config = {
  chainName: string;
  owner: string;
  contractAddress: { [key in Artifacts]?: string };
  constructorArguments: {
    [Artifacts.ERC20]?: Parameters<erc20Sol.ERC20__factory["deploy"]>;
    [Artifacts.Factory]?: Parameters<Factory__factory["deploy"]>;
    [Artifacts.Pair]?: Parameters<Pair__factory["deploy"]>;
    [Artifacts.XPad]?: Parameters<xPadSol.XPad__factory["deploy"]>;
    [Artifacts.Router]?: Parameters<Router__factory["deploy"]>;
  };
};

enum ChainId {
  Localhost = 1337,
  CrossFiTestnet = 4157,
  CrossFi = 4158,
}

export const getConfigByChainId = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.CrossFi:
      return crossfiConfig;
    case ChainId.CrossFiTestnet:
      return crossfiTestnetConfig;
    case ChainId.Localhost:
      return localhostConfig;
    default:
      throw new Error("Unknown chain id");
  }
};
