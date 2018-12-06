exports.run = async(Discord, client, message, args, ops) => {

    let embed = new Discord.RichEmbed()
        .setColor('#24D742')
        .setTitle("✅ Serveur vérifié !")
        .setDescription("Aucun membres du serveur ne fais parti de notre liste noir.\nNous vous conseillons de vérifier une fois par semaine.")
    message.channel.send(embed)
    
}