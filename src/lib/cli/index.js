const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const emoji = require('node-emoji')
const Ora = require('ora');
const {
  badgeforcejs
} = require('../../../build/main');

try {
  const client = new badgeforcejs.Client('http://127.0.0.1:8008',
    "e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275");
  const template = new badgeforcejs.Templates.CredentialTemplate(
    "fdas", "fas", "v1", JSON.stringify({
      'h': 'w'
    }));
  client
    .templates
    .create(template)
    .submitNextBatch()
    .then(console.log)
    .catch(console.log);
} catch (error) {
  console.log(error)
}

// const delimiter = `${chalk     .bold     .blue('BadgeForcejs CLI')} ${emoji
// .get('zap')}`; const badgeforce_cli = Vorpal()     .delimiter(delimiter)
// .use(require('./templates_commands')) badgeforce_cli     .show()
// .parse(process.argv); const spinner = new Ora({text: 'Loading unicorns',
// spinner: "arc"}).start(); spinner.color = 'yellow'; spinner.text = 'Loading
// rainbows'; setTimeout(() => {     spinner.color = 'yellow';     spinner.text
// = 'Loading rainbows'; }, 3000); setTimeout(() => {     spinner.succeed(); },
// 2000);
