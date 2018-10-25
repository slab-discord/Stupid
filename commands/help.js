const Discord = require('discord.js');
const settings = require('./jsons/settings.json')

exports.run = (bot, message, args, tools) => {
  let help = new Discord.RichEmbed()
  .setTitle('Help Page')
  .setColor('#FFA500')
  .setDescription('**Util Commands**\n\n**sb;serverinfo** - Shows info about the server.\n**sb;userinfo** - Shows info about you or another person\n**sb;botinfo** - Info about me\n**sb;kick** - Kick a user.\n\n**Misc. Commands**\n\n**sb;invite** - Add me to your server.\n**sb;avatar** - My Avatar.\n**sb;myavatar** - Your avatar.\n**sb;sicon** - Server icon.\n\n**Role commands**\n\n**sb;role** - Custom roles. Role name must start with • and be below the bots role.\n**sb;color** - Colored roles. Role name must start with # and be below the the bots role.\n\n**Fun Commands**\n\n**sb;cat** - Random cat (has api cooldown).\n**sb;gay** - Call someone gay.\n**sb;retarded** - Call someone retarded.\n**sb;say** - Make me say stuff.\n**sb;yomama** - Yo mama joke.\n**sb;8ball** - Magic 8 ball.')
  .setFooter('The help command is being redone and all commands may not be shown.');
  message.channel.send({embed: help});
  if(!settings.ids.includes(message.author.id) return;
  message.channel.send(new Discord.RichEmbed()
    .setDescription('**Bot Admin Commands**\n\n**;eval** - Eval some code to test\n\nMore coming soon...')
    .setColor('#FFA500'));

}
