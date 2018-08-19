const Discord = require('discord.js');
const settings = require('./jsons/settings.json')
const stuff = require('./jsons/stuff.json')

exports.run = (bot, message, args, tools) => {
let answers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];

let result = Math.floor((Math.random() * answers.length) + 0);
message.channel.send(answers[result]);
}
