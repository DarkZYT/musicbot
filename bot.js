const Discord = require('discord.js');
const client = new Discord.Client();
client.music = require('discord.js-musicbot-addon');
client.music.start(client, {
  youtubeKey: 'AIzaSyAYP5t2p-qC_vO7lfr06bZr5zzRwDo4a_k' ,
  botPrefix: 'music ',
  musicPresence: true,
  channelWhitelist: ['565273792704806932'],
  bigPicture: true
});
client.on('ready', () => {
	client.user.setPresence({ game: { name: ' no song.' , streaming: true}})
  	.then()
  	.catch(err => { console.log(err);});
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


