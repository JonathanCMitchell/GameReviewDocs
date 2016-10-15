const request = require('request');

const searchGameModel = module.exports;

searchGameModel.get = (params) => {
  // console.log('params inside searchGameModel: ', params);
  const qs = {};
  if (params.release_day) qs.release_day = params.release_day;
  const uri = 'http://gamereviewapi.herokuapp.com/api/search/games/';
  return new Promise((resolve, reject) => {
    request(uri, qs, ((error, response, body) => {
      if (error) {
        console.log('error in request: ', error);
        return reject(error);
      }
      return resolve(body);
    }));
  });
};
 






