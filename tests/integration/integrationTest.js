const { syncData, fetchDataFromServer } = require('../../src/offline-support/sync/sync');
const cacheModule = require('../../src/offline-support/cache/cache');

describe('Integration Tests', () => {
  test('Offline data sync should work as expected', async () => {
    const userId = 'user123';
    const sampleData = [{ id: 1, content: 'Sample' }];
    
    cacheModule.saveToCache(userId, sampleData);

    await syncData(userId);

    const cachedData = cacheModule.getCachedData(userId);
    expect(cachedData.length).toBe(0); // Cache should be cleared after sync

    const freshData = await fetchDataFromServer(userId);
    expect(freshData.length).toBeGreaterThan(0); // Fresh data fetched from the server
  });
});

