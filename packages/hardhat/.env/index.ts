import { config } from "./vars";

interface IConfig {
  // CROSSFI
  CROSSFI_PRIVATE_KEY: string;
  // CROSSFI_TESTNET
  CROSSFI_TESTNET_PRIVATE_KEY: string;
  // crossfiscan
  CROSSFITESTNETSCAN_API_KEY: string;
  CROSSFISCAN_API_KEY: string;
}

export type { IConfig };
export { config };
