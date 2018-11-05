const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
if(message.channel.id !== '480300841123708939') return;
if(isNaN(args.join(" ").slice(0, 18))) return message.channel.send('Please enter the bots id.');
if(!args.join(" ").slice(19)) return message.channel.send('Please enter the users id.');
if(isNaN(args.join(" ").slice(19))) return message.channel.send('Please enter the users id.');

message.channel.send('Bot Approved.')
bot.channels.get('508201552729866246').send(`<@${args.join(" ").slice(0, 18)}> by <@${args.join(" ").slice(19)}> was approved by ${message.author}!`);
}
