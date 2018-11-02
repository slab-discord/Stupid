const Discord = require("discord.js");

exports.run = async (bot, message, args, tools) => {
 
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
    if (!bUser) return message.channel.send("Please say a user to ban")
    let breason = args.join(" ").slice(22);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don\'t have permission to ban someone. (Ban Members)");
    if (!buser.bannable) return message.channel.send("That person cannot be banned");

    message.channel.send(new Discord.RichEmbed()
        .setDescription(`Banned ${bUser.tag} for ${breason}`)
        .setColor("#FFA500"));
    message.guild.member(bUser).ban(breason);

}
