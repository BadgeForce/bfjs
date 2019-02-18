const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const emoji = require('node-emoji');

const delimiter = `${chalk.bold.blue('BadgeForce Development Console')} ${emoji.get('zap')}`;
const badgeforce_cli = Vorpal()
  .delimiter(delimiter)
  .use(require('./commands/init'))
  .use(require('./commands/state-query'))
  .use(require('./commands/templates'));

module.exports = badgeforce_cli;
