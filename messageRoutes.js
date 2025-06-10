const express = require('express');
const router = express.Router();
const msgcontroller = require('../controllers/messageController');

router.post('/', msgcontroller.sendmsg);
router.get('/:id', msgcontroller.getmessageuser);
module.exports = router;