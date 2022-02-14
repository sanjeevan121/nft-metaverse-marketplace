require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path:'/.env'})
const fs=require("fs")
const privateKey=fs.readFileSync(".secret").toString()
//const projectId= "189b9adee6b048c09347d530decbe8ff"

module.exports={
  networks:{
    hardhat:{
      chainId:1337
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${process.env.ProjectId}`,
      accounts:[]
    },
    mainnet:{
      url:`https://polygon-mainnet.infura.io/v3/${process.env.ProjectId}`,

    }
  },
  solidity:"0.8.4",
};