const discord = require('discord.js');
const settings = require('./settings.json');

exports.run = (bot, message, args, tools) => {
if(!message.member.hasPermission('BAN_MEMBERS')) {
let noperm = new Discord.RichEmbed()
.setTitle('No Perms')
.setDescription('You dont have the permission to ban members.')
.setColor([255, 0, 0]);
message.channel.send({embed: noperm});
return;
}
let member = message.mentions.users.first().id;
if(message.member.hasPermissions('BAN_MEMBERS') || message.member.hasPermissions('ADMINISTRATOR')) {

if(message.mentions.members.first()) {
if(message.member.user.id == message.mentions.members.first().id) {

message.channel.send(new discord.RichEmbed()
.setColor([255, 0, 0])
.setDescription('Why do you want to ban yourself?!?')
.setTitle('Really? Yourself?'));

} else {

if(message.mentions.members.first().id == bot.user.id) {
message.channel.send(new discord.RichEmbed()
.setColor([255, 0, 0])
.setDescription('Why do you wanna ban the pickle ;-;')
.setTitle('NANI?!?'));

} else {

if(message.mentions.members.first().banable) {
message.mentions.members.first().ban().then((member) => {

message.channel.send(new discord.RichEmbed()

.setColor([255, 0, 0])
.setTitle('Banned')
.setDescription('Banned ' + member.user.tag + ' successfully'));

                            });
} else {
message.channel.send(new discord.RichEmbed()
.setColor([255, 0, 0])
.setTitle('Error')
.setDescription('I don\'t seem to have perms to ban...'));
}
}
}
} else {
message.channel.send(new discord.RichEmbed()
.setColor([255, 0, 0])
.setDescription('Please specify a user!'));
}
} else {
message.channel.send(new discord.RichEmbed()
.setAuthor(message.member.user.username, message.member.user.displayAvatarURL)
.setTitle('Error')
.setDescription('You dont have permission to ban people.')
.setColor([255, 0, 0]));
}
}
