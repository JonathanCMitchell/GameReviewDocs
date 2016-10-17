const genres = require('./genres');

const cache = {}
genres.forEach((elem) => {
  if (cache[elem.name] === undefined) {
    cache[elem.name] = true;
  }
});

module.exports=cache