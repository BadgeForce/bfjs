const validator = require("./validation");
const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const moment = require('moment');
const prettyjson = require('prettyjson');
const { badgeforcejs } = require('../../index');
const cache = require('memory-cache');
const errors = require('./errors');

const queryTemplates = async function(args, callback) {
  const client = cache.get('bf_client');
  const { address } = args;
  try {
    const results = await client.stateQuery(address);
    const templates = results.toTemplates();

    if(templates.length === 0) {
      const err = errors.STATE_QUERY_NO_DATA(address);
      this.log(err);
      callback();
    }

    results.toTemplates().forEach(t => {
      const result = badgeforcejs.Verifier.verifyTemplate(t, t.getData().getIssuerPub());
      const verificationRes = `Verification Result: ${result.ok ? chalk.green("valid"): `invalid: ${chalk.red(result.error)}`}`;

      const output = {
        'state-address': address,
        'template': t.toObject(),
        'created-at': moment(new Date(t.getData().getCreatedAt() * 1000)).format('L'),
        'verification': verificationRes
      };

      this.log(prettyjson.render(output));
    });

  } catch (e) {
    const err = errors.STATE_QUERY_ERR(address, e);
    this.log(err);
    callback();
  }
};

module.exports = function (vorpal, options) {
  vorpal
    .command('state-query templates <address>')
    // .option('-i, --issuer <query-by-issuer-pub>',
    //   `When this option is set, a query will be made by the given issuer public key`
    // )
    // .types({
    //   string: ['i', 'issuer']
    // })
    .description(`Query templates on chain and view their data`)
    .validate(validator.clientConfigured)
    .action(queryTemplates);
};
