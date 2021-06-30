const express = require('express');

const router = express.Router();

const messageController = require('../controllers/message');

router.get('/', messageController.getAll);
router.post('/', messageController.createMessage);
router.get('/private-message', messageController.getAllPrivate);

module.exports = router;
