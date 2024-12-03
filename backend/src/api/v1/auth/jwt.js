const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// JWT token generation
router.post('/generate', (req, res) => {
  const { userId } = req.body;

  const token = jwt.sign({ userId }, 'secretKey', { expiresIn: '1h' });
  return res.status(200).json({ token });
});

module.exports = router;

