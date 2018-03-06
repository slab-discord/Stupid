const Discord = require('discord.js');
const settings = require('./settings.json')

exports.run = (bot, message, args, tools) => {
let help = new Discord.RichEmbed()
.setTitle('Command List')
.setColor('#FFA500')
.setDescription('__Want more commands? do ;request <command and what it does>__ \n\n**Util**\n**;serverinfo** - Info about the server\n**;userinfo** - Info about you or another user\n**;botinfo** - Info about me\n**;purge** - Purge a number of messages between 2-100\n**;kick** - make me kick a user\n**;ban** - Make me ban a user \n\n**Fun**\n**;say** - Make me say stuff\n**;gay** - <mention> or make me call a random person gay\n**;retarded** - Make me call a random person retarded\n**;cat** - Random cat picture\n**;8ball** - Magic 8 ball\n**;yomama** - Yo mama joke')
.setFooter('Requested by ' + message.author.tag);
message.channel.send({embed: help});
return;
}