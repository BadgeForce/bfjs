const cache = require('memory-cache');
const { createHash } = require('crypto');
const DEFAULT_ENDPOINT = 'http://127.0.0.1:8008';
const STORAGE_KEY = createHash('md5').update('badgeforce-cli').digest('hex');
const configure = function (args, callback) {
    const spinner = new Ora({ text: 'Configuring BadgeForce Client', spinner: "arc" }).start();
    const { privatekey } = args;
    const host = args.options["node"] ? args.options["node"] : DEFAULT_ENDPOINT;
    const client = new badgeforcejs.Client(host, privatekey);
    cache.put('bf_client', client);
    spinner.succeed();
    callback();
};
module.exports = function (vorpal, options) {
    vorpal
        .command('configure <privatekey>')
        .option('-n, --node <nde>', `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`)
        .types({
        string: ['n', 'node']
    })
        .description(`Configure sets up BadgeForce client 
            with the provided private key and optional host URI. 
            If host URI not specified the default ${DEFAULT_ENDPOINT} will be used.
            You can use this command to switch private keys and host also.`)
        .action(configure);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudF9jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpL2NvbW1hbmRzL2N1cnJlbnRfY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0QyxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sZ0JBQWdCLEdBQUcsdUJBQXVCLENBQUM7QUFDakQsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU3RSxNQUFNLFNBQVMsR0FBRyxVQUFVLElBQUksRUFBRSxRQUFRO0lBQ3RDLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLCtCQUErQixFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hGLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7SUFFNUUsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN6RCxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEIsUUFBUSxFQUFFLENBQUM7QUFDZixDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsTUFBTSxFQUFFLE9BQU87SUFDdEMsTUFBTTtTQUNELE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQztTQUNqQyxNQUFNLENBQUMsa0JBQWtCLEVBQ3RCLHFEQUFxRCxnQkFBZ0IsRUFBRSxDQUMxRTtTQUNBLEtBQUssQ0FBQztRQUNILE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7S0FDeEIsQ0FBQztTQUNELFdBQVcsQ0FBQzs7b0RBRStCLGdCQUFnQjsyRUFDTyxDQUNsRTtTQUNBLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUEifQ==