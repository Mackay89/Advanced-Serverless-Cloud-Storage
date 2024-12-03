const express = require('express');
const { generateOauthToken } = require('../../services');

const router = express.Router();

// OAuth2 token generation
router.post('/token', async (req, res) => {
  try {
    const { clientId, clientSecret } = req.body;
    const token = await generateOauthToken(clientId, clientSecret);

    return res.status(200).json({ token });
  } catch (error) {
    console.error('OAuth error:', error);
    return res.status(500).json({ error: 'OAuth token generation failed' });
  }
});

module.exports = router;

