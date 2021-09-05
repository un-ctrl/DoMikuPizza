module.exports = {
    name: 'donate',
    description: "this is a donate command",
    category: "donate",
    execute(message, args){
        message.channel.send('https://paypal.me/7picaro7?locale.x=en_AU')
    },
};