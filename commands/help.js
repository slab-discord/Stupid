const Discord = require('discord.js');
const settings = require('./jsons/settings.json')

exports.run = (bot, message, args, tools) => {
let help = new Discord.RichEmbed()
.setTitle('Help Page')
.setColor('#FFA500')
.setDescription('**Util Commands**\n\n**;serverinfo** - Shows info about the server.\n**;userinfo** - Shows info about you or another person\n**;botinfo** - Info about me\n**;kick** - Kick a user\n\n**Role commands**\n\n**;role** - Custom roles. Role name must start with • and be below the bots role\n**;color** - Colored roles. Role name must start with # and be below the the bots role\n\n**Fun Commands**\n\n**;cat** - Random cat\n**;gay** - Call someone gay\n**;retarded** - Call someone retarded\n**;say** - Make me say stuff\n**;yomama** - Yo mama joke\n**;8ball** - Magic 8 ball')
.setFooter('The help command is being redone and all commands may not be shown.');
message.author.send({embed: help});
message.channel.send('📬 Dms.');
return;
}
