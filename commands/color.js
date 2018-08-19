const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = async (bot, message, args, tools) => {
let colors = message.guild.roles.filter(role => role.name.startsWith('#'));
if(colors.size < 1) return message.channel.send(new Discord.RichEmbed()
.setTitle('No Colors')
.setDescription('This server has no color roles')
.setColor([255, 0, 0]));

let str = args.join(" ");
let role = colors.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());

if(!str) return message.channel.send(new Discord.RichEmbed()
.setTitle('Colors')
.setDescription(colors.array().join("\n"))
.setColor('#FFA500')
.setFooter('Ex: sb;color orange'));
if(!role) return message.channel.send(new Discord.RichEmbed()
.setTitle('Role doesnt exist')
.setDescription(str + ' doesnt exist.')
.setColor([255, 0, 0]));

try {
await message.member.removeRoles(colors);
await message.member.addRole(role);
message.channel.send(new Discord.RichEmbed()
.setTitle('Role Added')
.setDescription('You now have the color ' + role)
.setColor('#FFA500'));
} catch(e) {
message.channel.send(e.message);
}
}