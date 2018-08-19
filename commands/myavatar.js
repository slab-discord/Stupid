const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
message.channel.send(new Discord.RichEmbed()
.setImage(message.author.displayAvatarURL));
}