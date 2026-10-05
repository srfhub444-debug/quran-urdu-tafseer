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
        description: "قرآن کریم، اردو ترجمہ اور تفسیر",
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
        search: "శోధన",
        quran: "పవిత్ర ఖుర్ఆన్",
        readingInfo: "అరబీ • తెలుగు • తఫ్సీర్",
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
        noResults: "ఫలితాలు కనబడలేదు.",
        firstAyah: "ఇది మొదటి అందుబాటులో ఉన్న ఆయత్.",
        lastAyah: "ఇది చివరి అందుబాటులో ఉన్న ఆయత్.",
        copied: "✓ కాపీ చేయబడింది",
        linkCopied: "✓ లింక్ కాపీ చేయబడింది",
        copyFailed: "కాపీ చేయలేకపోయాము.",
        loading: "అనువాదం లోడ్ అవుతోంది...",
        unavailable:
            "ఈ భాషలో తఫ్సీర్ ఇంకా అందుబాటులో లేదు."
    },

    tr: {
        name: "Turkish",
        native: "Türkçe",
        dir: "ltr",
        title: "Kur'an-ı Kerim • Tercüme ve Tefsir",
        description:
            "Kur'an-ı Kerim'i tercüme ve tefsir ile okuyun.",
        home: "Ana Sayfa",
        surahs: "Sureler",
        favorites: "Favoriler",
        searchNav: "Ara",
        selectSurah: "Sure seçin",
        searchPlaceholder:
            "Ayet, tercüme veya tefsirde arayın...",
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
        loading: "Tercüme yükleniyor...",
        unavailable:
            "Bu dilde tefsir henüz mevcut değil."
    },

    fa: {
        name: "Persian",
        native: "فارسی",
        dir: "rtl",
        title: "قرآن کریم • ترجمه و تفسیر",
        description:
            "قرآن کریم را با ترجمه و تفسیر بخوانید.",
        home: "خانه",
        surahs: "سوره‌ها",
        favorites: "علاقه‌مندی‌ها",
        searchNav: "جستجو",
        selectSurah: "سوره را انتخاب کنید",
        searchPlaceholder:
            "در آیه، ترجمه یا تفسیر جستجو کنید...",
        search: "جستجو",
        quran: "قرآن کریم",
        readingInfo: "عربی • فارسی • تفسیر",
        viewTafsir: "نمایش تفسیر",
        closeTafsir: "بستن تفسیر",
        tafsir: "تفسیر",
        save: "ذخیره",
        saved: "ذخیره شد",
        copy: "کپی",
        share: "اشتراک",
        link: "لینک",
        previous: "آیه قبلی",
        next: "آیه بعدی",
        ayah: "آیه",
        noResults: "نتیجه‌ای یافت نشد.",
        firstAyah: "این اولین آیه موجود است.",
        lastAyah: "این آخرین آیه موجود است.",
        copied: "✓ کپی شد",
        linkCopied: "✓ لینک کپی شد",
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
        firstAyah: "Ini ayat pertama yang tersedia.",
        lastAyah: "Ini ayat terakhir yang tersedia.",
        copied: "✓ Disalin",
        linkCopied: "✓ Tautan disalin",
        copyFailed: "Tidak dapat menyalin.",
        loading: "Memuat terjemahan...",
        unavailable:
            "Tafsir dalam bahasa ini belum tersedia."
    },

    ms: {
        name: "Malay",
        native: "Melayu",
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
        firstAyah: "Ini ayat pertama yang tersedia.",
        lastAyah: "Ini ayat terakhir yang tersedia.",
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
            "Nach Ayat, Übersetzung oder Tafsir suchen...",
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
            "Поиск аята, перевода или тафсира...",
        search: "Поиск",
        quran: "Священный Коран",
        readingInfo: "Арабский • Русский • Тафсир",
        viewTafsir: "Показать тафсир",
        closeTafsir: "Закрыть тафсир",
        tafsir: "Тафсир",
        save: "Сохранить",
        saved: "Сохранено",
        copy: "Копировать",
        share: "Поделиться",
        link: "Ссылка",
        previous: "Предыдущий аят",
        next: "Следующий аят",
        ayah: "Аят",
        noResults: "Результаты не найдены.",
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
    localStorage.getItem(
        "quranLanguage"
    ) || "ur";


// =====================================================
// GENERATED FULL QURAN DATA BRIDGE
// =====================================================

if (
    window.generatedQuranData &&
    Array.isArray(
        window.generatedQuranData
    ) &&
    window.generatedQuranData.length > 0
) {

    quranData =
        window.generatedQuranData;

}

else if (
    window.quranData &&
    Array.isArray(
        window.quranData
    ) &&
    window.quranData.length > 0
) {

    quranData =
        window.quranData;

}


// =====================================================
// GET CURRENT LANGUAGE
// =====================================================

function getCurrentLanguage() {

    return (
        LANGUAGE_CONFIG[
            currentLanguage
        ] ||
        LANGUAGE_CONFIG.ur
    );

}


// =====================================================
// APPLY LANGUAGE
// =====================================================

function applyLanguage(
    lang
) {

    if (
        !LANGUAGE_CONFIG[lang]
    ) {
        lang = "ur";
    }


    currentLanguage =
        lang;


    localStorage.setItem(
        "quranLanguage",
        lang
    );


    const config =
        LANGUAGE_CONFIG[lang];


    document.documentElement.lang =
        lang;

    document.documentElement.dir =
        config.dir;


    document.title =
        config.title;


    const brandSubtitle =
        document.querySelector(
            ".brand-subtitle"
        );


    if (brandSubtitle) {

        brandSubtitle.textContent =
            config.description;

    }


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


    if (
        languageSelect
    ) {

        languageSelect.value =
            lang;

    }


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


    const surahLabel =
        document.querySelector(
            'label[for="surahSelect"]'
        );


    if (surahLabel) {

        surahLabel.textContent =
            config.selectSurah;

    }


    if (searchInput) {

        searchInput.placeholder =
            config.searchPlaceholder;

    }


    if (searchButton) {

        searchButton.textContent =
            config.search;

    }


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


    loadSurahs();


    displayAyahs(
        quranData
    );

}


// =====================================================
// LANGUAGE SELECTOR
// =====================================================

if (
    languageSelect
) {

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

function arabicAyahNumber(
    number
) {

    const digits = [
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
        .map(
            function (digit) {

                return digits[
                    Number(digit)
                ];

            }
        )
        .join("");

}


// =====================================================
// WEBSITE START
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadSurahs();

        displayAyahs(
            quranData
        );

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

    if (!surahSelect) {
        return;
    }


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
                            Number(
                                ayah.surah
                            )
                        );

                    }
                );


            if (
                !alreadyExists
            ) {

                surahs.push({

                    number:
                        Number(
                            ayah.surah
                        ),

                    arabic:
                        ayah.surahNameArabic ||
                        "",

                    urdu:
                        ayah.surahNameUrdu ||
                        ayah.surahNameArabic ||
                        ""

                });

            }

        }
    );


    surahs.sort(
        function (a, b) {

            return (
                a.number -
                b.number
            );

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

function getAyahTranslation(
    ayah
) {

    if (
        ayah &&
        ayah.translations &&
        ayah.translations[
            currentLanguage
        ]
    ) {

        return (
            ayah.translations[
                currentLanguage
            ]
        );

    }


    if (
        currentLanguage ===
        "ur"
    ) {

        return (
            ayah.urdu ||
            ""
        );

    }


    return (
        ayah.urdu ||
        ""
    );

}


// =====================================================
// DISPLAY AYAH
// =====================================================

function displayAyahs(
    data
) {

    if (!ayahContainer) {
        return;
    }


    if (
        !Array.isArray(data) ||
        data.length === 0
    ) {

        ayahContainer.innerHTML = `
            <div class="no-results">
                ${getCurrentLanguage().noResults}
            </div>
        `;

        return;

    }


    const config =
        getCurrentLanguage();


    ayahContainer.innerHTML =
        data.map(
            function (ayah) {

                const translation =
                    getAyahTranslation(
                        ayah
                    );


                const tafsir =
                    ayah.tafseer ||
                    ayah.tafsir ||
                    "";


                const surahName =
                    ayah.surahNameArabic ||
                    "";


                const ayahNumber =
                    Number(
                        ayah.ayah ||
                        ayah.numberInSurah ||
                        0
                    );


                const bookmarkState =
                    isAyahBookmarked(
                        ayah
                    );


                return `

                    <article
                        class="ayah-card"
                        data-surah="${ayah.surah}"
                        data-ayah="${ayahNumber}"
                    >

                        <div
                            class="ayah-header"
                        >

                            <span
                                class="surah-name"
                            >
                                ${escapeHTML(
                                    surahName
                                )}
                            </span>

                            <span
                                class="ayah-number"
                            >
                                ${arabicAyahNumber(
                                    ayahNumber
                                )}
                            </span>

                        </div>


                        <div
                            class="arabic ayah-arabic arabic-text"
                            dir="rtl"
                        >
                            ${escapeHTML(
                                ayah.arabic ||
                                ""
                            )}
                        </div>


                        <div
                            class="urdu ayah-translation ayah-text"
                            dir="${config.dir}"
                        >
                            ${escapeHTML(
                                translation
                            )}
                        </div>


                        <div
                            class="ayah-actions"
                        >

                            <button
                                type="button"
                                onclick='toggleTafsir(this)'
                            >
                                📖
                                ${config.viewTafsir}
                            </button>

                            <button
                                type="button"
                                onclick='toggleBookmark(
                                    ${JSON.stringify(
                                        ayah
                                    ).replace(
                                        /'/g,
                                        "&#39;"
                                    )}
                                )'
                            >
                                ${
                                    bookmarkState
                                        ? "🔖 " +
                                          config.saved
                                        : "🔖 " +
                                          config.save
                                }
                            </button>

                            <button
                                type="button"
                                onclick='copyAyah(
                                    ${JSON.stringify(
                                        ayah
                                    ).replace(
                                        /'/g,
                                        "&#39;"
                                    )}
                                )'
                            >
                                📋 ${config.copy}
                            </button>

                            <button
                                type="button"
                                onclick='shareAyah(
                                    ${JSON.stringify(
                                        ayah
                                    ).replace(
                                        /'/g,
                                        "&#39;"
                                    )}
                                )'
                            >
                                ↗ ${config.share}
                            </button>

                            <button
                                type="button"
                                onclick='copyAyahLink(
                                    ${JSON.stringify(
                                        ayah
                                    ).replace(
                                        /'/g,
                                        "&#39;"
                                    )}
                                )'
                            >
                                🔗 ${config.link}
                            </button>

                        </div>


                        <div
                            class="tafseer"
                            style="display:none;"
                        >

                            <div
                                class="tafseer-title"
                            >
                                ${config.tafsir}
                            </div>

                            <div
                                class="tafseer-content"
                            >
                                ${escapeHTML(
                                    tafsir
                                )}
                            </div>

                        </div>


                        <div
                            class="ayah-navigation"
                        >

                            <button
                                class="nav-button"
                                type="button"
                                onclick='goToPreviousAyah(
                                    ${JSON.stringify(
                                        ayah
                                    ).replace(
                                        /'/g,
                                        "&#39;"
                                    )}
                                )'
                            >
                                ← ${config.previous}
                            </button>

                            <button
                                class="nav-button"
                                type="button"
                                onclick='goToNextAyah(
                                    ${JSON.stringify(
                                        ayah
                                    ).replace(
                                        /'/g,
                                        "&#39;"
                                    )}
                                )'
                            >
                                ${config.next} →
                            </button>

                        </div>

                    </article>

                `;

            }
        ).join("");

}


// =====================================================
// TAFSEER TOGGLE
// =====================================================

function toggleTafsir(
    button
) {

    const card =
        button.closest(
            ".ayah-card"
        );


    if (!card) {
        return;
    }


    const tafsir =
        card.querySelector(
            ".tafseer"
        );


    if (!tafsir) {
        return;
    }


    const config =
        getCurrentLanguage();


    if (
        tafsir.style.display ===
        "none"
    ) {

        tafsir.style.display =
            "block";


        button.innerHTML =
            "📖 " +
            config.closeTafsir;

    }

    else {

        tafsir.style.display =
            "none";


        button.innerHTML =
            "📖 " +
            config.viewTafsir;

    }

}


// =====================================================
// SEARCH
// =====================================================

function performSearch() {

    if (!searchInput) {
        return;
    }


    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    if (
        search === ""
    ) {

        displayAyahs(
            quranData
        );

        return;

    }


    const results =
        quranData.filter(
            function (ayah) {

                const translation =
                    getAyahTranslation(
                        ayah
                    );


                const tafsir =
                    ayah.tafseer ||
                    ayah.tafsir ||
                    "";


                return (

                    String(
                        ayah.arabic ||
                        ""
                    )
                    .toLowerCase()
                    .includes(
                        search
                    )

                    ||

                    String(
                        translation
                    )
                    .toLowerCase()
                    .includes(
                        search
                    )

                    ||

                    String(
                        tafsir
                    )
                    .toLowerCase()
                    .includes(
                        search
                    )

                    ||

                    String(
                        ayah.surahNameArabic ||
                        ""
                    )
                    .toLowerCase()
                    .includes(
                        search
                    )

                    ||

                    String(
                        ayah.surahNameUrdu ||
                        ""
                    )
                    .toLowerCase()
                    .includes(
                        search
                    )

                );

            }
        );


    if (
        results.length === 0
    ) {

        ayahContainer.innerHTML = `
            <div class="no-results">
                ${getCurrentLanguage().noResults}
            </div>
        `;

        return;

    }


    displayAyahs(
        results
    );

}


// =====================================================
// SEARCH WHILE TYPING
// =====================================================

if (
    searchInput
) {

    searchInput.addEventListener(
        "input",
        function () {

            if (
                this.value.trim()
                    .length >= 2
            ) {

                performSearch();

            }

            else if (
                this.value.trim() === ""
            ) {

                displayAyahs(
                    quranData
                );

            }

        }
    );

}


// =====================================================
// SEARCH BUTTON
// =====================================================

if (
    searchButton
) {

    searchButton.addEventListener(
        "click",
        performSearch
    );

}


// =====================================================
// SURAH SELECTION
// =====================================================

if (
    surahSelect
) {

    surahSelect.addEventListener(
        "change",
        function () {

            const selected =
                this.value;


            if (
                selected === ""
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
                            Number(
                                ayah.surah
                            ) ===
                            Number(
                                selected
                            )
                        );

                    }
                );


            displayAyahs(
                filtered
            );


            window.scrollTo({

                top: 0,

                behavior:
                    "smooth"

            });

        }
    );

}


// =====================================================
// DARK MODE
// =====================================================

if (
    themeButton
) {

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

    const theme =
        localStorage.getItem(
            "quranTheme"
        );


    if (
        theme === "dark"
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
        "bookmark-" +
        ayah.surah +
        "-" +
        ayah.ayah
    );

}


function getBookmarks() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "quranBookmarks"
            ) || "[]"
        );

    }

    catch (
        error
    ) {

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


    return bookmarks.some(
        function (item) {

            return (
                Number(item.surah) ===
                    Number(ayah.surah) &&

                Number(item.ayah) ===
                    Number(ayah.ayah)
            );

        }
    );

}


function toggleBookmark(
    ayah
) {

    let bookmarks =
        getBookmarks();


    const exists =
        bookmarks.some(
            function (item) {

                return (
                    Number(item.surah) ===
                        Number(ayah.surah) &&

                    Number(item.ayah) ===
                        Number(ayah.ayah)
                );

            }
        );


    if (exists) {

        bookmarks =
            bookmarks.filter(
                function (item) {

                    return !(
                        Number(item.surah) ===
                            Number(ayah.surah) &&

                        Number(item.ayah) ===
                            Number(ayah.ayah)
                    );

                }
            );

    }

    else {

        bookmarks.push({

            surah:
                Number(
                    ayah.surah
                ),

            ayah:
                Number(
                    ayah.ayah
                )

        });

    }


    saveBookmarks(
        bookmarks
    );


    const selected =
        surahSelect
            ? surahSelect.value
            : "";


    if (
        selected
    ) {

        const filtered =
            quranData.filter(
                function (item) {

                    return (
                        Number(
                            item.surah
                        ) ===
                        Number(
                            selected
                        )
                    );

                }
            );


        displayAyahs(
            filtered
        );

    }

    else {

        displayAyahs(
            quranData
        );

    }

}


// =====================================================
// COPY AYAH
// =====================================================

function copyAyah(
    ayah
) {

    const config =
        getCurrentLanguage();


    const text =
        (
            ayah.arabic ||
            ""
        ) +
        "\n\n" +
        (
            getAyahTranslation(
                ayah
            ) ||
            ""
        );


    copyText(
        text
    );


    alert(
        config.copied
    );

}


// =====================================================
// SHARE AYAH
// =====================================================

async function shareAyah(
    ayah
) {

    const text =
        (
            ayah.arabic ||
            ""
        ) +
        "\n\n" +
        (
            getAyahTranslation(
                ayah
            ) ||
            ""
        );


    if (
        navigator.share
    ) {

        try {

            await navigator.share({

                title:
                    ayah.surahNameArabic ||
                    "Quran",

                text:
                    text

            });

        }

        catch (
            error
        ) {

            console.log(
                "Share cancelled."
            );

        }

        return;

    }


    copyText(
        text
    );


    alert(
        getCurrentLanguage().copied
    );

}


// =====================================================
// CREATE AYAH URL
// =====================================================

function createAyahURL(
    ayah
) {

    const url =
        new URL(
            window.location.href
        );


    url.searchParams.set(
        "surah",
        ayah.surah
    );


    url.searchParams.set(
        "ayah",
        ayah.ayah
    );


    return url.toString();

}


// =====================================================
// COPY AYAH LINK
// =====================================================

function copyAyahLink(
    ayah
) {

    copyText(
        createAyahURL(
            ayah
        )
    );


    alert(
        getCurrentLanguage().linkCopied
    );

}


// =====================================================
// OPEN AYAH FROM URL
// =====================================================

function openAyahFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const surah =
        params.get(
            "surah"
        );


    const ayah =
        params.get(
            "ayah"
        );


    if (
        !surah ||
        !ayah
    ) {

        return;

    }


    const target =
        quranData.find(
            function (item) {

                return (

                    Number(
                        item.surah
                    ) ===
                    Number(
                        surah
                    )

                    &&

                    Number(
                        item.ayah
                    ) ===
                    Number(
                        ayah
                    )

                );

            }
        );


    if (!target) {
        return;
    }


    setTimeout(
        function () {

            displayAyahs(
                [target]
            );


            const card =
                document.querySelector(
                    ".ayah-card"
                );


            if (card) {

                card.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "center"

                });

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

                    Number(
                        item.surah
                    ) ===
                    Number(
                        ayah.surah
                    )

                    &&

                    Number(
                        item.ayah
                    ) ===
                    Number(
                        ayah.ayah
                    )

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
        [previous]
    );


    window.scrollTo({

        top: 0,

        behavior:
            "smooth"

    });

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

                    Number(
                        item.surah
                    ) ===
                    Number(
                        ayah.surah
                    )

                    &&

                    Number(
                        item.ayah
                    ) ===
                    Number(
                        ayah.ayah
                    )

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
        [next]
    );


    window.scrollTo({

        top: 0,

        behavior:
            "smooth"

    });

}


// =====================================================
// BACK TO TOP
// =====================================================

if (
    backToTop
) {

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
// TAFSEER SYSTEM
// =====================================================

window.quranTafsirCache =
    window.quranTafsirCache || {};

window.selectedTafsir =
    window.selectedTafsir ||
    "jalalayn";


async function loadJalalayn(
    surahNumber
) {

    const key =
        "jalalayn:" +
        surahNumber;


    if (
        window.quranTafsirCache[
            key
        ]
    ) {

        return (
            window.quranTafsirCache[
                key
            ]
        );

    }


    try {

        const response =
            await fetch(
                "https://api.alquran.cloud/v1/surah/" +
                surahNumber +
                "/ar.jalalayn"
            );


        if (
            !response.ok
        ) {

            throw new Error(
                "Jalalayn HTTP " +
                response.status
            );

        }


        const result =
            await response.json();


        const data = {};


        if (
            result &&
            result.data &&
            Array.isArray(
                result.data.ayahs
            )
        ) {

            result.data.ayahs.forEach(
                function (item) {

                    data[
                        surahNumber +
                        ":" +
                        item.numberInSurah
                    ] =
                        item.text ||
                        "";

                }
            );

        }


        window.quranTafsirCache[
            key
        ] =
            data;


        return data;

    }

    catch (
        error
    ) {

        console.error(
            "Jalalayn error:",
            error
        );


        return {};

    }

}


window.getQuranTafsir =
    function (
        ayah
    ) {

        if (!ayah) {
            return "";
        }


        const key =
            ayah.surah +
            ":" +
            ayah.ayah;


        const cache =
            window.quranTafsirCache[
                "jalalayn:" +
                ayah.surah
            ];


        if (
            cache &&
            cache[key]
        ) {

            return cache[key];

        }


        return (
            ayah.tafseer ||
            ayah.tafsir ||
            ""
        );

    };


// =====================================================
// INITIAL TAFSEER LOAD
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setTimeout(
            async function () {

                const selected =
                    surahSelect
                        ? surahSelect.value
                        : "";


                if (selected) {

                    await loadJalalayn(
                        Number(
                            selected
                        )
                    );

                }

            },
            500
        );

    }
);
