const crypto = require("crypto");

const ALGORITHM = "aes-256-cbc";
const IV_LENGTH = 16; // Initialization vector length
const KEY = crypto.randomBytes(32); // Replace with centralized key from key management

/**
 * Encrypts plaintext using AES-256.
 * @param {string} text - The plaintext to encrypt.
 * @returns {object} - An object containing the IV and encrypted data.
 */
function encrypt(text) {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");

    return {
        iv: iv.toString("hex"),
        encryptedData: encrypted,
    };
}

/**
 * Decrypts ciphertext using AES-256.
 * @param {object} encrypted - The encrypted data object containing IV and data.
 * @returns {string} - The decrypted plaintext.
 */
function decrypt(encrypted) {
    const decipher = crypto.createDecipheriv(
        ALGORITHM,
        KEY,
        Buffer.from(encrypted.iv, "hex")
    );
    let decrypted = decipher.update(encrypted.encryptedData, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}

module.exports = { encrypt, decrypt };

