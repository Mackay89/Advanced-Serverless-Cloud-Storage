const express = require('express');
const multer = require('multer');
const { encryptFile, compressFile } = require('../../services');
const { saveFileMetadata } = require('../../utils/fileUtils');
const authMiddleware = require('../../middleware/authMiddleware');
const validationMiddleware = require('../../middleware/validationMiddleware');

const upload = multer({ dest: 'uploads/' });

const router = express.Router();

// Middleware to ensure authentication
router.use(authMiddleware);

// Upload file endpoint
router.post(
  '/upload',
  validationMiddleware.validateFileUpload,
  upload.single('file'),
  async (req, res) => {
    try {
      const { file } = req;
      const encryptedFile = await encryptFile(file);
      const compressedFile = await compressFile(encryptedFile);
      
      // Save metadata and file to storage
      const fileMetadata = await saveFileMetadata(file, compressedFile);
      
      return res.status(200).json({
        message: 'File uploaded and processed successfully.',
        fileMetadata,
      });
    } catch (error) {
      console.error('File upload error:', error);
      return res.status(500).json({ error: 'File upload failed' });
    }
  }
);

module.exports = router;

