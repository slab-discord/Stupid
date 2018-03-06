exports.run = (bot, message, args, tools) => {
async function purge() {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permission.');
message.delete();
if(isNaN(args[0])) return message.channel.send('Please specify a number.');
if(args[0] == '1') return message.channel.send('Please specify a number greator then 1 but less then 100');
if(args[0] < '100') return message.channel.send('Please specify a number greator then 1 but less then 101');
const fetched = await message.channel.fetchMessages({limit: args[0]});
message.channel.bulkDelete(fetched) 
}
purge();
}