import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info1 = `
${global.sham}
⩥💜│قـسـم الـذكـاء الاصطناعي│💜⩤
${global.sham}
${global.amrr2}فينوم
${global.amrr2}سوكونا
${global.amrr2}بارد
${global.amrr2}ارسم
${global.amrr2}سيري
${global.amrr2}تحدث
${global.amrr2}شوف
${global.sham}
`;

        const imageURL1 = 'https://telegra.ph/file/6190bd02915140738ed38.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL1 }, caption: info1 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^الذكاء$/i;

export default handler;