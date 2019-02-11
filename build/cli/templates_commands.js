// const badgeforce = require('../../../build/main');
// const stateQuery = require('./state-query');
// const prettyjson = require('prettyjson');
// const moment = require('moment');
// const create = function (args, callback) {
//   const { name, owner, version, description} = args;
//   this.log(name, owner, version, data);
//   try {
//     const signer = new badgeforce.Signer(
//       "e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275")
//     const config = new badgeforce.Config(DEFAULT_ENDPOINT, signer);
//     const client = new badgeforce.Client(config);
//     const version = new badgeforce.Templates.CredentialTemplateVersion(1, 0, 0);
//     const template = new badgeforce.Templates.CredentialTemplate(signer, "Khalil Template", "Just a test lil fella.", "Test", version);
//     client 
//       .credentialTemplates
//       .create(template)
//       .submitNextBatch()
//       .then(this.log)
//       .catch(this.log);
//     callback();
//   } catch (error) {
//     console.log(error)
//   }
// }
// const del = function (args, callback) {
//   const {
//     name,
//     owner,
//     version
//   } = args;
//   this.log(name, owner, version);
//   callback();
// }
// const query = function (args, callback) {
//   try {
//     stateQuery(args.address, args.options.node)
//       .then(results => {
//         results.data.forEach(entry => {
//           const data = new Buffer(entry.data, 'base64').toString(
//             'ascii');
//           const template = JSON.parse(data);
//           const output = {
//             'state-address': entry.address,
//             'template': template,
//             'created-at': moment(new Date(template["created_at"] *
//                 1000))
//               .format('L'),
//           };
//           console.log(prettyjson.render(output));
//         });
//       })
//       .catch(this.log);
//     callback();
//   } catch (error) {
//     console.log(error)
//   }
// }
// module.exports = function (vorpal, options) {
//   vorpal
//     .command('crendential-templates create <name> <owner> <version> <data>')
//     .description('Create a new credential template.')
//     .alias('templates new')
//     .action(create);
//   vorpal
//     .command('crendential-templates delete <name> <owner> <version>')
//     .option('-p, --privatekey', 'private key for transaction signing')
//     .option('-n, --node',
//       `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`
//     )
//     .description('Delete a new template.')
//     .alias('templates del')
//     .action(del);
//   vorpal
//     .command('crendential-templates query <address>')
//     .option('-n, --node',
//       `URI to BadgeForce blockchain rest API. Default is ${DEFAULT_ENDPOINT}`
//     )
//     .description('Query state to view template data.')
//     .alias('templates query')
//     .action(query);
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzX2NvbW1hbmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaS90ZW1wbGF0ZXNfY29tbWFuZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JELCtDQUErQztBQUMvQyw0Q0FBNEM7QUFDNUMsb0NBQW9DO0FBR3BDLDZDQUE2QztBQUM3Qyx1REFBdUQ7QUFDdkQsMENBQTBDO0FBQzFDLFVBQVU7QUFDViw0Q0FBNEM7QUFDNUMsNEVBQTRFO0FBQzVFLHNFQUFzRTtBQUN0RSxvREFBb0Q7QUFDcEQsbUZBQW1GO0FBQ25GLDBJQUEwSTtBQUMxSSxjQUFjO0FBQ2QsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0Isd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUUxQixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QixNQUFNO0FBQ04sSUFBSTtBQUVKLDBDQUEwQztBQUMxQyxZQUFZO0FBQ1osWUFBWTtBQUNaLGFBQWE7QUFDYixjQUFjO0FBQ2QsY0FBYztBQUNkLG9DQUFvQztBQUNwQyxnQkFBZ0I7QUFDaEIsSUFBSTtBQUVKLDRDQUE0QztBQUM1QyxVQUFVO0FBQ1Ysa0RBQWtEO0FBQ2xELDJCQUEyQjtBQUMzQiwwQ0FBMEM7QUFDMUMsb0VBQW9FO0FBQ3BFLHdCQUF3QjtBQUN4QiwrQ0FBK0M7QUFDL0MsNkJBQTZCO0FBQzdCLDhDQUE4QztBQUM5QyxvQ0FBb0M7QUFDcEMscUVBQXFFO0FBQ3JFLHlCQUF5QjtBQUN6Qiw4QkFBOEI7QUFDOUIsZUFBZTtBQUNmLG9EQUFvRDtBQUNwRCxjQUFjO0FBQ2QsV0FBVztBQUNYLDBCQUEwQjtBQUMxQixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QixNQUFNO0FBQ04sSUFBSTtBQUVKLGdEQUFnRDtBQUNoRCxXQUFXO0FBQ1gsK0VBQStFO0FBQy9FLHdEQUF3RDtBQUN4RCw4QkFBOEI7QUFDOUIsdUJBQXVCO0FBRXZCLFdBQVc7QUFDWCx3RUFBd0U7QUFDeEUseUVBQXlFO0FBQ3pFLDRCQUE0QjtBQUM1QixnRkFBZ0Y7QUFDaEYsUUFBUTtBQUNSLDZDQUE2QztBQUM3Qyw4QkFBOEI7QUFDOUIsb0JBQW9CO0FBRXBCLFdBQVc7QUFDWCx3REFBd0Q7QUFDeEQsNEJBQTRCO0FBQzVCLGdGQUFnRjtBQUNoRixRQUFRO0FBQ1IseURBQXlEO0FBQ3pELGdDQUFnQztBQUNoQyxzQkFBc0I7QUFDdEIsSUFBSSJ9