let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
   // Check if user has enough limit (coins)
    if (user.limit < 2) {
        m.reply('عذراً، ليس لديك ما يكفي من العملات لاستخدام هذا الأمر.');
        return;
    }

    // Deduct 2 coins from the user's account
    user.limit -= 2;

    // Send confirmation message
    m.reply(`تم خصم 2💎 من حسابك. رصيدك الحالي: ${user.limit} عملة.`);

    let ps = groupMetadata.participants.map(v => v.id);
    let a = ps[Math.floor(Math.random() * ps.length)];
    let b;
    do {
        b = ps[Math.floor(Math.random() * ps.length)];
    } while (b === a);
m.reply(`*${toM(a)} , ${toM(b)}*
*انتم ما تناسبون لبعض*
 \n*تم طلاقكم 👩🏼‍⚖️*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['الطلاق','طلاق']
handler.group = true
export default handler
