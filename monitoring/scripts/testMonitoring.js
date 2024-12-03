const { logAction } = require("./logs/logger");

// Simulate user actions
logAction("user1", "Uploaded file");
logAction("user2", "Deleted file");

console.log("Logs have been updated. Check the 'audit.log' file.");

