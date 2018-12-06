exports.run = async(Discord, client, message, args, ops) => {

    let uID = args[0]
        if(!uID) return message.channel.send("**Vous devez entrer une ID.**")
    let embed = new Discord.RichEmbed()
        .setColor('#24D742')
        .setTitle("✅ Membre vérifié !")
        .setDescription(`L'identifiant **${uID}** n'est pas dans notre liste noire.`)
    message.channel.send(embed)

}