const ethers = require("ethers");
const API_URL = "https://rinkeby.infura.io/v3/54864fd661734a288da4dcdda1ad2f7c";
const PRIVATE_KEY =
  "68c19015a5cf5e46862347077574f92088e77bb0c40f1b78200e70c508c285da";
const CONTRACT_ADDRESS = "0x28B8796E53592Cb4FB76Df22BdEc17Afd6C83D1B";
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
