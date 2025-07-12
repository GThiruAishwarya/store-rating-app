const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');
const ratingController = require('../controllers/ratingController');

router.post('/', auth, role(['USER']), ratingController.submitRating);
router.put('/:storeId', auth, role(['USER']), ratingController.updateRating);

module.exports = router;
