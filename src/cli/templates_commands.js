const badgeforce = require('../../dist');

const create = function (args, callback) {
    const {name, owner, version, data} = args;
    this.log(name, owner, version, data);
    try {
        const signer = new badgeforce.Signer("e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275")
        const config = new badgeforce.Config('http://127.0.0.1:8008', signer);
        const client = new badgeforce.Client(config);
        client
            .credentialTemplates
            .create("fdas", "fas", "v1", JSON.stringify({'h': 'w'}))
        callback();
    } catch (error) {
        console.log(error)
    }

}

const del = function (args, callback) {
    const {name, owner, version} = args;
    this.log(name, owner, version);
    callback();
}

module.exports = function (vorpal, options) {
    vorpal
        .command('crendential-templates create <name> <owner> <version> <data>')
        .description('Create a new credential template.')
        .alias('templates new')
        .action(create);

    vorpal
        .command('crendential-templates delete <name> <owner> <version>')
        .description('Delete a new template.')
        .alias('templates del')
        .action(del);
}