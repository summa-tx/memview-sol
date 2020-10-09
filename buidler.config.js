usePlugin("solidity-coverage");
usePlugin("@nomiclabs/buidler-ethers");

module.exports = {
  networks: {
    coverage: {
      url: 'http://localhost:8555'
    }
  },
}
