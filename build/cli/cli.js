const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const emoji = require('node-emoji');
const delimiter = `${chalk.bold.blue('BadgeForce Development Console')} ${emoji.get('zap')}`;
const badgeforce_cli = Vorpal()
    .delimiter(delimiter)
    .use(require('./commands/init'))
    .use(require('./commands/state-query'))
    .use(require('./commands/templates'));
module.exports = badgeforce_cli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaS9jbGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztBQUM3QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFcEMsTUFBTSxTQUFTLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUM3RixNQUFNLGNBQWMsR0FBRyxNQUFNLEVBQUU7S0FDNUIsU0FBUyxDQUFDLFNBQVMsQ0FBQztLQUNwQixHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDL0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQ3RDLEdBQUcsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0FBRXhDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDIn0=