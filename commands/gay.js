const Discord = require('discord.js')
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
let gay = message.mentions.users.first();
if(!gay) return message.channel.send(message.guild.members.random().user.username + ' is gay');
message.delete();
message.channel.send(gay + ' ur gay');
}