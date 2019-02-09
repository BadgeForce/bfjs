const badgeforce = require('../../../build/main');
const stateQuery = require('./state-query');
const prettyjson = require('prettyjson');
const moment = require('moment');
const DEFAULT_ENDPOINT = 'http://127.0.0.1:8008';
const create = function (args, callback) {
    const { name, owner, version, description } = args;
    this.log(name, owner, version, data);
    try {
        const signer = new badgeforce.Signer("e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275");
        const config = new badgeforce.Config(DEFAULT_ENDPOINT, signer);
        const client = new badgeforce.Client(config);
        const version = new badgeforce.Templates.CredentialTemplateVersion(1, 0, 0);
        const template = new badgeforce.Templates.CredentialTemplate(signer, "Khalil Template", "Just a test lil fella.", "Test", version);
        client
            .credentialTemplates
            .create(template)
            .submitNextBatch()
            .then(this.log)
            .catch(this.log);
        callback();
    }
    catch (error) {
        console.log(error);
    }
};
const del = function (args, callback) {
    const { name, owner, version } = args;
    this.log(name, owner, version);
    callback();
};
const query = function (args, callback) {
    try {
        stateQuery(args.address, args.options.node)
            .then(results => {
            results.data.forEach(entry => {
                const data = new Buffer(entry.data, 'base64').toString('ascii');
                const template = JSON.parse(data);
                const output = {
                    'state-address': entry.address,
                    'template': template,
                    'created-at': moment(new Date(template["created_at"] *
                        1000))
                        .format('L'),
                };
                console.log(prettyjson.render(output));
            });
        })
            .catch(this.log);
        callback();
    }
    catch (error) {
        console.log(error);
    }
};
module.exports = function (vorpal, options) {
    vorpal
        .command('crendential-templates create <name> <owner> <version> <data>')
        .option('-p, --privatekey', 'private key for transaction signing')
        .option('-n, --node', `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`)
        .description('Create a new credential template.')
        .alias('templates new')
        .action(create);
    vorpal
        .command('crendential-templates delete <name> <owner> <version>')
        .option('-p, --privatekey', 'private key for transaction signing')
        .option('-n, --node', `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`)
        .description('Delete a new template.')
        .alias('templates del')
        .action(del);
    vorpal
        .command('crendential-templates query <address>')
        .option('-n, --node', `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`)
        .description('Query state to view template data.')
        .alias('templates query')
        .action(query);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzX2NvbW1hbmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jbGkvdGVtcGxhdGVzX2NvbW1hbmRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2xELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM1QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLE1BQU0sZ0JBQWdCLEdBQUcsdUJBQXVCLENBQUM7QUFFakQsTUFBTSxNQUFNLEdBQUcsVUFBVSxJQUFJLEVBQUUsUUFBUTtJQUNyQyxNQUFNLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFDTCxPQUFPLEVBQ1AsV0FBVyxFQUNaLEdBQUcsSUFBSSxDQUFDO0lBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJO1FBQ0YsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUNsQyxrRUFBa0UsQ0FBQyxDQUFBO1FBQ3JFLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUUsTUFBTSxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLGtCQUFrQixD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