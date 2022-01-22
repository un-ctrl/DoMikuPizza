module.exports = {
    name: 'sad',
    description: "sends sad",
    category: "funny",
    execute(message, args){
        message.channel.send('https://i.redd.it/neq2fzd6fh871.jpg')
        message.channel.send('https://i.redd.it/koete8nbgh871.jpg')
    },
};