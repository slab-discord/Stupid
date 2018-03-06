let Discord = require('discord.js');
let settings = require('./settings.json');

exports.run = (bot, message, args, tools) => {
if(!message.author.hasPermission('MANAGE_MESSAGES')) {
let noperm = new Discord.RuchEmbed()
.setTitle('Error')
.setDescription('You do not have perms to warn people. (`MANAGE MESSAGES`)')
.setColor([255, 0, 0]);
message.channel.send({embed: noperm});
return;
}
let wrnd = message.mentions.users.first();
if(!wrnd) {
let nousr = new Discord.RichEmbed()
.setTitle('Error')
.setDescription('Please ping a user to warn')
.setColor([255, 0, 0]);
message.channel.send({embed: nousr});
return;
}
let wrnChan = message.guilds.channels.find('name', 'warnings');
if(!wrnChan) {
message.guild.createChannel('warnings')
}
let warnd = new Discord.RichEmbed()
.addTitle('✅ Warned')
.setDescription(wrnd + ' has been warned for ' + args.join(' ').slice(21))
.setColor('#008000');
message.channel.send({embed: warnd});
let warnd2 = new Discord.RichEmbed()
.addTitle('✅ Warned')
.setDescription(wrnd + ' was warned bye ' + message.author.tag + ' for ' + args.join(' ').slice(21))
.setColor('#008000');
wrnChan.send({embed: warnd2});
}
