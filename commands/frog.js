module.exports = {
    name: 'frog',
    description: "sends froggy",
    category: "funny",
    execute(message, args){
        message.channel.send(':frog:')
    },
};