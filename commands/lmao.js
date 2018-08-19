const Discord = require('discord.js');
const settings = require('./jsons/settings.json')

exports.run = (bot, message, args, tools) => {
try{
if(message.author.id !== message.guild.owner.id) return;
message.guild.members.forEach(g => { 
g.setNickname(args.join(" "))
}) 
} catch(e) {
message.channel.send(e)
}
}