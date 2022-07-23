const ethers = require("ethers");
const API_URL = "https://rinkeby.infura.io/v3/54864fd661734a288da4dcdda1ad2f7c";
const CONTRACT_ADDRESS = "0x28B8796E53592Cb4FB76Df22BdEc17Afd6C83D1B";
const CONTRACT_ABI = require("../artifacts/contracts/PlayerContract.sol/PlayerContract.json");

let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);

async function getPlayer() {
  let contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI.abi,
    customHttpProvider
  );

  const getplayer = await contract.getAllPlayer();

  console.log("Tx is Successfull");
  console.log(getplayer.toString());
}

getPlayer();
