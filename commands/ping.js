const Discord = require("discord.js");

module.exports.run = async (bot, message, args, tools) => {
const m = await message.channel.send("Ping");

let E = new Discord.RichEmbed()
.setTitle("Pong! :stopwatch:")
.addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`)
.addField("API Latency", `${Math.round(bot.ping)}ms`)

message.channel.send(E)

  }
