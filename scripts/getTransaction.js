const ethers = require("ethers");
require("dotenv").config({ path: __dirname + "/./../.env" });

const API_URL = process.env.API_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
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
