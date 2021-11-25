import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";

const ALCHEMY_URL = 'https://eth-rinkeby.alchemyapi.io/v2/dYf6jtny4JJuWaKConuhwsZN6TYBQ5te'
const PRIVATE_KEY = 'e2da9f701542c4ee35c4f57fcee5276816f48c6c24db493f4e473fe6c964b14c'
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.7.3", settings: {} }],
  },
  networks: {
    hardhat: {},
    localhost: {},
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
    rinkeby: {
      url: ALCHEMY_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gasPrice: 8000000000
      }      
  }
};

export default config