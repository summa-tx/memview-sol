usePlugin("solidity-coverage");
usePlugin("@nomiclabs/buidler-ethers");

module.exports = {
  solc: {
    version: "0.6.8"
  },
  networks: {
    coverage: {
      url: 'http://localhost:8555'
    },
  },
};
