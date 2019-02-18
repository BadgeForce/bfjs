const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;

const CLIENT_INIT_ERROR = chalk.red(`You have not configured the host URI or Private key
used for signing. Use the 'configure' command to setup your configuration.`);

const STATE_QUERY_NO_DATA = (address) => {
  return chalk.red(`No data found at state address ${address}`);
};

const STATE_QUERY_ERR = (address, err) => {
  return chalk.red(`Error fetching state at state address ${address}: ${err}`);
};

const toError = function(error) {
  return chalk.red(error);
};

module.exports = {
  CLIENT_INIT_ERROR,
  STATE_QUERY_NO_DATA,
  STATE_QUERY_ERR,
  toError,
};
