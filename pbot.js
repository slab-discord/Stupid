const Discord = require('discord.js');
const settings = require('./settings.json');
const snek = require("snekfetch");
const bot = new Discord.Client();
const pfix = ';';

bot.on('ready', () => {
console.log('[Pickle] Picklebot running on version ' + settings.version);
bot.user.setActivity(';help | ' + bot.guilds.size + ' servers | ;invite');
});
bot.on('disconnect', function(erMsg, code) { 
console.log('----- Bot disconnected from Discord with code', code, 'for reason:', erMsg, '-----'); 
bot.connect(); 
});
process.on('unhandledRejection', err => {
console.log(`Uncaught Promise Error: \n${err.stack}`);
});
process.on('uncaughtException', err => {
let errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, 'g'), './');
console.log(`Uncaught Exception: \n${errorMsg}`);
});
bot.on('message', message => {
let msg = message.content.toUpperCase();
let user = message.author;
let args = message.content.slice(pfix.length).trim().split(' ');
let cmdarg = message.content.slice(1);
let cmd = args.shift().toLowerCase();

if(!msg.startsWith(pfix)) return;
if(user.bot) return;

try{
let commandFile = require(`./commands/${cmd}.js`);
commandFile.run(bot, message, args);
} catch(e) {
let err = new Discord.RichEmbed()
.setTitle('Error')
.setDescription('```' + cmdarg + ' is not a command, you can request it tho with ;request```')
.setColor([255, 0, 0]);
message.channel.send({embed: err});
console.log(e.message);
}
});

bot.login(process.env.TOKEN)
