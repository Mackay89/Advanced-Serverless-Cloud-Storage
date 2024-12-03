const { encrypt, decrypt } = require("./encryption/encryption");
const {
    generateToken,
    verifyToken,
    generateMfaSecret,
    verifyMfaToken,
} = require("./auth/auth");
const { generateKey, getKey, deleteKey } = require("./keys/keyManager");

// Encryption Test
const encrypted = encrypt("Sensitive Data");
console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypt(encrypted));

// JWT Test
const token = generateToken({ userId: 123 });
console.log("JWT Token:", token);
console.log("Verified Token:", verifyToken(token));

// MFA Test
const mfaSecret = generateMfaSecret();
console.log("MFA Secret:", mfaSecret);
const mfaToken = speakeasy.totp({ secret: mfaSecret.base32, encoding: "base32" });
console.log("MFA Token:", mfaToken);
console.log("MFA Verification:", verifyMfaToken(mfaToken, mfaSecret.base32));

// Key Management Test
const keyId = "testKey";
generateKey(keyId);
console.log("Generated Key:", getKey(keyId));
deleteKey(keyId);

