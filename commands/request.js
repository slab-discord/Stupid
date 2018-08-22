const Discord = require('discord.js');
const settings = require('./jsons/settings.json')

exports.run = (bot, message, args, tools) => {
if(args[0] == null) return message.channel.send('❌ Request not sent. Dont request a blank message.');
bot.users.get('363474941523263518').send(message.author.username + ' (' + message.author.id + ') requested ' + args.join(" ") + ' in ' + message.guild.name);
let rq = new Discord.RichEmbed()
.setTitle('✅ Request Sent')
.setDescription('\n**Requested:**\n\n```' + args.join(" ") + '\n```');
message.channel.send({embed: rq});
return;
}
