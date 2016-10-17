const router = require('express').Router();
const path = require('path');
const searchGameController = require('../controllers/search.game.controller');
const searchGenreController = require('../controllers/search.genre.controller');
const searchPlatformController = require('../controllers/search.platform.controller');

router.get('/games', searchGameController.search.get);
router.get('/genres', searchGenreController.search.get);
router.get('/platforms', searchPlatformController.search.get);

module.exports = router