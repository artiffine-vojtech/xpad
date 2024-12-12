import { ethers } from "hardhat";
import { formatUnits } from "ethers/lib/utils";
import { LedgerSigner } from "@ethersproject/hardware-wallets";

import { formatPriceByChain } from "./formattingUtils";

export const getLedgerSigner = async () => {
  console.log("Connecting to Ledger HW Wallet ...");

  const ledger = await new LedgerSigner(
    ethers.provider,
    "hid",
    "44'/60'/0'/0/0" // first wallet from the HW wallet
    // "44'/60'/1'/0/0" // second wallet from the HW wallet
  );

  const chainId = await ledger.getChainId();
  const address = await ledger.getAddress();
  const balance = await ledger.getBalance();
  const feeData = await ledger.getFeeData();

  console.log("HW Wallet ready", {
    chainId,
    address,
    balance: formatPriceByChain(balance, chainId),
    "gasPrice:": feeData.gasPrice ? formatUnits(feeData.gasPrice, 9) : "???",
    "maxFeePerGas:": feeData.maxFeePerGas
      ? formatUnits(feeData.maxFeePerGas, 9)
      : "???",
    "maxPriorityFeePerGas:": feeData.maxPriorityFeePerGas
      ? formatUnits(feeData.maxPriorityFeePerGas, 9)
      : "???",
  });

  return ledger;
};
