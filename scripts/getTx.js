const ethers = require("ethers");
const API_URL = "API_URL";
const CONTRACT_ADDRESS = "CONTRACT_ADDRESS";
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
