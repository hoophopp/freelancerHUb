const express = require('express');
const router = express.Router();
const jobControoler = require('../controllers/jobController');

router.post('/', jobControoler.postJob);
router.get('/', jobControoler.getsjob);
router.get('/:id', jobControoler.viewjob);
router.put('/:id', jobControoler.editJob);
router.delete('/:id', jobControoler.dlt);

module.exports = router;