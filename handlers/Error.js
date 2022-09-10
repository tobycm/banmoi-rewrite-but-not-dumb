const { execute_command } = require("../handlers/Command");

async function error_handler() {
    try {
        await execute_command(message);
    }
    catch (error) {
        console.error(error.name)

        let error_mapping = {
            MissingArguments: "Lmeo thiếu argument kìa xd",
            OwnerOnly: "Chỉ dành cho owner bot xd",
            UserMissingPerms: `Bạn thiếu quyền ${error.missing_perms}`,
            BotMissingPerms: `Bot thiếu quyền ${error.missing_perms} lmao`
        }

        error.discord_message.channel.send(error_mapping[error])
    }
}

module.exports = {
    error_handler
}