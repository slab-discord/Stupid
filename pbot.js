const Discord = require('discord.js');
const snek = require("snekfetch");
const fs = require('fs')
const bot = new Discord.Client();
const pfix = 'SB;';
bot.on("ready", () => {
console.log('[Stupid] Stupidbot running on version 1.0.0');
bot.user.setActivity(`${bot.guilds.size} servers | sb;help`, {type: "LISTENING"});
});
bot.on("guildCreate", guild => { 
bot.user.setActivity(`${bot.guilds.size} servers | sb;help`, {type: "LISTENING"});
console.log("Joined a new guild: " + guild.name);
});
bot.on("guildDelete", guild => { 
bot.user.setActivity(`${bot.guilds.size} servers | sb;help`, {type: "LISTENING"});
console.log("Left a guild: " + guild.name);
});
//*/
bot.on('message', message => {
let msg = message.content.toUpperCase();
let user = message.author; //ive never used this rip
let args = message.content.slice(pfix.length).trim().split(' ');
let cmd = args.shift().toLowerCase();
if (!msg.startsWith(pfix)) return;
if(user.bot) return;

try{
let commandFile = require(`./commands/${cmd}.js`);
/*if(message.author.id != settings.myid) return message.channel.send('Working on the bot rn tbh');
*/
commandFile.run(bot, message, args);
} catch(e) {
if(message.guild.id == '264445053596991498') return console.log(e.message); //If dbl ever unmutes my bot so it wont get muted again
let err = new Discord.RichEmbed()
.setTitle('Error')
.setDescription('```' + e.message + '```')
.setColor([255, 0, 0]);
message.channel.send({embed: err});
bot.channels.get('481323063938383872').send(new Discord.RichEmbed()
.setTitle(`Server: ${message.guild.name}`)
.setAuthor(message.author.tag)                                    
.setDescription(e.message)
.setColor([255, 0, 0]));                                           
}
});

bot.login(process.env.token)
