require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.25",
  networks:{
    hardhat:{},
    sepolia:{
      url:"https://sepolia.infura.io/v3/93b3417a7dba43fa9155958fc74116a8",
      accounts:[process.env.KEY]
    }
  }
};
