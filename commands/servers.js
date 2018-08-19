const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
let author = message.author.id;
let servern = bot.guilds.map(guild => guild.name);
let servero = bot.guilds.map(guild => guild.owner.user.tag);
let embed = new Discord.RichEmbed()
.setTitle(`Server Names (${bot.guilds.size})`)
.setDescription(servern)
.setColor('#FFA500');
bot.users.get(author).send({embed: embed});
let embed2 = new Discord.RichEmbed()
.setTitle(`Server Owners (${bot.guilds.size})`)
.setDescription(servero)
.setColor('#FFA500');
bot.users.get(author).send({embed: embed2});
message.channel.send('I sent the list in your dms to avoid spam.');
}