
let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let venom127 = `
Welcome :- 
هذا عروض بوت"ميستوري"
─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───
عليك أن تفعل عرض من دول مقابل الألماس لتتمكن من شراء ما تريد من المتجر و عليك أولاً أن تتوصل مع المطور ليعطيك الالماس 🌦
مطور البوت هو ڤينوم هذا رقمه " wa.me/201021889597 " 🔮⭐

─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───
دخل 50 عضو في الجروب و خد 10000 الماس 
⟣⟤ الجروب : *https://chat.whatsapp.com/CB0hLdpoMxC1ZDZUNjzJ3H*
─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───
جيب رقم وهمي مقابل 30000 الماس
⟣⟤ لا تكون متوفرة في بعض الأحيان
─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───
تساعد المطور في كود مقابل 1000 الماس 
⟣⟤ لا تكون متوفرة في بعض الأحيان
─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───
`;

        const venomURL87 = 'https://telegra.ph/file/81e230d1c47adaf407af2.jpg';

        await conn.sendMessage(m.chat, { image: { url: venomURL87 }, caption: venom127 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^العروض|عروض$/i;

export default handler;