import { ethers } from "ethers";
import abiS from "./storageAbi.js";
const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_KEY);

const address = "0x7afbe4a2ac0ccc20382f3b0fb17033a017a3c51d";
const storage = new ethers.Contract(address, abiS, provider);
console.log(storage.address);
