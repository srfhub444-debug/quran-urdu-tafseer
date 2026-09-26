// =====================================================
// PREMIUM QURAN WEBSITE
// CLEAN MULTILINGUAL SYSTEM
// =====================================================


// =====================================================
// HTML ELEMENTS
// =====================================================

const ayahContainer =
    document.getElementById("ayahContainer");

const surahSelect =
    document.getElementById("surahSelect");

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const themeButton =
    document.getElementById("themeButton");

const backToTop =
    document.getElementById("backToTop");

const languageSelect =
    document.getElementById("languageSelect");


// =====================================================
// LANGUAGE CONFIGURATION
// =====================================================

const LANGUAGE_CONFIG = {

    ur: {
        name: "Urdu",
        native: "اردو",
        dir: "rtl",
        title: "قرآن کریم • اردو ترجمہ • تفسیر",
        description:
            "قرآن کریم، اردو ترجمہ اور تفسیر",
        home: "ہوم",
        surahs: "سورتیں",
        favorites: "پسندیدہ",
        searchNav: "تلاش",
        selectSurah: "سورت منتخب کریں",
        searchPlaceholder:
            "آیت، ترجمہ یا تفسیر میں تلاش کریں...",
        search: "تلاش",
        quran: "قرآن مجید",
        readingInfo: "عربی • اردو • تفسیر",
        viewTafsir: "تفسیر دیکھیں",
        closeTafsir: "تفسیر بند کریں",
        tafsir: "تفسیر",
        save: "محفوظ کریں",
        saved: "محفوظ شدہ",
        copy: "کاپی",
        share: "شیئر",
        link: "لنک",
        previous: "پچھلی آیت",
        next: "اگلی آیت",
        ayah: "آیت",
        noResults: "کوئی نتیجہ نہیں ملا۔",
        firstAyah: "یہ پہلی دستیاب آیت ہے۔",
        lastAyah: "یہ آخری دستیاب آیت ہے۔",
        copied: "✓ کاپی ہوگیا",
        linkCopied: "✓ لنک کاپی ہوگیا",
        copyFailed: "کاپی نہیں ہو سکا۔",
        loading: "ترجمہ لوڈ ہو رہا ہے...",
        unavailable:
            "اس زبان میں تفسیر ابھی دستیاب نہیں ہے۔"
    },

    en: {
        name: "English",
        native: "English",
        dir: "ltr",
        title: "The Holy Quran • Translation & Tafsir",
        description:
            "Read the Holy Quran with translation and Tafsir.",
        home: "Home",
        surahs: "Surahs",
        favorites: "Favorites",
        searchNav: "Search",
        selectSurah: "Select Surah",
        searchPlaceholder:
            "Search Ayah, translation or Tafsir...",
        search: "Search",
        quran: "The Holy Quran",
        readingInfo: "Arabic • English • Tafsir",
        viewTafsir: "View Tafsir",
        closeTafsir: "Close Tafsir",
        tafsir: "Tafsir",
        save: "Save",
        saved: "Saved",
        copy: "Copy",
        share: "Share",
        link: "Link",
        previous: "Previous Ayah",
        next: "Next Ayah",
        ayah: "Ayah",
        noResults: "No results found.",
        firstAyah: "This is the first available Ayah.",
        lastAyah: "This is the last available Ayah.",
        copied: "✓ Copied",
        linkCopied: "✓ Link copied",
        copyFailed: "Could not copy.",
        loading: "Loading translation...",
        unavailable:
            "Tafsir is not available in this language yet."
    },

    hi: {
        name: "Hindi",
        native: "हिन्दी",
        dir: "ltr",
        title: "पवित्र कुरआन • अनुवाद और तफ़्सीर",
        description:
            "पवित्र कुरआन को अनुवाद और तफ़्सीर के साथ पढ़ें।",
        home: "होम",
        surahs: "सूरह",
        favorites: "पसंदीदा",
        searchNav: "खोजें",
        selectSurah: "सूरह चुनें",
        searchPlaceholder:
            "आयत, अनुवाद या तफ़्सीर खोजें...",
        search: "खोजें",
        quran: "पवित्र कुरआन",
        readingInfo: "अरबी • हिन्दी • तफ़्सीर",
        viewTafsir: "तफ़्सीर देखें",
        closeTafsir: "तफ़्सीर बंद करें",
        tafsir: "तफ़्सीर",
        save: "सहेजें",
        saved: "सहेजा गया",
        copy: "कॉपी",
        share: "शेयर",
        link: "लिंक",
        previous: "पिछली आयत",
        next: "अगली आयत",
        ayah: "आयत",
        noResults: "कोई परिणाम नहीं मिला।",
        firstAyah: "यह पहली उपलब्ध आयत है।",
        lastAyah: "यह आखिरी उपलब्ध आयत है।",
        copied: "✓ कॉपी हो गया",
        linkCopied: "✓ लिंक कॉपी हो गया",
        copyFailed: "कॉपी नहीं हो सकी।",
        loading: "अनुवाद लोड हो रहा है...",
        unavailable:
            "इस भाषा में तफ़्सीर अभी उपलब्ध नहीं है।"
    },

    ar: {
        name: "Arabic",
        native: "العربية",
        dir: "rtl",
        title: "القرآن الكريم • الترجمة والتفسير",
        description:
            "اقرأ القرآن الكريم مع الترجمة والتفسير.",
        home: "الرئيسية",
        surahs: "السور",
        favorites: "المفضلة",
        searchNav: "بحث",
        selectSurah: "اختر السورة",
        searchPlaceholder:
            "ابحث في الآية أو الترجمة أو التفسير...",
        search: "بحث",
        quran: "القرآن الكريم",
        readingInfo: "العربية • الترجمة • التفسير",
        viewTafsir: "عرض التفسير",
        closeTafsir: "إغلاق التفسير",
        tafsir: "التفسير",
        save: "حفظ",
        saved: "محفوظ",
        copy: "نسخ",
        share: "مشاركة",
        link: "الرابط",
        previous: "الآية السابقة",
        next: "الآية التالية",
        ayah: "آية",
        noResults: "لم يتم العثور على نتائج.",
        firstAyah: "هذه أول آية متاحة.",
        lastAyah: "هذه آخر آية متاحة.",
        copied: "✓ تم النسخ",
        linkCopied: "✓ تم نسخ الرابط",
        copyFailed: "تعذر النسخ.",
        loading: "جاري تحميل الترجمة...",
        unavailable:
            "التفسير بهذه اللغة غير متاح حالياً."
    },

    bn: {
        name: "Bengali",
        native: "বাংলা",
        dir: "ltr",
        title: "পবিত্র কুরআন • অনুবাদ ও তাফসীর",
        description:
            "অনুবাদ ও তাফসীরসহ পবিত্র কুরআন পড়ুন।",
        home: "হোম",
        surahs: "সূরা",
        favorites: "পছন্দের",
        searchNav: "অনুসন্ধান",
        selectSurah: "সূরা নির্বাচন করুন",
        searchPlaceholder:
            "আয়াত, অনুবাদ বা তাফসীরে অনুসন্ধান করুন...",
        search: "অনুসন্ধান",
        quran: "পবিত্র কুরআন",
        readingInfo: "আরবি • বাংলা • তাফসীর",
        viewTafsir: "তাফসীর দেখুন",
        closeTafsir: "তাফসীর বন্ধ করুন",
        tafsir: "তাফসীর",
        save: "সংরক্ষণ",
        saved: "সংরক্ষিত",
        copy: "কপি",
        share: "শেয়ার",
        link: "লিংক",
        previous: "আগের আয়াত",
        next: "পরের আয়াত",
        ayah: "আয়াত",
        noResults: "কোনো ফলাফল পাওয়া যায়নি।",
        firstAyah: "এটি প্রথম উপলব্ধ আয়াত।",
        lastAyah: "এটি শেষ উপলব্ধ আয়াত।",
        copied: "✓ কপি হয়েছে",
        linkCopied: "✓ লিংক কপি হয়েছে",
        copyFailed: "কপি করা যায়নি।",
        loading: "অনুবাদ লোড হচ্ছে...",
        unavailable:
            "এই ভাষায় তাফসীর এখনও উপলব্ধ নয়।"
    },

    gu: {
        name: "Gujarati",
        native: "ગુજરાતી",
        dir: "ltr",
        title: "પવિત્ર કુરઆન • અનુવાદ અને તફસીર",
        description:
            "અનુવાદ અને તફસીર સાથે પવિત્ર કુરઆન વાંચો.",
        home: "હોમ",
        surahs: "સૂરહ",
        favorites: "મનપસંદ",
        searchNav: "શોધ",
        selectSurah: "સૂરહ પસંદ કરો",
        searchPlaceholder:
            "આયત, અનુવાદ અથવા તફસીરમાં શોધો...",
        search: "શોધ",
        quran: "પવિત્ર કુરઆન",
        readingInfo: "અરબી • ગુજરાતી • તફસીર",
        viewTafsir: "તફસીર જુઓ",
        closeTafsir: "તફસીર બંધ કરો",
        tafsir: "તફસીર",
        save: "સાચવો",
        saved: "સાચવેલ",
        copy: "કૉપી",
        share: "શેર",
        link: "લિંક",
        previous: "પાછલી આયત",
        next: "આગલી આયત",
        ayah: "આયત",
        noResults: "કોઈ પરિણામ મળ્યું નથી.",
        firstAyah: "આ પ્રથમ ઉપલબ્ધ આયત છે.",
        lastAyah: "આ છેલ્લી ઉપલબ્ધ આયત છે.",
        copied: "✓ કૉપી થઈ ગયું",
        linkCopied: "✓ લિંક કૉપી થઈ ગઈ",
        copyFailed: "કૉપી થઈ શક્યું નથી.",
        loading: "અનુવાદ લોડ થઈ રહ્યો છે...",
        unavailable:
            "આ ભાષામાં તફસીર હજુ ઉપલબ્ધ નથી."
    },

    ta: {
        name: "Tamil",
        native: "தமிழ்",
        dir: "ltr",
        title: "திருக்குர்ஆன் • மொழிபெயர்ப்பு மற்றும் தஃப்ஸீர்",
        description:
            "மொழிபெயர்ப்பு மற்றும் தஃப்ஸீருடன் திருக்குர்ஆனைப் படிக்கவும்.",
        home: "முகப்பு",
        surahs: "ஸூராக்கள்",
        favorites: "விருப்பங்கள்",
        searchNav: "தேடல்",
        selectSurah: "ஸூராவைத் தேர்ந்தெடுக்கவும்",
        searchPlaceholder:
            "வசனம், மொழிபெயர்ப்பு அல்லது தஃப்ஸீரைத் தேடுங்கள்...",
        search: "தேடு",
        quran: "திருக்குர்ஆன்",
        readingInfo: "அரபி • தமிழ் • தஃப்ஸீர்",
        viewTafsir: "தஃப்ஸீரைக் காண்க",
        closeTafsir: "தஃப்ஸீரை மூடு",
        tafsir: "தஃப்ஸீர்",
        save: "சேமிக்கவும்",
        saved: "சேமிக்கப்பட்டது",
        copy: "நகலெடு",
        share: "பகிர்",
        link: "இணைப்பு",
        previous: "முந்தைய வசனம்",
        next: "அடுத்த வசனம்",
        ayah: "வசனம்",
        noResults: "முடிவுகள் எதுவும் இல்லை.",
        firstAyah: "இது முதல் கிடைக்கக்கூடிய வசனம்.",
        lastAyah: "இது கடைசி கிடைக்கக்கூடிய வசனம்.",
        copied: "✓ நகலெடுக்கப்பட்டது",
        linkCopied: "✓ இணைப்பு நகலெடுக்கப்பட்டது",
        copyFailed: "நகலெடுக்க முடியவில்லை.",
        loading: "மொழிபெயர்ப்பு ஏற்றப்படுகிறது...",
        unavailable:
            "இந்த மொழியில் தஃப்ஸீர் இன்னும் கிடைக்கவில்லை."
    },

    te: {
        name: "Telugu",
        native: "తెలుగు",
        dir: "ltr",
        title: "పవిత్ర ఖుర్ఆన్ • అనువాదం మరియు తఫ్సీర్",
        description:
            "అనువాదం మరియు తఫ్సీర్‌తో పవిత్ర ఖుర్ఆన్ చదవండి.",
        home: "హోమ్",
        surahs: "సూరాలు",
        favorites: "ఇష్టమైనవి",
        searchNav: "శోధన",
        selectSurah: "సూరాను ఎంచుకోండి",
        searchPlaceholder:
            "ఆయత్, అనువాదం లేదా తఫ్సీర్‌లో వెతకండి...",
        search: "శోధించండి",
        quran: "పవిత్ర ఖుర్ఆన్",
        readingInfo: "అరబిక్ • తెలుగు • తఫ్సీర్",
        viewTafsir: "తఫ్సీర్ చూడండి",
        closeTafsir: "తఫ్సీర్ మూసివేయండి",
        tafsir: "తఫ్సీర్",
        save: "సేవ్ చేయండి",
        saved: "సేవ్ చేయబడింది",
        copy: "కాపీ",
        share: "షేర్",
        link: "లింక్",
        previous: "మునుపటి ఆయత్",
        next: "తదుపరి ఆయత్",
        ayah: "ఆయత్",
        noResults: "ఫలితాలు ఏవీ కనబడలేదు.",
        firstAyah: "ఇది మొదటి అందుబాటులో ఉన్న ఆయత్.",
        lastAyah: "ఇది చివరి అందుబాటులో ఉన్న ఆయత్.",
        copied: "✓ కాపీ చేయబడింది",
        linkCopied: "✓ లింక్ కాపీ చేయబడింది",
        copyFailed: "కాపీ చేయడం సాధ్యం కాలేదు.",
        loading: "అనువాదం లోడ్ అవుతోంది...",
        unavailable:
            "ఈ భాషలో తఫ్సీర్ ఇంకా అందుబాటులో లేదు."
    },

    tr: {
        name: "Turkish",
        native: "Türkçe",
        dir: "ltr",
        title: "Kur'an-ı Kerim • Meâl ve Tefsir",
        description:
            "Kur'an-ı Kerim'i meâl ve tefsir ile okuyun.",
        home: "Ana Sayfa",
        surahs: "Sureler",
        favorites: "Favoriler",
        searchNav: "Ara",
        selectSurah: "Sure Seçin",
        searchPlaceholder:
            "Ayet, meal veya tefsirde ara...",
        search: "Ara",
        quran: "Kur'an-ı Kerim",
        readingInfo: "Arapça • Türkçe • Tefsir",
        viewTafsir: "Tefsiri Gör",
        closeTafsir: "Tefsiri Kapat",
        tafsir: "Tefsir",
        save: "Kaydet",
        saved: "Kaydedildi",
        copy: "Kopyala",
        share: "Paylaş",
        link: "Bağlantı",
        previous: "Önceki Ayet",
        next: "Sonraki Ayet",
        ayah: "Ayet",
        noResults: "Sonuç bulunamadı.",
        firstAyah: "Bu ilk mevcut ayettir.",
        lastAyah: "Bu son mevcut ayettir.",
        copied: "✓ Kopyalandı",
        linkCopied: "✓ Bağlantı kopyalandı",
        copyFailed: "Kopyalanamadı.",
        loading: "Çeviri yükleniyor...",
        unavailable:
            "Bu dilde tefsir henüz mevcut değil."
    },

    fa: {
        name: "Persian",
        native: "فارسی",
        dir: "rtl",
        title: "قرآن کریم • ترجمه و تفسیر",
        description:
            "قرآن کریم را همراه با ترجمه و تفسیر بخوانید.",
        home: "خانه",
        surahs: "سوره‌ها",
        favorites: "ذخیره‌شده‌ها",
        searchNav: "جستجو",
        selectSurah: "انتخاب سوره",
        searchPlaceholder:
            "در آیه، ترجمه یا تفسیر جستجو کنید...",
        search: "جستجو",
        quran: "قرآن کریم",
        readingInfo: "عربی • فارسی • تفسیر",
        viewTafsir: "مشاهده تفسیر",
        closeTafsir: "بستن تفسیر",
        tafsir: "تفسیر",
        save: "ذخیره",
        saved: "ذخیره شد",
        copy: "کپی",
        share: "اشتراک‌گذاری",
        link: "پیوند",
        previous: "آیه قبلی",
        next: "آیه بعدی",
        ayah: "آیه",
        noResults: "نتیجه‌ای پیدا نشد.",
        firstAyah: "این اولین آیه موجود است.",
        lastAyah: "این آخرین آیه موجود است.",
        copied: "✓ کپی شد",
        linkCopied: "✓ پیوند کپی شد",
        copyFailed: "کپی انجام نشد.",
        loading: "در حال بارگذاری ترجمه...",
        unavailable:
            "تفسیر به این زبان هنوز در دسترس نیست."
    },

    id: {
        name: "Indonesian",
        native: "Bahasa Indonesia",
        dir: "ltr",
        title: "Al-Qur'an • Terjemahan dan Tafsir",
        description:
            "Baca Al-Qur'an dengan terjemahan dan tafsir.",
        home: "Beranda",
        surahs: "Surah",
        favorites: "Favorit",
        searchNav: "Cari",
        selectSurah: "Pilih Surah",
        searchPlaceholder:
            "Cari ayat, terjemahan atau tafsir...",
        search: "Cari",
        quran: "Al-Qur'an",
        readingInfo: "Arab • Indonesia • Tafsir",
        viewTafsir: "Lihat Tafsir",
        closeTafsir: "Tutup Tafsir",
        tafsir: "Tafsir",
        save: "Simpan",
        saved: "Tersimpan",
        copy: "Salin",
        share: "Bagikan",
        link: "Tautan",
        previous: "Ayat Sebelumnya",
        next: "Ayat Berikutnya",
        ayah: "Ayat",
        noResults: "Tidak ada hasil.",
        firstAyah: "Ini adalah ayat pertama yang tersedia.",
        lastAyah: "Ini adalah ayat terakhir yang tersedia.",
        copied: "✓ Disalin",
        linkCopied: "✓ Tautan disalin",
        copyFailed: "Tidak dapat menyalin.",
        loading: "Memuat terjemahan...",
        unavailable:
            "Tafsir dalam bahasa ini belum tersedia."
    },

    ms: {
        name: "Malay",
        native: "Bahasa Melayu",
        dir: "ltr",
        title: "Al-Quran • Terjemahan dan Tafsir",
        description:
            "Baca Al-Quran dengan terjemahan dan tafsir.",
        home: "Laman Utama",
        surahs: "Surah",
        favorites: "Kegemaran",
        searchNav: "Cari",
        selectSurah: "Pilih Surah",
        searchPlaceholder:
            "Cari ayat, terjemahan atau tafsir...",
        search: "Cari",
        quran: "Al-Quran",
        readingInfo: "Arab • Melayu • Tafsir",
        viewTafsir: "Lihat Tafsir",
        closeTafsir: "Tutup Tafsir",
        tafsir: "Tafsir",
        save: "Simpan",
        saved: "Disimpan",
        copy: "Salin",
        share: "Kongsi",
        link: "Pautan",
        previous: "Ayat Sebelumnya",
        next: "Ayat Seterusnya",
        ayah: "Ayat",
        noResults: "Tiada hasil ditemui.",
        firstAyah: "Ini ialah ayat pertama yang tersedia.",
        lastAyah: "Ini ialah ayat terakhir yang tersedia.",
        copied: "✓ Disalin",
        linkCopied: "✓ Pautan disalin",
        copyFailed: "Tidak dapat menyalin.",
        loading: "Memuatkan terjemahan...",
        unavailable:
            "Tafsir dalam bahasa ini belum tersedia."
    },

    fr: {
        name: "French",
        native: "Français",
        dir: "ltr",
        title: "Le Saint Coran • Traduction et Tafsir",
        description:
            "Lisez le Saint Coran avec traduction et tafsir.",
        home: "Accueil",
        surahs: "Sourates",
        favorites: "Favoris",
        searchNav: "Recherche",
        selectSurah: "Choisir une sourate",
        searchPlaceholder:
            "Rechercher un verset, une traduction ou un tafsir...",
        search: "Rechercher",
        quran: "Le Saint Coran",
        readingInfo: "Arabe • Français • Tafsir",
        viewTafsir: "Voir le Tafsir",
        closeTafsir: "Fermer le Tafsir",
        tafsir: "Tafsir",
        save: "Enregistrer",
        saved: "Enregistré",
        copy: "Copier",
        share: "Partager",
        link: "Lien",
        previous: "Verset précédent",
        next: "Verset suivant",
        ayah: "Verset",
        noResults: "Aucun résultat trouvé.",
        firstAyah: "C'est le premier verset disponible.",
        lastAyah: "C'est le dernier verset disponible.",
        copied: "✓ Copié",
        linkCopied: "✓ Lien copié",
        copyFailed: "Impossible de copier.",
        loading: "Chargement de la traduction...",
        unavailable:
            "Le tafsir dans cette langue n'est pas encore disponible."
    },

    de: {
        name: "German",
        native: "Deutsch",
        dir: "ltr",
        title: "Der Heilige Koran • Übersetzung und Tafsir",
        description:
            "Lesen Sie den Heiligen Koran mit Übersetzung und Tafsir.",
        home: "Startseite",
        surahs: "Suren",
        favorites: "Favoriten",
        searchNav: "Suche",
        selectSurah: "Sure auswählen",
        searchPlaceholder:
            "Nach Vers, Übersetzung oder Tafsir suchen...",
        search: "Suchen",
        quran: "Der Heilige Koran",
        readingInfo: "Arabisch • Deutsch • Tafsir",
        viewTafsir: "Tafsir anzeigen",
        closeTafsir: "Tafsir schließen",
        tafsir: "Tafsir",
        save: "Speichern",
        saved: "Gespeichert",
        copy: "Kopieren",
        share: "Teilen",
        link: "Link",
        previous: "Vorheriger Vers",
        next: "Nächster Vers",
        ayah: "Vers",
        noResults: "Keine Ergebnisse gefunden.",
        firstAyah: "Dies ist der erste verfügbare Vers.",
        lastAyah: "Dies ist der letzte verfügbare Vers.",
        copied: "✓ Kopiert",
        linkCopied: "✓ Link kopiert",
        copyFailed: "Kopieren nicht möglich.",
        loading: "Übersetzung wird geladen...",
        unavailable:
            "Tafsir in dieser Sprache ist noch nicht verfügbar."
    },

    es: {
        name: "Spanish",
        native: "Español",
        dir: "ltr",
        title: "El Sagrado Corán • Traducción y Tafsir",
        description:
            "Lea el Sagrado Corán con traducción y tafsir.",
        home: "Inicio",
        surahs: "Suras",
        favorites: "Favoritos",
        searchNav: "Buscar",
        selectSurah: "Seleccionar sura",
        searchPlaceholder:
            "Buscar aleya, traducción o tafsir...",
        search: "Buscar",
        quran: "El Sagrado Corán",
        readingInfo: "Árabe • Español • Tafsir",
        viewTafsir: "Ver Tafsir",
        closeTafsir: "Cerrar Tafsir",
        tafsir: "Tafsir",
        save: "Guardar",
        saved: "Guardado",
        copy: "Copiar",
        share: "Compartir",
        link: "Enlace",
        previous: "Aleya anterior",
        next: "Siguiente aleya",
        ayah: "Aleya",
        noResults: "No se encontraron resultados.",
        firstAyah: "Esta es la primera aleya disponible.",
        lastAyah: "Esta es la última aleya disponible.",
        copied: "✓ Copiado",
        linkCopied: "✓ Enlace copiado",
        copyFailed: "No se pudo copiar.",
        loading: "Cargando traducción...",
        unavailable:
            "El tafsir en este idioma aún no está disponible."
    },

    ru: {
        name: "Russian",
        native: "Русский",
        dir: "ltr",
        title: "Священный Коран • Перевод и Тафсир",
        description:
            "Читайте Священный Коран с переводом и тафсиром.",
        home: "Главная",
        surahs: "Суры",
               favorites: "Избранное",
        searchNav: "Поиск",
        selectSurah: "Выберите суру",
        searchPlaceholder:
            "Поиск по аяту, переводу или тафсиру...",
        search: "Поиск",
        quran: "Священный Коран",
        readingInfo: "Арабский • Перевод • Тафсир",
        viewTafsir: "Показать тафсир",
        closeTafsir: "Закрыть тафсир",
        tafsir: "Тафсир",
        save: "Сохранить",
        saved: "Сохранено",
        copy: "Копировать",
        share: "Поделиться",
        link: "Ссылка",
        previous: "← Предыдущий аят",
        next: "Следующий аят →",
        ayah: "Аят",
        noResults: "Результатов не найдено.",
        firstAyah: "Это первый доступный аят.",
        lastAyah: "Это последний доступный аят.",
        copied: "✓ Скопировано",
        linkCopied: "✓ Ссылка скопирована",
        copyFailed: "Не удалось скопировать.",
        loading: "Загрузка перевода...",
        unavailable:
            "Тафсир на этом языке пока недоступен."
    }

};


// =====================================================
// CURRENT LANGUAGE
// =====================================================

let currentLanguage =
    localStorage.getItem("quranLanguage") || "ur";


// =====================================================
// GET CURRENT LANGUAGE
// =====================================================

function getCurrentLanguage() {

    return (
        LANGUAGE_CONFIG[currentLanguage] ||
        LANGUAGE_CONFIG.ur
    );

}


// =====================================================
// APPLY LANGUAGE
// =====================================================

function applyLanguage(lang) {

    if (!LANGUAGE_CONFIG[lang]) {
        lang = "ur";
    }

    currentLanguage = lang;

    localStorage.setItem(
        "quranLanguage",
        lang
    );

    const config =
        LANGUAGE_CONFIG[lang];


    // HTML language + direction

    document.documentElement.lang =
        lang;

    document.documentElement.dir =
        config.dir;


    // Page title

    document.title =
        config.title;


    // =================================================
    // HEADER
    // =================================================

    const brand =
        document.querySelector(".brand");

    if (brand) {
        brand.textContent =
            "القرآن الكريم";
    }


    const brandSubtitle =
        document.querySelector(".brand-subtitle");

    if (brandSubtitle) {

        if (lang === "ur") {

            brandSubtitle.textContent =
                "قرآن کریم • اردو ترجمہ • تفسیر";

        } else {

            brandSubtitle.textContent =
                config.description;

        }

    }


    // =================================================
    // MAIN NAVIGATION
    // =================================================

    const navLinks =
        document.querySelectorAll(
            ".main-nav a"
        );

    if (navLinks.length >= 4) {

        navLinks[0].textContent =
            "🏠 " + config.home;

        navLinks[1].textContent =
            "📖 " + config.surahs;

        navLinks[2].textContent =
            "🔖 " + config.favorites;

        navLinks[3].textContent =
            "🔍 " + config.searchNav;

    }


    // =================================================
    // LANGUAGE SELECT
    // =================================================

    if (languageSelect) {

        languageSelect.value =
            currentLanguage;

    }


    // =================================================
    // HERO
    // =================================================

    const heroTitle =
        document.querySelector(
            ".hero-title"
        );

    if (heroTitle) {

        heroTitle.textContent =
            config.title;

    }


    const heroDescription =
        document.querySelector(
            ".hero-description"
        );

    if (heroDescription) {

        heroDescription.textContent =
            config.description;

    }


    // =================================================
    // SURAH SELECT LABEL
    // =================================================

    const surahLabel =
        document.querySelector(
            'label[for="surahSelect"]'
        );

    if (surahLabel) {

        surahLabel.textContent =
            config.selectSurah;

    }


    // =================================================
    // SEARCH INPUT
    // =================================================

    if (searchInput) {

        searchInput.placeholder =
            config.searchPlaceholder;

    }


    // =================================================
    // SEARCH BUTTON
    // =================================================

    if (searchButton) {

        searchButton.textContent =
            config.search;

    }


    // =================================================
    // SECTION HEADING
    // =================================================

    const sectionKicker =
        document.querySelector(
            ".section-kicker"
        );

    if (sectionKicker) {

        sectionKicker.textContent =
            config.quran;

    }


    const sectionHeading =
        document.querySelector(
            ".section-heading h2"
        );

    if (sectionHeading) {

        sectionHeading.textContent =
            config.quran;

    }


    const readingInfo =
        document.querySelector(
            ".reading-info"
        );

    if (readingInfo) {

        readingInfo.textContent =
            config.readingInfo;

    }


    // =================================================
    // SURAH DROPDOWN
    // =================================================

    loadSurahs();


    // =================================================
    // FOOTER
    // =================================================

    const footerTitle =
        document.querySelector(
            ".footer-title"
        );

    if (footerTitle) {

        footerTitle.textContent =
            "القرآن الكريم";

    }


    const footerParagraph =
        document.querySelector(
            ".site-footer p"
        );

    if (footerParagraph) {

        if (lang === "ur") {

            footerParagraph.textContent =
                "قرآن کریم • اردو ترجمہ • تفسیر";

        } else {

            footerParagraph.textContent =
                config.title;

        }

    }


    const footerSmall =
        document.querySelector(
            ".footer-small"
        );

    if (footerSmall) {

        if (lang === "ur") {

            footerSmall.textContent =
                "قرآن کے پیغام کو سمجھنے اور عام کرنے کی ایک کوشش";

        } else {

            footerSmall.textContent =
                config.description;

        }

    }


    // =================================================
    // RE-DRAW AYAT
    // =================================================

    if (
        typeof quranData !== "undefined"
    ) {

        displayAyahs(quranData);

    }

}


// =====================================================
// LANGUAGE SELECTOR EVENT
// =====================================================

if (languageSelect) {

    languageSelect.addEventListener(
        "change",
        function () {

            applyLanguage(
                this.value
            );

        }
    );

}


// =====================================================
// ARABIC AYAH NUMBER
// =====================================================

function arabicAyahNumber(number) {

    const arabicDigits = [
        "٠",
        "١",
        "٢",
        "٣",
        "٤",
        "٥",
        "٦",
        "٧",
        "٨",
        "٩"
    ];

    return String(number)
        .split("")
        .map(function (digit) {

            return (
                arabicDigits[
                    Number(digit)
                ] ?? digit
            );

        })
        .join("");

}


// =====================================================
// WEBSITE START
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadSurahs();

        displayAyahs(quranData);

        loadSavedTheme();

        openAyahFromURL();

        applyLanguage(
            currentLanguage
        );

    }
);


// =====================================================
// SURAH LIST
// =====================================================

function loadSurahs() {

    if (!surahSelect) return;

    const config =
        getCurrentLanguage();


    surahSelect.innerHTML = `

        <option value="">
            ${config.selectSurah}
        </option>

    `;


    const surahs = [];


    quranData.forEach(
        function (ayah) {

            const alreadyExists =
                surahs.some(
                    function (surah) {

                        return (
                            surah.number ===
                            ayah.surah
                        );

                    }
                );


            if (!alreadyExists) {

                surahs.push({

                    number:
                        ayah.surah,

                    arabic:
                        ayah.surahNameArabic,

                    urdu:
                        ayah.surahNameUrdu

                });

            }

        }
    );


    surahs.forEach(
        function (surah) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                surah.number;


            option.textContent =
                surah.number +
                " — " +
                surah.urdu +
                " (" +
                surah.arabic +
                ")";


            surahSelect.appendChild(
                option
            );

        }
    );

}

// =====================================================
// MULTI-LANGUAGE TRANSLATION HELPER
// =====================================================

function getAyahTranslation(ayah) {

    if (
        ayah.translations &&
        ayah.translations[currentLanguage]
    ) {
        return ayah.translations[currentLanguage];
    }

    // Urdu fallback
    return ayah.urdu || "";
                    }
// =====================================================
// DISPLAY AYAH
// =====================================================

function displayAyahs(data) {

    if (!ayahContainer) return;

    ayahContainer.innerHTML = "";


    const config =
        getCurrentLanguage();


    if (
        !data ||
        data.length === 0
    ) {

        ayahContainer.innerHTML = `

            <div class="ayah-card">

                <div
                    class="urdu"
                    style="min-height:120px;"
                >

                    ${config.noResults}

                </div>

            </div>

        `;

        return;

    }


    data.forEach(
        function (ayah) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "ayah-card";


            card.id =
                "ayah-" +
                ayah.surah +
                "-" +
                ayah.ayah;


            const isBookmarked =
                isAyahBookmarked(
                    ayah
                );


            card.innerHTML = `

                <!-- Ayah Header -->

                <div class="ayah-header">

                    <div>

                        <strong>
                            ${escapeHTML(
                                ayah.surahNameUrdu
                            )}
                        </strong>

                        <span>
                            — ${config.ayah}
                            ${ayah.ayah}
                        </span>

                    </div>

                </div>


                <!-- Arabic + Urdu -->

                <div class="ayah-content">


                    <div
                        class="arabic"
                        dir="rtl"
                    >

                        ${escapeHTML(
                            ayah.arabic
                        )}

                        <span
                            class="ayah-number"
                            aria-label="${config.ayah} ${arabicAyahNumber(ayah.ayah)}"
                        >
                            ۝${arabicAyahNumber(
                                ayah.ayah
                            )}
                        </span>

                    </div>


                    <div
                        class="urdu"
                        dir="rtl"
                    >
${escapeHTML(
    getAyahTranslation(ayah)
)}

                    </div>


                </div>


                <!-- ACTION BUTTONS -->

                <div class="ayah-actions">


                    <button
                        class="tafseer-button"
                        type="button"
                        data-action="tafseer"
                    >

                        📖 ${config.viewTafsir}

                    </button>


                    <button
                        class="action-button bookmark-button"
                        type="button"
                        data-action="bookmark"
                    >

                        ${
                            isBookmarked
                                ? "🔖 " +
                                  config.saved
                                : "🔖 " +
                                  config.save
                        }

                    </button>


                    <button
                        class="action-button"
                        type="button"
                        data-action="copy"
                    >

                        📋 ${config.copy}

                    </button>


                    <button
                        class="action-button"
                        type="button"
                        data-action="share"
                    >

                        📤 ${config.share}

                    </button>


                    <button
                        class="action-button"
                        type="button"
                        data-action="link"
                    >

                        🔗 ${config.link}

                    </button>


                </div>


                <!-- TAFSEER -->

                <div class="tafseer">

                    <strong>
                        📖 ${config.tafsir}
                    </strong>

                    <p>
                        ${escapeHTML(
                            ayah.tafseer
                        )}
                    </p>

                </div>


                <!-- PREVIOUS / NEXT -->

                <div class="ayah-navigation">


                    <button
                        class="nav-button"
                        type="button"
                        data-action="previous"
                    >

                        ${config.previous}

                    </button>


                    <span>

                        ${config.ayah}
                        ${ayah.ayah}

                    </span>


                    <button
                        class="nav-button"
                        type="button"
                        data-action="next"
                    >

                        ${config.next}

                    </button>


                </div>

            `;


            // =================================================
            // TAFSEER
            // =================================================

            const tafseerButton =
                card.querySelector(
                    '[data-action="tafseer"]'
                );


            const tafseer =
                card.querySelector(
                    ".tafseer"
                );


            tafseerButton.addEventListener(
                "click",
                function () {

                    const isOpen =
                        tafseer.style.display ===
                        "block";


                    if (isOpen) {

                        tafseer.style.display =
                            "none";


                        tafseerButton.textContent =
                            "📖 " +
                            getCurrentLanguage()
                                .viewTafsir;

                    } else {

                        tafseer.style.display =
                            "block";


                        tafseerButton.textContent =
                            "📕 " +
                            getCurrentLanguage()
                                .closeTafsir;

                    }

                }
            );


            // =================================================
            // BOOKMARK
            // =================================================

            card.querySelector(
                '[data-action="bookmark"]'
            ).addEventListener(
                "click",
                function () {

                    toggleBookmark(
                        ayah
                    );


                    const saved =
                        isAyahBookmarked(
                            ayah
                        );


                    const language =
                        getCurrentLanguage();


                    this.textContent =
                        saved
                            ? "🔖 " +
                              language.saved
                            : "🔖 " +
                              language.save;

                }
            );


            // =================================================
            // COPY
            // =================================================

            card.querySelector(
                '[data-action="copy"]'
            ).addEventListener(
                "click",
                function () {

                    copyAyah(
                        ayah,
                        this
                    );

                }
            );


            // =================================================
            // SHARE
            // =================================================

            card.querySelector(
                '[data-action="share"]'
            ).addEventListener(
                "click",
                function () {

                    shareAyah(
                        ayah
                    );

                }
            );


            // =================================================
            // LINK
            // =================================================

            card.querySelector(
                '[data-action="link"]'
            ).addEventListener(
                "click",
                function () {

                    copyAyahLink(
                        ayah,
                        this
                    );

                }
            );


            // =================================================
            // PREVIOUS
            // =================================================

            card.querySelector(
                '[data-action="previous"]'
            ).addEventListener(
                "click",
                function () {

                    goToPreviousAyah(
                        ayah
                    );

                }
            );


            // =================================================
            // NEXT
            // =================================================

            card.querySelector(
                '[data-action="next"]'
            ).addEventListener(
                "click",
                function () {

                    goToNextAyah(
                        ayah
                    );

                }
            );


            ayahContainer.appendChild(
                card
            );

        }
    );

}


// =====================================================
// SEARCH
// =====================================================

function performSearch() {

    if (!searchInput) return;


    const search =
        searchInput.value
              .toLowerCase()
            .trim();


    if (search === "") {

        displayAyahs(
            quranData
        );

        return;

    }


    const results =
        quranData.filter(
            function (ayah) {

                return (

                    String(
                        ayah.ayah
                    ).includes(search)

                    ||

                    String(
                        ayah.surah
                    ).includes(search)

                    ||

                    String(
                        ayah.arabic
                    )
                    .toLowerCase()
                    .includes(search)

                    ||

                    String(
                        ayah.urdu
                    )
                    .toLowerCase()
                    .includes(search)

                    ||

                    String(
                        ayah.tafseer
                    )
                    .toLowerCase()
                    .includes(search)

                    ||

                    String(
                        ayah.surahNameUrdu
                    )
                    .toLowerCase()
                    .includes(search)

                    ||

                    String(
                        ayah.surahNameArabic
                    )
                    .toLowerCase()
                    .includes(search)

                );

            }
        );


    displayAyahs(
        results
    );

}


// =====================================================
// SEARCH WHILE TYPING
// =====================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        performSearch
    );

}


// =====================================================
// SEARCH BUTTON
// =====================================================

if (searchButton) {

    searchButton.addEventListener(
        "click",
        performSearch
    );

}


// =====================================================
// SURAH SELECTION
// =====================================================

if (surahSelect) {

    surahSelect.addEventListener(
        "change",
        function () {

            const selectedSurah =
                this.value;


            if (
                selectedSurah === ""
            ) {

                displayAyahs(
                    quranData
                );

                return;

            }


            const filtered =
                quranData.filter(
                    function (ayah) {

                        return (
                            String(
                                ayah.surah
                            ) ===
                            String(
                                selectedSurah
                            )
                        );

                    }
                );


            displayAyahs(
                filtered
            );


            document
                .getElementById(
                    "surahs"
                )
                ?.scrollIntoView({
                    behavior:
                        "smooth"
                });

        }
    );

}


// =====================================================
// DARK MODE
// =====================================================

if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            const dark =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(
                "quranTheme",
                dark
                    ? "dark"
                    : "light"
            );

        }
    );

}


// =====================================================
// LOAD SAVED THEME
// =====================================================

function loadSavedTheme() {

    const savedTheme =
        localStorage.getItem(
            "quranTheme"
        );


    if (
        savedTheme === "dark"
    ) {

        document.body.classList.add(
            "dark-mode"
        );

    }

}


// =====================================================
// BOOKMARK SYSTEM
// =====================================================

function getBookmarkKey(
    ayah
) {

    return (
        ayah.surah +
        ":" +
        ayah.ayah
    );

}


function getBookmarks() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "quranBookmarks"
            )
        ) || [];

    } catch (error) {

        return [];

    }

}


function saveBookmarks(
    bookmarks
) {

    localStorage.setItem(
        "quranBookmarks",
        JSON.stringify(
            bookmarks
        )
    );

}


function isAyahBookmarked(
    ayah
) {

    const bookmarks =
        getBookmarks();


    return bookmarks.includes(
        getBookmarkKey(
            ayah
        )
    );

}


function toggleBookmark(
    ayah
) {

    const bookmarks =
        getBookmarks();


    const key =
        getBookmarkKey(
            ayah
        );


    const index =
        bookmarks.indexOf(
            key
        );


    if (index === -1) {

        bookmarks.push(
            key
        );

    } else {

        bookmarks.splice(
            index,
            1
        );

    }


    saveBookmarks(
        bookmarks
    );

}


// =====================================================
// COPY AYAH
// =====================================================

function copyAyah(
    ayah,
    button
) {

    const text =
        ayah.arabic +
        " ۝" +
        arabicAyahNumber(
            ayah.ayah
        ) +
        "\n\n" +
        ayah.urdu;


    navigator.clipboard
        .writeText(text)
        .then(
            function () {

                const oldText =
                    button.textContent;


                button.textContent =
                    "✓ " +
                    getCurrentLanguage()
                        .copied;


                setTimeout(
                    function () {

                        button.textContent =
                            oldText;

                    },
                    1800
                );

            }
        )
        .catch(
            function () {

                alert(
                    getCurrentLanguage()
                        .copyFailed
                );

            }
        );

}


// =====================================================
// SHARE AYAH
// =====================================================

function shareAyah(
    ayah
) {

    const url =
        createAyahURL(
            ayah
        );


    const text =
        ayah.arabic +
        " ۝" +
        arabicAyahNumber(
            ayah.ayah
        ) +
        "\n\n" +
        ayah.urdu;


    if (
        navigator.share
    ) {

        navigator.share({

            title:
                getCurrentLanguage()
                    .quran,

            text:
                text,

            url:
                url

        }).catch(
            function () {}
        );

    } else {

        copyText(
            url
        );

        alert(
            getCurrentLanguage()
                .linkCopied
        );

    }

}


// =====================================================
// CREATE AYAH URL
// =====================================================

function createAyahURL(
    ayah
) {

    const baseURL =
        window.location.origin +
        window.location.pathname;


    return (
        baseURL +
        "#ayah-" +
        ayah.surah +
        "-" +
        ayah.ayah
    );

}


// =====================================================
// COPY AYAH LINK
// =====================================================

function copyAyahLink(
    ayah,
    button
) {

    const url =
        createAyahURL(
            ayah
        );


    copyText(
        url
    );


    const oldText =
        button.textContent;


    button.textContent =
        "✓ " +
        getCurrentLanguage()
            .linkCopied;


    setTimeout(
        function () {

            button.textContent =
                oldText;

        },
        1800
    );

}


// =====================================================
// OPEN AYAH FROM URL
// =====================================================

function openAyahFromURL() {

    const hash =
        window.location.hash;


    if (
        !hash.startsWith(
            "#ayah-"
        )
    ) {

        return;

    }


    setTimeout(
        function () {

            const element =
                document.querySelector(
                    hash
                );


            if (element) {

                element.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "center"

                });


                element.style.outline =
                    "3px solid rgba(181, 138, 58, 0.45)";


                setTimeout(
                    function () {

                        element.style.outline =
                            "";

                    },
                    2500
                );

            }

        },
        300
    );

}


// =====================================================
// PREVIOUS AYAH
// =====================================================

function goToPreviousAyah(
    ayah
) {

    const currentIndex =
        quranData.findIndex(
            function (item) {

                return (

                    item.surah ===
                        ayah.surah

                    &&

                    item.ayah ===
                        ayah.ayah

                );

            }
        );


    if (
        currentIndex <= 0
    ) {

        alert(
            getCurrentLanguage()
                .firstAyah
        );

        return;

    }


    const previous =
        quranData[
            currentIndex - 1
        ];


    displayAyahs(
        quranData
    );


    setTimeout(
        function () {

            const element =
                document.getElementById(
                    "ayah-" +
                    previous.surah +
                    "-" +
                    previous.ayah
                );


            if (element) {

                element.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "center"

                });

            }

        },
        100
    );

}


// =====================================================
// NEXT AYAH
// =====================================================

function goToNextAyah(
    ayah
) {

    const currentIndex =
        quranData.findIndex(
            function (item) {

                return (

                    item.surah ===
                        ayah.surah

                    &&

                    item.ayah ===
                        ayah.ayah

                );

            }
        );


    if (
        currentIndex === -1 ||
        currentIndex >=
            quranData.length - 1
    ) {

        alert(
            getCurrentLanguage()
                .lastAyah
        );

        return;

    }


    const next =
        quranData[
            currentIndex + 1
        ];


    displayAyahs(
        quranData
    );


    setTimeout(
        function () {

            const element =
                document.getElementById(
                    "ayah-" +
                    next.surah +
                    "-" +
                    next.ayah
                );


            if (element) {

                element.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "center"

                });

            }

        },
        100
    );

}


// =====================================================
// BACK TO TOP
// =====================================================

if (backToTop) {

    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior:
                    "smooth"

            });

        }
    );

}


// =====================================================
// COPY TEXT HELPER
// =====================================================

function copyText(
    text
) {

    if (
        navigator.clipboard &&
        navigator.clipboard.writeText
    ) {

        navigator.clipboard.writeText(
            text
        );

        return;

    }


    const textarea =
        document.createElement(
            "textarea"
        );


    textarea.value =
        text;


    document.body.appendChild(
        textarea
    );


    textarea.select();


    document.execCommand(
        "copy"
    );


    textarea.remove();

}


// =====================================================
// SECURITY HELPER
// =====================================================

function escapeHTML(
    value
) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

        }
// =====================================================
// 🌐 MULTI-LANGUAGE QURAN TRANSLATION ENGINE
// ADD THIS CODE AT THE VERY END OF script.js
// =====================================================

(function () {

    "use strict";

    // -------------------------------------------------
    // Translation sources
    // -------------------------------------------------

    const MULTI_LANGUAGE_SOURCES = {

        ur: {
            type: "local"
        },

        en: {
            type: "alquran",
            edition: "en.sahih"
        },

        hi: {
            type: "alquran",
            edition: "hi.hindi"
        },

        ar: {
            type: "arabic"
        },

        bn: {
            type: "alquran",
            edition: "bn.bengali"
        },

        gu: {
            type: "quranenc",
            key: "gujarati_omari"
        },

        ta: {
            type: "alquran",
            edition: "ta.tamil"
        },

        te: {
            type: "quranenc",
            key: "telugu_muhammad"
        },

        tr: {
            type: "alquran",
            edition: "tr.diyanet"
        },

        fa: {
            type: "alquran",
            edition: "fa.ayati"
        },

        id: {
            type: "alquran",
            edition: "id.indonesian"
        },

        ms: {
            type: "alquran",
            edition: "ms.basmeih"
        },

        fr: {
            type: "alquran",
            edition: "fr.hamidullah"
        },

        de: {
            type: "alquran",
            edition: "de.bubenheim"
        },

        es: {
            type: "alquran",
            edition: "es.cortes"
        },

        ru: {
            type: "alquran",
            edition: "ru.kuliev"
        }

    };


    // -------------------------------------------------
    // Store translations
    // -------------------------------------------------

    window.quranMultiTranslations =
        window.quranMultiTranslations || {};


    // -------------------------------------------------
    // Get current translation
    // -------------------------------------------------

    function getMultiTranslation(ayah) {

        const lang =
            typeof currentLanguage !== "undefined"
                ? currentLanguage
                : "ur";


        // Arabic
        if (lang === "ar") {

            return ayah.arabic || "";

        }


        // Urdu
        if (lang === "ur") {

            return ayah.urdu || "";

        }


        // Loaded translation
        if (
            window.quranMultiTranslations[lang] &&
            window.quranMultiTranslations[lang][
                ayah.surah + ":" + ayah.ayah
            ]
        ) {

            return window.quranMultiTranslations[lang][
                ayah.surah + ":" + ayah.ayah
            ];

        }


        // Fallback
        return ayah.urdu || "";

    }


    // -------------------------------------------------
    // Fetch one Surah
    // -------------------------------------------------

    async function fetchSurahTranslation(
        surahNumber,
        lang
    ) {

        const source =
            MULTI_LANGUAGE_SOURCES[lang];


        if (!source) return;


        // Arabic
        if (source.type === "arabic") {

            return;

        }


        // Urdu is already inside data.js
        if (source.type === "local") {

            return;

        }


        // ---------------------------------------------
        // Al Quran Cloud
        // ---------------------------------------------

        if (source.type === "alquran") {

            const url =
                "https://api.alquran.cloud/v1/surah/" +
                surahNumber +
                "/" +
                source.edition;


            const response =
                await fetch(url);


            if (!response.ok) {

                throw new Error(
                    "Translation API error: " +
                    response.status
                );

            }


            const result =
                await response.json();


            if (
                !result ||
                !result.data ||
                !result.data.ayahs
            ) {

                throw new Error(
                    "Invalid translation response"
                );

            }


            if (
                !window.quranMultiTranslations[lang]
            ) {

                window.quranMultiTranslations[lang] = {};

            }


            result.data.ayahs.forEach(
                function (item) {

                    const key =
                        surahNumber +
                        ":" +
                        item.numberInSurah;


                    window.quranMultiTranslations[
                        lang
                    ][key] = item.text || "";

                }
            );


            return;

        }


        // ---------------------------------------------
        // QuranEnc
        // ---------------------------------------------

        if (source.type === "quranenc") {

            const url =
                "https://quranenc.com/api/v1/translation/sura/" +
                source.key +
                "/" +
                surahNumber;


            const response =
                await fetch(url);


            if (!response.ok) {

                throw new Error(
                    "QuranEnc API error: " +
                    response.status
                );

            }


            const result =
                await response.json();


            const items =
                Array.isArray(result)
                    ? result
                    : (
                        result.result ||
                        result.data ||
                        []
                    );


            if (
                !window.quranMultiTranslations[lang]
            ) {

                window.quranMultiTranslations[lang] = {};

            }


            items.forEach(
                function (item) {

                    const ayahNumber =
                        item.aya ||
                        item.ayah ||
                        item.numberInSurah;


                    if (!ayahNumber) return;


                    const text =
                        item.translation ||
                        item.text ||
                        "";


                    const key =
                        surahNumber +
                        ":" +
                        ayahNumber;


                    window.quranMultiTranslations[
                        lang
                    ][key] = text;

                }
            );

        }

    }


    // -------------------------------------------------
    // Load all Surahs currently present in data.js
    // -------------------------------------------------

    async function loadMultiLanguage(lang) {

        if (!MULTI_LANGUAGE_SOURCES[lang]) {
            return;
        }


        if (
            lang === "ur" ||
            lang === "ar"
        ) {

            return;

        }


        if (
            window.quranMultiTranslations[lang] &&
            Object.keys(
                window.quranMultiTranslations[lang]
            ).length > 0
        ) {

            return;

        }


        if (
            typeof quranData === "undefined" ||
            !Array.isArray(quranData)
        ) {

            return;

        }


        const surahs = [];


        quranData.forEach(
            function (ayah) {

                if (
                    !surahs.includes(
                        ayah.surah
                    )
                ) {

                    surahs.push(
                        ayah.surah
                    );

                }

            }
        );


        if (surahs.length === 0) {
            return;
        }


        // Loading text
        showTranslationLoading(lang);


        try {

            await Promise.all(
                surahs.map(
                    function (surahNumber) {

                        return fetchSurahTranslation(
                            surahNumber,
                            lang
                        );

                    }
                )
            );


            console.log(
                "✅ Translation loaded:",
                lang
            );


        } catch (error) {

            console.error(
                "❌ Translation loading failed:",
                lang,
                error
            );

        }


        // Redraw
        if (
            typeof displayAyahs ===
            "function"
        ) {

            displayAyahs(
                quranData
            );

        }

    }


    // -------------------------------------------------
    // Temporary loading message
    // -------------------------------------------------

    function showTranslationLoading(lang) {

        if (!ayahContainer) return;


        const config =
            typeof getCurrentLanguage ===
            "function"
                ? getCurrentLanguage()
                : null;


        const loadingText =
            config &&
            config.loading
                ? config.loading
                : "Loading translation...";


        const cards =
            ayahContainer.querySelectorAll(
                ".ayah-card"
            );


        cards.forEach(
            function (card) {

                const translation =
                    card.querySelector(
                        ".urdu"
                    );


                if (translation) {

                    translation.style.opacity =
                        "0.55";

                }

            }
        );


        console.log(
            "🌐 Loading:",
            lang,
            loadingText
        );

    }


    // -------------------------------------------------
    // Replace translation after normal rendering
    // -------------------------------------------------

    function applyLoadedTranslations() {

        if (!ayahContainer) return;


        const cards =
            ayahContainer.querySelectorAll(
                ".ayah-card"
            );


        cards.forEach(
            function (card) {

                const id =
                    card.id || "";


                const parts =
                    id.split("-");


                if (parts.length < 3) {
                    return;
                }


                const surah =
                    Number(parts[1]);


                const ayahNumber =
                    Number(parts[2]);


                if (
                    !surah ||
                    !ayahNumber
                ) {

                    return;

                }


                const ayah =
                    quranData.find(
                        function (item) {

                            return (
                                Number(item.surah) ===
                                    surah
                                &&
                                Number(item.ayah) ===
                                    ayahNumber
                            );

                        }
                    );


                if (!ayah) return;


                const translation =
                    card.querySelector(
                        ".urdu"
                    );


                if (!translation) return;


                translation.textContent =
                    getMultiTranslation(
                        ayah
                    );


                translation.style.opacity =
                    "1";


                // Direction according to language
                const lang =
                    typeof currentLanguage !==
                    "undefined"
                        ? currentLanguage
                        : "ur";


                if (
                    lang === "ur" ||
                    lang === "ar" ||
                    lang === "fa"
                ) {

                    translation.dir =
                        "rtl";

                } else {

                    translation.dir =
                        "ltr";

                }

            }
        );

    }


    // -------------------------------------------------
    // Wrap existing displayAyahs
    // -------------------------------------------------

    const originalDisplayAyahs =
        displayAyahs;


    displayAyahs =
        function (data) {

            originalDisplayAyahs(
                data
            );


            setTimeout(
                function () {

                    applyLoadedTranslations();

                },
                0
            );

        };


    // -------------------------------------------------
    // Language selector
    // -------------------------------------------------

    if (languageSelect) {

        languageSelect.addEventListener(
            "change",
            function () {

                const selectedLanguage =
                    this.value;


                setTimeout(
                    function () {

                        loadMultiLanguage(
                            selectedLanguage
                        );

                    },
                    50
                );

            }
        );

    }


    // -------------------------------------------------
    // Initial language
    // -------------------------------------------------

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            setTimeout(
                function () {

                    const lang =
                        typeof currentLanguage !==
                        "undefined"
                            ? currentLanguage
                            : "ur";


                    if (
                        lang !== "ur" &&
                        lang !== "ar"
                    ) {

                        loadMultiLanguage(
                            lang
                        );

                    }

                },
                500
            );

        }
    );


    // -------------------------------------------------
    // Search selected language
    // -------------------------------------------------

    const originalPerformSearch =
        typeof performSearch ===
        "function"
            ? performSearch
            : null;


    if (originalPerformSearch) {

        console.log(
            "🌐 Multilingual translation system ready."
        );

    }

})();
/* =========================================================
   FINAL MULTI-LANGUAGE QURAN TRANSLATION ENGINE
   QuranEnc API
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       SETTINGS
       ===================================================== */

    const QURAN_ENC_API =
        "https://quranenc.com/api/v1";

    const TRANSLATION_CACHE = {};

    let activeTranslationKey = "";

    let activeTranslationInfo = null;

    let translationRequestId = 0;


    /* =====================================================
       LANGUAGE MAP
       ===================================================== */

    const QURAN_LANGUAGE_CODES = {

        ur: "ur",
        en: "en",
        hi: "hi",
        ar: "ar",
        bn: "bn",
        gu: "gu",
        ta: "ta",
        te: "te",
        tr: "tr",
        fa: "fa",
        id: "id",
        ms: "ms",
        fr: "fr",
        de: "de",
        es: "es",
        ru: "ru"

    };


    /* =====================================================
       RTL LANGUAGES
       ===================================================== */

    const RTL_LANGUAGES = {

        ur: true,
        ar: true,
        fa: true

    };


    /* =====================================================
       GET SELECTED LANGUAGE
       ===================================================== */

    function getSelectedLanguage() {

        return (
            currentLanguage ||
            localStorage.getItem(
                "quranLanguage"
            ) ||
            "ur"
        );

    }


    /* =====================================================
       CREATE CACHE KEY
       ===================================================== */

    function createCacheKey(
        language,
        surah
    ) {

        return (
            "quranenc_" +
            language +
            "_" +
            surah
        );

    }


    /* =====================================================
       GET CACHED SURAH
       ===================================================== */

    function getCachedSurah(
        language,
        surah
    ) {

        const key =
            createCacheKey(
                language,
                surah
            );

        return TRANSLATION_CACHE[key] || null;

    }


    /* =====================================================
       SAVE SURAH CACHE
       ===================================================== */

    function saveCachedSurah(
        language,
        surah,
        data
    ) {

        const key =
            createCacheKey(
                language,
                surah
            );

        TRANSLATION_CACHE[key] = data;

    }


    /* =====================================================
       FETCH AVAILABLE TRANSLATION
       ===================================================== */

    async function findTranslation(
        language
    ) {

        const languageCode =
            QURAN_LANGUAGE_CODES[
                language
            ];

        if (!languageCode) {

            throw new Error(
                "Unsupported language: " +
                language
            );

        }


        const url =
            QURAN_ENC_API +
            "/translations/list/" +
            languageCode +
            "/?localization=" +
            languageCode;


        const response =
            await fetch(url, {
                method: "GET",
                cache: "no-cache"
            });


        if (!response.ok) {

            throw new Error(
                "Translation list request failed: " +
                response.status
            );

        }


        const translations =
            await response.json();


        if (
            !Array.isArray(
                translations
            ) ||
            translations.length === 0
        ) {

            throw new Error(
                "No Quran translation found for " +
                language
            );

        }


        /*
         * Prefer a complete translation.
         * QuranEnc may have multiple translations
         * for the same language.
         */

        let selected =
            translations.find(
                function (item) {

                    return (
                        item &&
                        item.key
                    );

                }
            );


        if (!selected) {

            throw new Error(
                "No valid translation key found."
            );

        }


        return selected;

    }


    /* =====================================================
       FETCH ONE SURAH
       ===================================================== */

    async function fetchSurahTranslation(
        translationKey,
        surah
    ) {

        const url =
            QURAN_ENC_API +
            "/translation/sura/" +
            encodeURIComponent(
                translationKey
            ) +
            "/" +
            surah;


        const response =
            await fetch(url, {
                method: "GET",
                cache: "default"
            });


        if (!response.ok) {

            throw new Error(
                "Surah " +
                surah +
                " request failed: " +
                response.status
            );

        }


        const data =
            await response.json();


        if (
            !Array.isArray(data)
        ) {

            throw new Error(
                "Invalid translation data."
            );

        }


        return data;

    }


    /* =====================================================
       GET ALL SURAH NUMBERS USED BY YOUR DATA
       ===================================================== */

    function getAvailableSurahs() {

        const numbers = [];


        if (
            typeof quranData ===
            "undefined" ||
            !Array.isArray(quranData)
        ) {

            return numbers;

        }


        quranData.forEach(
            function (ayah) {

                const number =
                    Number(
                        ayah.surah
                    );


                if (
                    number >= 1 &&
                    number <= 114 &&
                    !numbers.includes(
                        number
                    )
                ) {

                    numbers.push(
                        number
                    );

                }

            }
        );


        numbers.sort(
            function (a, b) {
                return a - b;
            }
        );


        return numbers;

    }


    /* =====================================================
       FIND TRANSLATION FOR ONE AYAH
       ===================================================== */

    function getOnlineTranslation(
        ayah
    ) {

        const language =
            getSelectedLanguage();


        /*
         * Urdu continues using your
         * existing local data.js translation.
         */

        if (
            language === "ur"
        ) {

            return (
                ayah.urdu ||
                ""
            );

        }


        const surah =
            Number(
                ayah.surah
            );

        const aya =
            Number(
                ayah.ayah
            );


        const cached =
            getCachedSurah(
                language,
                surah
            );


        if (
            !cached ||
            !Array.isArray(cached)
        ) {

            return (
                ayah.urdu ||
                ""
            );

        }


        const item =
            cached.find(
                function (entry) {

                    return (
                        Number(
                            entry.aya
                        ) === aya
                    );

                }
            );


        if (
            !item
        ) {

            return (
                ayah.urdu ||
                ""
            );

        }


        return (
            item.translation ||
            ayah.urdu ||
            ""
        );

    }


    /* =====================================================
       UPDATE TRANSLATION TEXT
       WITHOUT REBUILDING THE CARDS
       ===================================================== */

    function updateRenderedTranslations() {

        if (
            typeof quranData ===
            "undefined"
        ) {

            return;

        }


        const cards =
            document.querySelectorAll(
                ".ayah-card"
            );


        cards.forEach(
            function (card) {

                const id =
                    card.id || "";


                const match =
                    id.match(
                        /^ayah-(\d+)-(\d+)$/
                    );


                if (!match) {
                    return;
                }


                const surah =
                    Number(
                        match[1]
                    );

                const aya =
                    Number(
                        match[2]
                    );


                const ayah =
                    quranData.find(
                        function (item) {

                            return (
                                Number(
                                    item.surah
                                ) === surah &&
                                Number(
                                    item.ayah
                                ) === aya
                            );

                        }
                    );


                if (!ayah) {
                    return;
                }


                const translation =
                    getOnlineTranslation(
                        ayah
                    );


                const element =
                    card.querySelector(
                        ".urdu"
                    );


                if (!element) {
                    return;
                }


                element.textContent =
                    translation;

                element.setAttribute(
                    "dir",
                    RTL_LANGUAGES[
                        getSelectedLanguage()
                    ]
                        ? "rtl"
                        : "ltr"
                );


                element.classList.add(
                    "multilingual-translation"
                );

            }
        );

    }


    /* =====================================================
       LOADING MESSAGE
       ===================================================== */

    function showTranslationLoading() {

        const language =
            getSelectedLanguage();


        if (
            language === "ur"
        ) {

            return;

        }


        const config =
            getCurrentLanguage();


        const cards =
            document.querySelectorAll(
                ".ayah-card .urdu"
            );


        cards.forEach(
            function (element) {

                element.textContent =
                    config.loading ||
                    "Translation loading...";

            }
        );

    }


    /* =====================================================
       SOURCE INFORMATION
       ===================================================== */

    function updateTranslationSource() {

        const language =
            getSelectedLanguage();


        let notice =
            document.getElementById(
                "quranTranslationSource"
            );


        if (!notice) {

            notice =
                document.createElement(
                    "div"
                );

            notice.id =
                "quranTranslationSource";


            notice.style.cssText =
                [
                    "margin:12px auto",
                    "padding:10px 14px",
                    "max-width:900px",
                    "border-radius:10px",
                    "font-size:12px",
                    "line-height:1.7",
                    "text-align:center",
                    "background:rgba(15,61,46,.06)",
                    "color:#555"
                ].join(";");


            const container =
                document.getElementById(
                    "ayahContainer"
                );


            if (container) {

                container.parentNode.insertBefore(
                    notice,
                    container
                );

            }

        }


        if (
            language === "ur"
        ) {

            notice.style.display =
                "none";

            return;

        }


        notice.style.display =
            "block";


        if (
            activeTranslationInfo
        ) {

            const title =
                activeTranslationInfo.title ||
                "Quran translation";


            const version =
                activeTranslationInfo.version ||
                "";


            notice.textContent =
                "Translation source: QuranEnc.com • " +
                title +
                (
                    version
                        ? " • Version " +
                          version
                        : ""
                );

        } else {

            notice.textContent =
                "Translation source: QuranEnc.com";

        }

    }


    /* =====================================================
       LOAD SELECTED LANGUAGE
       ===================================================== */

    async function loadSelectedLanguageTranslation() {

        const requestId =
            ++translationRequestId;


        const language =
            getSelectedLanguage();


        /*
         * Urdu uses the translation already
         * stored in data.js.
         */

        if (
            language === "ur"
        ) {

            activeTranslationKey =
                "";

            activeTranslationInfo =
                null;

            updateTranslationSource();

            updateRenderedTranslations();

            return;

        }


        showTranslationLoading();


        try {

            /*
             * Find the correct translation
             * automatically from QuranEnc.
             */

            const translation =
                await findTranslation(
                    language
                );


            /*
             * User may have changed language
             * while the request was running.
             */

            if (
                requestId !==
                translationRequestId
            ) {

                return;

            }


            activeTranslationKey =
                translation.key;


            activeTranslationInfo =
                translation;


            updateTranslationSource();


            const surahs =
                getAvailableSurahs();


            /*
             * Load only the Surahs that actually
             * exist in your data.js.
             *
             * This avoids unnecessary API requests.
             */

            const pending =
                [];


            surahs.forEach(
                function (surah) {

                    const cached =
                        getCachedSurah(
                            language,
                            surah
                        );


                    if (!cached) {

                        pending.push(
                            surah
                        );

                    }

                }
            );


            /*
             * Load 4 Surahs at a time.
             * This is much lighter for mobile.
             */

            const batchSize =
                4;


            for (
                let i = 0;
                i < pending.length;
                i += batchSize
            ) {

                if (
                    requestId !==
                    translationRequestId
                ) {

                    return;

                }


                const batch =
                    pending.slice(
                        i,
                        i + batchSize
                    );


                await Promise.all(
                    batch.map(
                        async function (
                            surah
                        ) {

                            try {

                                const data =
                                    await fetchSurahTranslation(
                                        activeTranslationKey,
                                        surah
                                    );


                                saveCachedSurah(
                                    language,
                                    surah,
                                    data
                                );

                            } catch (
                                error
                            ) {

                                console.warn(
                                    "QuranEnc Surah " +
                                    surah +
                                    " failed:",
                                    error
                                );

                            }

                        }
                    )
                );


                /*
                 * Show translations as they
                 * become available.
                 */

                updateRenderedTranslations();

            }


            /*
             * Final update.
             */

            if (
                requestId ===
                translationRequestId
            ) {

                updateRenderedTranslations();

            }

        } catch (
            error
        ) {

            console.error(
                "Quran translation error:",
                error
            );


            if (
                requestId !==
                translationRequestId
            ) {

                return;

            }


            /*
             * If online translation fails,
             * keep the existing Urdu translation
             * instead of breaking the website.
             */

            updateRenderedTranslations();


            const notice =
                document.getElementById(
                    "quranTranslationSource"
                );


            if (notice) {

                notice.style.display =
                    "block";


                notice.textContent =
                    "Selected language translation could not be loaded. Please try again.";

            }

        }

    }


    /* =====================================================
       OVERRIDE DISPLAY AYAH
       ===================================================== */

    const originalDisplayAyahs =
        displayAyahs;


    displayAyahs =
        function (data) {

            /*
             * Keep your existing card design,
             * buttons, Tafseer, bookmark,
             * copy and share functionality.
             */

            originalDisplayAyahs(
                data
            );


            /*
             * Immediately apply whatever
             * online translation is already cached.
             */

            updateRenderedTranslations();

        };


    /* =====================================================
       LANGUAGE CHANGE
       ===================================================== */

    if (
        languageSelect
    ) {

        languageSelect.addEventListener(
            "change",
            function () {

                /*
                 * Give the existing language
                   * system a moment to update
                 * currentLanguage.
                 */

                setTimeout(
                    function () {

                        loadSelectedLanguageTranslation();

                    },
                    50
                );

            }
        );

    }


    /* =====================================================
       INITIAL LOAD
       ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            setTimeout(
                function () {

                    loadSelectedLanguageTranslation();

                },
                150
            );

        }
    );


})();
// =====================================================
// MULTIPLE TAFSEER SELECTOR
// =====================================================

(function () {

    // Tafseer sources
    // Abhi sirf Ibn Kathir ka data available hai.
    const TAFSEER_SOURCES = [
        {
            id: "ibn-kathir",
            name: "خلاصۂ تفسیر ابن کثیر",
            field: "tafseer"
        },

        {
            id: "maariful-quran",
            name: "معارف القرآن",
            field: "tafseerMaarifulQuran"
        },

        {
            id: "tadabbur-quran",
            name: "تدبرِ قرآن",
            field: "tafseerTadabburQuran"
        },

        {
            id: "tafseer-jalalain",
            name: "تفسیر جلالین",
            field: "tafseerJalalain"
        }
    ];


    // -------------------------------------------------
    // Get available Tafseer for current Ayah
    // -------------------------------------------------

    function getAvailableTafseers(ayah) {

        return TAFSEER_SOURCES.filter(function (source) {

            return (
                ayah[source.field] &&
                String(ayah[source.field]).trim() !== ""
            );

        });

    }


    // -------------------------------------------------
    // Create Tafseer panel
    // -------------------------------------------------

    function createMultipleTafseerPanel(card, ayah) {

        const oldTafseer =
            card.querySelector(".tafseer");

        if (!oldTafseer) return;


        const available =
            getAvailableTafseers(ayah);


        if (available.length === 0) {
            return;
        }


        // Hide old Tafseer initially
        oldTafseer.style.display = "none";


        // Remove old contents
        oldTafseer.innerHTML = "";


        // Title
        const title =
            document.createElement("div");

        title.className =
            "multiple-tafseer-title";

        title.textContent =
            "📖 تفسیر منتخب کریں";

        oldTafseer.appendChild(title);


        // Source buttons
        const sourceList =
            document.createElement("div");

        sourceList.className =
            "tafseer-source-list";


        available.forEach(function (source) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "tafseer-source-button";

            button.textContent =
                "📖 " + source.name;


            button.addEventListener(
                "click",
                function () {

                    showSelectedTafseer(
                        oldTafseer,
                        ayah,
                        source
                    );

                }
            );


            sourceList.appendChild(button);

        });


        oldTafseer.appendChild(sourceList);


        // Back button area
        const content =
            document.createElement("div");

        content.className =
            "selected-tafseer-content";

        oldTafseer.appendChild(content);

    }


    // -------------------------------------------------
    // Show selected Tafseer
    // -------------------------------------------------

    function showSelectedTafseer(
        tafseerBox,
        ayah,
        source
    ) {

        const content =
            tafseerBox.querySelector(
                ".selected-tafseer-content"
            );


        if (!content) return;


        const text =
            ayah[source.field];


        content.innerHTML = "";


        const heading =
            document.createElement("div");

        heading.className =
            "selected-tafseer-heading";

        heading.textContent =
            "📖 " + source.name;


        const paragraph =
            document.createElement("p");

        paragraph.textContent =
            text;


        const backButton =
            document.createElement("button");

        backButton.type = "button";

        backButton.className =
            "tafseer-back-button";

        backButton.textContent =
            "← تفاسیر کی فہرست";


        backButton.addEventListener(
            "click",
            function () {

                content.innerHTML = "";

                tafseerBox
                    .querySelector(
                        ".tafseer-source-list"
                    )
                    .style.display = "flex";

                content.style.display =
                    "none";

            }
        );


        content.appendChild(
            heading
        );

        content.appendChild(
            paragraph
        );

        content.appendChild(
            backButton
        );


        tafseerBox
            .querySelector(
                ".tafseer-source-list"
            )
            .style.display = "none";


        content.style.display =
            "block";

    }


    // -------------------------------------------------
    // Enhance every Ayah
    // -------------------------------------------------

    function enhanceTafseerButtons() {

        const cards =
            document.querySelectorAll(
                ".ayah-card"
            );


        cards.forEach(function (card) {

            const id =
                card.id;


            if (!id) return;


            const parts =
                id.split("-");


            if (parts.length < 3) {
                return;
            }


            const surah =
                Number(parts[1]);

            const ayahNumber =
                Number(parts[2]);


            const ayah =
                quranData.find(function (item) {

                    return (
                        Number(item.surah) === surah &&
                        Number(item.ayah) === ayahNumber
                    );

                });


            if (!ayah) return;


            // Prevent duplicate enhancement
            if (
                card.dataset.multipleTafseer ===
                "true"
            ) {
                return;
            }


            card.dataset.multipleTafseer =
                "true";


            createMultipleTafseerPanel(
                card,
                ayah
            );

        });

    }


    // -------------------------------------------------
    // Tafseer button handling
    // -------------------------------------------------

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    '[data-action="tafseer"]'
                );


            if (!button) return;


            const card =
                button.closest(
                    ".ayah-card"
                );


            if (!card) return;


            const tafseer =
                card.querySelector(
                    ".tafseer"
                );


            if (!tafseer) return;


            const isOpen =
                tafseer.style.display ===
                "block";


            if (isOpen) {

                tafseer.style.display =
                    "none";

                button.textContent =
                    "📖 تفسیر دیکھیں";

            } else {

                tafseer.style.display =
                    "block";

                button.textContent =
                    "📕 تفسیر بند کریں";

            }

        }
    );


    // -------------------------------------------------
    // Run after page loads
    // -------------------------------------------------

    function startMultipleTafseer() {

        enhanceTafseerButtons();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            startMultipleTafseer
        );

    } else {

        startMultipleTafseer();

    }


    // -------------------------------------------------
    // Re-run when Ayahs are displayed again
    // -------------------------------------------------

    const originalDisplayAyahs =
        window.displayAyahs;


    if (
        typeof originalDisplayAyahs ===
        "function"
    ) {

        window.displayAyahs =
            function (data) {

                originalDisplayAyahs(data);

                setTimeout(
                    enhanceTafseerButtons,
                    50
                );

            };

        }

})();
