const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
if(!settings.ids.includes(message.author.id) return;
bot.users.get(message.author.id).send(new Discord.RichEmbed()
.setTitle('Admin Help')
.setDescription('**Admin Commands**\n\n**;eval** - Eval some code to test\n\nMore coming soon...')
.setColor('#FFA500'));
}
