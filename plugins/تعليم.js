
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let tttttouka = `${global.sham}
_*تعليم صنع البوتات*_
${global.sham}
⩥🍇│صنع توكا بوت│🍇⩤
┐┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┌ـ
قم باستخدام أمر *نسخه --كود* سوف يقوم البوت بي بعت كود قم بالضغط علي *التالت نقط* الي علي اعلي الشاشه ثم قم بالضغط علي *رابط الجهاز* و قم و اضغط علي *الربط بي كود* و اكتب الكود الذي تم بعتها من قبل البوت و انتظر حتي يتم التحميل
┘┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈└ـ
⩥🥀│صنع كانيكي  بوت│🥀⩤
┐┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┌ـ
⟣⟤ رابط الشرح : 
✘ https://youtu.be/reJFHLgALos?feature=shared
⟣⟤ الإصدار : 1.7
⟣⟤ الوضع : مشفر
┘┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈└ـ
⩥⚡│صنع ڤينوم  بوت│⚡⩤
┐┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┌ـ
⟣⟤ رابط الشرح : 
✘ https://youtu.be/RpZwzzEPG8o?si=RXbQsxwLDvz3pHhX
⟣⟤ الإصدار : 1.2
⟣⟤ الوضع : بدون تشفير
┘┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈└ـ
`;

        const imageURL = 'https://telegra.ph/file/12f9f581464141bd6c4dc.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL }, caption: tttttouka });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^تعليم$/i;
handler.limit = 1;

export default handler;
