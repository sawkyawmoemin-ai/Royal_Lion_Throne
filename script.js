// Mobile Sidebar Toggle Function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('-translate-x-full');
    }
}

// Theme Toggle Function
function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('preferred_theme', isDark ? 'dark' : 'light');
    updateThemeUI(isDark);
}

function updateThemeUI(isDark) {
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    const currentLang = localStorage.getItem('preferred_lang') || 'mm';

    if (themeIcon) {
        themeIcon.innerText = isDark ? '' : '';
    }

    if (themeText) {
        if (currentLang === 'mm') {
            themeText.innerText = isDark ? 'Light Theme သို့ပြောင်းရန်' : 'Dark Theme သို့ပြောင်းရန်';
        } else if (currentLang === 'en') {
            themeText.innerText = isDark ? 'Switch to Light' : 'Switch to Dark';
        } else if (currentLang === 'th') {
            themeText.innerText = isDark ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด';
        }
    }
}


// Language Translations Dictionary
const translations = {
    mm: {
        docTitle1: "Home",
        docTitle2: "Scanner",
        docTitle3: "Chatbot",
        docTitle4: "AR-view",
        docTitle5: "Feedback",
        mainTitle: "သီဟာသနပလ္လင်တော် လမ်းညွှန်ချက်များ",
        navIndex: "ပင်မစာမျက်နှာသို့",
        navScanner: "ပလ္လင်ကို ဓာတ်ပုံစကင်ဖတ်၍ လေ့လာရန်",
        navChatbot: "အေအိုင်နဲ့ အပြန်အလှန်စကားပြောရန်",
        navArView: "3D AR ဖြင့်ကြည့်ရန်",
        navFeedback: "အကြံပြုချက်တောင်းခံရန်",
        
        // Scanner Section
        scanTitle: "ပလ္လင်ကို ဓာတ်ပုံစကင်ဖတ်၍ လေ့လာရန်",
        scanInstructions: "ကင်မရာဖွင့်ရန် (သို့) ပုံတင်ရန် အောက်ပါခလုတ်များအား နှိပ်ပါ",
        alignObject: "အချက်အလက်အတွက် အရာဝတ္ထုကို ချိန်ပါ",
        scanBtn: "စကင်ဖတ်မည်",

        // Chatbot Section
        chatbotIntro: "သီဟာသနပလ္လင်နှင့် ပတ်သက်သောမေးခွန်းများကို - ဘာသာစကား ၃မျိုးဖြင့် မေးမြန်းနိုင်ပါသည်။",
        faqTitle: "လူမေးများသော မေးခွန်းများမှာ -",
        questionPlaceholder: "မေးခွန်း ရိုက်ထည့်ရန်...",
        sendBtn: "ပေးပို့ပါ",
        learnTitle: "Chatbot အား အချက်အလက်အသစ်များ ထပ်မံသင်ယူစေရန်",
        labelQuestion: "မေးခွန်း:",
        exQuestion: "ဥပမာ - ပလ္လင်၏အစွန်းအဖျားတွင် မည်သည့် ရုပ်ထုများ ရှိပါသနည်း။",
        labelAnswer: "အဖြေ:",
        answerPlaceholder: "အသေးစိတ်အဖြေများကို ရိုက်ထည့်ပါ...",
        learnBtn: "အချက်အလက်များအား သင်ယူမည်။",

        // Throne Parts
        arViewBtn: "3D AR ဖြင့်ကြည့်ရန်",
        thronePartsTitle: "ပလ္လင်တော်အစုံ",
        part1: "၁။ မှန်တိုင်",
        part2: "၂။ ဒုရင်ဗိမာန်",
        part3: "၃။ ဦးဆောက်ပန်း",
        part4: "၄။ သိကြား",
        part5_1: "၅.၁။ သမ္မာဒေဝ",
        part5_2: "၅.၂။ သိကြားငယ် (၈) ရုပ်",
        part5_3: "၅.၃။ သိကြားငယ် (၇) ရုပ်",
        part6: "၆။ မှော်တန်း",
        part7: "၇။ ကြာပွင့်ခံ",
        part8: "၈။ ဥကင်တော်",
        part9: "၉။ စတုမဟာရာဇ်",
        part10: "၁၀။ ခြူးပန်း",
        part11: "၁၁။ ဆင်နားဇာ",
        part12: "၁၂။ ဒေါင်းရုပ်",
        part13: "၁၃။ တံခါးတိုင်",
        part14: "၁၄။ စိန်ပွင့်",
        part15: "၁၅။ မာရဘင်",
        part16: "၁၆။ ခြင်္သေ့ရုပ်",
        part17: "၁၇။ မကရ်းကွက်",
        part18: "၁၈။ ယုန်ရုပ်",
        part19: "၁၉။ လောကနတ်",
        part20: "၂၀။ စိုင်ပေါင်",
        part21: "၂၁။ နဝရတ် (၉) ပါး",

        // Feedback Section
        feedbackHeader: "အကြံပြုချက်တောင်းခံရန်",
        feedbackSubtitle: "သီဟာသနပလ္လင်တော် ပြတိုက်တွင် သင်၏အတွေ့အကြုံများကို ပြန်လည်မျှဝေပေးပါရန်။",
        lblName: "အမည်:",
        namePlaceholder: "အမည် ရိုက်ထည့်ပေးပါ...",
        lblZone: "ဒေသ:",
        optZoneDefault: "-- ဒေသ ရွေးပါ --",
        optAsia: "အာရှ",
        optEurope: "ဥရောပ",
        optAmericas: "အမေရိက",
        optOther: "အခြား",
        lblCountry: "နိုင်ငံ:",
        optCountryDefault: "ပထမဦးစွာ ဒေသ ကို ရွေးပါ",
        lblAge: "အသက်အုပ်စု:",
        optAgeDefault: "-- အသက်အုပ်စု ရွေးပါ --",
        optUnder18: "၁၈ နှစ်အောက်",
        opt18_25: "၁၈ မှ ၂၅",
        opt26_35: "၂၆ မှ ၃၅",
        opt36_50: "၃၆ မှ ၅၀",
        opt50Plus: "၅၀ နှင့် အထက်",
        lblGender: "ကျား/မ:",
        optMale: "ကျား",
        optFemale: "မ",
        optGenderOther: "အခြား / မဖော်ပြလိုပါ",
        lblFavRoom: "အကြိုက်ဆုံး အထပ်နှင့်ခန်းမ:",
        optRoomDefault: "-- အထပ်နှင့် ခန်းမအား ရွေးပါ --",
        groupGround: "မြေညီထပ်",
        roomG1: "မြေညီထပ် - သီဟာသနပလ္လင်ပြခန်း",
        roomG2: "မြေညီထပ် - ရတနာပုံခေတ်ပြခန်း",
        roomG3: "မြေညီထပ် - ကျောက်စာနှင့် လက်ရေးမူပြခန်း",
        groupFirst: "ပထမထပ်",
        roomF1: "ပထမထပ် - မင်းခမ်းမင်းနားပစ္စည်းများပြခန်း",
        roomF2: "ပထမထပ် - မြန်မာ့ယဉ်ကျေးမှုပြခန်း",
        roomF3: "ပထမထပ် - သဘာဝသမိုင်းနှင့် ကျောက်ခေတ်ပြခန်း",
        groupSecond: "ဒုတိယထပ်",
        roomS1: "ဒုတိယထပ် - မြန်မာ့ဇာတ်သဘင်အနုပညာပြခန်း",
        roomS2: "ဒုတိယထပ် - မြန်မာ့လက်မှုပညာပြခန်း",
        groupThird: "တတိယထပ်",
        roomT1: "တတိယထပ် - မြန်မာ့ရှေးဟောင်းလက်ဝတ်ရတနာပြခန်း",
        roomT2: "တတိယထပ် - မြန်မာ့အနုပညာပြခန်း",
        groupFourth: "စတုတ္ထထပ်",
        room4th1: "စတုတ္ထထပ် - ဗုဒ္ဓဘာသာအနုပညာပြခန်း",
        room4th2: "စတုတ္ထထပ် - အာဆီယံပြခန်း",
        room4th3: "စတုတ္ထထပ် - တိုင်းရင်းသားယဉ်ကျေးမှုပြခန်း",
        lblRating: "သုံးသပ်ချက်အဆင့်ပေးရန်:",
        lblComments: "အကြံပြုချက်များပေးရန်:",
        commentsPlaceholder: "သင်၏ အကြံပြုချက်များကို ရိုက်ထည့်ပေးပါရန်...",
        submitBtn: "ပေးပို့ပါမည်"
    },
    en: {
        docTitle1: "Home",
        docTitle2: "Scanner",
        docTitle3: "Chatbot",
        docTitle4: "AR-view",
        docTitle5: "Feedback",
        mainTitle: "Thihathana Throne Guide",
        navIndex: "Home",
        navScanner: "Scanner",
        navChatbot: "AI Chatbot",
        navArView: "AR-View",
        navFeedback: "Feedback",

        // Scanner Section
        scanTitle: "Study the Throne by Scanning Photo",
        scanInstructions: "Click the buttons below to open camera or upload photo",
        alignObject: "Align the object for information",
        scanBtn: "Scan",

        // Chatbot Section
        chatbotIntro: "You can ask questions about the Thihathana Throne in 3 languages.",
        faqTitle: "Frequently asked questions:",
        questionPlaceholder: "Type your question...",
        sendBtn: "Send",
        learnTitle: "Teach Chatbot for new information",
        labelQuestion: "Question:",
        exQuestion: "Example: What statues are located at the edge of the throne?",
        labelAnswer: "Answer:",
        answerPlaceholder: "Type detailed answers...",
        learnBtn: "Learn Information",

        // Throne Parts
        arViewBtn: "View in 3D AR",
        thronePartsTitle: "Throne Components",
        part1: "1. Ornamental Pinnacle",
        part2: "2. House of the Peacock's Breast",
        part3: "3. Floral Motif",
        part4: "4. Cakra (Indra)",
        part5_1: "5.1. Samma Dewi",
        part5_2: "5.2. 8 Small Devas",
        part5_3: "5.3. 7 Small Devas",
        part6: "6. Floral Motif in Relief",
        part7: "7. Lotus Flower Base",
        part8: "8. Upper Portion",
        part9: "9. Caturmaharaja",
        part10: "10. Scroll Work",
        part11: "11. Lattice Work, the ear of the elephant King",
        part12: "12. Peacock Figurine",
        part13: "13. Door Jamb",
        part14: "14. Diamond Flower",
        part15: "15. Partition",
        part16: "16. Lion Figurinee",
        part17: "17. Makara Pattern",
        part18: "18. Hare Figurine",
        part19: "19. Lokanat",
        part20: "20. Decorative accent in the form of a wild-ox's haunch",
        part21: "21. Navaratna (9 Gems)",

        // Feedback Section
        feedbackHeader: "Feedback",
        feedbackSubtitle: "Please share your experience at the Thiharthana Throne Museum.",
        lblName: "Name:",
        namePlaceholder: "Enter your name...",
        lblZone: "Region Zone:",
        optZoneDefault: "-- Select Zone --",
        optAsia: "Asia",
        optEurope: "Europe",
        optAmericas: "Americas",
        optOther: "Other",
        lblCountry: "Country:",
        optCountryDefault: "Please select a zone first",
        lblAge: "Age Range:",
        optAgeDefault: "-- Select Age Range --",
        optUnder18: "Under 18",
        opt18_25: "18 - 25",
        opt26_35: "26 - 35",
        opt36_50: "36 - 50",
        opt50Plus: "50 and above",
        lblGender: "Gender:",
        optMale: "Male",
        optFemale: "Female",
        optGenderOther: "Other / Prefer not to say",
        lblFavRoom: "Favorite Floor & Room:",
        optRoomDefault: "-- Select Floor & Room --",
        groupGround: "Ground Floor",
        roomG1: "Ground Floor - Lion Throne Exhibition Room",
        roomG2: "Ground Floor - Yadanabon Period Exhibition Room",
        roomG3: "Ground Floor - Inscriptions and Manuscripts Room",
        groupFirst: "First Floor",
        roomF1: "First Floor - Royal Regalia Room",
        roomF2: "First Floor - Myanmar Culture Room",
        roomF3: "First Floor - Natural History and Prehistoric Room",
        groupSecond: "Second Floor",
        roomS1: "Second Floor - Myanmar Performing Arts Room",
        roomS2: "Second Floor - Myanmar Arts and Crafts Room",
        groupThird: "Third Floor",
        roomT1: "Third Floor - Ancient Myanmar Ornaments Room",
        roomT2: "Third Floor - Myanmar Art Gallery",
        groupFourth: "Fourth Floor",
        room4th1: "Fourth Floor - Buddhist Arts Room",
        room4th2: "Fourth Floor - ASEAN Exhibition Room",
        room4th3: "Fourth Floor - Ethnic Culture Exhibition Room",
        lblRating: "Rating:",
        lblComments: "Comments:",
        commentsPlaceholder: "Enter your comments here...",
        submitBtn: "Submit Feedback"
    },
    th: {
        docTitle1: "Home",
        docTitle2: "Scanner",
        docTitle3: "Chatbot",
        docTitle4: "AR-view",
        docTitle5: "Feedback",
        mainTitle: "คู่มือพระแท่นบัลลังก์สิงหนาท",
        navIndex: "หน้าแรก",
        navScanner: "เครื่องสแกน",
        navChatbot: "แชทบอท AI",
        navArView: "ดูในรูปแบบ 3D AR",
        navFeedback: "ข้อเสนอแนะ",

        // Scanner Section
        scanTitle: "ศึกษาพระบัลลังก์โดยการสแกนภาพถ่าย",
        scanInstructions: "คลิกปุ่มด้านล่างเพื่อเปิดกล้องหรืออัปโหลดรูปภาพ",
        alignObject: "จัดตำแหน่งวัตถุเพื่อดูข้อมูล",
        scanBtn: "สแกน",

        // Chatbot Section
        chatbotIntro: "คุณสามารถถามคำถามเกี่ยวกับพระแท่นบัลลังก์สิงหนาทได้ใน 3 ภาษา",
        faqTitle: "คำถามที่พบบ่อย:",
        questionPlaceholder: "พิมพ์คำถามของคุณ...",
        sendBtn: "ส่ง",
        learnTitle: "สอนข้อมูลใหม่แก่แชทบอท",
        labelQuestion: "คำถาม:",
        exQuestion: "ตัวอย่าง: มีรูปปั้นใดบ้างที่ขอบของพระบัลลังก์",
        labelAnswer: "คำตอบ:",
        answerPlaceholder: "พิมพ์คำตอบโดยละเอียด...",
        learnBtn: "เรียนรู้ข้อมูล",

        // Throne Parts
        arViewBtn: "ดูในรูปแบบ 3D AR",
        thronePartsTitle: "ส่วนประกอบของพระบัลลังก์",
        part1: "1. เสากระจก",
        part2: "2. วิมานดุรินทร์",
        part3: "3. ดอกไม้ยอด",
        part4: "4. พระอินทร์",
        part5_1: "5.1. สัมมาเทวะ",
        part5_2: "5.2. พระอินทร์น้อย (8 รูป)",
        part5_3: "5.3. พระอินทร์น้อย (7 รูป)",
        part6: "6. ลายหมอว์ตัน",
        part7: "7. ฐานดอกบัว",
        part8: "8. หลังคาหลวง (อุกินตอ)",
        part9: "9. จตุมหาราช",
        part10: "10. ลายชูบัน",
        part11: "11. สินาร์ซา",
        part12: "12. รูปนกยูง",
        part13: "13. เสาประตู",
        part14: "14. ลายดอกเพชร",
        part15: "15. มาระบิน",
        part16: "16. รูปสิงห์",
        part17: "17. ลายมกร",
        part18: "18. รูปกระต่าย",
        part19: "19. โลกาณัต",
        part20: "20. ไซ่ง์เปาน์",
        part21: "21. นพรัตน์ (อัญมณี 9 ชนิด)",

        // Feedback Section
        feedbackHeader: "ข้อเสนอแนะของผู้เข้าชม",
        feedbackSubtitle: "โปรดแบ่งปันประสบการณ์ของคุณที่พิพิธภัณฑ์พระแท่นบัลลังก์สิงหนาท",
        lblName: "ชื่อ:",
        namePlaceholder: "ป้อนชื่อของคุณ...",
        lblZone: "ภูมิภาค / โซน:",
        optZoneDefault: "-- เลือกโซน --",
        optAsia: "เอเชีย",
        optEurope: "ยุโรป",
        optAmericas: "อเมริกา",
        optOther: "อื่นๆ",
        lblCountry: "ประเทศ:",
        optCountryDefault: "กรุณาเลือกโซนก่อน",
        lblAge: "ช่วงอายุ:",
        optAgeDefault: "-- เลือกช่วงอายุ --",
        optUnder18: "ต่ำกว่า 18 ปี",
        opt18_25: "18 - 25",
        opt26_35: "26 - 35",
        opt36_50: "36 - 50",
        opt50Plus: "50 ปีขึ้นไป",
        lblGender: "เพศ:",
        optMale: "ชาย",
        optFemale: "หญิง",
        optGenderOther: "อื่นๆ / ไม่ต้องการระบุ",
        lblFavRoom: "ชั้นและห้องที่ชื่นชอบ:",
        optRoomDefault: "-- เลือกชั้นและห้อง --",
        groupGround: "ชั้นกราวด์",
        roomG1: "ชั้นกราวด์ - ห้องนิทรรศการพระแท่นบัลลังก์สิงห์",
        roomG2: "ชั้นกราวด์ - ห้องนิทรรศการยุคยาดานาบอน",
        roomG3: "ชั้นกราวด์ - ห้องนิทรรศการศิลาจารึกและเอกสารโบราณ",
        groupFirst: "ชั้น 1",
        roomF1: "ชั้น 1 - ห้องนิทรรศการเครื่องราชกกุธภัณฑ์",
        roomF2: "ชั้น 1 - ห้องนิทรรศการวัฒนธรรมเมียนมา",
        roomF3: "ชั้น 1 - ห้องนิทรรศการประวัติศาสตร์ธรรมชาติและยุคก่อนประวัติศาสตร์",
        groupSecond: "ชั้น 2",
        roomS1: "ชั้น 2 - ห้องนิทรรศการศิลปะการแสดงเมียนมา",
        roomS2: "ชั้น 2 - ห้องนิทรรศการหัตถกรรมเมียนมา",
        groupThird: "ชั้น 3",
        roomT1: "ชั้น 3 - ห้องนิทรรศการเครื่องประดับโบราณเมียนมา",
        roomT2: "ชั้น 3 - หอศิลป์เมียนมา",
        groupFourth: "ชั้น 4",
        room4th1: "ชั้น 4 - ห้องนิทรรศการพุทธศิลป์",
        room4th2: "ชั้น 4 - ห้องนิทรรศการอาเซียน",
        room4th3: "ชั้น 4 - ห้องนิทรรศการวัฒนธรรมกลุ่มชาติพันธุ์",
        lblRating: "คะแนนการประเมิน:",
        lblComments: "ความคิดเห็น:",
        commentsPlaceholder: "พิมพ์ความคิดเห็นของคุณที่นี่...",
        submitBtn: "ส่งข้อเสนอแนะ"
    }
};

// Language Switcher Function
function setLang(lang) {
    localStorage.setItem('preferred_lang', lang);
    
    // t ကို ဒီနေရာမှာ သတ်မှတ်ပေးပါ (အမှား ၁ ဖြေရှင်းရန်)
    const t = translations[lang] || translations['mm'];

    // ၁။ data-i18n ပါသော element များအတွက်
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t && t[key]) {
            // INPUT နှင့် TEXTAREA ဖြစ်ပါက placeholder ကို ပြောင်းရန်
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } 
            // OPTGROUP ဖြစ်ပါက label ကို ပြောင်းရန် (ဤနေရာကို အသစ်ထည့်သွင်းပါ)
            else if (el.tagName === 'OPTGROUP') {
                el.label = t[key];
            } 
            else {
                el.innerText = t[key];
            }
        }
    });

    // ၂။ data-i18n-placeholder သီးသန့်သုံးထားသူများအတွက်
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t && t[key]) {
            el.placeholder = t[key];
        }
    });

    // ၃။ Language ခလုတ်များ၏ Design/Class များ ပြောင်းလဲရန်
    ['mm', 'en', 'th'].forEach(l => {
        const btn = document.getElementById(`lang-btn-${l}`);
        if (btn) {
            if (l === lang) {
                btn.className = "lang-btn relative px-3.5 py-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-extrabold shadow-md shadow-amber-500/20 transition";
            } else {
                btn.className = "lang-btn relative px-3.5 py-2 rounded-full hover:bg-white/90 dark:hover:bg-slate-700 transition text-slate-900 dark:text-slate-100 font-bold";
            }
        }
    });

    // ၄။ Language ပြောင်းသွားချိန် Theme Button စာသားပါ ပြောင်းလဲပေးရန်
    const isDark = document.documentElement.classList.contains('dark');
    if (typeof updateThemeUI === 'function') {
        updateThemeUI(isDark);
    }
}

// Load Preferred Language & Theme on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('preferred_theme') || 'light';
    const isDark = savedTheme === 'dark';
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    const savedLang = localStorage.getItem('preferred_lang') || 'mm';
    setLang(savedLang);
});

// Water Wave Hover & Click Effect
function startHoverSpark(event) {
    const button = event.currentTarget;
    if (button.waveActive) return;
    button.waveActive = true;

    createWave(event);

    button.waveTimer = setInterval(() => {
        createPeriodicWave(button);
    }, 1200);
}

function stopHoverSpark(event) {
    const button = event.currentTarget;
    button.waveActive = false;
    clearInterval(button.waveTimer);
}

function createWave(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const wave = document.createElement('span');
    wave.classList.add('cyber-wave');
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    button.appendChild(wave);

    setTimeout(() => {
        wave.remove();
    }, 3600);
}

function createPeriodicWave(button) {
    const rect = button.getBoundingClientRect();
    const x = rect.width / 2;
    const y = rect.height / 2;

    const wave = document.createElement('span');
    wave.classList.add('cyber-wave');
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    button.appendChild(wave);

    setTimeout(() => {
        wave.remove();
    }, 3600);
}