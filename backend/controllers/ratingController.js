const { Rating, Store } = require('../models');

// 🟩 Normal User: Submit rating
exports.submitRating = async (req, res) => {
  try {
    const { storeId, rating } = req.body;
    const userId = req.user.id;

    const existing = await Rating.findOne({ where: { storeId, userId } });
    if (existing) return res.status(400).json({ message: 'Rating already exists. Use update.' });

    const newRating = await Rating.create({ storeId, userId, rating });
    res.json(newRating);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// 🟩 Normal User: Modify rating
exports.updateRating = async (req, res) => {
  try {
    const { rating } = req.body;
    const { storeId } = req.params;
    const userId = req.user.id;

    const existing = await Rating.findOne({ where: { storeId, userId } });
    if (!existing) return res.status(404).json({ message: 'Rating not found' });

    existing.rating = rating;
    await existing.save();

    res.json(existing);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
