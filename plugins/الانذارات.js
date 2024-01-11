let handler = async (m, { conn, isOwner }) => {
let adv = Object.entries(global.db.data.users).filter(user => user[1].warn)
let warns = global.db.data.users.warn
let user = global.db.data.users

let caption = `⚠️ قائمة التحذيرات
*╭•·–––––––––––––––––––·•*
│ *المجموع : ${adv.length} المستخدمين* ${adv ? '\n' + adv.map(([jid, user], i) => `
│
│ *${i + 1}.* ${conn.getName(jid)  == undefined ? 'لا مستخدمين' : conn.getName(jid) + ` *(${user.warn}/4)*`}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*\n\n⚠️ تحذيرات ⇢ ${warns ? `*${warns}/4*` : '*0/4*'}\n${wm}`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
/* conn.sendButton(m.chat, caption, `⚠️ 𝗔𝗗𝗩𝗘𝗥𝗧𝗘𝗡𝗖𝗜𝗔 ⇢ ${warns ? `*${warns}/4*` : '*0/4*'}\n${wm}`, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })*/
handler.command = /^(التحذيرات|الانذارات|adv|advlist|advlista)$/i 

export default handler
