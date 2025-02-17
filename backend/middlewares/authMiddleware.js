const jwt = require('jsonwebtoken');


exports.authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};
exports.authorizeRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ message: 'Access forbidden' });
  }
  next();
};