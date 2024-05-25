import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `⟣⟤ 🖤⚡\nادخل السوأل أو المعلومة الذي تريد من لور أن ترد عليها\n*⟣⟤ مثل*\n⟣⟤ .لور جيبي معلومات عن اسم لور\n⟣⟤ .لور اشرح function في لغة جافا سكريبت\n⟣⟤ .لور جيبي نصائح`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }
let fgytSrdf = 'https://telegra.ph/file/6d6f32a2cbd26f3544be7.jpg'
  try {
    m.react(rwait)
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: fgytSrdf },
      caption: 'لحظه . . .'
    }, {quoted: m})
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);

    const venom12 = `https://ultimetron.guruapi.tech/gita?prompt=${prompt}`;

    try {
      let response = await fetch(venom12);
      let data = await response.json();
      let result = data.result;

      if (!result) {

        throw new Error('لا توجد استجابة JSON صالحة من API');
      }

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
      m.react(done);
    } catch (error) {
      console.error('الخطأ من الأول API:', error);


      const model = 'llama';
      const senderNumber = m.sender.replace(/[^0-9]/g, ''); 
      const session = `SOKUNA_BOT_${senderNumber}`;
      const venom13 = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`;

      let response = await fetch(venom13);
      let data = await response.json();
      let result = data.completion;

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
      m.react(done);
    }

  } catch (error) {
    console.error('Error:', error);
    throw `*خطا*`;
  }
};
handler.help = ['chatgpt']
handler.tags = ['AI']
handler.command = ['لور'];

export default handler;
