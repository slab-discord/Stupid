const discord = require('discord.js');
const settings = require('./jsons/settings.json');


exports.run = (bot, message, args, tools) => { 
if(message.author.id !== settings.myid) return;
if(!args[0]) return message.channel.send("You must provide a command name to reload.");
delete require.cache[require.resolve(`./${args[0]}.js`)]; 
message.channel.send('The command ' + args[0] + ' has been reloaded'); 
}