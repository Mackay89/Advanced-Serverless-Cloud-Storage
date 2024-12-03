const fs = require('fs');
const path = require('path');

const saveFileMetadata = async (file, processedFile) => {
  const filePath = path.join(__dirname, '../../storage', file.filename);
  fs.writeFileSync(filePath, processedFile);
  
  return { fileId: file.filename, filePath };
};

const retrieveFile = async (fileId) => {
  const filePath = path.join(__dirname, '../../storage', fileId);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath);
    return { content: fileContent, mimetype: 'application/octet-stream' };
  }
  return null;
};

module.exports = { saveFileMetadata, retrieveFile };

