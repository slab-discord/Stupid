let Discord = require('discord.js');
let settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
try {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new Discord.RichEmbed()
.setColor([255, 0, 0])
.setTitle('No perms')
.setDescription('You do not have perms to purge messages.'));
if(isNaN(args[0])) return message.channel.send(new Discord.RichEmbed()
.setColor([255, 0, 0])
.setTitle('Error')
.setDescription('You need to provide a number.(2, 3, 4...)'));
if(args[0] < '100') return message.channel.send(new Discord.RichEmbed()
.setColor([255, 0, 0])
.setTitle('Error')
.setDescription('Please provide a number between 2 and 100.'));
if(args[0] < '1') return message.channel.send(new Discord.RichEmbed()
.setColor([255, 0, 0])
.setTitle('Error')
.setDescription('Please provide a number between 2 and 100.'));
message.channel.bulkDelete(args[0]).then(message.channel.send(new Discord.RichEmbed()
.setColor('#008000')
.setTitle('Purged')
.setDescription('Successfully purged ' + args[0] + ' messages.'))).then(message.delete({ timeout: 5 }));
} catch (e) {
message.channel.send(new Discord.RichEmbed()
.setColor([255, 0, 0])
.setTitle('No perms')
.setDescription('I do not have perms to purge messages.'));
}
}
