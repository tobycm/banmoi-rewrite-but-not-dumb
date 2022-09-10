const { execute_command } = require("../handlers/Command")

async function messageCreate(message) {
    if (message.author.bot) return;

    let banmoi = message.client;
    if (message.content.startsWith(banmoi.prefix)) await execute_command(message);
}

module.exports = {
    name: "messageCreate",
    func: messageCreate
}