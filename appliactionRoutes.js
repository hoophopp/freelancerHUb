const express = require('express');
const { execPath } = require('process');
const router = express.Router();
const appcontroler = require('../controllers/applicationController');

router.post('/', appcontroler.applyJob);
router.get('/', appcontroler.getapps);
router.delete('/:id', appcontroler.dltapp);

module.exports = router;