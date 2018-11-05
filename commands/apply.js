const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot,  message, args, tools) => {
if(message.guild.id !== '480301269529919488') return;
if(message.channel.name !== 'apply') return message.channel.send('Please only apply in #apply.');
if(isNaN(args.join(" ").slice(0, 18))) return message.channel.send('Please provide your bots ID.');

try{
message.channel.send(new Discord.RichEmbed()
.setTitle('Bot Applied!')
.addField('Bot ID', args.join(" ").slice(0, 18))
.addField('Bot Prefix', args.join(" ").slice(19))
.setColor('#FFA500'));

bot.channels.get('508201552729866246').send(`<@${args.join(" ").slice(0, 18)}> has been applied by ${message.author}`); 
bot.channels.get('480300841123708939').send(`<https:\/\/discordapp.com/oauth2/authorize?client_id=${args.join(" ").slice(0, 18)}&permissions=8&scope=bot> @everyone`);
bot.channels.get('480300841123708939').send('Bot ID: ' + args.join(" ").slice(0, 18));
bot.channels.get('480300841123708939').send('Author ID: ' + messsage.author.id);

} catch(e) {
message.channel.send('Please provide your bots prefix.');
}

}
