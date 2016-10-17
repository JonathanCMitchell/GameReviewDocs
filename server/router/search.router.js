const path = require('path')

const searchGameController = require('../controllers/search.game.controller');
const searchGenreController = require('../controllers/search.genre.controller');
const searchPlatformController = require('../controllers/search.platform.controller');


module.exports = (app, express) => {
app.get('/api/search/games', searchGameController.search.get);
app.get('/api/search/genres', searchGenreController.search.get);
app.get('/api/search/platforms', searchPlatformController.search.get);
}
