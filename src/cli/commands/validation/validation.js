const errors = require("../errors");

const cache = require('memory-cache');

const clientConfigured = function () {
  const client = cache.get('bf_client');
  return client === null ? errors.CLIENT_INIT_ERROR : true;
};

module.exports = {
  clientConfigured
};
