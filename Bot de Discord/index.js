const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Bot Iniciado como: ${client.user.tag}`);
});

client.on('message', (message) =>{

    switch(message.content){
        case "!facebook":
            message.reply("https://www.facebook.com/Kowagu_-104483431412261");
            break;

        case "!instagram":
            message.reply("https://www.instagram.com/Kowagu_/");
            break;

        case "!steam":
            message.reply("https://steamcommunity.com/id/Kowagu/")
            break;

        case "!tiktok":
            message.reply("https://www.tiktok.com/@kowagu_")
            break;

        case "!twitch":
            message.reply("https://www.twitch.tv/Kowagu_")
            break;

        case "!twitter":
            message.reply("https://twitter.com/Kowagu_")
            break;

        case "!youtube":
            message.reply("https://www.youtube.com/channel/UCoJK8eVuluBWIlKZjU60-vg");
            break;

        //COMANDOS DE TWITCH
        case "!anime":
            message.reply("Lista de animes que vi: https://myanimelist.net/animelist/Kowagu_");
            break;

        case "!uv":
            message.reply("Mira mi ultimo vídeo en YouTube: https://mylast.video/kowagu");
            break;

        case "!playlist":
            message.reply("Reggaeton Viejo : https://open.spotify.com/playlist/4tnCM2dbIZeIiFcpMyga6O?si=fdb9721860c345bc Otaku: https://open.spotify.com/playlist/40kbCvWNvnHwFPBmlKeIy0?si=09309e8d786b4d63");
            break;
        
        case "!pc":
            message.reply("Procesador: Celeron(R) CPU G1620 @ 2.70GHz 2 Nucleos 2 Hilos - Ram: 8GB DDR3 - Gráfica: AMD Radeon HD 5450 1 GB - Sistema Operativo: Windows 10 Home 64 Bits 20H2");
            break;
        
        case "!juegospirata":
            message.reply("https://clips.twitch.tv/MoldyMistyTrayBudStar");
            break;

        default:
            message.reply("No conozco ese comando");
    }
});

client.login('OTI3Mjk5Nzk5NTUwNjY4ODMx.YdINPA.ntE5nhh0WHIwK29HnmsyOIjqkfg');