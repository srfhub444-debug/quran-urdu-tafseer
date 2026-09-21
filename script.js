// =====================================================
// PREMIUM QURAN WEBSITE
// Main JavaScript
// =====================================================


// -----------------------------------------------------
// Important HTML elements
// -----------------------------------------------------

const ayahContainer = document.getElementById("ayahContainer");
const surahSelect = document.getElementById("surahSelect");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const themeButton = document.getElementById("themeButton");
const backToTop = document.getElementById("backToTop");


// -----------------------------------------------------
// Website start
// -----------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

    loadSurahs();

    displayAyahs(quranData);

    loadSavedTheme();

    openAyahFromURL();

});


// =====================================================
// SURAH LIST
// =====================================================

function loadSurahs() {

    if (!surahSelect) return;

    // Purani options ko clear karna
    surahSelect.innerHTML = `
        <option value="">
            سورت منتخب کریں
        </option>
    `;

    const surahs = [];

    quranData.forEach(function (ayah) {

        const alreadyExists = surahs.some(function (surah) {

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

        const option = document.createElement("option");

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

                <div class="urdu"
                     style="min-height:120px;">

                    کوئی نتیجہ نہیں ملا۔

                </div>

            </div>

        `;

        return;

    }


    data.forEach(function (ayah, index) {

        const card = document.createElement("article");

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


                <div class="arabic"
                     dir="rtl">

                    ${escapeHTML(ayah.arabic)}

                </div>


                <div class="urdu"
                     dir="rtl">

                    ${escapeHTML(ayah.urdu)}

                </div>


            </div>


            <!-- Action Buttons -->

            <div class="ayah-actions">


                <button
                    class="tafseer-button"
                    type="button"
                    data-action="tafseer">

                    📖 تفسیر دیکھیں

                </button>


                <button
                    class="action-button bookmark-button"
                    type="button"
                    data-action="bookmark">

                    ${isBookmarked ? "🔖 محفوظ شدہ" : "🔖 محفوظ کریں"}

                </button>


                <button
                    class="action-button"
                    type="button"
                    data-action="copy">

                    📋 کاپی

                </button>


                <button
                    class="action-button"
                    type="button"
                    data-action="share">

                    📤 شیئر

                </button>


                <button
                    class="action-button"
                    type="button"
                    data-action="link">

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
                    data-action="previous">

                    ← پچھلی آیت

                </button>


                <span>
                    آیت ${ayah.ayah}
                </span>


                <button
                    class="nav-button"
                    type="button"
                    data-action="next">

                    اگلی آیت →

                </button>


            </div>

        `;


        // ------------------------------------------------
        // Tafseer
        // ------------------------------------------------

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


        // ------------------------------------------------
        // Bookmark
        // ------------------------------------------------

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


        // ------------------------------------------------
        // Copy
        // ------------------------------------------------

        card.querySelector(
            '[data-action="copy"]'
        ).addEventListener(
            "click",
            function () {

                copyAyah(ayah, this);

            }
        );


        // ------------------------------------------------
        // Share
        // ------------------------------------------------

        card.querySelector(
            '[data-action="share"]'
        ).addEventListener(
            "click",
            function () {

                shareAyah(ayah);

            }
        );


        // ------------------------------------------------
        // Direct Link
        // ------------------------------------------------

        card.querySelector(
            '[data-action="link"]'
        ).addEventListener(
            "click",
            function () {

                copyAyahLink(ayah, this);

            }
        );


        // ------------------------------------------------
        // Previous
        // ------------------------------------------------

        card.querySelector(
            '[data-action="previous"]'
        ).addEventListener(
            "click",
            function () {

                goToPreviousAyah(ayah);

            }
        );


        // ------------------------------------------------
        // Next
        // ------------------------------------------------

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


// Search while typing

if (searchInput) {

    searchInput.addEventListener(
        "input",
        performSearch
    );

}


// Search button

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


            document.getElementById("surahs")
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


// Load saved theme

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
        "\n\n" +
        ayah.urdu;


    navigator.clipboard.writeText(text)
        .then(function () {

            const oldText =
                button.textContent;


            button.textContent =
                "✓ کاپی ہوگیا";


            setTimeout(function () {

                button.textContent =
                    oldText;

            }, 1800);

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
        "\n\n" +
        ayah.urdu;


    if (
        navigator.share
    ) {

        navigator.share({

            title:
                "قرآن کریم — آیت " +
                ayah.ayah,

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


    setTimeout(function () {

        button.textContent =
            oldText;

    }, 1800);

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


    setTimeout(function () {

        const element =
            document.querySelector(hash);


        if (element) {

            element.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });


            element.style.outline =
                "3px solid rgba(181, 138, 58, 0.45)";


            setTimeout(function () {

                element.style.outline =
                    "";

            }, 2500);

        }

    }, 300);

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


    setTimeout(function () {

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

    }, 100);

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


    setTimeout(function () {

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

    }, 100);

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

// User-provided data ko HTML mein safely display karne ke liye.

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

            }
