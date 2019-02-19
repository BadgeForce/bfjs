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
    let { name, description, type, coreData, version } = templateData;
    version = version.split('.');
    const templateVersion = new badgeforcejs.Templates.CredentialTemplateVersion(version[0], version[1], version[2]);
    const template = new badgeforcejs.Templates.CredentialTemplate(client.signer, name, description, type, templateVersion, coreData || null);
    client.templates.create(template).submitNextBatch()
        .then(resp => {
        this.log(chalk.bold.green('Transaction submitted successfully.'));
        const output = {
            "transaction-link": resp,
            "template": badgeforcejs.Templates.CredentialTemplate.toJSON(template.credTemplate)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaS9jb21tYW5kcy90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztBQUM3QixNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN6QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMxQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFbkMsTUFBTSxNQUFNLEdBQUcsS0FBSyxXQUFVLElBQUksRUFBRSxRQUFRO0lBQzFDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25ELElBQUksRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDLEdBQUcsWUFBWSxDQUFDO0lBRWhFLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTdCLE1BQU0sZUFBZSxHQUFHLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxF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