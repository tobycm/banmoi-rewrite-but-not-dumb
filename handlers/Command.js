const { MissingArguments, OwnerOnly, UserMissingPerms, BotMissingPerms } = require("../models/errors");

async function execute_command(message) {
    
    if (!message.member) message.member = await message.guild.fetchMember(message);

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length == 0) return;
    let command = banmoi.commands.get(cmd);
    if (!command) command = banmoi.commands.get(banmoi.aliases.get(cmd));

    if (command.ownerOnly) {
        if(!banmoi.ownerid.includes(message.author.id)) throw OwnerOnly(message)
    }

    if (command.args === true) {
        if (args === []) throw MissingArguments(message);
    }

    if (!message.member.permissions.has(command.userPerms)) throw UserMissingPerms(message, command.userPerms)

    if (!message.guild.me.permissions.has(command.clientPerms)) throw BotMissingPerms(message, command.clientPerms)

    try {
        command.run(message, args)
    }
    catch (error) {
        console.log(error)
        // lmeo lỗi code kìa haha
        // no need anticrash.js anymore
    }
}

module.exports = {
    execute_command
}