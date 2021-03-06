const hre = require("hardhat");

const AddrFxStateChildTunnel = "0xaB914bD287Fcc388742D3916CA261Bf58aeA7113";

async function main() {
  const fxStateChildTunnel = await hre.ethers.getContractAt(
    "FxStateChildTunnel",
    AddrFxStateChildTunnel
  );
  console.log("fxStateChildTunnel: ", fxStateChildTunnel.address);

  console.log("FxStateChildTunnel -> Reading Message From Root to Child...");
  const message = await fxStateChildTunnel.latestData();
  console.log("Message : ", message);
}

// npx hardhat run scripts/read_root_to_child.js --network mumbai
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
