exports.run = async(Discord, bot, message, args) => {

    let msgping1 = new Date();
    let botping = new Date() - message.createdAt;
    let msgping2 = new Date() - msgping1;

    let embed = new Discord.RichEmbed()
        .setColor("#E69900")
        .setTitle("🏓 **Pong !**")
        .addField('API Ping : ', Math.floor(bot.ping) + 'ms', true)
        .addField('Bot Ping : ', Math.floor(botping) + 'ms', true)
        .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms', true)
        .setTimestamp()
    message.channel.send(embed);

}
