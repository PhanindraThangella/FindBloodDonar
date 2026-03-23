const jwt = require('jsonwebtoken');

function authenticateUser(req, res, next) {
  const authHeader = req.headers["authorization"] ;
  const token = authHeader && authHeader.split(' ')[1];
  console.log("in Auth");
  if (!token) return res.status(401).json({ error: 'No token provided' });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = decoded;
    console.log("auth sucess");
    next();
  });
}

module.exports = authenticateUser;