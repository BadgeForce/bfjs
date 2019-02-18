const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const { badgeforcejs } = require('../../index');
const prettyjson = require('prettyjson');
const Ora = require('ora');
const cache = require('memory-cache');
const validator = require('./validation');
const errors = require('./errors');
const create = async function (args, callback) {
    const client = cache.get('bf_client');
    const templateData = cache.get('templateToCreate');
    let { name, description, type, version } = templateData;
    version = version.split('.');
    const templateVersion = new badgeforcejs.Templates.CredentialTemplateVersion(version[0], version[1], version[2]);
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
        callback();
    });
};
const del = async function (args, callback) {
    const client = cache.get('bf_client');
    const { address } = args;
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
        callback();
    });
};
module.exports = function (vorpal, options) {
    vorpal
        .command('templates create <template_json_path>')
        .description(`Create a new Credential Template. <template_json_path> is the path to the json file describing your new template.`)
        .validate(function (args) {
        const clientCheck = validator.clientConfigured(args);
        if (clientCheck !== true) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaS9jb21tYW5kcy90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztBQUM3QixNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN6QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMxQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFbkMsTUFBTSxNQUFNLEdBQUcsS0FBSyxXQUFVLElBQUksRUFBRSxRQUFRO0lBQzFDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25ELElBQUksRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsR0FBRyxZQUFZLENBQUM7SUFFdEQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFN0IsTUFBTSxlQUFlLEdBQUcsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxD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