module.exports = {
    name: 'commands',
    description: "sends list of commands",
    category: "funny",
    execute(message, args){
        message.channel.send(' **__DoMikus Pizza commands__**\n```ini\n[\n-dominos: dominos website\n-miku: sends crypton future media site\n-ping: pong\n-version: sends current version\n-bot: sends bot info\n-tos: terms of service\n-funkin: sends friday night funkin vs miku week download\n-jcommands: shows joke commands\n-donate: donate to me :)))))\n-github: GitHub Repository for the bot (aka dev stuff)]``` ')
    },
};