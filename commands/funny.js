module.exports = {
    name: 'funny',
    description: "this is a funny command",
    category: "funny",
    execute(message, args){
        message.channel.send('-funny')
    },
};