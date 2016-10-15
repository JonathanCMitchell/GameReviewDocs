const rp = require('request-promise');
const searchGameModel = module.exports;


searchGameModel.get = (params) => {
  console.log('params inside searchGameModel: ', params);
  const qs = {}
  if (params.release_day) qs.release_day = params.release_day;
  if (params.title.length) qs.title = params.title;
  if (params.score_range) qs.score_range = params.score_range;
  if (params.score) qs.score = params.score;
  if (params.editors_choice) qs.editors_choice = params.editors_choice;
  if (params.release_year) qs.release_year = params.release_year;
  if (params.release_month) qs.release_month = params.release_month;
  if (params.release_day) qs.release_day = params.release_day;
  const options = {
    uri: 'http://gamereviewapi.herokuapp.com/api/search/games/',
    qs
  };
  return rp(options)
    .then(function (result) {
        // console.log('result inside searchGameModel: ', result);
        return result;
    })
    .catch(function (err) {
        console.log('api call failed: ', err);
    });
};
 






