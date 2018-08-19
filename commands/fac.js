const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = async (bot, message, args, tools) => {
let facs = message.guild.roles.filter(role => role.name.startsWith('⚔'));
if(facs.size < 1) return message.channel.send(new Discord.RichEmbed()
.setTitle('No Factions')
.setDescription('This server has no factions.')
.setColor([255, 0, 0]));

let str = args.join(" ");
let role = facs.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());

if(!str) return message.channel.send(new Discord.RichEmbed()
.setTitle('Factions')
.setDescription(facs.array().join("\n"))
.setColor('#FFA500')
.setFooter('Ex: sb;fac join Rebels'));
if(!role) return message.channel.send(new Discord.RichEmbed()
.setTitle('Role doesnt exist')
.setDescription(str + ' doesnt exist.')
.setColor([255, 0, 0]));

try {
await message.member.removeRoles(facs);
await message.member.addRole(role);
message.channel.send(new Discord.RichEmbed()
.setTitle('Role Added')
.setDescription('You have joined the faction ' + role)
.setColor('#FFA500'));
} catch(e) {
message.channel.send(e.message);
}
}