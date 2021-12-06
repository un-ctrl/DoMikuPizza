module.exports = {
    name: 'version',
    description: "sends version info",
    category: "info",
    execute(message, args){
        message.channel.send('DoMikus Pizza v1.8')
    },
};