const Discord = require('discord.js');
const snek = require("snekfetch");
const fs = require('fs');
const settings = require('./commands/jsons/settings.json');
const bot = new Discord.Client();
const pfix = 'SB;';
const { stringify } = require('querystring');
const { request } = require('https');
const DisBots = require('discordbots.tk');
const DisBotsClient = new DisBots(process.env.dbtoken);
const DiscordBoats = require('dboats-api');
const boats = new DiscordBoats({token: process.env.dbatoken});
   
bot.on("ready", () => {
console.log('[Stupid] Stupidbot running on version 1.0.0');
bot.channels.get('487443729049714688').send('Stupid was restarted, back up now'); //work damn you
bot.user.setActivity(`${bot.guilds.size} servers | sb;help`, {type: "LISTENING"});
});
bot.on("guildCreate", guild => { 
bot.user.setActivity(`${bot.guilds.size} servers | sb;help`, {type: "LISTENING"});
bot.channels.get('487443783538049026').send(new Discord.RichEmbed()
.setAuthor(`Owner: ${guild.owner.user.tag} | ${guild.owner.user.id}`)                                    
.setTitle(`New Server: ${guild.name} | ${guild.id}`)
.setDescription(`Now in ${bot.guilds.size} servers`)
.setColor('RANDOM'));
post();
});
bot.on("guildDelete", guild => { 
bot.user.setActivity(`${bot.guilds.size} servers | sb;help`, {type: "LISTENING"});
bot.channels.get('487443783538049026').send(new Discord.RichEmbed()
.setTitle(`Left a Server: ${guild.name} | ${guild.id}`)
.setDescription(`Now in ${bot.guilds.size} servers`)
.setColor('RANDOM'));
post();
});

bot.on('message', message => {
if(settings.gbl.includes(message.guild.id)) return;
let msg = message.content.toUpperCase();
let user = message.author; //ive never used this rip
let args = message.content.slice(pfix.length).trim().split(' ');
let cmd = args.shift().toLowerCase();
if (!msg.startsWith(pfix)) return;
if(user.bot) return;

try{
let commandFile = require(`./commands/${cmd}.js`);
commandFile.run(bot, message, args);
} catch(e) {
bot.channels.get('487443686662340608').send(new Discord.RichEmbed()
.setTitle(`Server: ${message.guild.name}`)
.setAuthor(message.author.tag)                                    
.setDescription(e.message)
.setColor([255, 0, 0]));
if(message.guild.id == '264445053596991498') return; 
 let err = new Discord.RichEmbed()
.setTitle('Error')
.setDescription('```' + e.message + '```')
.setColor([255, 0, 0]);
message.channel.send({embed: err});
                                           
}
});
function post() {
DisBotsClient.postServerCount(bot.guilds.size);
boats.postGuilds(bot.guilds.size);
bot.channels.get('516020084561674259').send(new Discord.RichEmbed()
                          .setTitle('Updated server counts')
                          .setDescription('Updated the server counts to ' + bot.guilds.size + ' servers.'));
}

bot.login(process.env.token)
