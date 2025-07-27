const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
  // Get token from header Authorization: Bearer <token>
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  const token = authHeader.split(' ')[1]; // Extract token part

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach admin info to request object
    req.admin = decoded;

    // Continue to next middleware/controller
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token, authorization denied' });
  }
}

module.exports = authMiddleware;
