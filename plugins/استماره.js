let handler  = async (m, { conn }) => { 
 let name = conn.getName(m.sender) 
 let teks = ` 
 ${pickRandom([`*┏═───═⊱⬩⊰『🏮』⊱⬩⊰═───═┓*
*✧╎تـرحـيـب ⤦🌟⤥ عـضـو╎✧*
*─━✣⊰『🏮』⊱✣━─*
*֎╎↲ الـلـقـب👤〘〙*

*֎╎↲ مـن إنـمـي🎎〘〙*

*֎╎↲ الـمـنـشـن📧〘〙*

*֎╎↲ مـسـؤول الـمـنـشـن🎩〘〙*
*─━✣⊰『🏮』⊱✣━─*
*~⌬ تــ✍︎ــوقــيــع ↡~*
~*⟦𝐓𝐄𝐒𝐋𝐀 𓆩🏮𓆪 𝐊𝐎𝐍𝐎𝐇𝐀⟧*~
*┗═───═⊱⬩⊰『🏮』⊱⬩⊰═───═┛*
ً'`])} 
 `.trim() 
 conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }}) 
 } 
 handler.customPrefix = /استماره|استمارة/i 
 handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }
