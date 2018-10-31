const Discord = require('discord.js');
const settings = require('./jsons/settings.json')

exports.run = (bot, message, args, tools) => {
if(!settings.ids.includes(message.author.id)) return message.channel.send('Only bot admins can direct request.');
if(args.join(" ") == null) return message.channel.send('Direct Request not sent. Dont request a blank message.');
if(args.join(" ") == "_ _") return message.channel.send('Direct Request not sent. Dont request a blank message.');
bot.users.get('363474941523263518').send(message.author.username + ' (' + message.author.id + ') requested ' + args.join(" ") + ' in ' + message.guild.name);
let rq = new Discord.RichEmbed()
.setTitle('Direct Request Sent')
.setDescription('\n**Requested:**\n\n' + args.join(" ") + '\n');
message.channel.send({embed: rq});
return;
}
