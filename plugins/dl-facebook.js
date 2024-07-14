
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) return m.reply('*`Ingresa un enlace de facebook`*');

    try {
        const apiResponse = await fetch(`https://delirius-api-oficial.vercel.app/api/tiktok?url=${args[0]}`);
        const responseData = await apiResponse.json();
        
        if (responseData.status) {
            const { data } = responseData;
            const { title, links } = data;
        let txt = '    `Facebook downloader`\n\n';
            txt += `> *Titulo* : _${title}_\n`;

            await conn.sendMessage(m.chat, { video: { url: links.sd_0.link;}, caption: txt }, { quoted: m });
        } else {
        }
    } catch {
    }
}

handler.help = ['facebook *<link>*'];
handler.tags = ['downloader'];
handler.command = ['fb', 'facebook'];
export default handler
