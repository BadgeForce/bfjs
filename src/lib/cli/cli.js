const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const emoji = require('node-emoji')

const delimiter = `${chalk
    .bold
    .blue('BadgeForce CLI')} ${emoji
    .get('zap')}`;

module.exports = badgeforce_cli = Vorpal().delimiter(delimiter)
