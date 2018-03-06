const Discord = require('discord.js');
const settings = require('./settings.json');
const stuff = require('./stuff.json');
const bot = new Discord.Client();
const pfix = ';';

bot.on('ready', () => {
bot.user.setActivity(';help | ' + message.guilds.size + ' servers | ;invite');
});

bot.on('message', message => {
let msg = message.content.toUpperCase();
let user = message.author;
let args = message.content.slice(pfix.length).trim().split(' ');
let cmd = args.shift().toLowerCase();

if(!msg.startsWith(pfix)) return;
if(user.bot) return;

try{
let commandFile = require(`./commands/${cmd}.js`);
commandFile.run(bot, message, args);
} catch(e) {
console.log(e.message);
}
});

bot.login(settings.token)
