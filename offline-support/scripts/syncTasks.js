const axios = require("axios");

const API_BASE_URL = "https://api.example.com"; // Replace with actual API endpoint

/**
 * Fetches data from the server.
 * @param {string} userId
 * @returns {Array} Data fetched from the server
 */
async function fetchDataFromServer(userId) {
    try {
        const response = await axios.get(`${API_BASE_URL}/data/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data from server: ", error);
        throw error;
    }
}

/**
 * Syncs data to the server.
 * @param {string} userId
 * @param {Array} data
 */
async function syncDataToServer(userId, data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/data/sync/${userId}`, { data });
        return response.data;
    } catch (error) {
        console.error("Error syncing data to server: ", error);
        throw error;
    }
}

module.exports = { fetchDataFromServer, syncDataToServer };

