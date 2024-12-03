const { encryptFile, compressFile } = require('../services');
const { saveFileMetadata } = require('../utils/fileUtils');

module.exports.uploadFileHandler = async (event) => {
  const file = event.body;
  const encryptedFile = await encryptFile(file);
  const compressedFile = await compressFile(encryptedFile);
  const fileMetadata = await saveFileMetadata(file, compressedFile);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'File processed successfully', fileMetadata }),
  };
};

