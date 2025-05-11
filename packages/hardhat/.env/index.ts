import { config } from "./vars";

interface IConfig {
  // CROSSFI
  CROSSFI_PRIVATE_KEY: string;
  // CROSSFI_TESTNET
  CROSSFI_TESTNET_PRIVATE_KEY: string;
  // crossfiscan
  CROSSFISCAN_API_KEY: string;
  CROSSFITESTNETSCAN_API_KEY: string;

  // ---

  // JUCHAIN
  JU_CHAIN_PRIVATE_KEY: string;
  // JUCHAIN TESTNET
  JU_CHAIN_TESTNET_PRIVATE_KEY: string;
  // juchainscan
  JUCHAINSCAN_API_KEY: string;
  JUCHAINSCANTESTNET_API_KEY: string;
}

export type { IConfig };
export { config };
