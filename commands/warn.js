let Discord = require('discord.js');
let settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
if(!message.member.hasPermission('MANAGE_MESSAGES')) {
let noperm = new Discord.RichEmbed()
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
let wrnChan = message.guild.channels.find('name', 'warnings');
if(!wrnChan) {
message.guild.createChannel('warnings')
}
let warnd = new Discord.RichEmbed()
.setTitle('✅ Warned')
.setDescription('<@' + wrnd.id + '> has been warned for' + args.join(' ').slice(21))
.setColor('#008000');
message.channel.send({embed: warnd});
let warnd2 = new Discord.RichEmbed()
.setTitle('✅ Warned')
.setDescription('<@' + wrnd.id + '> was warned by <@' + message.author.id + '> for' + args.join(' ').slice(21))
.setColor('#008000');
wrnChan.send({embed: warnd2});
}
