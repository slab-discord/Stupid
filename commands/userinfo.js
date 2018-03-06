const Discord = require('discord.js');
const settings = require('./settings.json');

exports.run = (bot, message, args, tools) => {
let user = message.author;
let puser = message.mentions.users.first();
if(!puser) {
let uinfo = new Discord.RichEmbed()
.setAuthor(user.tag, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.setColor('#FFA500')
.addField('ID', user.id)
.addField('Status', user.presence.status)
.addField('Activity', user.presence.game ? user.presence.game.name : 'None')
.addField('Created At', user.createdAt)
.addField('Joined At', message.member.joinedAt)
.addField('Roles', message.member.roles.map(r => r.name).slice(0, 25).join(' |️ '));
message.channel.send({embed: uinfo});
return;
}
let muser = new Discord.RichEmbed()
.setAuthor(puser.tag, puser.displayAvatarURL)
.setThumbnail(puser.displayAvatarURL)
.setColor('#FFA500')
.addField('ID', puser.id)
.addField('Status', puser.presence.status)
.addField('Activity', puser.presence.game ? puser.presence.game.name : 'None')
.addField('Created At', puser.createdAt);
message.channel.send({embed: muser});
return;
}
