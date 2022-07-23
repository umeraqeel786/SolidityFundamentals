# Tutorial for hardhat-deploy based on https://hardhat.org/tutorial/

# 1. Setting up the environment

Most Ethereum libraries and tools are written in JavaScript, and so is **Hardhat**. If you're not familiar with Node.js, it's a JavaScript runtime built on Chrome's V8 JavaScript engine. It's the most popular solution to run JavaScript outside of a web browser and **Hardhat** is built on top of it.

## Installing Node.js

You can [skip](./creating-a-new-hardhat-project.md) this section if you already have a working Node.js `>=12.0` installation. If not, here's how to install it on Ubuntu, MacOS and Windows.


### Linux

#### Ubuntu

Copy and paste these commands in a terminal:

## Compiling contracts

To compile the contract run `yarn hardhat compile` in your terminal. The `compile` task is one of the built-in tasks.

```
$ yarn hardhat compile
Compiling 1 file with 0.7.3
Compilation finished successfully
```

The contract has been successfully compiled and is ready to be used.

# 4. Deployment Scripts

Before you will be able to test or deploy your contract, you must set up the deployment process that can then be used both in testing as well as deployment to various live networks.
This allow you to focus on what the contracts will be in their final form, setup their parameters and dependencies, and ensure your tests are running against the exact code that will be deployed.

This also removes the need to duplicate the deployment procedures. This is made possible thanks to the `hardhat-deploy` plugin.
