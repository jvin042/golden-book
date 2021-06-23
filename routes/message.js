const express = require('express');

const router = express.Router();

const messageController = require('../controllers/message');

router.get('/', messageController.getAll);
router.post('/', messageController.createMessage);

module.exports = router;
