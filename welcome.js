module.exports = (client) => {
    const channelId = "812913855063654400";
    const rulesChannel = "794530943171952650";
    client.on("guildMemberAdd", (member) => {
      console.log(member);
  
      const message = `Welcome <@${member.id}> to our server! Be sure to check out our ${member.guild.channels.cache
        .get(rulesChannel)}`;
  
      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    });
  };