const rp = require('request-promise');
const searchPlatformModel = module.exports;


searchPlatformModel.get = (params) => {
  // console.log('params inside searchPlatformModel: ', params);
  const qs = {}
  if (params.console_name) qs.console_name = params.console_name;
  if (params.score_range) qs.score_range = params.score_range;
  if (params.score) qs.score = parseInt(params.score);
  if (params.editors_choice) qs.editors_choice = parseInt(params.editors_choice);
  if (params.release_year) qs.release_year = parseInt(params.release_year);
  if (params.release_month) qs.release_month = parseInt(params.release_month);
  if (params.release_day) qs.release_day = parseInt(params.release_day);
  const options = {
    uri: 'http://gamereviewapi.herokuapp.com/api/search/platforms/',
    qs
  };
  return rp(options)
    .then(function (result) {
        // console.log('result inside searchGenreModel: ', result);
        return result;
    })
    .catch(function (err) {
        console.log('api call failed: inside searchPlatformModel.get ', err);
    });
};







