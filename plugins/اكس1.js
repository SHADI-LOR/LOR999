import TicTacToe from '../lib/tictactoe.js';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  conn.game = conn.game ? conn.game : {};
  if (Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*[❗] حصل خطاء*';
  if (!text) throw `*[•-•] حط اسم للغرفه*\n\n*—◉ مثال*\n*◉ ${usedPrefix + command} غرفه*`;
  
  let room = Object.values(conn.game).find((room) => room.state === 'WAITING' && (text ? room.name === text : true));
  if (room) {
    await m.reply('*[🕹️] لقد دخل احد الي الغرفه، سيتم بدا اللعبه الان*');
    room.o = m.chat;
    room.game.playerO = m.sender;
    room.state = 'PLAYING';
    const arr = room.game.render().map((v) => {
      return {
        X: '❎',
        O: '⭕',
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
      }[v];
    });
    const str = `
🎮 تيك تاك تو 🎮

❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}

        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}

دورك @${room.game.currentTurn.split('@')[0]}
`.trim();
    if (room.x !== room.o) await conn.sendMessage(room.x, {text: str, mentions: this.parseMention(str)}, {quoted: m});
    await conn.sendMessage(room.o, {text: str, mentions: conn.parseMention(str)}, {quoted: m});
  } else {
    room = {
      id: 'tictactoe-' + (+new Date),
      x: m.chat,
      o: '',
      game: new TicTacToe(m.sender, 'o'),
      state: 'WAITING'};
    if (text) room.name = text;
    const imgplay = `https://cope-cdnmed.agilecontent.com/resources/jpg/8/9/1590140413198.jpg`;
    conn.reply(m.chat, `*🕹 تيك تاك توك 🎮*\n\n*◉في الانتظار*\n*◉ اذا كنت تريد الخروج من الغرفه اكتل ${usedPrefix}اكس-حذف*\n\n◉ عشان تخش للغرفه: (${usedPrefix + command} ${text})`, m);
    // conn.sendButton(m.chat, `*🕹 𝐓𝐑𝐄𝐒 𝐄𝐍 𝐑𝐀𝐘𝐀 🎮*\n\n*◉ 𝙴𝚂𝙿𝙴𝚁𝙰𝙽𝙳𝙾 𝙰𝙻 𝚂𝙴𝙶𝚄𝙽𝙳𝙾 𝙹𝚄𝙶𝙰𝙳𝙾𝚁*\n*◉ 𝙿𝙰𝚁𝙰 𝙱𝙾𝚁𝚁𝙰𝚁 𝙾 𝚂𝙰𝙻𝙸𝚁𝚂𝙴 𝙳𝙴 𝙻𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰 𝚄𝚂𝙴𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix}delttt*`, wm, imgplay, [['𝚄𝙽𝙸𝚁𝚂𝙴 𝙰 𝙻𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰', `${usedPrefix + command} ${text}`]], m, { mentions: conn.parseMention(text) })
    conn.game[room.id] = room;
  }
};
handler.command = /^(tictactoe|اكس|ttt|xo)$/i;
export default handler;
