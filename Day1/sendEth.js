import { ethers, BigNumber } from "ethers";
import env from "dotenv";
env.config();

/*
const generateWallet = () => {
  const wallet = ethers.Wallet.createRandom();
  console.log("address", wallet.address);
  console.log("private key", wallet.privateKey);
  console.log("mnemonic", wallet.mnemonic);
};
generateWallet();
*/
const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_KEY);
// console.log("provider", await provider.getBlockNumber());
const signer = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, provider);
console.log("signer", await signer.getBalance());
const potatoAddr = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

const tx = await signer.sendTransaction({
  to: potatoAddr,
  value: 1,
});
console.log(tx.hash);
await tx.wait();
console.log("tx mined");

/*
console.log(await signer.getAddress());
const myBalance = await signer.getBalance();
console.log("ma balance", ethers.utils.formatEther(myBalance));
*/
