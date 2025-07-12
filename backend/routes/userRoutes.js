const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');
const userController = require('../controllers/userController');

router.post('/add', auth, role(['ADMIN']), userController.addUser);
router.get('/', auth, role(['ADMIN']), userController.getAllUsers);

module.exports = router;
