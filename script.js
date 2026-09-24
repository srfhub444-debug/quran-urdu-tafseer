// =====================================================
// PREMIUM QURAN WEBSITE
// Main JavaScript
// =====================================================

// =====================================================
// IMPORTANT HTML ELEMENTS
// =====================================================

const ayahContainer = document.getElementById("ayahContainer");
const surahSelect = document.getElementById("surahSelect");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const themeButton = document.getElementById("themeButton");
const backToTop = document.getElementById("backToTop");


// =====================================================
// ARABIC AYAH NUMBER
// Example: 1 → ١
// Example: 10 → ١٠
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

            return arabicDigits[Number(digit)] ?? digit;

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

    }
);


// =====================================================
// SURAH LIST
// =====================================================

function loadSurahs() {

    if (!surahSelect) return;

    surahSelect.innerHTML = `
        <option value="">
            سورت منتخب کریں
        </option>
    `;

    const surahs = [];

    quranData.forEach(function (ayah) {

        const alreadyExists =
            surahs.some(function (surah) {

                return surah.number === ayah.surah;

            });


        if (!alreadyExists) {

            surahs.push({

                number: ayah.surah,

                arabic: ayah.surahNameArabic,

                urdu: ayah.surahNameUrdu

            });

        }

    });


    surahs.forEach(function (surah) {

        const option =
            document.createElement("option");

        option.value = surah.number;

        option.textContent =
            surah.number +
            " — " +
            surah.urdu +
            " (" +
            surah.arabic +
            ")";

        surahSelect.appendChild(option);

    });

}


// =====================================================
// DISPLAY AYAH
// =====================================================

function displayAyahs(data) {

    ayahContainer.innerHTML = "";


    if (!data || data.length === 0) {

        ayahContainer.innerHTML = `

            <div class="ayah-card">

                <div
                    class="urdu"
                    style="min-height:120px;"
                >

                    کوئی نتیجہ نہیں ملا۔

                </div>

            </div>

        `;

        return;
    }


    data.forEach(function (ayah) {

        const card =
            document.createElement("article");

        card.className = "ayah-card";


        card.id =
            "ayah-" +
            ayah.surah +
            "-" +
            ayah.ayah;


        const bookmarkKey =
            getBookmarkKey(ayah);


        const isBookmarked =
            isAyahBookmarked(ayah);


        card.innerHTML = `

            <!-- Ayah Header -->

            <div class="ayah-header">

                <div>

                    <strong>
                        ${escapeHTML(ayah.surahNameUrdu)}
                    </strong>

                    <span>
                        — آیت ${ayah.ayah}
                    </span>

                </div>

            </div>


            <!-- Arabic + Urdu -->

            <div class="ayah-content">

                <div
                    class="arabic"
                    dir="rtl"
                >

                    ${escapeHTML(ayah.arabic)}

                    <span
                        class="ayah-number"
                        aria-label="آیت نمبر ${arabicAyahNumber(ayah.ayah)}"
                    >
                        ۝${arabicAyahNumber(ayah.ayah)}
                    </span>

                </div>


                <div
                    class="urdu"
                    dir="rtl"
                >

                    ${escapeHTML(ayah.urdu)}

                </div>

            </div>


            <!-- Action Buttons -->

            <div class="ayah-actions">


                <button
                    class="tafseer-button"
                    type="button"
                    data-action="tafseer"
                >

                    📖 تفسیر دیکھیں

                </button>


                <button
                    class="action-button bookmark-button"
                    type="button"
                    data-action="bookmark"
                >

                    ${
                        isBookmarked
                            ? "🔖 محفوظ شدہ"
                            : "🔖 محفوظ کریں"
                    }

                </button>


                <button
                    class="action-button"
                    type="button"
                    data-action="copy"
                >

                    📋 کاپی

                </button>


                <button
                    class="action-button"
                    type="button"
                    data-action="share"
                >

                    📤 شیئر

                </button>


                <button
                    class="action-button"
                    type="button"
                    data-action="link"
                >

                    🔗 لنک

                </button>


            </div>


            <!-- Tafseer -->

            <div class="tafseer">

                <strong>
                    📖 تفسیر
                </strong>

                <p>
                    ${escapeHTML(ayah.tafseer)}
                </p>

            </div>


            <!-- Previous / Next -->

            <div class="ayah-navigation">

                <button
                    class="nav-button"
                    type="button"
                    data-action="previous"
                >

                    ← پچھلی آیت

                </button>


                <span>
                    آیت ${ayah.ayah}
                </span>


                <button
                    class="nav-button"
                    type="button"
                    data-action="next"
                >

                    اگلی آیت →

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
            card.querySelector(".tafseer");


        tafseerButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    tafseer.style.display === "block";


                if (isOpen) {

                    tafseer.style.display = "none";

                    tafseerButton.textContent =
                        "📖 تفسیر دیکھیں";

                } else {

                    tafseer.style.display = "block";

                    tafseerButton.textContent =
                        "📕 تفسیر بند کریں";

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

                toggleBookmark(ayah);

                const saved =
                    isAyahBookmarked(ayah);


                this.textContent =
                    saved
                        ? "🔖 محفوظ شدہ"
                        : "🔖 محفوظ کریں";

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

                copyAyah(ayah, this);

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

                shareAyah(ayah);

            }
        );


        // =================================================
        // DIRECT LINK
        // =================================================

        card.querySelector(
            '[data-action="link"]'
        ).addEventListener(
            "click",
            function () {

                copyAyahLink(ayah, this);

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

                goToPreviousAyah(ayah);

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

                goToNextAyah(ayah);

            }
        );


        ayahContainer.appendChild(card);

    });

}


// =====================================================
// SEARCH
// =====================================================

function performSearch() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    if (search === "") {

        displayAyahs(quranData);

        return;
    }


    const results =
        quranData.filter(function (ayah) {

            return (

                String(ayah.ayah)
                    .includes(search)

                ||

                String(ayah.surah)
                    .includes(search)

                ||

                ayah.arabic
                    .toLowerCase()
                    .includes(search)

                ||

                ayah.urdu
                    .toLowerCase()
                    .includes(search)

                ||

                ayah.tafseer
                    .toLowerCase()
                    .includes(search)

                ||

                ayah.surahNameUrdu
                    .toLowerCase()
                    .includes(search)

                ||

                ayah.surahNameArabic
                    .toLowerCase()
                    .includes(search)

            );

        });


    displayAyahs(results);

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


            if (selectedSurah === "") {

                displayAyahs(quranData);

                return;

            }


            const filtered =
                quranData.filter(
                    function (ayah) {

                        return String(ayah.surah)
                            === String(selectedSurah);

                    }
                );


            displayAyahs(filtered);


            document
                .getElementById("surahs")
                ?.scrollIntoView({
                    behavior: "smooth"
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
                dark ? "dark" : "light"
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


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

    }

}


// =====================================================
// BOOKMARK SYSTEM
// =====================================================

function getBookmarkKey(ayah) {

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


function saveBookmarks(bookmarks) {

    localStorage.setItem(
        "quranBookmarks",
        JSON.stringify(bookmarks)
    );

}


function isAyahBookmarked(ayah) {

    const bookmarks =
        getBookmarks();


    return bookmarks.includes(
        getBookmarkKey(ayah)
    );

}


function toggleBookmark(ayah) {

    const bookmarks =
        getBookmarks();


    const key =
        getBookmarkKey(ayah);


    const index =
        bookmarks.indexOf(key);


    if (index === -1) {

        bookmarks.push(key);

    } else {

        bookmarks.splice(index, 1);

    }


    saveBookmarks(bookmarks);

}


// =====================================================
// COPY AYAH
// =====================================================

function copyAyah(ayah, button) {

    const text =
        ayah.arabic +
        " ۝" +
        arabicAyahNumber(ayah.ayah) +
        "\n\n" +
        ayah.urdu;


    navigator.clipboard
        .writeText(text)
        .then(function () {

            const oldText =
                button.textContent;


            button.textContent =
                "✓ کاپی ہوگیا";


            setTimeout(
                function () {

                    button.textContent =
                        oldText;

                },
                1800
            );

        })
        .catch(function () {

            alert(
                "کاپی نہیں ہو سکا۔"
            );

        });

}


// =====================================================
// SHARE
// =====================================================

function shareAyah(ayah) {

    const url =
        createAyahURL(ayah);


    const text =
        ayah.arabic +
        " ۝" +
        arabicAyahNumber(ayah.ayah) +
        "\n\n" +
        ayah.urdu;


    if (navigator.share) {

        navigator.share({

            title:
                "قرآن کریم — آیت " +
                arabicAyahNumber(ayah.ayah),

            text: text,

            url: url

        }).catch(function () {});

    } else {

        copyText(url);

        alert(
            "آیت کا لنک کاپی ہوگیا۔"
        );

    }

}


// =====================================================
// DIRECT AYAH LINK
// =====================================================

function createAyahURL(ayah) {

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


function copyAyahLink(ayah, button) {

    const url =
        createAyahURL(ayah);


    copyText(url);


    const oldText =
        button.textContent;


    button.textContent =
        "✓ لنک کاپی ہوگیا";


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


    if (!hash.startsWith("#ayah-")) {

        return;

    }


    setTimeout(
        function () {

            const element =
                document.querySelector(hash);


            if (element) {

                element.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

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

function goToPreviousAyah(ayah) {

    const currentIndex =
        quranData.findIndex(
            function (item) {

                return (

                    item.surah === ayah.surah &&

                    item.ayah === ayah.ayah

                );

            }
        );


    if (currentIndex <= 0) {

        alert(
            "یہ پہلی دستیاب آیت ہے۔"
        );

        return;

    }


    const previous =
        quranData[currentIndex - 1];


    displayAyahs(quranData);


    setTimeout(
        function () {

            const element =
                document.getElementById(
                    "ayah-" +
                    previous.surah +
                    "-" +
                    previous.ayah
                );


            element?.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        },
        100
    );

}


// =====================================================
// NEXT AYAH
// =====================================================

function goToNextAyah(ayah) {

    const currentIndex =
        quranData.findIndex(
            function (item) {

                return (

                    item.surah === ayah.surah &&

                    item.ayah === ayah.ayah

                );

            }
        );


    if (
        currentIndex === -1 ||
        currentIndex >= quranData.length - 1
    ) {

        alert(
            "یہ آخری دستیاب آیت ہے۔"
        );

        return;

    }


    const next =
        quranData[currentIndex + 1];


    displayAyahs(quranData);


    setTimeout(
        function () {

            const element =
                document.getElementById(
                    "ayah-" +
                    next.surah +
                    "-" +
                    next.ayah
                );


            element?.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

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

                behavior: "smooth"

            });

        }
    );

}


// =====================================================
// COPY TEXT HELPER
// =====================================================

function copyText(text) {

    if (
        navigator.clipboard &&
        navigator.clipboard.writeText
    ) {

        navigator.clipboard.writeText(text);

        return;

    }


    const textarea =
        document.createElement("textarea");


    textarea.value = text;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    textarea.remove();

}


// =====================================================
// SECURITY HELPER
// =====================================================

function escapeHTML(value) {

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
// MULTI-LANGUAGE SYSTEM
// =====================================================

const languageSelect = document.getElementById("languageSelect");

const languageUI = {

    ur: {
        name: "اردو",
        direction: "rtl",

        chooseLanguage: "🌐 زبان منتخب کریں",
        home: "🏠 ہوم",
        surahs: "📖 سورتیں",
        favorites: "🔖 پسندیدہ",
        search: "🔍 تلاش",

        surahSelect: "سورت منتخب کریں",
        searchPlaceholder: "آیت، ترجمہ یا تفسیر میں تلاش کریں...",
        searchButton: "تلاش",

        tafseerOpen: "📖 تفسیر دیکھیں",
        tafseerClose: "📕 تفسیر بند کریں",

        bookmarkSave: "🔖 محفوظ کریں",
        bookmarkSaved: "🔖 محفوظ شدہ",

        copy: "📋 کاپی",
        share: "📤 شیئر",
        link: "🔗 لنک",

        previous: "← پچھلی آیت",
        next: "اگلی آیت →",

        noResult: "کوئی نتیجہ نہیں ملا۔",
        tafseerTitle: "📖 تفسیر"
    },

    en: {
        name: "English",
        direction: "ltr",

        chooseLanguage: "🌐 Choose Your Language",
        home: "🏠 Home",
        surahs: "📖 Surahs",
        favorites: "🔖 Favorites",
        search: "🔍 Search",

        surahSelect: "Select Surah",
        searchPlaceholder: "Search Ayah, translation or Tafseer...",
        searchButton: "Search",

        tafseerOpen: "📖 View Tafseer",
        tafseerClose: "📕 Close Tafseer",

        bookmarkSave: "🔖 Save",
        bookmarkSaved: "🔖 Saved",

        copy: "📋 Copy",
        share: "📤 Share",
        link: "🔗 Link",

        previous: "← Previous Ayah",
        next: "Next Ayah →",

        noResult: "No results found.",
        tafseerTitle: "📖 Tafseer"
    },

    hi: {
        name: "हिन्दी",
        direction: "ltr",

        chooseLanguage: "🌐 भाषा चुनें",
        home: "🏠 होम",
        surahs: "📖 सूरह",
        favorites: "🔖 पसंदीदा",
        search: "🔍 खोज",

        surahSelect: "सूरह चुनें",
        searchPlaceholder: "आयत, अनुवाद या तफ़सीर खोजें...",
        searchButton: "खोजें",

        tafseerOpen: "📖 तफ़सीर देखें",
        tafseerClose: "📕 तफ़सीर बंद करें",

        bookmarkSave: "🔖 सुरक्षित करें",
        bookmarkSaved: "🔖 सुरक्षित किया गया",

        copy: "📋 कॉपी",
        share: "📤 शेयर",
        link: "🔗 लिंक",

        previous: "← पिछली आयत",
        next: "अगली आयत →",

        noResult: "कोई परिणाम नहीं मिला।",
        tafseerTitle: "📖 तफ़सीर"
    },

    ar: {
        name: "العربية",
        direction: "rtl",

        chooseLanguage: "🌐 اختر لغتك",
        home: "🏠 الرئيسية",
        surahs: "📖 السور",
        favorites: "🔖 المفضلة",
        search: "🔍 بحث",

        surahSelect: "اختر السورة",
        searchPlaceholder: "ابحث في الآية أو الترجمة أو التفسير...",
        searchButton: "بحث",

        tafseerOpen: "📖 عرض التفسير",
        tafseerClose: "📕 إغلاق التفسير",

        bookmarkSave: "🔖 حفظ",
        bookmarkSaved: "🔖 محفوظ",

        copy: "📋 نسخ",
        share: "📤 مشاركة",
        link: "🔗 الرابط",

        previous: "← الآية السابقة",
        next: "الآية التالية →",

        noResult: "لم يتم العثور على نتائج.",
        tafseerTitle: "📖 التفسير"
    }
};


// -----------------------------------------------------
// CURRENT LANGUAGE
// -----------------------------------------------------

let currentLanguage =
    localStorage.getItem("quranLanguage") || "ur";


// -----------------------------------------------------
// APPLY LANGUAGE TO WEBSITE
// -----------------------------------------------------

function applyLanguage(language) {

    if (!languageUI[language]) {
        language = "ur";
    }

    currentLanguage = language;

    localStorage.setItem(
        "quranLanguage",
        language
    );

    const ui = languageUI[language];

    document.documentElement.lang = language;
    document.documentElement.dir = ui.direction;

    document.body.dir = ui.direction;


    // Language label
    const languageLabel =
        document.querySelector(".language-bar label");

    if (languageLabel) {
        languageLabel.textContent =
            ui.chooseLanguage;
    }


    // Navigation
    const navLinks =
        document.querySelectorAll(".main-nav a");

    if (navLinks.length >= 4) {

        navLinks[0].textContent = ui.home;
        navLinks[1].textContent = ui.surahs;
        navLinks[2].textContent = ui.favorites;
        navLinks[3].textContent = ui.search;

    }


    // Surah selector
    if (surahSelect) {

        const firstOption =
            surahSelect.querySelector("option");

        if (firstOption) {
            firstOption.textContent =
                ui.surahSelect;
        }

    }


    // Search
    if (searchInput) {
        searchInput.placeholder =
            ui.searchPlaceholder;
    }

    if (searchButton) {
        searchButton.textContent =
            ui.searchButton;
    }


    // Rebuild Ayah cards
    if (typeof displayAyahs === "function") {
        displayAyahs(quranData);
    }
}


// -----------------------------------------------------
// LANGUAGE SELECTOR
// -----------------------------------------------------

if (languageSelect) {

    languageSelect.value =
        currentLanguage;

    languageSelect.addEventListener(
        "change",
        function () {

            applyLanguage(
                this.value
            );

        }
    );

}


// -----------------------------------------------------
// LOAD SAVED LANGUAGE
// -----------------------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (languageSelect) {

            languageSelect.value =
                currentLanguage;

        }

        applyLanguage(
            currentLanguage
        );

    }
);
// =====================================================
// ENGLISH QURAN TRANSLATION
// QuranEnc - English Saheeh
// =====================================================

(function () {

    const ENGLISH_TRANSLATION_KEY = "english_saheeh";

    async function loadEnglishTranslation() {

        try {

            const response = await fetch(
                "https://quranenc.com/api/v1/translation/sura/" +
                ENGLISH_TRANSLATION_KEY +
                "/1"
            );

            if (!response.ok) {
                throw new Error("English translation could not be loaded.");
            }

            const englishData = await response.json();

            if (!Array.isArray(englishData)) {
                throw new Error("Invalid English translation data.");
            }

            englishData.forEach(function (item) {

                const ayah = quranData.find(function (q) {

                    return (
                        Number(q.surah) === Number(item.sura) &&
                        Number(q.ayah) === Number(item.aya)
                    );

                });

                if (ayah) {

                    ayah.english = item.translation;

                }

            });

            console.log(
                "English translation loaded successfully."
            );

        } catch (error) {

            console.error(
                "English translation error:",
                error
            );

        }

    }


    document.addEventListener(
        "DOMContentLoaded",
        function () {

            loadEnglishTranslation();

        }
    );

})();
// =====================================================
// SHOW ENGLISH TRANSLATION
// =====================================================

(function () {

    const originalDisplayAyahs = displayAyahs;

    displayAyahs = function (data) {

        originalDisplayAyahs(data);

        if (typeof currentLanguage !== "undefined" &&
            currentLanguage === "en") {

            const cards =
                ayahContainer.querySelectorAll(".ayah-card");

            cards.forEach(function (card) {

                const parts =
                    card.id.split("-");

                const surahNumber =
                    Number(parts[1]);

                const ayahNumber =
                    Number(parts[2]);

                const ayah =
                    quranData.find(function (item) {

                        return (
                            Number(item.surah) === surahNumber &&
                            Number(item.ayah) === ayahNumber
                        );

                    });

                if (ayah && ayah.english) {

                    const translation =
                        card.querySelector(".urdu");

                    if (translation) {

                        translation.textContent =
                            ayah.english;

                        translation.setAttribute(
                            "dir",
                            "ltr"
                        );

                    }

                }

            });

        }

    };

})();
// =====================================================
// ENGLISH TRANSLATION FIX
// =====================================================

(function () {

    async function loadEnglishTranslationFix() {

        try {

            const response = await fetch(
                "https://quranenc.com/api/v1/translation/sura/english_saheeh/1"
            );

            const data = await response.json();

            const englishRows =
                data.result || data;

            if (!Array.isArray(englishRows)) {
                console.error(
                    "English translation format is invalid."
                );
                return;
            }

            englishRows.forEach(function (item) {

                const ayah = quranData.find(function (q) {

                    return (
                        Number(q.surah) === Number(item.sura) &&
                        Number(q.ayah) === Number(item.aya)
                    );

                });

                if (ayah) {
                    ayah.english = item.translation;
                }

            });

            console.log(
                "English translation FIX loaded."
            );

            if (
                typeof currentLanguage !== "undefined" &&
                currentLanguage === "en"
            ) {

                displayAyahs(quranData);

            }

        } catch (error) {

            console.error(
                "English translation FIX error:",
                error
            );

        }

    }

    document.addEventListener(
        "DOMContentLoaded",
        function () {
            loadEnglishTranslationFix();
        }
    );

})();
