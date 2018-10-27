const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
if(args.join(" ") == null) return message.channel.send('Request not sent. Dont request a blank message.');
if(args.join(" ") == '_ _') return;

let rchan = bot.channels.get('490293516426280971');
rchan.send(new Discord.RichEmbed()
.setTitle('New Request')
.setDescription(message.author.tag + ' requested:**\n\n```' + args.join(" ") + '\n```'));
message.channel.send((new Discord.RichEmbed()
.setTitle('Requested')
.setDescription('Requested:**\n\n```' + args.join(" ") + '\n```'));



}