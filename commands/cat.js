const Discord = require('discord.js');
const settings = require('./settings.json')

exports.run = (bot, message, args, tools) => {
const {get} = require('snekfetch');
try {
get('https://random.cat/meow').then(response => {
message.channel.send({files: [{attachment: response.body.file, name: `MeowMeowBitch.${response.body.file.split('.')[2]}`}]});
})
} catch (e) {
console.log(e);
}
}