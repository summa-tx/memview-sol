usePlugin("solidity-coverage");
usePlugin("@nomiclabs/buidler-ethers");

module.exports = {
  solc: {
    version: "0.5.10"
  },
  networks: {
    coverage: {
      url: 'http://localhost:8555'
    },
  },
};
