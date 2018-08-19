const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
message.channel.send(new Discord.RichEmbed()
.setTitle('Invite')
.setDescription('[Invite Me](https://discordapp.com/api/oauth2/authorize?client_id=405635474124832768&permissions=8&scope=bot)')
.setColor('#FFA500'));
}