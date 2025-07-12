const { User } = require('../models');

// 🟩 Admin adds new user
exports.addUser = async (req, res) => {
  try {
    const { name, email, password, address, role } = req.body;
    const user = await User.create({ name, email, password, address, role });
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// 🟩 Admin: View all users (with filters)
exports.getAllUsers = async (req, res) => {
  try {
    const { name, email, address, role } = req.query;
    const where = {};

    if (name) where.name = name;
    if (email) where.email = email;
    if (address) where.address = address;
    if (role) where.role = role;

    const users = await User.findAll({ where });
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
