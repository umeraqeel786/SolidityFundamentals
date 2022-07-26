const ethers = require("ethers");
require("dotenv").config({ path: __dirname + "/./../.env" });


const API_URL = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const CONTRACT_ABI = require("../artifacts/contracts/PlayerContract.sol/PlayerContract.json");

let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);

async function addPlayer(name, level, highestScore) {
  let wallet = new ethers.Wallet(PRIVATE_KEY, customHttpProvider);

  let signer = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI.abi, wallet);

  const addPly = await signer.addPlayer(name, level, highestScore);

  console.log("Tx is Successfull");
  console.log(addPly);
}

addPlayer("Moiz", 10, 8799);
