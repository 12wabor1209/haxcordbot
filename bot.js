const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

client.on('ready', () => {
  console.log(`Bot geldi ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleyküm selam');
  }
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
      msg.channel.sendMessage('Aleyküm selam');
  }
  if (msg.content.toLowerCase() === 'haxcord') {
      msg.channel.sendMessage('HaxCord, Haksızlıktan doğan bir oyun platformudur. Yaklaşık 7 ay gibi bir süredir aktif bulunmaktadır. İlgili yönetim ekibi ve aile ortamı vardır. v4 lig maçlarını Twitch üzerinden canlı yayınlayıp anlık üyelerine aktarır. Çeşitli turnuvalar düzenleyip eğlenceli bir ortam yaratılır.');
  }
  if (msg.content.toLowerCase() === 's.a') {
    msg.channel.sendMessage('Aleyküm selam');
  }
  if (msg.content.toLowerCase() === 'botpingi') {
    msg.channel.sendMessage('Bot Pingi: **' + client.ping + '** ms');
  }
  if (msg.content.toLowerCase() === 'eyüp') {
    msg.channel.sendMessage('uff yakışıklım');
  }
  if (msg.content.toLowerCase() === 'cem') {
    msg.channel.sendMessage('ah kardişiimm');
  }
  if (msg.content.toLowerCase() === 'coşkun') {
    msg.channel.sendMessage('Coşkun kanka bizi bi kokoreççiye götür be');
  }
  if (msg.content.toLowerCase() === 'enes') {
    msg.channel.sendMessage('NOĞLUYO ORDAAA');
  }
  if (msg.content.toLowerCase() === 'kübra') {
    msg.channel.sendMessage('Did you mean? Kraliçe');
  }
  if (msg.content.toLowerCase() === 'site') {
    msg.channel.sendMessage('http://www.haxcord.com');
  }
  if (msg.content.toLowerCase() === 'twitch') {
    msg.channel.sendMessage('http://twitch.tv/itsoktocry666');
  }
  if (msg.content.toLowerCase() === '2. sezon şampiyonu') {
    msg.channel.sendMessage('bi dakika entera basıyorum.. heh Comrades Of Heaven');
  }
  if (msg.content.toLowerCase() === '3. sezon şampiyonu') {
    msg.channel.sendMessage('Massive Stroke :star2: ');
  }
  if (msg.content.toLowerCase() === '1v1 şampiyonu') {
    msg.channel.sendMessage('Bucklez');
  }
  if (msg.content.toLowerCase() === 'komutlar') {
    msg.channel.sendMessage(' **BOT KOMUTLARI** --- (:white_check_mark: çalışıyor, :no_entry_sign: çalışmıyor)\nsa :white_check_mark:\nhaxcord :white_check_mark:\nbotpingi :white_check_mark:\neyüp :white_check_mark:\ncem :white_check_mark:\ncoşkun :white_check_mark:\nenes :white_check_mark:\nkübra :white_check_mark:\nsite :white_check_mark:\ntwitch :white_check_mark:\n2. sezon şampiyonu :white_check_mark:\n3. sezon şampiyonu :white_check_mark:\n1v1 şampiyonu :white_check_mark:\nmoderatörler :white_check_mark:');
  }
  if (msg.content.toLowerCase() === 'moderatörler') {
    msg.channel.sendMessage(' **MODERATOR GOREVLERI** \n@☪Kamikaze☪  Anlik Turnuva \n@Subway Gazete - Mac Analizatoru - Free Intro - Anlik Turnuva\n@Nati Video Editi - Intro Panaroma - Haftanin Takimi - Haftanin Kurtarisi\n@games Takim Arayan Oyuncular Bolumu - Takim Basvurusu Onaylari\n@Alestorm Haftanin Takimi - Haftanin Kurtarisi - Bilgi Yarismasi - Oyuncu Kesfeden Adam\n@Deniz Sensei Oyuncu Ozellikleri - Transfer - Butce - Bonservis \n@Qésio Oda Bot Sistemi - Site Tasarim @Kaiser Takim Basvurusu Onaylari - Oyuncu Ozellikleri - Bonservis - Butce - Transfer\n@Wijnaldum 05.12 Iddia  Sorumlusu \n@Adil Iddia Sorumlusu\n@James Milner Host Olmak - Oyuncu Kesfeden Adam\n@Bucklez Haftanin Takimi - Haftanin Kurtarisi - Edit ');
  }
  if (msg.content.toLowerCase() === 'temizle') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("Keşke o'nu da böyle kolay silebilsem. 100 mesajı sildiğin gibi... Zalımın botu...");
  }
});

client.login(ayarlar.token);
