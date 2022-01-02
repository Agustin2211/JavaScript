const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Bot Iniciado como ${client.user.tag}`);
});

client.on('message', (message) =>{
    //Recibiendo Mensaje
    console.log(message);
});

client.login('OTI3Mjk5Nzk5NTUwNjY4ODMx.YdINPA.AOdY1ITWkbxMBegdogWIdG1InMc');