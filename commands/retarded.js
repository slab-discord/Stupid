const Discord = require('discord.js')
const settings = require('./settings.json');

exports.run = (bot, message, args, tools) => {
let retard = message.mentions.users.first();
if(!retard) return message.channel.send(message.guild.members.random().user.username + ' is retarded');
message.delete();
message.channel.send(retard + ' ur retarded');
}