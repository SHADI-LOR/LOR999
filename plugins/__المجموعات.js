import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info3 = `
${global.sham}
⩥💜│قـسـم الـجـروبـات│💜⩤
${global.sham}
${global.amrr4}اضافه
${global.amrr4}طرد
${global.amrr4}ترقيه
${global.amrr4}اعفاء
${global.amrr4}تغير-الاسم
${global.amrr4}تغير-الوصف
${global.amrr4}تغير-الصوره
${global.amrr4}منشن
${global.amrr4}مخفي
${global.amrr4}جروب قفل
${global.amrr4}جروب فتح
${global.amrr4}الجروب
${global.amrr4}الادمن
${global.amrr4}حذف
${global.sham}
`
        const imageURL3 = 'https://telegra.ph/file/cf3a84ad3b6192601e258.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL3 }, caption: info3 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^المجموعات$/i;

export default handler;