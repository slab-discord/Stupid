const Discord = require('discord.js');
const settings = require('./jsons/settings.json');
//work now will ya
exports.run = (bot, message, args, tools) => {
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.RichEmbed()
                                                                            .setTitle('No Permission')
                                                                            .setDescription('You don\'t have permission to ban people. (`Ban Members`)')
                                                                            .setColor([255, 0, 0]));
let getbanned = message.mentions.users.first();
let hammerhasspoken = message.mentions.members.first();
  if(!getbanned.banable) return message.channel.send(new Discord.RichEmbed()
                                                  .setTitle('Admin/Higher Role')
                                                  .setDescription(`${getbanned.tag} isn't bannable because they are either admin or above my role.`)
                                                  .setColor([255, 0, 0]));
    try {  
  hammerhasspoken.ban().then(message.channel.send(new Discord.RichEmded()
                                                    .setTitle('Banned')
                                                    .setDiscription(`${hammerhasspoken.user.tag} has been banned.`)
                                                    .setColor('#FFA500')));
    } catch (e) {
      message.channel.send(e.message);
    }
}
