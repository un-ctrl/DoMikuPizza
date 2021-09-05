module.exports = {
    name: 'miku',
    description: "sends crypton url",
    category: "funny",
    execute(message, args){
        message.channel.send('https://ec.crypton.co.jp/pages/prod/virtualsinger/cv01_us')
    },
};