const cache = require('memory-cache');
const { createHash } = require('crypto');

const DEFAULT_ENDPOINT = 'http://127.0.0.1:8008';
const STORAGE_KEY = createHash('md5').update('badgeforce-cli').digest('hex');

const configure = function (args, callback) {
    const spinner = new Ora({text: 'Configuring BadgeForce Client',spinner: "arc"}).start(); 
    const { privatekey } = args; 
    const host = args.options["node"] ? args.options["node"] : DEFAULT_ENDPOINT;

    const client = new badgeforcejs.Client(host, privatekey);
    cache.put('bf_client', client);
    spinner.succeed(); 
    callback();
}

module.exports = function (vorpal, options) {
    vorpal
        .command('configure <privatekey>')
        .option('-n, --node <nde>',
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
}