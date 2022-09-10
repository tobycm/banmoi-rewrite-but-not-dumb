class CommandError {
    constructor(discord_message) {
        this.discord_message = discord_message
        this._name = "CommandError"
    }

    getname() {
        return this._name
    }
}

class MissingArguments extends CommandError {
    constructor(discord_message) {
        super(discord_message)
        this._name = "MissingArguments"
    }
}

class OwnerOnly extends CommandError {
    constructor(discord_message) {
        super(discord_message)
        this._name = "OwnerOnly"
    }
}

class MissingPerms extends CommandError {
    constructor(discord_message, missing_perms) {
        super(discord_message)
        this._missing_perms = missing_perms
        this._name = "MissingPerms"
    }

    getmissing_perms() {
        return this._missing_perms
    }
}

class UserMissingPerms extends MissingPerms {
    constructor(discord_message, missing_perms) {
        super(discord_message, missing_perms)
        this._name = "UserMissingPerms"
    }
}

class BotMissingPerms extends MissingPerms {
    constructor(discord_message, missing_perms) {
        super(discord_message, missing_perms)
        this._name = "BotMissingPerms"
    }
}

module.exports = {
    CommandError,
    MissingArguments,
    OwnerOnly,
    UserMissingPerms,
    BotMissingPerms
}