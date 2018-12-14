module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**Vous devez être administrateur.**");
    if(args[0] == "help"){
      message.reply("Usage: :kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return error.UnknownU(message);
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Utilisateur invalide, veulliez réessayer.**");

    message.guild.member(kUser).kick(kReason);
    message.channel.send(`**${kUser} a été kick du serveur !**`);
}
