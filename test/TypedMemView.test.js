/* global assert ethers describe before it */

const { assert } = require('chai');

describe('TypedMemView', () => {
  let instance;

  describe('#tests', async () => {
    before(async () => {
      const TypedMemView = await ethers.getContractFactory('TestMemView');
      instance = await TypedMemView.deploy();
    });

    it('executes tests', async () => {
      await instance.sameBody();
      await instance.differentBody();
      await instance.slicing();

      try {
        await instance.typeError();
        assert(false, 'expected an error');
      } catch (e) {
        assert.include(e.message, 'Type assertion failed');
      }
    });
  });
});
