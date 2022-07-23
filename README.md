# Tutorial for hardhat-deploy

# 1. Setting up the environment

Most Ethereum libraries and tools are written in JavaScript, and so is **Hardhat**. If you're not familiar with Node.js, it's a JavaScript runtime built on Chrome's V8 JavaScript engine. It's the most popular solution to run JavaScript outside of a web browser and **Hardhat** is built on top of it.

## Installing

```
$ npm i 

```

## Compiling contracts

To compile the contract run `npx hardhat compile` in your terminal. The `compile` task is one of the built-in tasks.

```
$ npx hardhat compile
Compiling 1 file with 0.7.3
Compilation finished successfully
```

## Deploying contracts

The contract has been successfully compiled and is ready to be used.

Now, deploy this contract to rinkeby testnet. Run the deployment script deploy.js present in the scripts folder, using following command:

```
$ npx hardhat run scripts/deploy.js
Contract deployed successfully
```

## Sending transaction to blockchain 

Send the transaction using ether-js. Run the node-js script broadcatTx.js present in the scripts folder, using following command:

```
$ node broadcastTx.js 
Tx is Successfull
```

## Getting transaction from blockchain

Get the transaction using ether-js. Run the node-js script getTx.js present in the scripts folder, using following command:

```
$ node getTx.js 
```
