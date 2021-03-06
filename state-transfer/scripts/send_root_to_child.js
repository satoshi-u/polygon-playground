const hre = require("hardhat");

const AddrFxStateRootTunnel = "0xaB914bD287Fcc388742D3916CA261Bf58aeA7113";

async function main() {
  const fxStateRootTunnel = await hre.ethers.getContractAt(
    "FxStateRootTunnel",
    AddrFxStateRootTunnel
  );
  console.log("fxStateRootTunnel : ", fxStateRootTunnel.address);

  console.log("FxStateRootTunnel -> Sending Message From Root to Child...");
  const sendMessage = await fxStateRootTunnel.sendMessageToChild(
    "0x706f6c79676f6e00000000000000000000000000000000000000000000000000000000"
  );
  console.log("sendMessage: ", sendMessage);
  await sendMessage.wait();
  console.log("Message sent");
}

// npx hardhat run scripts/send_root_to_child.js --network goerli
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
