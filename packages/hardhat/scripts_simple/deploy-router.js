const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying Router contract with account:", deployer.address);

  const factoryAddress = "0x9C8c44c785abb7506aD2815CEC8c817b0524e94F"; // Replace with the Factory contract address
  const wethAddress = "0xCEb93FDb1381BeA0b1a8634B2e538FD814513901"; // Replace with the WETH token address
  const referralFee = 3; // Set the referral fee (max: 5%)

  const Router = await hre.ethers.getContractFactory("Router");

  const router = await Router.deploy(factoryAddress, wethAddress, referralFee);

  await router.deployed();

  console.log("Router contract deployed to:", router.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
