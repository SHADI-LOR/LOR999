import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info11 = `
${global.sham1}
${global.sham2}
⩥💜│قـسـم الـجـديـد│💜⩤
${global.sham3}
${global.sham2}
${global.amrr10}دونات
${global.amrr10}قلوب
${global.amrr10}لقب
${global.amrr10}لقبه
${global.amrr10}الألقاب
${global.amrr10}جيب
${global.amrr10}ابعت
${global.amrr10}غير
${global.sham3}
${global.sham4}
`;

        const imageURL11 = 'https://telegra.ph/file/6190bd02915140738ed38.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL11 }, caption: info11 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^الحصري|ت8$/i;

export default handler;