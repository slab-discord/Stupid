const Discord = require('discord.js');
const settings = require('./jsons/settings.json')
const stuff = require('./jsons/stuff.json')

exports.run = (bot, message, args, tools) => {
let jokes = stuff.yomama;
let result = Math.floor((Math.random() * jokes.length) + 0);
message.channel.send(jokes[result]);
}