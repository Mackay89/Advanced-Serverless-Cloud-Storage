const crypto = require('crypto');

const encryptFile = (file) => {
  const cipher = crypto.createCipher('aes-256-cbc', 'encryptionKey');
  let encrypted = cipher.update(file.buffer);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  
  return encrypted;
};

module.exports = { encryptFile };

