import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info = `
${global.sham1}
${global.sham2}
⩥💜│قـسـم المـطور│💜⩤
${global.sham3}
${global.sham2}
${global.amrr}بان
${global.amrr}فك-البان
${global.amrr}حظر
${global.amrr}فك-الحظر
${global.amrr}بلوك
${global.amrr}رفع-البلوك
${global.amrr}ارفعني
${global.amrr}بريميم
${global.amrr}البتبندين
${global.amrr}المحظورين
${global.amrr}رستار
${global.amrr}تحديث
${global.sham3}
${global.sham2}
_*الاوامر مخصصه لڤينوم و سوكونا فقط ⁦(⁠◠⁠‿⁠・⁠)⁠—⁠☆⁩*_
${global.sham3}
${global.sham4}
`;

        const imageURL = 'https://telegra.ph/file/eb3986717a15c6e089c1b.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL }, caption: info });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^المالك|ت9$/i;
handler.owner = true;

export default handler;
