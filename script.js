/* =========================================================
   QURAN WEBSITE — URDU ONLY
   Clean replacement for script.js
   ========================================================= */

(function () {
    "use strict";

    const API = "https://api.alquran.cloud/v1";

    const state = {
        allAyahs: [],
        surahs: [],
        currentSurah: 1,
        searchResults: null,
        loaded: false
    };

    const TEXT = {
        loading: "قرآن کریم لوڈ ہو رہا ہے...",
        loadingSurah: "سورت لوڈ ہو رہی ہے...",
        error: "قرآن لوڈ نہیں ہو سکا۔ براہِ کرم دوبارہ کوشش کریں۔",
        translationError: "اردو ترجمہ دستیاب نہیں ہو سکا۔",
        tafseerError: "اردو تشریح دستیاب نہیں ہو سکی۔",
        home: "ہوم",
        surah: "سورت",
        selectSurah: "سورت منتخب کریں",
        search: "تلاش",
        searchPlaceholder: "آیت، ترجمہ یا سورت میں تلاش کریں...",
        translation: "اردو ترجمہ",
        tafseer: "تفسیر / تشریح",
        showTafseer: "تفسیر دیکھیں",
        hideTafseer: "تفسیر بند کریں",
        copy: "کاپی",
        share: "شیئر",
        copied: "کاپی ہوگیا ✓",
        shared: "شیئر ہوگیا ✓",
        bookmark: "محفوظ",
        removeBookmark: "محفوظات سے ہٹائیں",
        noResults: "کوئی نتیجہ نہیں ملا۔",
        previous: "پچھلی آیت",
        next: "اگلی آیت",
        first: "یہ پہلی آیت ہے۔",
        last: "یہ آخری آیت ہے۔",
        ayah: "آیت",
        ayahs: "آیات",
        retry: "دوبارہ کوشش کریں",
        bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ"
    };

    function escapeHTML(value) {
        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    const els = {
        container: document.getElementById("ayahContainer"),
        surahSelect: document.getElementById("surahSelect"),
        searchInput: document.getElementById("searchInput"),
        searchButton: document.getElementById("searchButton"),
        themeButton: document.getElementById("themeButton"),
        backToTop: document.getElementById("backToTop"),
        languageSelect: document.getElementById("languageSelect"),
        home: document.getElementById("home"),
        surahs: document.getElementById("surahs")
    };

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
        [21,"الأنبياء","Al-Anbya",112],
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
        [58,"المجادلة","Al-Mujadilah",22],
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

    state.surahs = SURAH_LIST.map(function (item) {
        return {
            number: item[0],
            name: item[1],
            englishName: item[2],
            ayahs: item[3]
        };
    });

    if (els.languageSelect) {
        els.languageSelect.style.display = "none";
    }

    function buildSurahSelector() {
        if (!els.surahSelect) return;

        els.surahSelect.innerHTML =
            '<option value="">سورت منتخب کریں</option>' +
            state.surahs.map(function (surah) {
                return (
                    '<option value="' +
                    surah.number +
                    '">' +
                    surah.number +
                    " — " +
                    escapeHTML(surah.name) +
                    " (" +
                    escapeHTML(surah.englishName) +
                    ")" +
                    "</option>"
                );
            }).join("");
    }

    async function fetchEdition(edition) {
        const response = await fetch(
            API + "/quran/" + edition,
            {
                method: "GET",
                cache: "default"
            }
        );

        if (!response.ok) {
            throw new Error(
                "API " + edition + " failed: " + response.status
            );
        }

        const result = await response.json();

        if (
            !result ||
            !result.data ||
            !Array.isArray(result.data.surahs)
        ) {
            throw new Error(
                "Invalid response for " + edition
            );
        }

        return result.data;
    }

    async function loadCompleteQuran() {
        if (!els.container) {
            console.error("ayahContainer not found.");
            return;
        }

        els.container.innerHTML =
            '<div class="ayah-card">' +
            '<div class="urdu" style="text-align:center;padding:35px;">' +
            TEXT.loading +
            "</div></div>";

        try {
            const results = await Promise.allSettled([
                fetchEdition("quran-uthmani"),
                fetchEdition("ur.jalandhry"),
                fetchEdition("ur.maududi")
            ]);

            const arabicResult = results[0];
            const urduResult = results[1];
            const maududiResult = results[2];

            if (arabicResult.status !== "fulfilled") {
                throw arabicResult.reason;
            }

            if (urduResult.status !== "fulfilled") {
                throw urduResult.reason;
            }

            const arabic = arabicResult.value;
            const urdu = urduResult.value;

            const maududi =
                maududiResult.status === "fulfilled"
                    ? maududiResult.value
                    : null;

            const data = [];

            for (let s = 0; s < arabic.surahs.length; s++) {

                const arabicSurah = arabic.surahs[s];
                const urduSurah = urdu.surahs[s];

                const maududiSurah =
                    maududi && maududi.surahs
                        ? maududi.surahs[s]
                        : null;

                for (
                    let a = 0;
                    a < arabicSurah.ayahs.length;
                    a++
                ) {

                    const arAyah =
                        arabicSurah.ayahs[a];

                    const urAyah =
                        urduSurah &&
                        urduSurah.ayahs
                            ? urduSurah.ayahs[a]
                            : null;

                    const mdAyah =
                        maududiSurah &&
                        maududiSurah.ayahs
                            ? maududiSurah.ayahs[a]
                            : null;

                    data.push({
                        number: arAyah.number,
                        surah: arabicSurah.number,

                        surahNameArabic:
                            arabicSurah.name ||
                            state.surahs[s].name,

                        surahNameUrdu:
                            state.surahs[s]
                                ? state.surahs[s].name
                                : "",

                        ayah: arAyah.numberInSurah,

                        arabic:
                            arAyah.text || "",

                        urdu:
                            urAyah && urAyah.text
                                ? urAyah.text
                                : "",

                        tafseer:
                            mdAyah && mdAyah.text
                                ? mdAyah.text
                                : ""
                    });
                }
            }

            state.allAyahs = data;
            state.loaded = true;

            window.quranData = data;
            window.currentLanguage = "ur";

            renderSurah(1);

            console.log(
                "Quran loaded successfully:",
                data.length,
                "Ayahs"
            );

        } catch (error) {

            console.error(
                "Quran loading error:",
                error
            );

            els.container.innerHTML =
                '<div class="ayah-card">' +
                '<div style="direction:rtl;text-align:center;padding:35px;">' +
                "<strong>" +
                TEXT.error +
                "</strong>" +
                "<br><br>" +
                '<button type="button" id="quranRetryButton">' +
                TEXT.retry +
                "</button>" +
                "</div></div>";

            const retry =
                document.getElementById(
                    "quranRetryButton"
                );

            if (retry) {
                retry.addEventListener(
                    "click",
                    loadCompleteQuran
                );
            }
        }
    }

    function ayahNumber(number) {
        return "﴿" + number + "﴾";
    }

    function getBookmarks() {
        try {

            const value =
                localStorage.getItem(
                    "quranUrduBookmarks"
                );

            return value
                ? JSON.parse(value)
                : [];

        } catch (error) {
            return [];
        }
    }

    function saveBookmarks(list) {
        try {

            localStorage.setItem(
                "quranUrduBookmarks",
                JSON.stringify(list)
            );

        } catch (error) {
            console.warn(
                "Bookmark save failed."
            );
        }
    }

    function isBookmarked(number) {
        return (
            getBookmarks().indexOf(number) !== -1
        );
    }

    function toggleBookmark(number, button) {

        let list = getBookmarks();

        const index =
            list.indexOf(number);

        if (index === -1) {
            list.push(number);
        } else {
            list.splice(index, 1);
        }

        saveBookmarks(list);

        if (button) {

            button.textContent =
                index === -1
                    ? "★"
                    : "☆";

            button.title =
                index === -1
                    ? TEXT.removeBookmark
                    : TEXT.bookmark;
        }
    }

    async function copyText(text, button) {

        try {

            await navigator.clipboard.writeText(
                text
            );

            const old =
                button
                    ? button.textContent
                    : "";

            if (button) {

                button.textContent =
                    TEXT.copied;

                setTimeout(function () {
                    button.textContent = old;
                }, 1300);
            }

        } catch (error) {

            const area =
                document.createElement(
                    "textarea"
                );

            area.value = text;
            area.style.position = "fixed";
            area.style.opacity = "0";

            document.body.appendChild(area);

            area.select();

            try {
                document.execCommand("copy");
            } catch (e) {}

            area.remove();

            if (button) {

                const old =
                    button.textContent;

                button.textContent =
                    TEXT.copied;

                setTimeout(function () {
                    button.textContent = old;
                }, 1300);
            }
        }
    }

    async function shareAyah(ayah, button) {

        const surah =
            state.surahs[
                ayah.surah - 1
            ];

        const text =
            surah.name +
            " — " +
            TEXT.ayah +
            " " +
            ayah.ayah +
            "\n\n" +
            ayah.arabic +
            "\n\n" +
            ayah.urdu;

        if (navigator.share) {

            try {

                await navigator.share({
                    title:
                        "قرآن کریم — " +
                        surah.name +
                        " " +
                        ayah.ayah,

                    text: text
                });

                if (button) {

                    const old =
                        button.textContent;

                    button.textContent =
                        TEXT.shared;

                    setTimeout(function () {
                        button.textContent =
                            old;
                    }, 1200);
                }

                return;

            } catch (error) {
                return;
            }
        }

        await copyText(
            text,
            button
        );
    }

    function toggleTafseer(
        card,
        ayah
    ) {

        const box =
            card.querySelector(
                ".tafseer-box"
            );

        if (!box) return;

        const isOpen =
            box.style.display !== "none";

        box.style.display =
            isOpen
                ? "none"
                : "block";

        const button =
            card.querySelector(
                ".tafseer-button"
            );

        if (button) {

            button.textContent =
                isOpen
                    ? TEXT.showTafseer
                    : TEXT.hideTafseer;
        }
    }

    function renderAyah(ayah) {

        const surah =
            state.surahs[
                ayah.surah - 1
            ];

        const bookmarked =
            isBookmarked(
                ayah.number
            );

        const tafseerText =
            ayah.tafseer
                ? ayah.tafseer
                : TEXT.tafseerError;

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

        card.setAttribute(
            "data-surah",
            String(ayah.surah)
        );

        card.setAttribute(
            "data-ayah",
            String(ayah.ayah)
        );

        card.innerHTML =

            '<div class="ayah-header">' +

                '<div class="ayah-surah-name" dir="rtl">' +

                    escapeHTML(
                        surah
                            ? surah.name
                            : ayah.surahNameArabic
                    ) +

                    " — " +
                    TEXT.ayah +
                    " " +
                    ayah.ayah +

                "</div>" +

                '<div class="ayah-actions">' +

                    '<button class="bookmark-button" ' +
                    'type="button" ' +
                    'title="' +
                    (
                        bookmarked
                            ? TEXT.removeBookmark
                            : TEXT.bookmark
                    ) +
                    '">' +

                    (
                        bookmarked
                            ? "★"
                            : "☆"
                    ) +

                    "</button>" +

                "</div>" +

            "</div>" +

            '<div class="ayah-content">' +

                '<div class="arabic" dir="rtl">' +

                    escapeHTML(
                        ayah.arabic
                    ) +

                    ' <span class="ayah-number">' +

                        ayahNumber(
                            ayah.ayah
                        ) +

                    "</span>" +

                "</div>" +

                '<div class="translation" dir="rtl">' +

                    '<div class="translation-label">' +
                        TEXT.translation +
                    "</div>" +

                    '<div class="urdu">' +

                        (
                            ayah.urdu
                                ? escapeHTML(
                                    ayah.urdu
                                )
                                : TEXT.translationError
                        ) +

                    "</div>" +

                "</div>" +

            "</div>" +

            '<div class="ayah-footer">' +

                '<button class="tafseer-button" type="button">' +
                    TEXT.showTafseer +
                "</button>" +

                '<button class="copy-button" type="button">' +
                    TEXT.copy +
                "</button>" +

                '<button class="share-button" type="button">' +
                    TEXT.share +
                "</button>" +

            "</div>" +

            '<div class="tafseer-box" dir="rtl" style="display:none;">' +

                '<div class="tafseer-title">' +
                    TEXT.tafseer +
                "</div>" +

                '<div class="tafseer-text">' +
                    escapeHTML(
                        tafseerText
                    ) +
                "</div>" +

            "</div>";

        const bookmarkButton =
            card.querySelector(
                ".bookmark-button"
            );

        if (bookmarkButton) {

            bookmarkButton.addEventListener(
                "click",
                function () {

                    toggleBookmark(
                        ayah.number,
                        bookmarkButton
                    );

                }
            );
        }

        const tafseerButton =
            card.querySelector(
                ".tafseer-button"
            );

        if (tafseerButton) {

            tafseerButton.addEventListener(
                "click",
                function () {

                    toggleTafseer(
                        card,
                        ayah
                    );

                }
            );
        }

        const copyButton =
            card.querySelector(
                ".copy-button"
            );

        if (copyButton) {

            copyButton.addEventListener(
                "click",
                function () {

                    const surahName =
                        surah
                            ? surah.name
                            : "";

                    const value =
                        surahName +
                        " — " +
                        TEXT.ayah +
                        " " +
                        ayah.ayah +
                        "\n\n" +
                        ayah.arabic +
                        "\n\n" +
                        ayah.urdu;

                    copyText(
                        value,
                        copyButton
                    );

                }
            );
        }

        const shareButton =
            card.querySelector(
                ".share-button"
            );

        if (shareButton) {

            shareButton.addEventListener(
                "click",
                function () {

                    shareAyah(
                        ayah,
                        shareButton
                    );

                }
            );
        }

        return card;
    }

    function renderSurah(
        surahNumber
    ) {

        if (!state.loaded) return;

        const number =
            Number(surahNumber) || 1;

        state.currentSurah =
            number;

        state.searchResults =
            null;

        const surah =
            state.surahs[
                number - 1
            ];

        const ayahs =
            state.allAyahs.filter(
                function (ayah) {

                    return (
                        ayah.surah ===
                        number
                    );

                }
            );

        if (
            !surah ||
            ayahs.length === 0
        ) {

            els.container.innerHTML =
                '<div class="ayah-card">' +

                '<div style="direction:rtl;text-align:center;padding:30px;">' +

                TEXT.noResults +

                "</div></div>";

            return;
        }

        els.container.innerHTML =
            "";

        const heading =
            document.createElement(
                "section"
            );

        heading.className =
            "surah-heading";

        heading.id =
            "surah-" + number;

        heading.innerHTML =

            '<div class="surah-title" dir="rtl">' +

                '<span class="surah-number">' +
                    number +
                "</span>" +

                '<span class="surah-name">' +
                    escapeHTML(
                        surah.name
                    ) +
                "</span>" +

            "</div>" +

            '<div class="surah-subtitle">' +

                escapeHTML(
                    surah.englishName
                ) +

                " • " +

                surah.ayahs +

                " " +

                TEXT.ayahs +

            "</div>" +

            '<div class="bismillah" dir="rtl">' +
                TEXT.bismillah +
            "</div>";

        els.container.appendChild(
            heading
        );

        ayahs.forEach(
            function (ayah) {

                els.container.appendChild(
                    renderAyah(ayah)
                );

            }
        );

        if (els.surahSelect) {

            els.surahSelect.value =
                String(number);
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function performSearch() {

        if (!state.loaded) return;

        const input =
            els.searchInput
                ? els.searchInput.value.trim()
                : "";

        if (!input) {

            renderSurah(
                state.currentSurah
            );

            return;
        }

        const query =
            input.toLocaleLowerCase(
                "ur"
            );

        const results =
            state.allAyahs.filter(
                function (ayah) {

                    return (

                        String(
                            ayah.arabic
                        )
                            .toLocaleLowerCase()
                            .includes(
                                query
                            ) ||

                        String(
                            ayah.urdu
                        )
                            .toLocaleLowerCase(
                                "ur"
                            )
                            .includes(
                                query
                            ) ||

                        String(
                            state.surahs[
                                ayah.surah - 1
                            ]
                                ? state.surahs[
                                    ayah.surah - 1
                                ].name
                                : ""
                        )
                            .toLocaleLowerCase(
                                "ur"
                            )
                            .includes(
                                query
                            )
                    );
                }
            );

        state.searchResults =
            results;

        els.container.innerHTML =
            "";

        const title =
            document.createElement(
                "div"
            );

        title.className =
            "surah-heading";

        title.innerHTML =

            '<div class="surah-title" dir="rtl">' +
                "تلاش کے نتائج" +
            "</div>" +

            '<div class="surah-subtitle">' +

                results.length +

                " " +

                TEXT.ayahs +

            "</div>";

        els.container.appendChild(
            title
        );

        if (
            results.length === 0
        ) {

            const empty =
                document.createElement(
                    "div"
                );

            empty.className =
                "ayah-card";

            empty.innerHTML =
                '<div style="direction:rtl;text-align:center;padding:35px;">' +
                TEXT.noResults +
                "</div>";

            els.container.appendChild(
                empty
            );

            return;
        }

        results.forEach(
            function (ayah) {

                els.container.appendChild(
                    renderAyah(ayah)
                );

            }
        );
    }

    function applySavedTheme() {

        let theme = "light";

        try {

            theme =
                localStorage.getItem(
                    "quranTheme"
                ) || "light";

        } catch (error) {}

        if (
            theme === "dark"
        ) {

            document.body.classList.add(
                "dark-mode"
            );

        } else {

            document.body.classList.remove(
                "dark-mode"
            );
        }
    }

    function toggleTheme() {

        const isDark =
            document.body.classList.toggle(
                "dark-mode"
            );

        try {

            localStorage.setItem(
                "quranTheme",
                isDark
                    ? "dark"
                    : "light"
            );

        } catch (error) {}

        if (els.themeButton) {

            els.themeButton.setAttribute(
                "aria-label",
                isDark
                    ? "لائٹ موڈ"
                    : "ڈارک موڈ"
            );
        }
    }

    function setupEvents() {

        if (els.surahSelect) {

            els.surahSelect.addEventListener(
                "change",
                function () {

                    const number =
                        Number(
                            els.surahSelect.value
                        );

                    if (number) {
                        renderSurah(
                            number
                        );
                    }

                }
            );
        }

        if (els.searchButton) {

            els.searchButton.addEventListener(
                "click",
                performSearch
            );
        }

        if (els.searchInput) {

            els.searchInput.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key ===
                        "Enter"
                    ) {

                        performSearch();

                    }

                }
            );
        }

        if (els.themeButton) {

            els.themeButton.addEventListener(
                "click",
                toggleTheme
            );
        }

        if (els.backToTop) {

            els.backToTop.addEventListener(
                "click",
                function () {

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }
            );
        }

        if (els.home) {

            els.home.addEventListener(
                "click",
                function (event) {

                    const href =
                        els.home.getAttribute(
                            "href"
                        );

                    if (
                        href &&
                        href !== "#home"
                    ) {
                        return;
                    }

                    event.preventDefault();

                    if (state.loaded) {

                        renderSurah(1);

                    }

                }
            );
        }

        if (els.surahs) {

            els.surahs.addEventListener(
                "click",
                function (event) {

                    const link =
                        event.target.closest(
                            "a"
                        );

                    if (!link) return;

                    const href =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        href &&
                        href.startsWith(
                            "#surah-"
                        )
                    ) {

                        const number =
                            Number(
                                href.replace(
                                    "#surah-",
                                    ""
                                )
                            );

                        if (
                            number >= 1 &&
                            number <= 114
                        ) {

                            event.preventDefault();

                            if (
                                state.loaded
                            ) {

                                renderSurah(
                                    number
                                );

                            }
                        }
                    }
                }
            );
        }

        window.addEventListener(
            "scroll",
            function () {

                if (!els.backToTop)
                    return;

                if (
                    window.scrollY > 500
                ) {

                    els.backToTop.style.display =
                        "block";

                } else {

                    els.backToTop.style.display =
                        "none";
                }
            }
        );
    }

    /* =========================================================
       COMPATIBILITY
       ========================================================= */

    window.currentLanguage =
        "ur";

    window.getCurrentLanguage =
        function () {

            return {
                name: "Urdu",
                native: "اردو",
                dir: "rtl",

                title:
                    "قرآن کریم • اردو ترجمہ • تفسیر",

                translation:
                    TEXT.translation,

                tafsir:
                    TEXT.tafseer
            };

        };

    window.getAyahTranslation =
        function (ayah) {

            return (
                ayah &&
                ayah.urdu
            )
                ? ayah.urdu
                : "";

        };

    window.getTranslation =
        function (ayah) {

            return (
                ayah &&
                ayah.urdu
            )
                ? ayah.urdu
                : "";

        };

    window.displayAyahs =
        function (data) {

            if (
                Array.isArray(data) &&
                data.length
            ) {

                state.allAyahs =
                    data;

                state.loaded =
                    true;

                const surah =
                    data[0] &&
                    data[0].surah
                        ? data[0].surah
                        : 1;

                renderSurah(
                    surah
                );
            }
        };

    window.loadSurahs =
        function () {

            buildSurahSelector();

        };

    /* =========================================================
       START
       ========================================================= */

    function start() {

        buildSurahSelector();

        applySavedTheme();

        setupEvents();

        loadCompleteQuran();

    }

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            start
        );

    } else {

        start();

    }

})();
