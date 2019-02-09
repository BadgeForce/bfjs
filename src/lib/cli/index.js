const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const emoji = require('node-emoji')
const Ora = require('ora');
const {
  badgeforcejs
} = require('../../../build/main');


try {
  const pub = "02ccb8bc17397c55242a27d1681bf48b5b40a734205760882cd83f92aca4f1cf45";
  const client = new badgeforcejs.Client('http://127.0.0.1:8008',
    "e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275");
  // const version = new badgeforcejs.Templates.CredentialTemplateVersion(1, 0, 0);
  // const template = new badgeforcejs.Templates.CredentialTemplate(client.signer, "Khalil Template", "Just a test lil fella.", "Test", version);
  // client 
  //   .templates
  //   .create(template)
  //   .submitNextBatch()
  //   .then(console.log)
  //   .catch(console.log);

  // client 
  //   .getTemplatesByIssuer(pub)
  //   .then(templates => {
  //     templates.forEach(t => console.log(t.toObject()));
  //   })
  //   .catch(console.log);
  
  client 
    .getTemplateByName("Khalil Template")
    .then(t => {
      console.log(t);
    })
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
