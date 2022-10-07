const sendMessage = require('./controllers/sendMessageController');
const { Router } = require('express');

const router = Router();

router.get('/send', sendMessage);

module.exports = router;
