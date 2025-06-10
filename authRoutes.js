const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/authmiddleware');


router.post('/', authController.register);
router.post('/', authController.login);
router.get('/profile', auth, userController.getProfile);

module.exports = router;