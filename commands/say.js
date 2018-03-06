const Discord = require('discord.js');
const settings = require('./settings.json');

exports.run = (bot, message, args, tools) => {
message.delete()
message.channel.send(args.join(' '));
}