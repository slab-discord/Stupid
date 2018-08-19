const Discord = require('discord.js');
const settings = require('./jsons/settings.json')

exports.run = (bot, message, args, tools) => {
const {get} = require('snekfetch');
try {
get('http://aws.random.cat/meow').then(response => { 
message.channel.send(new Discord.RichEmbed()
.setTitle('Meow!')
.setImage(response.body.file)
.setFooter('Meow')
.setColor('#FFA500'))
})
} catch (e) {
console.log(e);
}
}