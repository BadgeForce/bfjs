const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const { badgeforcejs } = require('../../index');
const Ora = require('ora');
const cache = require('memory-cache');
const { createHash } = require('crypto');
const DEFAULT_ENDPOINT = 'http://127.0.0.1:8008';
const configure = function (args, callback) {
    const spinner = new Ora({ text: 'Configuring BadgeForce Client', spinner: "arc" }).start();
    const { privatekey } = args;
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
        .command('configure <privatekey>')
        .option('-n, --node <host uri>', `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`)
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
        .action(showConfig);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGkvY29tbWFuZHMvaW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQzdCLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDaEQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0QyxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sZ0JBQWdCLEdBQUcsdUJBQXVCLENBQUM7QUFFakQsTUFBTSxTQUFTLEdBQUcsVUFBVSxJQUFJLEVBQUUsUUFBUTtJQUN0QyxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSwrQkFBK0IsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4RixNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzVCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBRTVFLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0IsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLFFBQVEsRUFBRSxDQUFDO0FBQ2YsQ0FBQyxDQUFBO0FBRUQsTUFBTSxVQUFVLEdBQUcsVUFBVSxJQUFJLEVBQUUsUUFBUTtJQUN2QyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sVUFBVSxHQUFHLFNBQVMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUs7U0FDN0MsTUFBTSxDQUFDLGVBQWUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGdCQUFnQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDL0U7SUFFRCxRQUFRLEVBQUUsQ0FBQztBQUNmLENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxNQUFNLEVBQUUsT0FBTztJQUN0QyxNQUFNO1NBQ0QsT0FBTyxDQUFDLHdCQUF3QixDQUFDO1NBQ2pDLE1BQU0sQ0FBQyx1QkFBdUIsRUFDM0IscURBQXFELGdCQUFnQixFQUFFLENBQzFFO1NBQ0EsS0FBSyxDQUFDO1FBQ0gsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztLQUN4QixDQUFDO1NBQ0QsV0FBVyxDQUFDOztvREFFK0IsZ0JBQWdCOzJFQUNPLENBQ2xFO1NBQ0EsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXZCLE1BQU07U0FDRCxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQ3RCLE1BQU0sQ0FBQywyQkFBMkIsRUFDL0IsK0NBQStDLENBQ2xEO1NBQ0EsS0FBSyxDQUFDO1FBQ0gsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztLQUN4QixDQUFDO1NBQ0QsV0FBVyxDQUFDLGtDQUFrQyxDQUFDO1NBQy9DLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUEifQ==