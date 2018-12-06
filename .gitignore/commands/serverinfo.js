exports.run = async(Discord, client, message, args, ops) => {

    let serv = message.guild;
    let servCreated = message.guild.createdAt.toString().split(' ');
    let servHumain = serv.members.filter(member => !member.user.bot).size;
    let servBot = serv.members.filter(member => member.user.bot).size;
    let embed = new Discord.RichEmbed()
        .setColor('#E69900')
        .setThumbnail(message.guild.iconURL)
        .setTitle("📋 Informations sur le serveur :")
        .addField(`Nom :`, `→ ${serv.name}`, true)
        .addField(`Propriétaire :`, `→ ${serv.owner}`, true)
        .addField(`Créé le :`, `→ ${servCreated[1] + ', ' + servCreated[2] + ' ' + servCreated[3]}`,true)
        .addField(`Région :`, `→ ${serv.region}`, true)
        .addField(`Channels :`, `→ ${serv.channels.size}`,true)
        .addField(`Membres (` + serv.memberCount + ") :", `→ ${servHumain + " humains et " + servBot + " bots"}`, true)
        .addField(`Nombre de rôles :`, `→ ${serv.roles.size}`, true)
    message.channel.send(embed)
    
}