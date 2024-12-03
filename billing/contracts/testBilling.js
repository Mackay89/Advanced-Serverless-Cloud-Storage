const { addUsage, payBill } = require("./scripts/interact");

async function test() {
    const userAddress = "0xUserAddress"; // Replace with a test user address
    console.log("Adding usage...");
    await addUsage(userAddress, 10, 5);

    console.log("Paying bill...");
    await payBill(userAddress, "0.05");

    console.log("Billing system tested successfully.");
}

test();

