const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');
const storeController = require('../controllers/storeController');

router.post('/add', auth, role(['ADMIN']), storeController.addStore);
router.get('/', auth, role(['ADMIN', 'USER']), storeController.getStores);
router.get('/owner/ratings', auth, role(['STORE_OWNER']), storeController.getStoreRatings);

module.exports = router;
