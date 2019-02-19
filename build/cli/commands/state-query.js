const validator = require("./validation");
const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const moment = require('moment');
const prettyjson = require('prettyjson');
const { badgeforcejs } = require('../../index');
const cache = require('memory-cache');
const errors = require('./errors');
const queryTemplates = async function (args, callback) {
    const client = cache.get('bf_client');
    const { address } = args;
    try {
        const results = await client.stateQuery(address);
        const templates = results.toTemplates();
        if (templates.length === 0) {
            const err = errors.STATE_QUERY_NO_DATA(address);
            this.log(err);
            callback();
        }
        results.toTemplates().forEach(t => {
            const result = badgeforcejs.Verifier.verifyTemplate(t, t.getData().getIssuerPub());
            const verificationRes = `Verification Result: ${result.ok ? chalk.green("valid") : `invalid: ${chalk.red(result.error)}`}`;
            const output = {
                'template': badgeforcejs.Templates.CredentialTemplate.toJSON(t),
                'verification': verificationRes
            };
            this.log(prettyjson.render(output));
        });
    }
    catch (e) {
        const err = errors.STATE_QUERY_ERR(address, e);
        this.log(err);
        callback();
    }
};
module.exports = function (vorpal, options) {
    vorpal
        .command('state-query templates <address>')
        // .option('-i, --issuer <query-by-issuer-pub>',
        //   `When this option is set, a query will be made by the given issuer public key`
        // )
        // .types({
        //   string: ['i', 'issuer']
        // })
        .description(`Query templates on chain and view their data`)
        .validate(validator.clientConfigured)
        .action(queryTemplates);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtcXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpL2NvbW1hbmRzL3N0YXRlLXF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMxQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQzdCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNoRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5DLE1BQU0sY0FBYyxHQUFHLEtBQUssV0FBVSxJQUFJLEVBQUUsUUFBUTtJQUNsRCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDekIsSUFBSTtRQUNGLE1BQU0sT0FBTyxHQUFHLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFeEMsSUFBRyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLFFBQVEsRUFBRSxDQUFDO1NBQ1o7UUFFRCxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztZQUNuRixNQUFNLGVBQWUsR0FBRyx3QkFBd0IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDLENBQUMsWUFBWSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFMUgsTUFBTSxNQUFNLEdBQUc7Z0JBQ2IsVUFBVSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0QsY0FBYyxFQUFFLGVBQWU7YUFDaEMsQ0FBQztZQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0tBRUo7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxRQUFRLEVBQUUsQ0FBQztLQUNaO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLE1BQU0sRUFBRSxPQUFPO0lBQ3hDLE1BQU07U0FDSCxPQUFPLENBQUMsaUNBQWlDLENBQUM7UUFDM0MsZ0RBQWdEO1FBQ2hELG1GQUFtRjtRQUNuRixJQUFJO1FBQ0osV0FBVztRQUNYLDRCQUE0QjtRQUM1QixLQUFLO1NBQ0osV0FBVyxDQUFDLDhDQUE4QyxDQUFDO1NBQzNELFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7U0FDcEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyJ9