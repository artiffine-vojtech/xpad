async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the ERC20 contract factory
  const ERC20 = await ethers.getContractFactory("ERC20");

  // Define the constructor arguments
  const name = "MyToken";
  const symbol = "MTK";
  const supply = 1_000_000; // 1 million tokens
  const maxTx = 1; // 1% max transaction

  // Deploy the ERC20 token contract with the arguments
  const erc20 = await ERC20.deploy(name, symbol, supply, maxTx);

  await erc20.deployed();

  console.log("ERC20 deployed to:", erc20.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
