let Discord = require('discord.js');
let settings = require('./settings.json');

exports.run = (bot, message, args, tools) => {
if(message.author.id !== settings.myid) return;
bot.user.setUsername(args[0]);
message.channel.send('I have been renamed!');
} 
