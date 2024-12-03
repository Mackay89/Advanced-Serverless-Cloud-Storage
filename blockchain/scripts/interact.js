const Web3 = require("web3");

const web3 = new Web3("http://localhost:8545");
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractABI = require("./AccessControl.json").abi;

const account = "YOUR_ACCOUNT_PRIVATE_KEY";

const accessControlContract = new web3.eth.Contract(contractABI, contractAddress);

async function grantAccess(userAddress) {
    await accessControlContract.methods
        .grantAccess(userAddress)
        .send({ from: account, gas: 3000000 });
    console.log(`Access granted to ${userAddress}`);
}

(async () => {
    await grantAccess("0xUserAddress");
})();

