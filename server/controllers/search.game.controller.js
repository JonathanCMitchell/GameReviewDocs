// endpoint /api/search/game
const searchGameModel = require('../models/search.game.model');

const get = (req, res) => {
  console.log('inside searchGameController req.query is: ', req.query);
    searchGameModel.get(req.query)
    .then((game) => {
      // console.log('game in searchGameController: ', game)
      if (game) {
        res.status(200).send(game);
      }
      res.status(500).end('no search results, check your parameters and try again.');
    })
    .catch((error) => {
      if (error) {
        console.log('error with that search: ', error);
        res.status(500).end(error);
      }
    });
};


exports.search = {
  get,
};
