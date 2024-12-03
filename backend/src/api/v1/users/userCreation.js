const express = require('express');
const { createUser } = require('../../services');
const validationMiddleware = require('../../middleware/validationMiddleware');

const router = express.Router();

// User creation endpoint
router.post('/create', validationMiddleware.validateUserCreation, async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await createUser(username, email, password);
    
    return res.status(201).json({
      message: 'User created successfully.',
      user: newUser,
    });
  } catch (error) {
    console.error('User creation error:', error);
    return res.status(500).json({ error: 'User creation failed' });
  }
});

module.exports = router;

