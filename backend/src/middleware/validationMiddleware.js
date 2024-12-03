const validateFileUpload = (req, res, next) => {
  if (!req.file || !req.file.mimetype.startsWith('image/')) {
    return res.status(400).json({ error: 'Only image files are allowed' });
  }
  next();
};

const validateUserCreation = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  next();
};

module.exports = { validateFileUpload, validateUserCreation };

