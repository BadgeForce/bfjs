const credentialTemplates = require('./credential-templates');
const verifiableCreds = require('./credentials');
const cli = require('caporal');
const figlet = require('figlet');
const moment = require('moment');

cli.version('0.0.1');
const banner = figlet.textSync('BadgeForce-CLI', {
    font: 'slant',
    horizontalLayout: 'fitted',
    verticalLayout: 'default'
});

cli.description(`\n\n${banner}`);

cli.command('create-template', 'create a new credential template')
    .action(async (args, options, logger) => {
        logger.info(`submitting create template transaction`);
        try {
            await credentialTemplates.create();
        } catch (e) {
            logger.error(`error creating template: ${e}`)
        }
    })
    .command('delete-templates', 'delete some template(s) from the state')
    .argument('<addresses...>', 'state address for query', cli.LIST)
    .action(async (args, options, logger) => {
        try {
            await credentialTemplates.deleteTemplates(args.addresses);
        } catch (e) {
            logger.error(`error deleting template(s): ${e}`)
        }
    })
    .command('query-templates', 'get some template(s) from the state')
    .argument('<stateaddress>', 'state address for query')
    .action(async (args, options, logger) => {
        try {
            await credentialTemplates.queryState(args.stateaddress);
        } catch (e) {
            logger.error(`error making state query: ${e}`)
        }
    });

cli.command('issue-credential', 'create a new credential template')
    .argument('<credentialFile>', 'credential json file')
    .argument('<expiration>', 'credential expiration date in MM-DD-YYYY format')
    .action(async (args, options, logger) => {
        logger.info(`submitting issue credential transaction`);
        try {
            const expiration = moment(args.expiration, 'MM-DD-YYYY').unix();
            await verifiableCreds.issue(args.credentialFile, expiration);
        } catch (e) {
            logger.error(`error creating template: ${e}`)
        }
    })
    .command('revoke-credentials', 'get some template(s) from the state')
    .argument('<stateaddress>', 'state address for query', cli.LIST)
    .action(async (args, options, logger) => {
        try {
            await verifiableCreds.revoke(args.stateaddress);
        } catch (e) {
            logger.error(`error revoking credentials: ${e}`)
        }
    })
    .command('query-credentials', 'get some template(s) from the state')
    .argument('<stateaddress>', 'state address for query')
    .action(async (args, options, logger) => {
        try {
            await verifiableCreds.queryState(args.stateaddress);
        } catch (e) {
            logger.error(`error making state query: ${e}`)
        }
    });

module.exports = cli;