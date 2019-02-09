const badgeforce = require('../../../build/main');
const stateQuery = require('./state-query');
const prettyjson = require('prettyjson');
const moment = require('moment');
const DEFAULT_ENDPOINT = 'http://127.0.0.1:8008';
const create = function (args, callback) {
    const { name, owner, version, data } = args;
    this.log(name, owner, version, data);
    try {
        const signer = new badgeforce.Signer("e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275");
        const config = new badgeforce.Config(DEFAULT_ENDPOINT, signer);
        const client = new badgeforce.Client(config);
        const template = new badgeforce.Templates.CredentialTemplate("fdas", "fas", "v1", JSON.stringify({
            'h': 'w'
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzX2NvbW1hbmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jbGkvdGVtcGxhdGVzX2NvbW1hbmRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2xELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM1QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLE1BQU0sZ0JBQWdCLEdBQUcsdUJBQXVCLENBQUM7QUFFakQsTUFBTSxNQUFNLEdBQUcsVUFBVSxJQUFJLEVBQUUsUUFBUTtJQUNyQyxNQUFNLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFDTCxPQUFPLEVBQ1AsSUFBSSxFQUNMLEdBQUcsSUFBSSxDQUFDO0lBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJO1FBQ0YsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUNsQyxrRUFBa0UsQ0FBQyxDQUFBO1FBQ3JFLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUMxRCxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xDLEdBQUcsRUFBRSxHQUFHO1NBQ1gsQ0FBQyxDQUFDLENB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