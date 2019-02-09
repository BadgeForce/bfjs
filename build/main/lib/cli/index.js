const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const emoji = require('node-emoji');
const Ora = require('ora');
const { badgeforcejs } = require('../../../build/main');
try {
    const pub = "02ccb8bc17397c55242a27d1681bf48b5b40a734205760882cd83f92aca4f1cf45";
    const client = new badgeforcejs.Client('http://127.0.0.1:8008', "e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275");
    // const version = new badgeforcejs.Templates.CredentialTemplateVersion(1, 0, 0);
    // const template = new badgeforcejs.Templates.CredentialTemplate(client.signer, "Khalil Template", "Just a test lil fella.", "Test", version);
    // client 
    //   .templates
    //   .create(template)
    //   .submitNextBatch()
    //   .then(console.log)
    //   .catch(console.log);
    // client 
    //   .getTemplatesByIssuer(pub)
    //   .then(templates => {
    //     templates.forEach(t => console.log(t.toObject()));
    //   })
    //   .catch(console.log);
    client
        .getTemplateByName("Khalil Template")
        .then(t => {
        console.log(t);
    })
        .catch(console.log);
}
catch (error) {
    console.log(error);
}
// const delimiter = `${chalk     .bold     .blue('BadgeForcejs CLI')} ${emoji
// .get('zap')}`; const badgeforce_cli = Vorpal()     .delimiter(delimiter)
// .use(require('./templates_commands')) badgeforce_cli     .show()
// .parse(process.argv); const spinner = new Ora({text: 'Loading unicorns',
// spinner: "arc"}).start(); spinner.color = 'yellow'; spinner.text = 'Loading
// rainbows'; setTimeout(() => {     spinner.color = 'yellow';     spinner.text
// = 'Loading rainbows'; }, 3000); setTimeout(() => {     spinner.succeed(); },
// 2000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NsaS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQzdCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUNuQyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsTUFBTSxFQUNKLFlBQVksRUFDYixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBR25DLElBQUk7SUFDRixNQUFNLEdBQUcsR0FBRyxvRUFBb0UsQ0FBQztJQUNqRixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQzVELGtFQUFrRSxDQUFDLENBQUM7SUFDdEUsaUZBQWlGO0lBQ2pGLCtJQUErSTtJQUMvSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUV6QixVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6Qix5REFBeUQ7SUFDekQsT0FBTztJQUNQLHlCQUF5QjtJQUV6QixNQUFNO1NBQ0gsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7U0FDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBRXZCO0FBQUMsT0FBTyxLQUFLLEVBQUU7SUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0NBQ25CO0FBRUQsOEVBQThFO0FBQzlFLDJFQUEyRTtBQUMzRSxtRUFBbUU7QUFDbkUsMkVBQTJFO0FBQzNFLDhFQUE4RTtBQUM5RSwrRUFBK0U7QUFDL0UsK0VBQStFO0FBQy9FLFNBQVMifQ==