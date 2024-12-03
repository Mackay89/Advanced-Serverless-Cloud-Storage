const Web3 = require("web3");
const fs = require("fs");
const path = require("path");

const web3 = new Web3("http://localhost:8545");
const account = "YOUR_DEPLOYER_ACCOUNT_PRIVATE_KEY";

async function deployContract(contractPath, contractName) {
    const contractSource = fs.readFileSync(path.resolve(__dirname, contractPath), "utf8");
    const compiledContract = JSON.parse(contractSource);
    const contract = new web3.eth.Contract(compiledContract.abi);

    const deployTx = contract.deploy({ data: compiledContract.bytecode });
    const deployedContract = await deployTx.send({
        from: account,
        gas: 5000000,
    });

    console.log(`${contractName} deployed at:`, deployedContract.options.address);
}

(async () => {
    await deployContract("../contracts/AccessControl.json", "AccessControl");
    await deployContract("../contracts/Billing.json", "Billing");
})();

