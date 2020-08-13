const express = require('express');
const controller = require('../controllers/series');
const router = express.Router();

router.post('/',controller.createSerie);

module.exports = router;