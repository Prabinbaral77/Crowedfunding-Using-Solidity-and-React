const { expect } = require("chai");

describe("CrowedFunding Contract", function () {
  let Funding;
  let hardhatToken;
  let manager;
  let address1;
  let address2;

  beforeEach(async function () {
    [manager, address1, address2] = await ethers.getSigners();
    Funding = await ethers.getContractFactory("CrowedFunding");
    hardhatToken = await Funding.deploy();
  });

  describe("deployment", function () {
    it("should set the right owner", async function () {
      expect(await hardhatToken.manager()).to.equal(manager.address);
    });
  });

  describe("Transactions", function () {
    it("should cross minimum Contribution before beacame contributer", async function () {
      await expect(hardhatToken.sendEth()).to.be.revertedWith(
        "Minimum contribution of 100 wei required."
      );
    });
  });
});
