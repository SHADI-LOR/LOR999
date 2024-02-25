const handler = async (m, { conn, usedPrefix, command }) => {
  try {
    const groups = Object.entries(conn.chats)
      .filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce)
      .map((v) => v[0]);

    const fproducto = {
      key: {
        fromMe: false,
        participant: '0@s.whatsapp.net',
        ...(false ? { remoteJid: '201021889597@s.whatsapp.net' } : {})
      },
      message: {
        'productMessage': {
          'product': {
            'productImage': { 'mimetype': 'image/jpeg' },
            'title': '⚘╎𝙼𝚒𝚝𝚜𝚞𝚛𝚒 𝙱𝚘𝚝 ♡',
            'description': '𝙗𝙮 : 🍄 𝙑𝙀𝙉𝙊𝙈 𝘿𝙎𝙑 💵',
            'currencyCode': 'USD',
            'priceAmount1000': '1000000000',
            'retailerId': 'Ghost',
            'productImageCount': 1
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      }
    };

    if (!m.quoted) throw `✳️ اعمل ريبلاي على الرسالة بامر *${usedPrefix + command}* لإرسال الإشعار`;

    for (const id of groups) {
      await conn.sendMessage(id, { forward: m.quoted.fakeObj, mentions: (await conn.groupMetadata(`${id}`)).participants.map((v) => v.id) }, { quoted: fproducto });
    }

    m.reply(`*⚠️ الرسالة انتقلت إلى ${groups.length} جروب*\n\n*_تنبيه_: قد يكون هناك خطأ وقد لا يتم إرسالها لجميع الجروبات*`);
  } catch (error) {
    console.error(error);
    throw 'لم ترد علی رساله او حدث خطأ!';
  }
};

handler.help = ['bcgc2'];
handler.tags = ['owner'];
handler.command = /^(اذاعه|اذاعة)$/i;
handler.owner = true;

export default handler;