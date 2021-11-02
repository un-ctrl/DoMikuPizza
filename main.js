const Discord = require('discord.js');
const CommandHandler = require("wokcommands");
const client = new Discord.Client({
    partials: ["MESSAGE", "REACTION"],
});

const config = require("./config.json");
const welcome = require("./welcome");
const prefix = '-';

const fs = require('fs');
const WOKCommands = require('wokcommands');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on('ready', () => {
    new WOKCommands(client, {
        commandsDir: 'commands',
        showWarns: false,
    }).setMongoPath(process.env.MONGO_URI)
    .setDefaultPrefix("-");
    console.log('Domino pizza');
    client.user.setActivity('with dominos app', { type: "PLAYING" }).catch(console.error)

    welcome(client);

    new CommandHandler(client, { commandsDir: "commands" });

}); 
 
client.on('message', message =>{
    if(-message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command){
        case('ping'):
            client.commands.get('ping').execute(message, args);
            break;
        case('dominos'):
            client.commands.get('dominos').execute(message, args);
            break;
        case('miku'):
            client.commands.get('miku').execute(message, args);
            break;
        case('borgar'):
            client.commands.get('borgar').execute(message, args);
            break;
        case('version'):
            client.commands.get('version').execute(message, args);
            break;
        case('commands'):
            client.commands.get('commands').execute(message, args);
            break;
        case('troll'):
            client.commands.get('troll').execute(message, args);
            break;
        case('gegcoin'):
            client.commands.get('gegcoin').execute(message, args);
            break;
        case('nukes'):
            client.commands.get('nukes').execute(message, args);
            break;
        case('bot'):
            client.commands.get('bot').execute(message, args);
            break;
        case('tos'):
            client.commands.get('tos').execute(message, args);
            break;
        case('frog'):
            client.commands.get('frog').execute(message, args);
            break;
        case('coconut'):
            client.commands.get('coconut').execute(message, args);
            break;
        case('stork'):
            client.commands.get('stork').execute(message, args);
            break;
        case('pizza'):
            client.commands.get('pizza').execute(message, args);
            break;
        case('funkin'):
            client.commands.get('funkin').execute(message, args);
            break;
        case('death'):
            client.commands.get('death').execute(message, args);
            break;
        case('noid'):
            client.commands.get('noid').execute(message, args);
            break;
        case('makingpizza'):
            client.commands.get('makingpizza').execute(message, args);
            break;
        case('traitor'):
            client.commands.get('traitor').execute(message, args);
            break;
        case('jcommands'):
            client.commands.get('jcommands').execute(message, args);
            break;
        case('sad'):
            client.commands.get('sad').execute(message, args);
            break;
        case('nerv'):
            client.commands.get('nerv').execute(message, args);
            break;
        case('donate'):
            client.commands.get('donate').execute(message, args);
            break;
        case('github'):
            client.commands.get('github').execute(message, args);
            break;
        case('mikuiloveyou'):
            client.commands.get('mikuiloveyou').execute(message, args);
            break;
        case('developer'):
            client.commands.get('developer').execute(message, args);
            break;
        case('pipebomb'):
            client.commands.get('pipebomb').execute(message, args);
            break;
    }
});

client.on('message', async message => {
	if (message.content === '-fruits') {
		try {
			await message.react('🍎');
			await message.react('🍊');
			await message.react('🍇');
		} catch (error) {
			console.error('One of the emojis failed to react:', error);
		}
	}
});

client.once('ready', () => {
    console.log('Bot is online');
}); 

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    console.log(args);

    const command = args.shift().toLowerCase();

    if (command == 'giveany') {
        const role = args[1].slice(3, args[1].length - 1);
        client.commands.get('giveany').execute(message, args, role);
    }
});

client.login('token');

client.login(config.token);