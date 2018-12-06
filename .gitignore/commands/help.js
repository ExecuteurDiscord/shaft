exports.run = async(Discord, client, message, args, ops) => {

    let embed = new Discord.RichEmbed()
        .setColor('#E69900')
        .setTitle("📬 Aide :")
        .setDescription("__**Commandes Basique :**__\n📬 **!help :** Affiche les commandes\n🏓 **!ping :** Voir la latence du bot en MS\n📋 **!serverinfo :** Affiche les statistiques du serveur\n\n__**Commandes Anti-Raid :**__\n🔎 **!verify :** Vérifier les membres du serveur\n🔰 **!raidmode (bientôt) :** Protège votre serveur lors d'un raid\n💼 **!checkID :** Vérifier une ID\n\n__**Liens :**__\n**[Serveur Support](https://discordapp.com)** (bientôt)\n**[Invite Bot](https://discordapp.com/oauth2/authorize?client_id=518223971888398341&scope=bot&permissions=8)**")
        .setTimestamp()
    message.channel.send(embed)
    
}