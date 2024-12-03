const crypto = require("crypto");

// Simulated centralized key management system
const keys = new Map();

/**
 * Generates and stores a key for a given ID.
 * @param {string} id - The ID for which to generate the key.
 * @returns {string} - The generated key.
 */
function generateKey(id) {
    const key = crypto.randomBytes(32).toString("hex");
    keys.set(id, key);
    return key;
}

/**
 * Retrieves the key for a given ID.
 * @param {string} id - The ID for which to retrieve the key.
 * @returns {string} - The key associated with the ID.
 * @throws {Error} - If the key is not found.
 */
function getKey(id) {
    if (!keys.has(id)) {
        throw new Error("Key not found");
    }
    return keys.get(id);
}

/**
 * Deletes the key for a given ID.
 * @param {string} id - The ID for which to delete the key.
 */
function deleteKey(id) {
    keys.delete(id);
}

module.exports = { generateKey, getKey, deleteKey };

