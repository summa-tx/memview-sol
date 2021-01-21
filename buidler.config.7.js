usePlugin("solidity-coverage");
usePlugin("@nomiclabs/buidler-ethers");

module.exports = {
  solc: {
    version: "0.7.6",
  },
  networks: {
    coverage: {
      url: "http://localhost:8555",
    },
  },
};
