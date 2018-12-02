const Discord = require('discord.js');
const settings = require('/.jsons/settings,json');

exports.run = (bot, message, args, tools) => {
  if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.RichEmbed()
                                                                                .setTitle('No permission')
                                                                                .setDescription('You don\'t have permission to kick members.')
                                                                                .setColor([255, 0, 0]));
  let kicker = message.author;
  let victim = message.mentions.users.first();
   if(kicker.id == victim.id) return;
   if(bot.user.id == victim.id) return;
   if(!victim) return message.channel.send(new Discord.RichEmbed()
                                          .setTitle('Ping someone')
                                          .setDescription('I can\'t kick air. Ping someone.')
                                          .setColor([255, 0, 0]));
   if(!message.guild.member(victim).kickable) return message.channel.send(new Discord.RichEmbed()
                                          .setTitle('Unkickable')
                                          .setDescription(`${victim.tag} is unkickable. Check if my role is higher then them or if i have permission.`)
                                          .setColor([255, 0, 0]));
try{
  message.guild.member(victim).kick();
  message.channel.send(new Discord.RichEmbed()
                                          .setTitle('Kicked')
                                          .setDescription(`${victim.tag} has been kicked.`)
                                          .setColor('#FFA500'));

} catch (e) {
 message.channel.send(e.message);
}
             
                                                
                                                                                           
}
