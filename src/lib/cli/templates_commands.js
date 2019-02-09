const badgeforce = require('../../../build/main');
const stateQuery = require('./state-query');
const prettyjson = require('prettyjson');
const moment = require('moment');

const DEFAULT_ENDPOINT = 'http://127.0.0.1:8008';

const create = function (args, callback) {
  const {
    name,
    owner,
    version,
    description
  } = args;
  this.log(name, owner, version, data);
  try {
    const signer = new badgeforce.Signer(
      "e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275")
    const config = new badgeforce.Config(DEFAULT_ENDPOINT, signer);
    const client = new badgeforce.Client(config);
    const version = new badgeforce.Templates.CredentialTemplateVersion(1, 0, 0);
    const template = new badgeforce.Templates.CredentialTemplate(signer, "Khalil Template", "Just a test lil fella.", "Test", version);
    client 
      .credentialTemplates
      .create(template)
      .submitNextBatch()
      .then(this.log)
      .catch(this.log);

    callback();
  } catch (error) {
    console.log(error)
  }
}

const del = function (args, callback) {
  const {
    name,
    owner,
    version
  } = args;
  this.log(name, owner, version);
  callback();
}

const query = function (args, callback) {
  try {
    stateQuery(args.address, args.options.node)
      .then(results => {
        results.data.forEach(entry => {
          const data = new Buffer(entry.data, 'base64').toString(
            'ascii');
          const template = JSON.parse(data);
          const output = {
            'state-address': entry.address,
            'template': template,
            'created-at': moment(new Date(template["created_at"] *
                1000))
              .format('L'),
          };
          console.log(prettyjson.render(output));
        });
      })
      .catch(this.log);
    callback();
  } catch (error) {
    console.log(error)
  }
}

module.exports = function (vorpal, options) {
  vorpal
    .command('crendential-templates create <name> <owner> <version> <data>')
    .option('-p, --privatekey', 'private key for transaction signing')
    .option('-n, --node',
      `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`
    )
    .description('Create a new credential template.')
    .alias('templates new')
    .action(create);

  vorpal
    .command('crendential-templates delete <name> <owner> <version>')
    .option('-p, --privatekey', 'private key for transaction signing')
    .option('-n, --node',
      `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`
    )
    .description('Delete a new template.')
    .alias('templates del')
    .action(del);

  vorpal
    .command('crendential-templates query <address>')
    .option('-n, --node',
      `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`
    )
    .description('Query state to view template data.')
    .alias('templates query')
    .action(query);
}
