const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const encryptFile = (inputPath, outputPath, encryptionKey) => {
  const cipher = crypto.createCipher('aes-256-cbc', encryptionKey);
  const input = fs.createReadStream(inputPath);
  const output = fs.createWriteStream(outputPath);

  input.pipe(cipher).pipe(output);
  console.log(`File encrypted: ${outputPath}`);
};

const decryptFile = (inputPath, outputPath, decryptionKey) => {
  const decipher = crypto.createDecipher('aes-256-cbc', decryptionKey);
  const input = fs.createReadStream(inputPath);
  const output = fs.createWriteStream(outputPath);

  input.pipe(decipher).pipe(output);
  console.log(`File decrypted: ${outputPath}`);
};

module.exports = { encryptFile, decryptFile };

