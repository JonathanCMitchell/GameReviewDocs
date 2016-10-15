const router = require('express').Router();
const path = require('path');
const searchGameController = require('../controllers/search.game.controller');
const searchGenreController = require('../controllers/search.genre.controller');


router.get('/games', searchGameController.search.get);
router.get('/genres', searchGenreController.search.get);

module.exports = router