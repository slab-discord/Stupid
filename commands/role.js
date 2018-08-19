const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = async (bot, message, args, tools) => {
let croles = message.guild.roles.filter(role => role.name.startsWith('•'));
if(croles.size < 1) return message.channel.send(new Discord.RichEmbed()
.setTitle('No Roles')
.setDescription('This server has no custom roles')
.setColor([255, 0, 0]));

let str = args.join(" ").slice(4);
let rstr = args.join(" ").slice(7);
let role = croles.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());
let rrole = croles.find(role => role.name.slice(1).toLowerCase() === rstr.toLowerCase());

if(!args[0]) return message.channel.send(new Discord.RichEmbed()
.setTitle('Error')
.setDescription('Please use either add or remove. `sb;role add` or `sb;role remove`')
.setColor([255, 0, 0]));
if(args[0] == "remove") {
try {
if(!rstr) return;
if(!rrole) return message.channel.send(new Discord.RichEmbed()
.setTitle('Role doesnt exist')
.setDescription(rstr + ' doesnt exist.')
.setColor([255, 0, 0]));
if(!message.member.roles.has(rrole.id)) return message.channel.send(new Discord.RichEmbed()
.setTitle('You dont have that role')
.setDescription('You dont have role ' + rrole)
.setColor([255, 0, 0]));
await message.member.removeRole(rrole);
message.channel.send(new Discord.RichEmbed()
.setTitle('Removed')
.setDescription('Removed the role ' + rrole)
.setColor('#FFA500'));
}
catch (e) {
message.channel.send(e.message);
}
}
if(args[0] == "add") {
try {
if(!str) return message.channel.send(new Discord.RichEmbed()
.setTitle('Roles')
.setDescription(croles.array().join("\n"))
.setColor('#FFA500')
.setFooter('Ex: sb;role add Gamer'));
if(!role) return message.channel.send(new Discord.RichEmbed()
.setTitle('Role doesnt exist')
.setDescription(str + ' doesnt exist.')
.setColor([255, 0, 0]));
if(message.member.roles.has(role.id)) return message.channel.send(new Discord.RichEmbed()
.setTitle('You already have this role.')
.setDescription('You already have the role ' + role)
.setColor([255, 0, 0]));
await message.member.addRole(role);
message.channel.send(new Discord.RichEmbed()
.setTitle('Role Added')
.setDescription('You now have the custom role ' + role)
.setColor('#FFA500'));
} catch(e) {
message.channel.send(e.message);
}
}
}
