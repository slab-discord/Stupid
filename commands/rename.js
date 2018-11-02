let Discord = require('discord.js');
let settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
if(message.author.id !== settings.myid) return;
bot.user.setUsername(args.join(" "));
message.channel.send(`I have been renamed to: ${args.join(" ")});
} 
