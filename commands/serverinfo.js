const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
let sinfo = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.setThumbnail(message.guild.iconURL)
.setColor('#FFA500')
.addField('Owner', message.guild.owner.user.tag)
.addField('Server ID', message.guild.id)
.addField('Members', message.guild.memberCount)
.addField('Humans', `${message.guild.members.filter(m => !m.user.bot).size} Total\n${message.guild.members.filter(m =>!m.user.bot && m.presence.status === 'online').size} Online\n${message.guild.members.filter(m => !m.user.bot && m.presence.status === 'idle').size} Idle\n${message.guild.members.filter(m => !m.user.bot && m.presence.status === 'dnd').size} Do Not Disturb\n${message.guild.members.filter(m => !m.user.bot && m.presence.status === 'offline').size} Offline/Invis`)
.addField('Bots', message.guild.members.filter(m => m.user.bot).size)
.addField('Roles (' + message.guild.roles.size + ')', message.guild.roles.map(r => r.name).slice(0, 25).join(' | ') + '...')
.setFooter('Requested by ' + message.author.tag);
message.channel.send({embed: sinfo});
return;
}
