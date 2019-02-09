const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const emoji = require('node-emoji');
const Ora = require('ora');
const { badgeforcejs } = require('../../../build/main');
try {
    const client = new badgeforcejs.Client('http://127.0.0.1:8008', "e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275");
    const template = new badgeforcejs.Templates.CredentialTemplate("fdas", "fas", "v1", JSON.stringify({
        'h': 'w'
    }));
    client
        .templates
        .create(template)
        .submitNextBatch()
        .then(console.log)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NsaS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQzdCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUNuQyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsTUFBTSxFQUNKLFlBQVksRUFDYixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRW5DLElBQUk7SUFDRixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQzVELGtFQUFrRSxDQUFDLENBQUM7SUFDdEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUM1RCxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xDLEdBQUcsRUFBRSxHQUFHO0tBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDTixNQUFNO1NBQ0gsU0FBUztTQUNULE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDaEIsZUFBZSxFQUFFO1NBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDdkI7QUFBQyxPQUFPLEtBQUssRUFBRTtJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7Q0FDbkI7QUFFRCw4RUFBOEU7QUFDOUUsMkVBQTJFO0FBQzNFLG1FQUFtRTtBQUNuRSwyRUFBMkU7QUFDM0UsOEVBQThFO0FBQzlFLCtFQUErRTtBQUMvRSwrRUFBK0U7QUFDL0UsU0FBUyJ9