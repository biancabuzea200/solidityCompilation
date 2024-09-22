const { ethers } = require("ethers");
//...not all code included
const mintPrice = await contractInstance.MINT_PRICE();
console.log("nft mint price", ethers.utils.formatEther(mintPrice));
console.log("minting nft");
const mintTx = await contractInstance.mint({
  value: ethers.utils.formatEther(0.01),
}); // mint is  a payable function, need to pass it funds when calling
console.log("tx sent", mintTx.hash);
await mintTx.wait();

const signer = getSigner();
const mintPrice2 = ethers.utils.parseEther("0.01");
const mintCalldata = "0x1249c58b"; //keccac256(mint())
console.log("minting");
const mintTx2 = await signer.sendTransaction({
  value: mintPrice2,
  data: mintCalldata, // calling the mintCalldata
  to: contractInstance,
});
console.log("tx sent", mintTx2.hash);
await mintTx2.wait();
