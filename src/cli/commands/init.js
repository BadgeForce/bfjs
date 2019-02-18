const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const { badgeforcejs } = require('../../index');
const Ora = require('ora');
const cache = require('memory-cache');
const validator = require('./validation');

const DEFAULT_ENDPOINT = 'http://127.0.0.1:8008';
const DEVELOPMENT_KEY = 'e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275';

const configure = function (args, callback) {
    const spinner = new Ora({text: 'Configuring BadgeForce Client',spinner: "arc"}).start();

    const privatekey  = args["privatekey"] ? args["privatekey"] : DEVELOPMENT_KEY;
    const host = args.options["node"] ? args.options["node"] : DEFAULT_ENDPOINT;

    const client = new badgeforcejs.Client(host, privatekey);
    cache.put('bf_client', client);

    spinner.text = 'Done';
    spinner.succeed(); 
    callback();
};

const showConfig = function (args, callback) {
    const client = cache.get('bf_client');
    const configInfo = `host: ${client.config.uri} \n`
        .concat(`public-key: ${client.signer.publickeyAsHex}`);

    this.log(chalk.green(configInfo));

    if(args.options["all"] === 'true') {
        this.log(chalk.green(`private-key: ${client.config.signer.privateKeyHex}`));
    }

    callback();
};

module.exports = function (vorpal, options) {
    vorpal
        .command('configure')
        .option('-n, --node <host uri>',
            `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`
        )
        .option('-k, --privatekey <pk>',
          `Private key to use for signing transaction, if none is provided the development key will be used. 
            Development key ${DEVELOPMENT_KEY}`
        )
        .types({
            string: ['n', 'node']
        })
        .description(`Configure sets up BadgeForce client 
            with the provided private key and optional host URI. 
            If host URI not specified the default ${DEFAULT_ENDPOINT} will be used.
            You can use this command to switch private keys and host also.`
        )
        .action(configure);
    
    vorpal
        .command('show config')
        .option('-a, --all <true or false>',
            `Print private key with rest of configuration.`
        )
        .types({
            boolean: ['a', 'all']
        })
        .description('Prints the current configuration')
        .validate(validator.clientConfigured)
        .action(showConfig);   
};
