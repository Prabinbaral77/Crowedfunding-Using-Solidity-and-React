require("@nomiclabs/hardhat-waffle");

const ALCHEMY_PRIVATE_KEY =
  "https://eth-rinkeby.alchemyapi.io/v2/Em_7IrHHGaRPa7iSHaw63p6GDakVXErn";
const RINKEBY_PRIVATE_KEY =
  "5c33bf5710995203068c4d6cd8ca7a2b97727e9fb0604448677b2a3aadd2158e";

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_PRIVATE_KEY,
      accounts: [`${RINKEBY_PRIVATE_KEY}`],
    },
  },
};
