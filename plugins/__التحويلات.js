import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info5 = `
${global.sham1}
${global.sham2}
│┊⩥💜│قـسـم الـحـويـلات│💜⩤
${global.sham3}
${global.sham2}
${global.amrr6}ملصق
${global.amrr6}لرابط
${global.amrr6}لصوره
${global.amrr6}لفيديو
${global.amrr6}دمج
${global.amrr6}زخرفه
${global.amrr6}حقوق
${global.amrr6}لانمي
${global.amrr6}لريك
${global.amrr6}لكرتون
${global.sham3}
${global.sham4}
`
        const imageURL5 = 'https://telegra.ph/file/9d6d7e272bc8c6c8125bc.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL5 }, caption: info5 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^التحويلات|ت7$/i;

export default handler;