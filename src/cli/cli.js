const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const emoji = require('node-emoji')

const delimiter = `${chalk.bold.blue('BadgeForcejs CLI')} ${emoji.get('zap')}`; 
const badgeforce_cli = Vorpal()
  .delimiter(delimiter)
  .use(require('./commands/init'));

module.exports = badgeforce_cli;
