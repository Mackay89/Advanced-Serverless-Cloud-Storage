const jwt = require("jsonwebtoken");
const speakeasy = require("speakeasy");
const SECRET = "your_jwt_secret"; // Replace with a secure key from key management

/**
 * Generates a JWT token for user authentication.
 * @param {object} payload - The data to include in the JWT.
 * @returns {string} - The generated JWT token.
 */
function generateToken(payload) {
    return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}

/**
 * Verifies a JWT token.
 * @param {string} token - The JWT token to verify.
 * @returns {object} - The decoded payload if verification succeeds.
 * @throws {Error} - If verification fails.
 */
function verifyToken(token) {
    return jwt.verify(token, SECRET);
}

/**
 * Generates a TOTP secret for MFA.
 * @returns {object} - The TOTP secret.
 */
function generateMfaSecret() {
    return speakeasy.generateSecret({ length: 20 });
}

/**
 * Verifies an MFA TOTP code.
 * @param {string} token - The TOTP code to verify.
 * @param {string} secret - The user's TOTP secret.
 * @returns {boolean} - True if the code is valid, false otherwise.
 */
function verifyMfaToken(token, secret) {
    return speakeasy.totp.verify({
        secret: secret,
        encoding: "base32",
        token: token,
    });
}

module.exports = { generateToken, verifyToken, generateMfaSecret, verifyMfaToken };

