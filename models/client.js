const { Client, Collection } = require('discord.js')
const fs = require("fs")

class Banmoi extends Client {

    commands = new Collection();
    aliases = new Collection();
    categories = fs.readdirSync("./commands/");
    interactions = new Collection()
    slashCommands = new Collection();

    config = require('../config.json');
    get prefix() {
        return this.config.bot.PREFIX
    }
    get token() {
        return this.config.bot.DISCORD_TOKEN
    }
    get ownerid() {
        return this.config.bot.OWNERID
    }

    events = new Collection();
    snipes = new Map()
}

module.exports = {
    Banmoi
}