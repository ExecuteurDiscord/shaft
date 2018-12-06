exports.run = async(Discord, client, message, args, ops) => {

    let embed = new Discord.RichEmbed()
        .setColor('#D50303')
        .setDescription('🏓 **Pong !** ' + client.ping + ' ms')
    message.channel.send(embed)
    
}