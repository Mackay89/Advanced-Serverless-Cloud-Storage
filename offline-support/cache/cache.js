const fs = require("fs");
const path = require("path");

const CACHE_DIRECTORY = path.join(__dirname, "../data/cache");

/**
 * Saves data to the cache for offline use.
 * @param {string} userId
 * @param {Array} data
 */
function saveToCache(userId, data) {
    const cacheFilePath = path.join(CACHE_DIRECTORY, `${userId}.json`);
    fs.writeFileSync(cacheFilePath, JSON.stringify(data), "utf-8");
    console.log(`Data cached for user ${userId}`);
}

/**
 * Retrieves cached data for a user.
 * @param {string} userId
 * @returns {Array} Cached data
 */
function getCachedData(userId) {
    const cacheFilePath = path.join(CACHE_DIRECTORY, `${userId}.json`);
    if (fs.existsSync(cacheFilePath)) {
        const data = fs.readFileSync(cacheFilePath, "utf-8");
        return JSON.parse(data);
    }
    return [];
}

/**
 * Clears the cache for a user.
 * @param {string} userId
 */
function clearCache(userId) {
    const cacheFilePath = path.join(CACHE_DIRECTORY, `${userId}.json`);
    if (fs.existsSync(cacheFilePath)) {
        fs.unlinkSync(cacheFilePath);
        console.log(`Cache cleared for user ${userId}`);
    }
}

module.exports = { saveToCache, getCachedData, clearCache };

