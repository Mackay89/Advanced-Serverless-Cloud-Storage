const express = require('express');
const { retrieveFile } = require('../../utils/fileUtils');
const authMiddleware = require('../../middleware/authMiddleware');

const router = express.Router();

// Middleware to ensure authentication
router.use(authMiddleware);

// Download file endpoint
router.get('/download/:fileId', async (req, res) => {
  try {
    const { fileId } = req.params;
    const file = await retrieveFile(fileId);
    
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    res.setHeader('Content-Type', file.mimetype);
    res.send(file.content);
  } catch (error) {
    console.error('File download error:', error);
    return res.status(500).json({ error: 'File download failed' });
  }
});

module.exports = router;

