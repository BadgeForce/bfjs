const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const { badgeforcejs } = require('../../index');
const Ora = require('ora');
const cache = require('memory-cache');
const validator = require('./validation');
const DEFAULT_ENDPOINT = 'http://127.0.0.1:8008';
const DEVELOPMENT_KEY = 'e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275';
const configure = function (args, callback) {
    const spinner = new Ora({ text: 'Configuring BadgeForce Client', spinner: "arc" }).start();
    const privatekey = args["privatekey"] ? args["privatekey"] : DEVELOPMENT_KEY;
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
    if (args.options["all"] === 'true') {
        this.log(chalk.green(`private-key: ${client.config.signer.privateKeyHex}`));
    }
    callback();
};
module.exports = function (vorpal, options) {
    vorpal
        .command('configure')
        .option('-n, --node <host uri>', `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`)
        .option('-k, --privatekey <pk>', `Private key to use for signing transaction, if none is provided the development key will be used. 
            Development key ${DEVELOPMENT_KEY}`)
        .types({
        string: ['n', 'node']
    })
        .description(`Configure sets up BadgeForce client 
            with the provided private key and optional host URI. 
            If host URI not specified the default ${DEFAULT_ENDPOINT} will be used.
            You can use this command to switch private keys and host also.`)
        .action(configure);
    vorpal
        .command('show config')
        .option('-a, --all <true or false>', `Print private key with rest of configuration.`)
        .types({
        boolean: ['a', 'all']
    })
        .description('Prints the current configuration')
        .validate(validator.clientConfigured)
        .action(showConfig);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGkvY29tbWFuZHMvaW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQzdCLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDaEQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFMUMsTUFBTSxnQkFBZ0IsR0FBRyx1QkFBdUIsQ0FBQztBQUNqRCxNQUFNLGVBQWUsR0FBRyxrRUFBa0UsQ0FBQztBQUUzRixNQUFNLFNBQVMsR0FBRyxVQUFVLElBQUksRUFBRSxRQUFRO0lBQ3RDLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLCtCQUErQixFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXhGLE1BQU0sVUFBVSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7SUFDOUUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7SUFFNUUsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN6RCxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUUvQixPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEIsUUFBUSxFQUFFLENBQUM7QUFDZixDQUFDLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxVQUFVLElBQUksRUFBRSxRQUFRO0lBQ3ZDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEMsTUFBTSxVQUFVLEdBQUcsU0FBUyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSztTQUM3QyxNQUFNLENBQUMsZUFBZSxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFFM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFbEMsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLE1BQU0sRUFBRTtRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMvRTtJQUVELFFBQVEsRUFBRSxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLE1BQU0sRUFBRSxPQUFPO0lBQ3RDLE1BQU07U0FDRCxPQUFPLENBQUMsV0FBVyxDQUFDO1NBQ3BCLE1BQU0sQ0FBQyx1QkFBdUIsRUFDM0IscURBQXFELGdCQUFnQixFQUFFLENBQzFFO1NBQ0EsTUFBTSxDQUFDLHVCQUF1QixFQUM3Qjs4QkFDb0IsZUFBZSxFQUFFLENBQ3RDO1NBQ0EsS0FBSyxDQUFDO1FBQ0gsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztLQUN4QixDQUFDO1NBQ0QsV0FBVyxDQUFDOztvREFFK0IsZ0JBQWdCOzJFQUNPLENBQ2xFO1NBQ0EsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXZCLE1BQU07U0FDRCxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQ3RCLE1BQU0sQ0FBQywyQkFBMkIsRUFDL0IsK0NBQStDLENBQ2xEO1NBQ0EsS0FBSyxDQUFDO1FBQ0gsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztLQUN4QixDQUFDO1NBQ0QsV0FBVyxDQUFDLGtDQUFrQyxDQUFDO1NBQy9DLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7U0FDcEMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyJ9