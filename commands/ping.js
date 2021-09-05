module.exports = {
    name: 'ping',
    description: "this is a ping command",
    category: "funny",
    execute(message, args){
        message.channel.send('pong')
    },
};