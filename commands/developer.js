module.exports = {
    name: 'developer',
    description: "this is a developer list command",
    category: "dev stuff",
    execute(message, args){
        message.channel.send(`DoMikus Pizza version 1.4.1\nDeveloped by *picaro#6845, Diamond's Den#4004, PGP#6024*\nuse -github to view DoMikus GitHub Repository\ntype gh repo clone picaro777/DoMikuPizza in terminal to clone the repository\ndownload here --> https://github.com/picaro777/DoMikuPizza/archive/refs/heads/main.zip`)
    },
};