const discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
if(message.member.hasPermissions('BAN_MEMBERS') || message.member.hasPermissions('ADMINISTRATOR')) {

if(message.mentions.members.first()) {
if(message.member.user.id == message.mentions.members.first().id) {

message.channel.send(new discord.RichEmbed()
.setColor([255, 0, 0])
.setDescription('Why do you want to kick yourself?!?')
.setTitle('Really? Yourself?'));

} else {

if(message.mentions.members.first().id == bot.user.id) {
message.channel.send(new discord.RichEmbed()
.setColor([255, 0, 0])
.setDescription('Why do you wanna kick me ;-;')
.setTitle('NANI?!?'));

} else {

if(message.mentions.members.first().kickable) {
message.mentions.members.first().kick().then((member) => {

message.channel.send(new discord.RichEmbed()

.setColor([255, 0, 0])
.setTitle('Kicked')
.setDescription('Kicked ' + member.user.tag + ' successfully'));

                            });
} else {
message.channel.send(new discord.RichEmbed()
.setColor([255, 0, 0])
.setTitle('Error')
.setDescription('I don\'t seem to have perms to kick...'));
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
.setDescription('You dont have permission to kick people.')
.setColor([255, 0, 0]));
}
}
