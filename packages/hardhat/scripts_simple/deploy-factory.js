const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying Factory contract with account:", deployer.address);

  const feeToAddress = "0xCEb93FDb1381BeA0b1a8634B2e538FD814513901"; // Replace with the fee recipient's address
  const Factory = await hre.ethers.getContractFactory("Factory");

  const factory = await Factory.deploy(feeToAddress);

  await factory.deployed();

  console.log("Factory contract deployed to:", factory.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
