const cacheModule = require("../cache/cache");
const { fetchDataFromServer, syncDataToServer } = require("../scripts/syncTasks");

/**
 * Syncs cached data to the server when online.
 * @param {string} userId
 */
async function syncData(userId) {
    try {
        const cachedData = await cacheModule.getCachedData(userId);
        if (cachedData.length > 0) {
            console.log("Syncing data to server...");
            await syncDataToServer(userId, cachedData);
            await cacheModule.clearCache(userId);
            console.log("Data synced successfully.");
        } else {
            console.log("No data to sync.");
        }
    } catch (error) {
        console.error("Error syncing data: ", error);
    }
}

/**
 * Fetches fresh data from the server when the device comes online.
 * @param {string} userId
 */
async function fetchFreshData(userId) {
    try {
        console.log("Fetching fresh data from the server...");
        const freshData = await fetchDataFromServer(userId);
        console.log("Fresh data fetched:", freshData);
    } catch (error) {
        console.error("Error fetching fresh data: ", error);
    }
}

module.exports = { syncData, fetchFreshData };

