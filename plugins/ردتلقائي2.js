//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^تسلم|تسلمي$/i.test(m.text)) { 
     responses = [ 
 '*الله يسلمك💖*'  
     ]; 
} else if (/^بخير الحمد لله|الحمد لله بخير|بخير|الحمد لله$/i.test(m.text)) { 
     responses = [ 
       '*دوممم ان شاء الله 💗*',  
     ]; 
 
 }else if (/^بنام|بروح انام|نمت $/i.test(m.text)) { 
     responses = [ 
'*نوم العوافي💗*'
     ]; 
   }else if (/^ قدها | تسوقيها |تسوقها $/i.test(m.text)) { 
     responses = [ 
'*اي 😐 *انسان فاشل'
   ]; 
   }else if (/^شادي |لوفي$/i.test(m.text)) { 
     responses = [ 
'*عمك🙃*',
'*التوب 👑*',
'*افضل مطور*',
]; 
   }else if (/^هاهتنسني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^ههسهسه$/i.test(m.text)) { 
     responses = [ 
       '*السلام عليكم ورحمة الله وبركاته وليس هاي ياطفل*',  

     ]; 
}else if (/^ههعاافقي/i.test(m.text)) { 
     responses = [ 
       '*هممممممم*',  

     ]; 
   }else if (/^هعغبلتن$/i.test(m.text)) { 
     responses = [ 
'عاشششش تفهم'
     ]; 
   } else if (/^خخهال$/i.test(m.text)) { 
     responses = [ 
'*هااااا لو كنت بوت لحبيتك*'
     ]; 
     }else if (/^هثهثتي$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^دز$/i.test(m.text)) { 
     responses = [ 
       '*انقلع✋*',  

     ];
     }else if (/^وينه البوت$/i.test(m.text)) { 
     responses = [ 
       'هنا لو تحتاج شيء اكتـ/ـب المهام لاتنسي النقطة 💗',  

     ];
     }else if (/^يعطيك العافيه$/i.test(m.text)) { 
     responses = [ 
       '*الله يعافيك💖*',  

     ];
     }else if (/^ههعاه7عغل$/i.test(m.text)) { 
     responses = [ 
       '*اهلين بس الافضل تحية الإسلام*',  

     ]; 
     }else if (/^منتال$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^هععسثه$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^خهثههث$/i.test(m.text)) { 
     responses = [ 
       '*اكتب المهام لاتنسى النقطة لو سمحت*',  
     ];
   }else if (/^يهيهثت$/i.test(m.text)) { 
     responses = [ 
'*عيونها💖*',
'*نعمم لو تحتاج الأوامر اكتب المهام*',
'*نعممم💖*',   ];
            }else if (/^خقهقهث$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا🧸*',  
     ];
}else if (/^ينيتيت$/i.test(m.text)) { 
     responses = [ 
       '*عيببببب ✋*',  
     ];
    
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
