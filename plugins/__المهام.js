import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

const d = new Date(new Date + 3600000);
    const locale = 'ar';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const totalreg = Object.keys(global.db.data.users).length;
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/278d4552ebe00f5d279b5.jpg','https://telegra.ph/file/8637bddcaaad561c26233.jpg');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '*يـتـم تـجـهيـز الـقـائـمـه⏳*',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝚂𝚁 𝙻𝙾𝚁 𝙱𝙾𝚃 🕸️', body: 'bienvenido', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('📂');
    await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })
  let txt = `
*🤖┆𝐒𝐑 𝐋𝐎𝐑 𝐁𝐎𝐓 ⥑*
*👤⊹ اهــلا بــك ↰ ${taguser}⟅*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
💡╿قـسـم الاسـاسـيـات⤹
· • •﹝🕸️﹞• • ·
•⧜⧽ *صلح*
•⧜⧽ *تقييم*
•⧜⧽ *ابلاغ*
•⧜⧽ *المطور*
•⧜⧽ *الدعم*
•⧜⧽ *قائمتي*
•⧜⧽ *لوجوهات*
•⧜⧽ *القطعة_النادرة*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
💡╿قـسـم الذكاء الاصطناعي⤹
· • •﹝🕸️﹞• • ·
•⧜⧽ *سوكونا*
•⧜⧽ *ارسم*
•⧜⧽ *تحدث*
•⧜⧽ *سيري*
•⧜⧽ *مطلوب*
•⧜⧽ *مطلوبب*
•⧜⧽ *احسب*
•⧜⧽ *ايميل*
•⧜⧽ *فيك*
•⧜⧽ *حجم*
•⧜⧽ *كومنت*
•⧜⧽ *بحث-لينك*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
♻️╿قـسـم الـمـجـمـوعـات⤹
· • •﹝🕸️﹞• • ·
•⧜⧽ *اضف*
•⧜⧽ *طرد*
•⧜⧽ *ترقيه*
•⧜⧽ *خفض*
•⧜⧽ *تغير-الاسم*
•⧜⧽ *تغير-الوصف*
•⧜⧽ *تغير-الصوره*
•⧜⧽ *منشن*
•⧜⧽ *مخفي*
•⧜⧽ *جروب قفل*
•⧜⧽ *جروب فتح*
•⧜⧽ *الجروب*
•⧜⧽ *الادمن*
•⧜⧽ *حذف*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
🧸╿قـسـم حـصـري⤹
· • •﹝🕸️﹞• • ·
•⧜⧽ *جيب*
•⧜⧽ *دونات*
•⧜⧽ *قلوب*
•⧜⧽ *ابعت*
•⧜⧽ *فعاليات*
•⧜⧽ *مارد*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
🏦╿قـسـم الـبـنـك⤹
· • •﹝🕸️﹞• • ·
•⧜⧽ *راتب*
•⧜⧽ *يومي*
•⧜⧽ *اسبوعي*
•⧜⧽ *شهري*
•⧜⧽ *هديتي*
•⧜⧽ *تحويل*
•⧜⧽ *لفل*
•⧜⧽ *خبرات*
•⧜⧽ *رصيدي*
•⧜⧽ *الماسي*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
⛩️╿قـسـم الاعـضـاء⤹
· • •﹝🕸️﹞• • ·
•⧜⧽ *طقم*
•⧜⧽ *طقمي*
•⧜⧽ *بروفايل*
•⧜⧽ *خلفيه*
•⧜⧽ *ميمز*
•⧜⧽ *سرعه*
•⧜⧽ *ترجم*
•⧜⧽ *زخرفه*
•⧜⧽ *دمج*
•⧜⧽ *ملصق*
•⧜⧽ *استيكر*
•⧜⧽ *سرقه*
•⧜⧽ *ستك*
•⧜⧽ *الطقس*
•⧜⧽ *توب*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
🏟️╿قـسـم الـتـرفـيـه الاول¹⤹
· • •﹝🕸️﹞• • ·
•⧜⧽ *اكس*
•⧜⧽ *تحدي*
•⧜⧽ *حظ1*
•⧜⧽ *حظ2*
•⧜⧽ *حظ3*
•⧜⧽ *شخصية*
•⧜⧽ *رياضه*
•⧜⧽ *نسبه-هدوء*
•⧜⧽ *نسبه-ذكاء*
•⧜⧽ *نسبه-قبح*
•⧜⧽ *لعبة*
•⧜⧽ *موتتي*
•⧜⧽ *قدوتي*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
🎲╿قـسـم الـتـرفـيـه الـثـانـي²⤹
· • •﹝🕸️﹞• • ·
•⧜⧽ *دين*
•⧜⧽ *خمن*
•⧜⧽ *انمي*
•⧜⧽ *كت*
•⧜⧽ *فكك*
•⧜⧽ *ايمواجي*
•⧜⧽ *رتب*
•⧜⧽ *علم*
•⧜⧽ *عين*
•⧜⧽ *احزر*
•⧜⧽ *كوره*
•⧜⧽ *الحب*
•⧜⧽ *الكره*
•⧜⧽ *زواج*
•⧜⧽ *طلاق*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
🖼️╿قـسـم الـصـور الاول¹⤹
· • •﹝🕸️﹞• • ·
•⧜⧽ *قط*
•⧜⧽ *كلب*
•⧜⧽ *#جيمينج*
•⧜⧽ *#رنالدو*
•⧜⧽ *#ميسي*
•⧜⧽ *#تكنولوجيا*
•⧜⧽ *#عشوائي*
•⧜⧽ *#عيد*
•⧜⧽ *#جبل*
•⧜⧽ *ببجي*
•⧜⧽ *تتقيم*
•⧜⧽ *دورايمون*
•⧜⧽ *هكر*
•⧜⧽ *كوكب*
•⧜⧽ *كرتون*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
🎢╿قـسـم الـصـور الـثـانـي²⤹
· • •﹝🕸️﹞• • ·
•⧜⧽ *ميمز*
•⧜⧽ *خلفيه*
•⧜⧽ *كيوت*
•⧜⧽ *كانيكي*
•⧜⧽ *ميكاسا*
•⧜⧽ *ناروتو*
•⧜⧽ *ايتاتشي*
•⧜⧽ *ساسكي*
•⧜⧽ *ميكو*
•⧜⧽ *نيزوكو*
•⧜⧽ *مادار*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
📥╿قـسـم الـتـحـمـيـلات⤹
· • •﹝🕸️﹞• • ·
•⧜⧽ *جودة*
•⧜⧽ *تليجراف*
•⧜⧽ *لصورة*
•⧜⧽ *لفيديو*
•⧜⧽ *لانمي*
•⧜⧽ *يوتيوب*
•⧜⧽ *فيديو*
•⧜⧽ *أغنية*
•⧜⧽ *تيك*
•⧜⧽ *فيسبوك*
•⧜⧽ *تطبيق*
•⧜⧽ *بحث*
•⧜⧽ *صورة*
•⧜⧽ *جوجل*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
🎙️╿قـسـم الاصـوات⤹
· • •﹝🕸️﹞• • ·
•⧜⧽ *رفيع*
•⧜⧽ *تخين*
•⧜⧽ *تخينن*
•⧜⧽ *صاخب*
•⧜⧽ *ناعم*
•⧜⧽ *سنجاب*
•⧜⧽ *روبوت*
•⧜⧽ *منفوخ*
•⧜⧽ *عميق*
•⧜⧽ *بطيء*
•⧜⧽ *سريع*
*· • • ╼╃✦⊰ •﹝🕸️﹞• ⊱✦╄╾ • • ·*
`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '乂 ✨🌸 𝑀𝑖𝑡𝑠𝑢𝑟𝑖 𝐵𝑜𝑡 🌸✨ 乂', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🎮');
  } catch {
    conn.reply(m.chat, '*❗ حـدث خـطـاء*', m);
  }
}; 
handler.help = ['menuuu'];
handler.tags = ['mmmmenu'];
handler.command = /^(المهام)$/i;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
