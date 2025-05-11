import { BigNumberish, BigNumber } from "ethers";
import { formatEther, parseUnits } from "@ethersproject/units";

const getCurrencyByChainId = (chainId: number) => {
  switch (chainId) {
    // Polygon
    case 137:
    case 80001:
      return "MATIC";
    // Crossfi
    case 4157:
    case 4158:
      return "XFI";
    // JuChain
    case 210000:
    case 202599:
      return "JU";
    default:
      return "ETH";
  }
};

export const formatPriceByChain = (
  value: BigNumberish | number | undefined,
  chainId: number
) => formatPrice(value, getCurrencyByChainId(chainId));

export const formatPrice = (
  value: BigNumberish | number | undefined,
  unit: "ETH" | "MATIC" | "XFI" | "JU" = "ETH"
) => {
  if (value === undefined) {
    return `? ${unit}`;
  }

  try {
    const valueBigN = BigNumber.isBigNumber(value)
      ? value
      : etherValueToBigNumber(value as number);
    return `${formatEther(valueBigN)} ${unit}`;
  } catch (e) {
    console.error(e);
    return `ERR ${unit}`;
  }
};

export const etherValueToBigNumber = (value: number) =>
  parseUnits(value.toString(), "ether");
