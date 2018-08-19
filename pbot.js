const Discord = require('discord.js');
const settings = require('./commands/jsons/settings.json');
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
                  'Authorization': process.env.dbtok,
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Content-Length': Buffer.byteLength(data)
          }
    });
    req.write(data);
    req.end();
    console.log(`Updated DBL Server Count: ${bot.guilds.size}`);
};
bot.on("ready", () => {
  console.log('[Stupid] Stupidbot running on version ' + settings.version);
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
bot.on("ready", update);
bot.on("guildCreate", update);
bot.on("guildDelete", update);
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
    console.log(e.message);
  }
});

bot.login(process.env.token)
