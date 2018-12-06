exports.run = async(Discord, client, message, args, ops) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("**⚠ Tu dois avoir la permission `ADMINISTRATOR`.**");
        message.guild.channels.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        })
            .then(() => {
                message.channel.send(`**✅ Le salon a bien été fermer, merci d'attendre qu'il soit réouvert.**`)
                })
                    .catch(error => {
                    console.log(error);
                    })

}