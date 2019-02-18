const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const { badgeforcejs } = require('../../index');
const prettyjson = require('prettyjson');
const Ora = require('ora');
const cache = require('memory-cache');
const validator = require('./validation');
const errors = require('./errors');

const create = async function(args, callback) {
  const client = cache.get('bf_client');
  const templateData = cache.get('templateToCreate');
  let {name, description, type, version} = templateData;

  version = version.split('.');

  const templateVersion = new badgeforcejs.Templates.CredentialTemplateVersion(version[0],version[1],version[2]);
  const template = new badgeforcejs.Templates.CredentialTemplate(client.signer, name, description, type, templateVersion);

  client.templates.create(template).submitNextBatch()
    .then(resp => {
      this.log(chalk.bold.green('Transaction submitted successfully.'));
      const output = {
        "transaction-link": resp,
        "template-state-address": template.stateAddress,
        "template": template.credTemplate.toObject()
      };
      this.log(prettyjson.render(output));
      cache.del('templateToCreate');
      callback();
    })
    .catch(err => {
      this.log(errors.toError(`error creating template: ${err}`));
      cache.del('templateToCreate');
      callback()
    });
};

const del = async function(args, callback) {
  const client = cache.get('bf_client');
  const {address} = args;
  client.templates.delete([address]).submitNextBatch()
    .then(resp => {
      this.log(chalk.bold.green('Transaction submitted successfully.'));
      const output = {
        "transaction-link": resp,
        "state-addresses": address,
      };
      this.log(prettyjson.render(output));
      callback();
    })
    .catch(err => {
      this.log(errors.toError(`error deleting template at state address ${address}: ${err}`));
      callback()
    });
};

module.exports = function (vorpal, options) {
  vorpal
    .command('templates create <template_json_path>')
    .description(`Create a new Credential Template. <template_json_path> is the path to the json file describing your new template.`)
    .validate(function (args) {
      const clientCheck = validator.clientConfigured(args);
      if(clientCheck !== true) {
        return clientCheck;
      }

      return validator.validateTemplate(args);
    })
    .action(create);

  vorpal
    .command('templates delete <address>')
    .description(`Delete a template at provided state address`)
    .validate(validator.clientConfigured)
    .action(del);
};
