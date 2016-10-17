// endpoint /api/search/platform
const searchPlatformModel = require('../models/search.platform.model');

function get(req, res) {
  console.log('inside searchPlatformController req.query is: ', req.query);
    searchPlatformModel.get(req.query)
    .then((platform) => {
      // console.log('platform in searchplatformController: ', platform)
      if (platform) {
        res.status(200).send(platform);
      }
      res.status(500).end('no search results, check your parenreters and try again.');
    })
    .catch((error) => {
      if (error) {
        console.log('error with that search: ', error);
        res.status(500).end(error);
      }
    });
}

exports.search = {
  get: get,
}

