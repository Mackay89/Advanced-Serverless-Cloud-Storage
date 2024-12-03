const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const syncPath = '/storage/sync';
const remotePath = 'remote-server:/remote/storage';

// Sync storage
const syncData = () => {
  exec(`rsync -avz ${syncPath} ${remotePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error('Sync failed:', error);
    } else {
      console.log('Sync completed:', stdout);
    }
  });
};

syncData();

