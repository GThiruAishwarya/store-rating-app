const roleMiddleware = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: Role not allowed' });
    }
    next();
  };
};

module.exports = roleMiddleware;
