const Discord = require('discord.js');
const settings = require('./settings.json');

exports.run = (bot, message, args, tools) => {
const used = process.memoryUsage().heapUsed / 1024 / 1024;
const cpu = process.cpuUsage().system / 1024 / 1024;
const moment = require('moment');
    require('moment-duration-format');
const duration = moment.duration(bot.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
let binfo = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.displayAvatarURL)
.setDescription('**Uptime:** ' + duration +
'\n**CPU:** ' + Math.round(cpu * 100) + ' | **Ram:** ' + (used).toFixed(2) + 'MB\n' +
bot.guilds.size + ' **Guilds** | ' +
bot.users.size + ' **Users**' + '\n**Version**: ' + Discord.version + ' | **Library**: [discord.js](https://discord.js.org/#/) \n**Developer:** ԵՏՄՌΔʍɿ#6498\n[Invite Me](https://discordapp.com/api/oauth2/authorize?client_id=405635474124832768&permissions=8&scope=bot) | [DBL](https://discordbots.org/bot/405635474124832768) | [Trash](https://discord.gg/dmCEYsp)')
.setThumbnail(bot.user.displayAvatarURL)
.setFooter('Pickle Bot v' + settings.version)
.setColor('#f44242');
message.channel.send({embed: binfo});
return;
}