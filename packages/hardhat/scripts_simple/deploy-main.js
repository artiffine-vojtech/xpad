const hre = require("hardhat");

async function main() {
  // Compile contracts
  await hre.run("compile");

  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", hre.ethers.utils.formatEther(balance));

  // Addresses and configurations
  const factoryAddress = "0x9C8c44c785abb7506aD2815CEC8c817b0524e94F";
  const routerAddress = "0xA3EbC69D23fD7F9A5f2cF7f135a212b5f23b3f23";
  const feeRecipient = "0xCEb93FDb1381BeA0b1a8634B2e538FD814513901";
  const feePercentage = 10; // Example fee percentage

  // Deploy the XPad contract
  const XPad = await hre.ethers.getContractFactory("XPad");
  const xPad = await XPad.deploy(
    factoryAddress,
    routerAddress,
    feeRecipient,
    feePercentage
  );

  await xPad.deployed();

  console.log("XPad contract deployed to:", xPad.address);
}

// Handle errors and execute
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
