//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*منورنا*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام ورحمة الله وبركاته*',  
     ]; 
 
 }else if (/^كيف حالك|اخبارك|كيفك$/i.test(m.text)) { 
     responses = [ 
'*بخير الحمدلله وانت 🫀*'
     ]; 
   }else if (/^غبي | أحمق | حماره | حمار$/i.test(m.text)) { 
     responses = [ 
'*من زينك 😴*'
   ]; 
   }else if (/^تحبني|مين يحبني$/i.test(m.text)) { 
     responses = [ 
'*لا ما احبك*',
'*ورع*',
'*برااااا 🔚*',
]; 
   }else if (/^تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*السلام عليكم ورحمة الله وبركاته وليس هاي ياطفل*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*هممممممم*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'عاشششش تفهم'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*هااااا لو كنت بوت لحبيتك*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^دز$/i.test(m.text)) { 
     responses = [ 
       '*انقلع✋🏻*'
       '*انسان غبي*'
        ,  
     ];
     }else if (/^وينه البوت$/i.test(m.text)) { 
     responses = [ 
       'هنا لو تحتاج شيء اكتـ/ـب المهام لاتنسي النقطة 💗',  

     ];
     }else if (/^بوت|البوت$/i.test(m.text)) { 
     responses = [ 
       '*اسمي لور لو سمحت انسان غبي*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلين بس الافضل تحية الإسلام*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*اكتب المهام لاتنسى النقطة لو سمحت*',  
     ];
   }else if (/^لور|LOR$/i.test(m.text)) { 
     responses = [ 
'*عيونها💖*',
'*نعمم لو تحتاج الأوامر اكتب المهام*',
'*نعممم💖*',   ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا🧸*',  
     ];
}else if (/^كلزق|كلزوء|كلزء|كل زق|كل تبن$/i.test(m.text)) { 
     responses = [ 
       '*عيببببب ✋🏻*',  
     ];
    
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
