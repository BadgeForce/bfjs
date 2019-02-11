const emoji = require('node-emoji');
const { badgeforcejs } = require('../index');
const cli = require('./cli');
// try {
//   const pub = "02ccb8bc17397c55242a27d1681bf48b5b40a734205760882cd83f92aca4f1cf45";
//   const client = new badgeforcejs.Client('http://127.0.0.1:8008',
//     "e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275");
//   const version = new badgeforcejs.Templates.CredentialTemplateVersion(1, 0, 0);
//   const template = new badgeforcejs.Templates.CredentialTemplate(client.signer, "Khalil Template", "Just a test lil fella.", "Test", version);
//   client 
//     .templates
//     .create(template)
//     .submitNextBatch()
//     .then(console.log)
//     .catch(console.log);
//   client 
//     .getTemplatesByIssuer(pub)
//     .then(templates => {
//       templates.forEach(t => {
//         console.log(t.toObject())
//         const result = badgeforcejs.Verifier.verifyTemplate(t, pub);
//         console.log(`Verification Result: ${result.ok ? "valid": `invalid: ${result.error}`}`);
//       });
//     })
//     .catch(console.log);    
// } catch (error) {
//   console.log(error)
// }
// const delimiter = `${chalk.bold.blue('BadgeForcejs CLI')} ${emoji.get('zap')}`; 
// const badgeforce_cli = Vorpal()
//   .delimiter(delimiter)
//   .use(require('./commands/init'));
cli
    .show()
    .parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xpL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNwQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU3QixRQUFRO0FBQ1Isc0ZBQXNGO0FBQ3RGLG9FQUFvRTtBQUNwRSwyRUFBMkU7QUFDM0UsbUZBQW1GO0FBQ25GLGlKQUFpSjtBQUNqSixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLDJCQUEyQjtBQUUzQixZQUFZO0FBQ1osaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFDakMsb0NBQW9DO0FBQ3BDLHVFQUF1RTtBQUN2RSxrR0FBa0c7QUFDbEcsWUFBWTtBQUNaLFNBQVM7QUFDVCwrQkFBK0I7QUFDL0Isb0JBQW9CO0FBQ3BCLHVCQUF1QjtBQUN2QixJQUFJO0FBRUosbUZBQW1GO0FBQ25GLGtDQUFrQztBQUNsQywwQkFBMEI7QUFDMUIsc0NBQXNDO0FBRXRDLEdBQUc7S0FDQSxJQUFJLEVBQUU7S0FDTixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDIn0=