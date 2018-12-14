const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const emoji = require('node-emoji')
const Ora = require('ora');
const badgeforce = require('../../dist');
try {
    const signer = new badgeforce.Signer("e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275")
    const config = new badgeforce.Config('http://127.0.0.1:8008', signer);
    const client = new badgeforce.Client(config);
    client
        .credentialTemplates
        .create("fdas", "fas", "v1", JSON.stringify({'h': 'w'}))
        .then(console.log)
        .catch(console.log)
} catch (error) {
    console.log(error)
}

// const delimiter = `${chalk     .bold     .blue('BadgeForce CLI')} ${emoji
// .get('zap')}`; const badgeforce_cli = Vorpal()     .delimiter(delimiter)
// .use(require('./templates_commands')) badgeforce_cli     .show()
// .parse(process.argv); const spinner = new Ora({text: 'Loading unicorns',
// spinner: "arc"}).start(); spinner.color = 'yellow'; spinner.text = 'Loading
// rainbows'; setTimeout(() => {     spinner.color = 'yellow';     spinner.text
// = 'Loading rainbows'; }, 3000); setTimeout(() => {     spinner.succeed(); },
// 2000);