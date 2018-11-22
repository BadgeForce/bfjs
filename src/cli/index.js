const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const emoji = require('node-emoji')
const Ora = require('ora');

const delimiter = `${chalk
    .bold
    .blue('BadgeForce CLI')} ${emoji
    .get('zap')}`;

const badgeforce_cli = Vorpal()
    .delimiter(delimiter)
    .use(require('./templates_commands'))

badgeforce_cli
    .show()
    .parse(process.argv);

// const spinner = new Ora({text: 'Loading unicorns', spinner: "arc"}).start();
// spinner.color = 'yellow'; spinner.text = 'Loading rainbows'; setTimeout(()
// => {     spinner.color = 'yellow';     spinner.text = 'Loading rainbows'; },
// 3000); setTimeout(() => {     spinner.succeed(); }, 2000);