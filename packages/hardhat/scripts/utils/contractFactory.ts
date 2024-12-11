import { Contract } from "ethers";
import { ethers } from "hardhat";

import { Artifacts, getConfigByChainId } from "../config";
import { formatPriceByChain } from "./formattingUtils";
import { getLedgerSigner } from "./ledgerSigner";

export const contractFactory = async <T extends Contract>({
  nameOrAbi,
  useLedgerSigner,
  ignoreOwnerAddessCheck,
}: {
  nameOrAbi: Artifacts;
  useLedgerSigner: boolean;
  ignoreOwnerAddessCheck?: boolean;
}) => {
  // prepare the signer
  const signer = await (async () => {
    if (useLedgerSigner) {
      return await getLedgerSigner();
    } else {
      const [firstSigner] = await ethers.getSigners();
      return firstSigner;
    }
  })();

  // get chain id and config
  const chainId = await signer.getChainId();
  const config = getConfigByChainId(chainId);
  const contractAddress = config.contractAddress[nameOrAbi];
  const isLocalChain = chainId === 1337;

  if (!contractAddress) {
    console.error(`Missing contract address in config for ${nameOrAbi}`);
    process.exit(1);
  }

  // get the contract to interact with
  const contract = (await ethers.getContractAt(
    nameOrAbi,
    contractAddress,
    signer
  )) as T;

  // print out detail of contract
  const signerAddress = await contract.signer.getAddress();
  const balance = await contract.signer.getBalance();
  console.log(
    `Chain ID: ${chainId} (${config.chainName}).
      \nInteracting with the contract ${nameOrAbi} at ${contract.address} with the account:`,
    signerAddress,
    `balance: ${formatPriceByChain(balance, chainId)}`
  );

  // check if signer address is same as in config
  if (!ignoreOwnerAddessCheck && config.owner !== signerAddress) {
    throw new Error(
      `Signer address ${signerAddress} is not in the config file for chain id ${chainId}`
    );
  }

  return { contract, chainId, isLocalChain, config };
};
