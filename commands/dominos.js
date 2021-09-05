module.exports = {
    name: 'dominos',
    description: "sends dominos url",
    category: "funny",
    execute(message, args){
        message.channel.send('https://www.dominos.com/')
    },
};