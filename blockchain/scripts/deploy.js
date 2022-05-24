const main = async () => {
  const CrowedFunding = await ethers.getContractFactory("CrowedFunding");
  const crowedFunding = await CrowedFunding.deploy();

  await crowedFunding.deployed();

  console.log("crowedFunding deployed to:", crowedFunding.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
