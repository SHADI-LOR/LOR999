//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^منور|منوره|منورة$/i.test(m.text)) { 
     responses = [ 
 '*نـورك 🫵*'  
     ]; 
} else if (/^بخير الحمد لله|الحمد لله بخير|بخير|الحمد لله$/i.test(m.text)) { 
     responses = [ 
       '*دوم ان شاء الله 💗*',  
     ]; 
 
 }else if (/^انقلعي|انقلع$/i.test(m.text)) { 
     responses = [ 
'*انقلع انت 😐*'
     ]; 
   }else if (/^غبي | أحمق | حماره | حمار | احمق$/i.test(m.text)) { 
     responses = [ 
'*من زينك 😴*'
   ]; 
   }else if (/^ون بيس $/i.test(m.text)) { 
     responses = [ 
'*الاعظم 👑*',
'*....عمك🫵*',
'*عمكككك🙃*',
]; 
   }else if (/^RARE PIECE | رير بيس |القطعة النادرة | القطعه النادره $/i.test(m.text)) { 
     responses = [ 
'*افضل تطبيق*',
'*رابط التطبيق لو تبغى تنزله* [ https://play.google.com/store/apps/details?id=rarepiece.com ] ',
'*التوب 👑*',   ]; 
     
     }else if (/^بنام|نمت |رايح انام | كنت نائم | كنت نايمة | كنت نايم | كنت نائمة$/i.test(m.text)) { 
     responses = [ 
       '*نـ💖ــوم الـعـوافـي 😴*',  

     ]; 
}else if (/^لور غبية|لور غبيه | لور فاشلة|لور فاشله | لور ساحبه | اسوء بوت/i.test(m.text)) { 
     responses = [ 
       '*انا عمتك✋🏻*',  

     ]; 
   }else if (/^بموت | بموت 😭😭|متت | متتتت |ميته$/i.test(m.text)) { 
     responses = [ 
'*🪦💀*'
     ]; 
   } else if (/^تصبح على خير | تصبحي على خير |تصبحو على خير $/i.test(m.text)) { 
     responses = [ 
'*وانت من اهل الخير 💞*'
     ]; 
     }else if (/^ربنا يوفقك | الله يوفقك | وفقك الله$/i.test(m.text)) { 
     responses = [ 
       'امين وياك 💖',  

     ];
     }else if (/^بروح|بسحب|بنقلع$/i.test(m.text)) { 
     responses = [ 
       '*تـم نشوفك على خير ان شاء الله👋🏻*',  

     ];
     }else if (/^جيت | انا جيت | رجعت |عدت$/i.test(m.text)) { 
     responses = [ 
       'منور/ه💡',  

     ];
     }else if (/^نعست$/i.test(m.text)) { 
     responses = [ 
       '*انقلع نام 👀*',  

     ];
     }else if (/^اتفق$/i.test(m.text)) { 
     responses = [ 
       '*اتفق على اتفاقك✋🏻*',  

     ]; 
     }else if (/^انا جوعان | جوعت | ابغى اكل |اكل$/i.test(m.text)) { 
     responses = [ 
       'خذ شكلاته 🍫',  

     ];
     }else if (/^يزينككك| يزينك |يزينككك$/ .test(m.text)) { 
     responses = [ 
       '*جزء من زينككك💖*',  
     ];
       }else if (/^ملل | طفشت | مليت|طفش$/i.test(m.text)) { 
     responses = [ 
       '*ضيع وقتك معي اكتب .المهام 💖*',  
     ];
   }else if (/^ريال مدريد|ريال |مدريد$/i.test(m.text)) { 
     responses = [ 
'*افضل فريق 👑*',
'*بطل الدوري الأوروبي 🫡*',
'*الملكي 👀*',   ];
            }else if (/^كرستيانو$/i.test(m.text)) { 
     responses = [ 
       '*عمككك👀*',  
     ];
}else if (/^هيهيهيهي|هيهي|هيهيهي|هيهيههيههي|هييهيهييهي|هيههيهيهي$/i.test(m.text)) { 
     responses = [ 
       '*👹*',  
     ];
    
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
