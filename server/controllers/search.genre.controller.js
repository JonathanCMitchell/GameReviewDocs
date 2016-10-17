// endpoint /api/search/genre
const searchGenreModel = require('../models/search.genre.model');

const searchGenreController = module.exports

searchGenreController.get = (req, res) => {
  console.log('inside searchGenreController req.query is: ', req.query);
    searchGenreModel.get(req.query)
    .then((genre) => {
      // console.log('genre in searchGenreController: ', genre)
      if (genre) {
        res.status(200).send(genre);
      }
      res.status(500).end('no search results, check your parenreters and try again.');
    })
    .catch((error) => {
      if (error) {
        console.log('error with that search: ', error);
        res.status(500).end(error);
      }
    });
};


