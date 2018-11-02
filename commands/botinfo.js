const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
const used = process.memoryUsage().heapUsed / 1024 / 1024;
const cpu = process.cpuUsage().system / 1024 / 1024; 
const usdcpu = Math.round(cpu * 100);
const moment = require('moment');
    require('moment-duration-format');
const duration = moment.duration(bot.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
let binfo = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.displayAvatarURL)
.setDescription(`**Uptime:** ${duration}\n**CPU:** ${usdcpu} | **Ram:** ${(used).toFixed(2)} MB\n${bot.guilds.size} **Servers** | ${bot.users.size} **Users**\n**Library:** [discord.js](https:/\/discord.js.org/#/) **Version:** ${Discord.version}\n**Developer: ${bot.users.get(settings.myid).tag}**\n[Invite Me](https:/\/discordapp.com/api/oauth2/authorize?client_id=405635474124832768&permissions=8&scope=bot) | [DBL](https:/\/discordbots.org/bot/405635474124832768) | [Trash](https:/\/discord.gg/5mpFZkU)`)
.setThumbnail(bot.user.displayAvatarURL)
.setFooter('Stupid Bot v' + settings.version)
.setColor('#f44242');
message.channel.send({embed: binfo});
return;
}
