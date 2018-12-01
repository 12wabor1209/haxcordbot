const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message) => {
  let duration = moment.duration(client.uptime).format(" D [G�n], H [Saat], m [Dakika], s [Saniye]");
  const botMsg = await message.reply('Hesapl�yorum. Bu i�lem biraz uzun s�rebilir...?');
  const embed = new Discord.RichEmbed()
    .setTitle("�statistiklerim")
    .addBlankField()
    .setColor("RANDOM")
    .addField("� Bellek Kullan�m�m:", `[${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB](https://discordapp.com/oauth2/authorize?client_id=486140168839888907&scope=bot&permissions=8)`, true)
    .addField("� �al��ma S�rem:", `[${duration}](https://discordapp.com/oauth2/authorize?client_id=486140168839888907&scope=bot&permissions=8)`, true)
    .addField("� Korudu�um", `[� Kullan�c�lar: ${client.users.size},\n� Sunucular: ${client.guilds.size},\n� Kanallar: ${client.channels.size}](https://discordapp.com/oauth2/authorize?client_id=486140168839888907&scope=bot&permissions=8)`, true)
    .addField("� Ana Pingim:", `[${Math.floor(client.ping)}](https://discordapp.com/oauth2/authorize?client_id=486140168839888907&scope=bot&permissions=8)`, true)
    .addField("� Mesaj Pingim:", `[${botMsg.createdTimestamp - message.createdTimestamp}](https://discordapp.com/oauth2/authorize?client_id=486140168839888907&scope=bot&permissions=8)`, true)
    .addField("� Discord.JS S�r�m�m:", `[v${Discord.version}](https://discordapp.com/oauth2/authorize?client_id=486140168839888907&scope=bot&permissions=8)`, true)
    .setFooter("G�venlik Bot")
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  botMsg.edit(embed);
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullan�mlar', 'botdurum', 'bd', 'stats', 'stat'],
  permLevel: 0
};

module.exports.help = {
  name: 'istatistik',
  description: 'Botun �statistiklerini G�sterir',
  usage: 'istatistik'
};