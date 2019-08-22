const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('messageDelete', message => {
	message.channel.send('為什麼要刪除');
});

client.on('message', message => {
	console.log(message.content);
	if (message.content === 'ping') {  //固定回答內容
		message.channel.send('Pong.');
	} else if (message.content === `${prefix}=))`) {  //前綴變數
		message.channel.send('=)))))');
	}
	else if (message.content.startsWith(`${prefix}hi`)) {  //只要是以此句開始的句子
		message.channel.send('Hello !');
	}


});

client.login(token);