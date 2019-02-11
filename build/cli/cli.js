const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const emoji = require('node-emoji');
const delimiter = `${chalk.bold.blue('BadgeForcejs CLI')} ${emoji.get('zap')}`;
const badgeforce_cli = Vorpal()
    .delimiter(delimiter)
    .use(require('./commands/init'));
module.exports = badgeforce_cli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaS9jbGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztBQUM3QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7QUFFbkMsTUFBTSxTQUFTLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUMvRSxNQUFNLGNBQWMsR0FBRyxNQUFNLEVBQUU7S0FDNUIsU0FBUyxDQUFDLFNBQVMsQ0FBQztLQUNwQixHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUVuQyxNQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyJ9