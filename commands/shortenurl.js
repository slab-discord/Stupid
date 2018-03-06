const discord = require('discord.js');
const settings = require('./settings.json');
const shorten = require('isgd');

 

exports.run = (bot, message, args, tools) => {
if (!args[0]) return message.channel.send('Please do ;shortenurl <URL> [title]')

  if (!args[1]) {

   

    shorten.shorten(args[0], function(res) {
      if (res.startsWith('Error:')) return message.channel.send('**Please enter a valid URL**');
message.channel.send('**' + res + '**');

   

    })

   

  } else {    shorten.custom(args[0], args[1], function(res) {
if (res.startsWith('Error:')) return message.channel.send('**' +res +'**'); 
message.channel.send('**<' + res + '>**');
})
}
}
