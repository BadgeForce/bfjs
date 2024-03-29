const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const CLIENT_INIT_ERROR = chalk.red(`You have not configured the host URI or Private key
used for signing. Use the 'configure' command to setup your configuration.`);
const STATE_QUERY_NO_DATA = (address) => {
    return chalk.red(`No data found at state address ${address}`);
};
const STATE_QUERY_ERR = (address, err) => {
    return chalk.red(`Error fetching state at state address ${address}: ${err}`);
};
const toError = function (error) {
    return chalk.red(error);
};
module.exports = {
    CLIENT_INIT_ERROR,
    STATE_QUERY_NO_DATA,
    STATE_QUERY_ERR,
    toError,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaS9jb21tYW5kcy9lcnJvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztBQUU3QixNQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7MkVBQ3VDLENBQUMsQ0FBQztBQUU3RSxNQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7SUFDdEMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3ZDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsT0FBTyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDL0UsQ0FBQyxDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsVUFBUyxLQUFLO0lBQzVCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsT0FBTztDQUNSLENBQUMifQ==