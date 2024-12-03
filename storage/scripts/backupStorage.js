const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const backupPath = '/storage/backups';

// Backup data
const backupData = () => {
  const timestamp = new Date().toISOString().replace(/:/g, '-');
  const backupFile = path.join(backupPath, `backup-${timestamp}.tar.gz`);
  const sourceDir = '/storage/data';

  exec(`tar -czf ${backupFile} ${sourceDir}`, (error, stdout, stderr) => {
    if (error) {
      console.error('Backup failed:', error);
    } else {
      console.log(`Backup completed: ${backupFile}`);
    }
  });
};

backupData();

