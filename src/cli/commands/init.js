const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const { badgeforcejs } = require('../../index');
const Ora = require('ora');
const cache = require('memory-cache');
const { createHash } = require('crypto');

const DEFAULT_ENDPOINT = 'http://127.0.0.1:8008';

const configure = function (args, callback) {
    const spinner = new Ora({text: 'Configuring BadgeForce Client',spinner: "arc"}).start(); 
    const { privatekey } = args; 
    const host = args.options["node"] ? args.options["node"] : DEFAULT_ENDPOINT;

    const client = new badgeforcejs.Client(host, privatekey);
    cache.put('bf_client', client);
    spinner.text = 'Done';
    spinner.succeed(); 
    callback();
}

const showConfig = function (args, callback) {
    const client = cache.get('bf_client');
    const configInfo = `host: ${client.config.uri} \n`
        .concat(`public-key: ${client.signer.publickeyAsHex}`);    
    this.log(chalk.green(configInfo));
    if(args.options["all"] === 'true') {
        this.log(chalk.green(`private-key: ${client.config.signer.privateKeyHex}`));
    }

    callback();
}

module.exports = function (vorpal, options) {
    vorpal
        .command('configure <privatekey>')
        .option('-n, --node <host uri>',
            `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`
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
        .action(showConfig);   
}