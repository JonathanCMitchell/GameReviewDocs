const router = require('express').Router();
const path = require('path');
const searchGameController = require('../controllers/search.game.controller');


router.get('/games', searchGameController.search.get);

module.exports = router