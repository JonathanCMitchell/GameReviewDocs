const platforms = require('./platforms');

const cache = {};
platforms.forEach((elem) => {
  if (cache[elem.console_name] === undefined) {
    cache[elem.console_name] = true;
  }
});

module.exports = cache;