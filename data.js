// =====================================================
// QURAN DATA
// Complete Surah list + Arabic loader
// =====================================================

const SURAH_LIST = [
    [1,"الفاتحة","Al-Fatihah",7],
    [2,"البقرة","Al-Baqarah",286],
    [3,"آل عمران","Aal-E-Imran",200],
    [4,"النساء","An-Nisa",176],
    [5,"المائدة","Al-Ma'idah",120],
    [6,"الأنعام","Al-An'am",165],
    [7,"الأعراف","Al-A'raf",206],
    [8,"الأنفال","Al-Anfal",75],
    [9,"التوبة","At-Tawbah",129],
    [10,"يونس","Yunus",109],
    [11,"هود","Hud",123],
    [12,"يوسف","Yusuf",111],
    [13,"الرعد","Ar-Ra'd",43],
    [14,"إبراهيم","Ibrahim",52],
    [15,"الحجر","Al-Hijr",99],
    [16,"النحل","An-Nahl",128],
    [17,"الإسراء","Al-Isra",111],
    [18,"الكهف","Al-Kahf",110],
    [19,"مريم","Maryam",98],
    [20,"طه","Ta-Ha",135],
    [21,"الأنبياء","Al-Anbiya",112],
    [22,"الحج","Al-Hajj",78],
    [23,"المؤمنون","Al-Mu'minun",118],
    [24,"النور","An-Nur",64],
    [25,"الفرقان","Al-Furqan",77],
    [26,"الشعراء","Ash-Shu'ara",227],
    [27,"النمل","An-Naml",93],
    [28,"القصص","Al-Qasas",88],
    [29,"العنكبوت","Al-Ankabut",69],
    [30,"الروم","Ar-Rum",60],
    [31,"لقمان","Luqman",34],
    [32,"السجدة","As-Sajdah",30],
    [33,"الأحزاب","Al-Ahzab",73],
    [34,"سبأ","Saba",54],
    [35,"فاطر","Fatir",45],
    [36,"يس","Ya-Sin",83],
    [37,"الصافات","As-Saffat",182],
    [38,"ص","Sad",88],
    [39,"الزمر","Az-Zumar",75],
    [40,"غافر","Ghafir",85],
    [41,"فصلت","Fussilat",54],
    [42,"الشورى","Ash-Shura",53],
    [43,"الزخرف","Az-Zukhruf",89],
    [44,"الدخان","Ad-Dukhan",59],
    [45,"الجاثية","Al-Jathiyah",37],
    [46,"الأحقاف","Al-Ahqaf",35],
    [47,"محمد","Muhammad",38],
    [48,"الفتح","Al-Fath",29],
    [49,"الحجرات","Al-Hujurat",18],
    [50,"ق","Qaf",45],
    [51,"الذاريات","Adh-Dhariyat",60],
    [52,"الطور","At-Tur",49],
    [53,"النجم","An-Najm",62],
    [54,"القمر","Al-Qamar",55],
    [55,"الرحمن","Ar-Rahman",78],
    [56,"الواقعة","Al-Waqi'ah",96],
    [57,"الحديد","Al-Hadid",29],
    [58,"المجادلة","Al-Mujadila",22],
    [59,"الحشر","Al-Hashr",24],
    [60,"الممتحنة","Al-Mumtahanah",13],
    [61,"الصف","As-Saff",14],
    [62,"الجمعة","Al-Jumu'ah",11],
    [63,"المنافقون","Al-Munafiqun",11],
    [64,"التغابن","At-Taghabun",18],
    [65,"الطلاق","At-Talaq",12],
    [66,"التحريم","At-Tahrim",12],
    [67,"الملك","Al-Mulk",30],
    [68,"القلم","Al-Qalam",52],
    [69,"الحاقة","Al-Haqqah",52],
    [70,"المعارج","Al-Ma'arij",44],
    [71,"نوح","Nuh",28],
    [72,"الجن","Al-Jinn",28],
    [73,"المزمل","Al-Muzzammil",20],
    [74,"المدثر","Al-Muddaththir",56],
    [75,"القيامة","Al-Qiyamah",40],
    [76,"الإنسان","Al-Insan",31],
    [77,"المرسلات","Al-Mursalat",50],
    [78,"النبأ","An-Naba",40],
    [79,"النازعات","An-Nazi'at",46],
    [80,"عبس","Abasa",42],
    [81,"التكوير","At-Takwir",29],
    [82,"الانفطار","Al-Infitar",19],
    [83,"المطففين","Al-Mutaffifin",36],
    [84,"الانشقاق","Al-Inshiqaq",25],
    [85,"البروج","Al-Buruj",22],
    [86,"الطارق","At-Tariq",17],
    [87,"الأعلى","Al-A'la",19],
    [88,"الغاشية","Al-Ghashiyah",26],
    [89,"الفجر","Al-Fajr",30],
    [90,"البلد","Al-Balad",20],
    [91,"الشمس","Ash-Shams",15],
    [92,"الليل","Al-Layl",21],
    [93,"الضحى","Ad-Duha",11],
    [94,"الشرح","Ash-Sharh",8],
    [95,"التين","At-Tin",8],
    [96,"العلق","Al-Alaq",19],
    [97,"القدر","Al-Qadr",5],
    [98,"البينة","Al-Bayyinah",8],
    [99,"الزلزلة","Az-Zalzalah",8],
    [100,"العاديات","Al-Adiyat",11],
    [101,"القارعة","Al-Qari'ah",11],
    [102,"التكاثر","At-Takathur",8],
    [103,"العصر","Al-Asr",3],
    [104,"الهمزة","Al-Humazah",9],
    [105,"الفيل","Al-Fil",5],
    [106,"قريش","Quraysh",4],
    [107,"الماعون","Al-Ma'un",7],
    [108,"الكوثر","Al-Kawthar",3],
    [109,"الكافرون","Al-Kafirun",6],
    [110,"النصر","An-Nasr",3],
    [111,"المسد","Al-Masad",5],
    [112,"الإخلاص","Al-Ikhlas",4],
    [113,"الفلق","Al-Falaq",5],
    [114,"الناس","An-Nas",6]
];


// Existing code expects quranData.
// Start with an empty array; selected Surah is loaded below.
let quranData = [];
if (
    window.quranData &&
    Array.isArray(window.quranData) &&
    window.quranData.length > 0
) {
    quranData = window.quranData;
}

// =====================================================
// LOAD ONE COMPLETE SURAH
// =====================================================

async function loadCompleteSurah(surahNumber) {

    const url =
        "https://api.alquran.cloud/v1/surah/" +
        surahNumber +
        "/quran-uthmani";

    const response =
        await fetch(url);

    if (!response.ok) {
        throw new Error(
            "Quran Arabic loading failed: " +
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
            "Invalid Quran response."
        );
    }

    quranData =
        result.data.ayahs.map(function (ayah) {

            return {
                surah: surahNumber,

                surahNameArabic:
                    result.data.name || "",

                ayah:
                    ayah.numberInSurah,

                arabic:
                    ayah.text,

                urdu: "",

                tafseer: ""
            };

        });

    return quranData;
}


// =====================================================
// LOAD SURAH
// =====================================================

window.loadQuranSurah =
    async function (surahNumber) {

        try {

            const data =
                await loadCompleteSurah(
                    Number(surahNumber)
                );

            if (
                typeof displayAyahs ===
                "function"
            ) {
                displayAyahs(data);
            }

            return data;

        } catch (error) {

            console.error(
                "Quran loading error:",
                error
            );

            return [];
        }
    };


// =====================================================
// EXPORT SURAH LIST
// =====================================================

window.SURAH_LIST =
    SURAH_LIST;
// =====================================================
// URDU TRANSLATION LOADER
// =====================================================

async function loadUrduTranslation(surahNumber) {

    const url =
        "https://api.alquran.cloud/v1/surah/" +
        surahNumber +
        "/ur.jalandhry";

    try {

        const response =
            await fetch(url);

        if (!response.ok) {
            throw new Error(
                "Urdu translation loading failed"
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
                "Invalid Urdu translation response"
            );
        }

        return result.data.ayahs;

    } catch (error) {

        console.error(
            "Urdu translation error:",
            error
        );

        return [];
    }
}
// =====================================================
// LOAD URDU + ARABIC TOGETHER
// =====================================================

async function loadSurahWithUrdu(surahNumber) {

    try {

        // Arabic Quran
        const arabicResponse =
            await fetch(
                "https://api.alquran.cloud/v1/surah/" +
                surahNumber +
                "/quran-uthmani"
            );

        const arabicResult =
            await arabicResponse.json();


        // Urdu Translation
        const urduAyahs =
            await loadUrduTranslation(
                surahNumber
            );


        if (
            !arabicResult ||
            !arabicResult.data ||
            !arabicResult.data.ayahs
        ) {
            throw new Error(
                "Arabic Quran data not found"
            );
        }


        const arabicAyahs =
            arabicResult.data.ayahs;


        quranData =
            arabicAyahs.map(
                function (ayah, index) {

                    return {

                        surah:
                            surahNumber,

                        surahNameArabic:
                            arabicResult.data.name,

                        surahNameUrdu:
                            (
                                SURAH_LIST.find(
                                    function (item) {
                                        return (
                                            item[0] ===
                                            surahNumber
                                        );
                                    }
                                ) || []
                            )[1] || "",

                        ayah:
                            ayah.numberInSurah,

                        arabic:
                            ayah.text,

                        urdu:
                            urduAyahs[index]
                                ? urduAyahs[index].text
                                : "",

                        tafseer: ""

                    };

                }
            );


        return quranData;


    } catch (error) {

        console.error(
            "Surah loading error:",
            error
        );

        quranData = [];

        return [];

    }

                }
// =====================================================
// JALALAYN TAFSEER LOADER
// =====================================================

async function loadJalalaynTafseer(surahNumber) {

    try {

        const response =
            await fetch(
                "https://api.alquran.cloud/v1/surah/" +
                surahNumber +
                "/ar.jalalayn"
            );

        if (!response.ok) {
            throw new Error(
                "Jalalayn Tafseer loading failed"
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
                "Invalid Tafseer response"
            );
        }

        return result.data.ayahs;

    } catch (error) {

        console.error(
            "Jalalayn Tafseer error:",
            error
        );

        return [];
    }
            }
// =====================================================
// LOAD QURAN + URDU + TAFSEER
// =====================================================

async function loadCompleteQuranData(surahNumber) {

    try {

        const data =
            await loadSurahWithUrdu(
                surahNumber
            );

        const tafseer =
            await loadJalalaynTafseer(
                surahNumber
            );

        if (!data || data.length === 0) {
            return [];
        }

        quranData =
            data.map(function (ayah, index) {

                return {

                    surah:
                        ayah.surah,

                    surahNameArabic:
                        ayah.surahNameArabic,

                    surahNameUrdu:
                        ayah.surahNameUrdu,

                    ayah:
                        ayah.ayah,

                    arabic:
                        ayah.arabic,

                    urdu:
                        ayah.urdu,

                    tafseer:
                        tafseer[index]
                            ? tafseer[index].text
                            : ""

                };

            });

        return quranData;

    } catch (error) {

        console.error(
            "Complete Quran data error:",
            error
        );

        return [];

    }

                    }
// =====================================================
// CONNECT COMPLETE QURAN DATA TO WEBSITE
// =====================================================

window.loadQuranSurah =
    async function (surahNumber) {

        try {

            const data =
                await loadCompleteQuranData(
                    Number(surahNumber)
                );

            if (
                typeof displayAyahs ===
                "function"
            ) {

                displayAyahs(data);

            }

            return data;

        } catch (error) {

            console.error(
                "Complete Quran loading error:",
                error
            );

            return [];

        }

    };
// =====================================================
// FINAL MULTI-LANGUAGE QURAN DATA LOADER
// =====================================================

const QURAN_API =
    "https://api.alquran.cloud/v1";


// -----------------------------------------------------
// LANGUAGE EDITIONS
// -----------------------------------------------------

const QURAN_TRANSLATIONS = {

    ur: "ur.jalandhry",

    en: "en.sahih",

    hi: "hi.hindi",

    bn: "bn.bengali",

    tr: "tr.diyanet",

    id: "id.indonesian",

    ms: "ms.basmeih",

    fr: "fr.hamidullah",

    de: "de.bubenheim",

    es: "es.cortes",

    ru: "ru.kuliev",

    fa: "fa.makarem",

    ar: "ar.muyassar",

    ta: "ta.tamil",

    te: "te.telugu",

    gu: "gu.gujarati"

};


// -----------------------------------------------------
// ARABIC EDITION
// -----------------------------------------------------

const QURAN_ARABIC_EDITION =
    "quran-uthmani";


// -----------------------------------------------------
// LOAD SELECTED SURAH
// -----------------------------------------------------

async function loadCompleteSurah(surahNumber) {

    try {

        const language =
            localStorage.getItem(
                "quranLanguage"
            ) || "ur";


        const translationEdition =
            QURAN_TRANSLATIONS[language] ||
            QURAN_TRANSLATIONS.ur;


        const editions =
            QURAN_ARABIC_EDITION +
            "," +
            translationEdition;


        const url =
            QURAN_API +
            "/surah/" +
            surahNumber +
            "/editions/" +
            editions;


        console.log(
            "Loading Quran:",
            url
        );


        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                "Quran API error: " +
                response.status
            );

        }


        const result =
            await response.json();


        if (
            !result ||
            !result.data ||
            result.data.length < 2
        ) {

            throw new Error(
                "Quran data unavailable"
            );

        }


        const arabicData =
            result.data[0];

        const translationData =
            result.data[1];


        const arabicAyahs =
            arabicData.ayahs || [];

        const translationAyahs =
            translationData.ayahs || [];


        const finalData =
            arabicAyahs.map(
                function (ayah, index) {

                    const translation =
                        translationAyahs[index];


                    return {

                        surah:
                            Number(surahNumber),

                        ayah:
                            ayah.numberInSurah,

                        arabic:
                            ayah.text,

                        urdu:
                            language === "ur"
                                ? (
                                    translation
                                        ? translation.text
                                        : ""
                                  )
                                : "",

                        translation:
                            translation
                                ? translation.text
                                : "",

                        tafseer: "",

                        surahNameArabic:
                            arabicData.surah.name,

                        surahNameUrdu:
                            arabicData.surah
                                .englishName

                    };

                }
            );


        return finalData;


    } catch (error) {

        console.error(
            "Quran loading failed:",
            error
        );


        return [];

    }

}


// -----------------------------------------------------
// CONNECT TO EXISTING WEBSITE
// -----------------------------------------------------

window.loadQuranSurah =
    async function (surahNumber) {

        const data =
            await loadCompleteSurah(
                surahNumber
            );


        if (
            typeof displayAyahs ===
            "function"
        ) {

            displayAyahs(data);

        }


        return data;

    };


// -----------------------------------------------------
// SURAH SELECT
// -----------------------------------------------------

if (typeof surahSelect !== "undefined") {

    surahSelect.addEventListener(
        "change",
        async function () {

            const surahNumber =
                Number(this.value);


            if (!surahNumber) {

                return;

            }


            await window.loadQuranSurah(
                surahNumber
            );

        }
    );

}


// -----------------------------------------------------
// FIRST LOAD
// -----------------------------------------------------

window.addEventListener(
    "load",
    async function () {

        const firstSurah =
            1;


        await window.loadQuranSurah(
            firstSurah
        );

    }
);
// =====================================================
// SURAH 1 — AL-FATIHAH
// 16 LANGUAGE DATA
// =====================================================

window.quranData = [];

const FATIHAH_EDITIONS = {
    ar: "quran-uthmani",
    ur: "ur.jalandhry",
    en: "en.sahih",
    hi: "hi.hindi",
    bn: "bn.bengali",
    gu: "gu.gujarati",
    ta: "ta.tamil",
    te: "te.telugu",
    tr: "tr.diyanet",
    fa: "fa.makarem",
    id: "id.indonesian",
    ms: "ms.basmeih",
    fr: "fr.hamidullah",
    de: "de.bubenheim",
    es: "es.cortes",
    ru: "ru.kuliev"
};


// =====================================================
// LOAD SURAH 1
// =====================================================

async function loadFatihaData() {

    try {

        const requests =
            Object.entries(FATIHAH_EDITIONS)
            .map(async function ([lang, edition]) {

                const response =
                    await fetch(
                        "https://api.alquran.cloud/v1/surah/1/" +
                        edition
                    );

                if (!response.ok) {
                    throw new Error(
                        "Failed: " + edition
                    );
                }

                const result =
                    await response.json();

                return {
                    lang: lang,
                    data: result.data
                };

            });


        const results =
            await Promise.all(requests);


        const languages = {};


        results.forEach(function (item) {

            languages[item.lang] =
                item.data;

        });


        const arabic =
            languages.ar;


        if (!arabic || !arabic.ayahs) {

            throw new Error(
                "Arabic Quran data not found."
            );

        }


        window.quranData =
            arabic.ayahs.map(
                function (ayah, index) {

                    return {

                        surah: 1,

                        ayah:
                            ayah.numberInSurah,

                        surahNameArabic:
                            "سُورَةُ ٱلْفَاتِحَةِ",

                        surahNameUrdu:
                            "الفاتحہ",


                        arabic:
                            ayah.text,


                        translations: {

                            ur:
                                languages.ur?.ayahs?.[index]?.text || "",

                            en:
                                languages.en?.ayahs?.[index]?.text || "",

                            hi:
                                languages.hi?.ayahs?.[index]?.text || "",

                            bn:
                                languages.bn?.ayahs?.[index]?.text || "",

                            gu:
                                languages.gu?.ayahs?.[index]?.text || "",

                            ta:
                                languages.ta?.ayahs?.[index]?.text || "",

                            te:
                                languages.te?.ayahs?.[index]?.text || "",

                            tr:
                                languages.tr?.ayahs?.[index]?.text || "",

                            fa:
                                languages.fa?.ayahs?.[index]?.text || "",

                            id:
                                languages.id?.ayahs?.[index]?.text || "",

                            ms:
                                languages.ms?.ayahs?.[index]?.text || "",

                            fr:
                                languages.fr?.ayahs?.[index]?.text || "",

                            de:
                                languages.de?.ayahs?.[index]?.text || "",

                            es:
                                languages.es?.ayahs?.[index]?.text || "",

                            ru:
                                languages.ru?.ayahs?.[index]?.text || "",

                            ar:
                                languages.ar?.ayahs?.[index]?.text || ""

                        },


                        // Existing system ke liye
                        urdu:
                            languages.ur?.ayahs?.[index]?.text || "",


                        tafseer: ""


                    };

                }
            );


        console.log(
            "✅ Surah Al-Fatihah loaded:",
            window.quranData.length,
            "Ayahs"
        );


        // Existing website ko data dena
        if (
            typeof displayAyahs === "function"
        ) {

            displayAyahs(
                window.quranData
            );

        }


    } catch (error) {

        console.error(
            "❌ Al-Fatihah loading error:",
            error
        );

    }

}


// =====================================================
// START
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadFatihaData();

    }
);
// =====================================================
// PART 2 — SURAH AL-BAQARAH
// 286 AYAT
// =====================================================

async function loadBaqarahData() {

    try {

        const editions = [
            "quran-uthmani",
            "ur.jalandhry",
            "en.sahih",
            "hi.hindi",
            "bn.bengali",
            "tr.diyanet",
            "id.indonesian",
            "ms.basmeih",
            "fr.hamidullah",
            "de.bubenheim",
            "es.cortes",
            "ru.kuliev"
        ];

        const requests = editions.map(
            function (edition) {

                return fetch(
                    "https://api.alquran.cloud/v1/surah/2/" +
                    edition
                ).then(
                    function (response) {
                        return response.json();
                    }
                );

            }
        );


        const results =
            await Promise.all(requests);


        const arabic =
            results[0].data;

        const urdu =
            results[1].data;

        const english =
            results[2].data;

        const hindi =
            results[3].data;

        const bengali =
            results[4].data;

        const turkish =
            results[5].data;

        const indonesian =
            results[6].data;

        const malay =
            results[7].data;

        const french =
            results[8].data;

        const german =
            results[9].data;

        const spanish =
            results[10].data;

        const russian =
            results[11].data;


        window.baqarahData =
            arabic.ayahs.map(
                function (ayah, index) {

                    return {

                        surah: 2,

                        ayah:
                            ayah.numberInSurah,

                        surahNameArabic:
                            arabic.name,

                        surahNameUrdu:
                            "البقرہ",

                        arabic:
                            ayah.text,

                        translations: {

                            ur:
                                urdu.ayahs[index].text,

                            en:
                                english.ayahs[index].text,

                            hi:
                                hindi.ayahs[index].text,

                            bn:
                                bengali.ayahs[index].text,

                            tr:
                                turkish.ayahs[index].text,

                            id:
                                indonesian.ayahs[index].text,

                            ms:
                                malay.ayahs[index].text,

                            fr:
                                french.ayahs[index].text,

                            de:
                                german.ayahs[index].text,

                            es:
                                spanish.ayahs[index].text,

                            ru:
                                russian.ayahs[index].text

                        },

                        urdu:
                            urdu.ayahs[index].text,

                        tafseer: ""

                    };

                }
            );


        console.log(
            "✅ Surah Al-Baqarah loaded:",
            window.baqarahData.length,
            "Ayahs"
        );


        if (
            typeof displayAyahs ===
            "function"
        ) {

            displayAyahs(
                window.baqarahData
            );

        }


    } catch (error) {

        console.error(
            "❌ Al-Baqarah loading error:",
            error
        );

    }

}
