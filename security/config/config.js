const fs = require("fs");
const path = require("path");

const configPath = path.resolve(__dirname, "security.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

module.exports = config;

