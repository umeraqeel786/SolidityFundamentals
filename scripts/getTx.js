const Web3 = require('web3');

(async()=>{
    const web3 = new Web3(
        "https://rinkeby.infura.io/v3/54864fd661734a288da4dcdda1ad2f7c"
    );


    const CONTRACT_ADDRESS = "0x3dC220A85294b33e93d496b7D5e64C41810c3745";
    const CONTRACT_ABI =  [
        {
            "inputs": [],
            "name": "onlyTransfer",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
        
    ];



const nftContract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
const onlyTransfer = await nftContract.methods.onlyTransfer().call({from: "0x8c8e240C723F5F850c6fdfD04a1B08598DaF6B53"})
const totalSupply = await nftContract.methods.totalSupply().call()


console.log("onlyTransfer",onlyTransfer);

console.log("totalSupply",totalSupply);

})();