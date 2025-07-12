const { Store, Rating, User } = require('../models');

// 🟩 Admin: Add store
exports.addStore = async (req, res) => {
  try {
    const { name, email, address, ownerId } = req.body;
    const store = await Store.create({ name, email, address, ownerId });
    res.json(store);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// 🟩 Admin/User: Get stores (with search filters)
exports.getStores = async (req, res) => {
  try {
    const { name, address } = req.query;
    const where = {};
    if (name) where.name = name;
    if (address) where.address = address;

    const stores = await Store.findAll({ where });
    res.json(stores);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// 🟦 Store Owner: Get average rating
exports.getStoreRatings = async (req, res) => {
  try {
    const ownerId = req.user.id;
    const store = await Store.findOne({ where: { ownerId }, include: Rating });

    if (!store) return res.status(404).json({ message: 'Store not found' });

    const ratings = store.Ratings.map(r => r.rating);
    const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;

    res.json({ ratings, average: avg.toFixed(2) });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
