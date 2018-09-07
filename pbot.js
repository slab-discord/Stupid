const Discord = require('discord.js');
const snek = require("snekfetch");
const fs = require('fs')
const bot = new Discord.Client();
const pfix = 'SB;';
const { stringify } = require('querystring');
const { request } = require('https');

const update = () => {
   const data = stringify({ server_count: bot.guilds.size });
   const req = request({
        host: 'discordbots.org',
        path: `/api/bots/${bot.user.id}/stats`,
        method: 'POST',
        headers: {
               'Authorization': process.env.dbltok,
               'Content-Type': 'application/x-www-form-urlencoded',
               'Content-Length': Buffer.byteLength(data)
        }
   });
   req.write(data);
   req.end();
   bot.channels.get('481594755638231051').send(new Discord.RichEmbed()
.setDescription(`Updated DBL Server Count: ${bot.guilds.size}`));
};
bot.on("ready", () => {
console.log('[Stupid] Stupidbot running on version 1.0.0');
bot.channels.get('487443729049714688').send('Stupid was restarted, back up now');
bot.user.setActivity(`${bot.guilds.size} servers | sb;help`, {type: "LISTENING"});
});
bot.on("guildCreate", guild => { 
bot.user.setActivity(`${bot.guilds.size} servers | sb;help`, {type: "LISTENING"});
bot.channels.get('487443783538049026').send(new Discord.RichEmbed()
.setTitle(`New Server: ${guild.name}`)
.setDescription(`Now in ${bot.guilds.size} servers`)
.setColor('RANDOM'));
});
bot.on("guildDelete", guild => { 
bot.user.setActivity(`${bot.guilds.size} servers | sb;help`, {type: "LISTENING"});
bot.channels.get('487443783538049026').send(new Discord.RichEmbed()
.setTitle(`Left a Server: ${guild.name}`)
.setDescription(`Now in ${bot.guilds.size} servers`)
.setColor('RANDOM'));
});
bot.on("guildCreate", update);
bot.on("guildDelete", update);

bot.on('message', message => {
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
if(message.guild.id == '264445053596991498') return bot.channels.get('487443686662340608').send(new Discord.RichEmbed()
.setTitle(`Server: ${message.guild.name}`)
.setAuthor(message.author.tag)                                    
.setDescription(e.message)
.setColor([255, 0, 0])); 
 let err = new Discord.RichEmbed()
.setTitle('Error')
.setDescription('```' + e.message + '```')
.setColor([255, 0, 0]);
message.channel.send({embed: err});
bot.channels.get('487443686662340608').send(new Discord.RichEmbed()
.setTitle(`Server: ${message.guild.name}`)
.setAuthor(message.author.tag)                                    
.setDescription(e.message)
.setColor([255, 0, 0]));                                           
}
});

bot.login(process.env.token)
