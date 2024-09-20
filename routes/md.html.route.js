const express = require('express');
const router = express.Router();
const mdhtmlController = require('../controllers/md.html.controller')

router.post('/convert', mdhtmlController.textToConvert);

module.exports = router;