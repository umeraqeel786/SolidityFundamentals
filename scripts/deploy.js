async function main() {
  // We get the contract to deploy
  const Player = await ethers.getContractFactory("PlayerContract");
  console.log("Deploying playerox Contract . . . . ");
  const player = await Player.deploy();

  await player.deployed();
  console.log("Player deployed to:", player.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
