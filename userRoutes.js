const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id',userController.getmyprofile);
router.delete('/:id', userController.deleteAccount);

module.exports = router;