const express = require('express');
const { generateJwtToken } = require('../../services/jwt');
const authMiddleware = require('../../middleware/authMiddleware');

const router = express.Router();

// User login endpoint
router.post('/login', authMiddleware.authenticateUser, (req, res) => {
  const { user } = req;
  const token = generateJwtToken(user);
  
  return res.status(200).json({
    message: 'Login successful',
    token,
  });
});

module.exports = router;

