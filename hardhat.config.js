require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
module.exports = {
  solidity: "0.8.14",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: "INFURA_URL",
      accounts: [
        `0x${"PRIVATE_KEY"}`,
      ],
      gasMultiplier: 1,
      gas: 2100000,
      gasPrice: 8000000000,
      timeout: 20000,
      saveDeployments: true,
      chainId: 4,
    },
  },
};
