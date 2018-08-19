const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
if(!message.member.hasPermission('BAN_MEMBERS') || !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.RichEmbed()
.setTitle('No perms')
.setDescription('You do not have permission to ban.')
.setColor([255, 0, 0]));
let buser = message.mentions.users.first();
if(!buser) return message.channel.send(new Discord.RichEmbed()
.setTitle('No user.')
.setDescription('Please ping a user to ban')
.setColor([255, 0, 0]));
if(buser.banable) {
message.mentions.members.first().ban().then((member) => {
message.channel.send(new Discord.RichEmbed()
.setTitle('Banned')
.setDescription(member.user.tag + ' was banned')
.setColor([255, 0, 0]));
});
} else {
message.channel.send(new Discord.RichEmbed()
.setTitle('Cant be banned')
.setDescription(buser.tag + ' cannot be banned')
.setColor([255, 0, 0]));
}
}