//i coded this on a phone lol
const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.RichEmbed()
.setTitle('No Permission')
.setDescription('You do not have permission to ban members.')
.setColor([255, 0, 0]));
let banner = message.author;
let victim = message.mentions.members.first();
if(!victim) return message.channel.send(new Discord.RichEmbed()
.setTitle('No Victim')
.setDescription('You need to ping the victim.')
.setColor([255, 0, 0]));

if(victim.user.id == banner.id) return;
if(victim.user.id == bot.user.id) return;

if(!victim.bannable) return message.channel.send(new Discord.RichEmbed()
.setTitle('Ban Proof')
.setDescription(`${victim.user.tag} can't be banned. Check if my role is above them or if they have Administrator.`)
.setColor([255, 0, 0]));

try{
victim.ban();
message.channel.send(new Discord.RichEmbed()
.setTitle('Banned')
.setDescription(`${victim.user.tag} was banned.`)
.setColor('#FFA500'));
} catch(e) {
message.channel.send(e.message);
}
}
