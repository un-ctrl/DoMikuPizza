module.exports = {
    name: 'xmasdays',
    description: "sends days til xmas",
    category: "info",
    execute(message, args){
        message.channel.send('Days until christmas: 19')
    },
};