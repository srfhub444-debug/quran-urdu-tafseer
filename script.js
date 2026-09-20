// ==========================================
// Quran Urdu Tafseer Website
// Main JavaScript File
// ==========================================


// Website ke important elements
const ayahContainer = document.getElementById("ayahContainer");
const surahSelect = document.getElementById("surahSelect");
const searchInput = document.getElementById("searchInput");
const themeButton = document.getElementById("themeButton");


// ==========================================
// Website start hone par
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    loadSurahs();

    displayAyahs(quranData);

});


// ==========================================
// Surah list banana
// ==========================================

function loadSurahs() {

    const surahs = [];

    quranData.forEach(function (ayah) {

        const exists = surahs.some(function (surah) {
            return surah.number === ayah.surah;
        });

        if (!exists) {

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


// ==========================================
// Ayat display karna
// ==========================================

function displayAyahs(data) {

    ayahContainer.innerHTML = "";


    if (data.length === 0) {

        ayahContainer.innerHTML = `
            <div class="ayah-card">
                <p>کوئی نتیجہ نہیں ملا۔</p>
            </div>
        `;

        return;

    }


    data.forEach(function (ayah) {

        const card = document.createElement("article");

        card.className = "ayah-card";


        card.innerHTML = `

            <div class="ayah-header">

                <div>
                    <strong>
                        ${ayah.surahNameUrdu}
                    </strong>

                    <span>
                        — آیت ${ayah.ayah}
                    </span>
                </div>

            </div>


            <div class="ayah-content">

                <div class="arabic">

                    ${ayah.arabic}

                </div>


                <div class="urdu">

                    ${ayah.urdu}

                </div>

            </div>


            <button class="tafseer-button">

                📖 تفسیر دیکھیں

            </button>


            <div class="tafseer">

                <strong>تفسیر</strong>

                <p>
                    ${ayah.tafseer}
                </p>

            </div>

        `;


        // Tafseer button
        const tafseerButton =
            card.querySelector(".tafseer-button");

        const tafseer =
            card.querySelector(".tafseer");


        tafseerButton.addEventListener(
            "click",
            function () {

                if (
                    tafseer.style.display === "block"
                ) {

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


        ayahContainer.appendChild(card);

    });

}


// ==========================================
// Surah selection
// ==========================================

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
            quranData.filter(function (ayah) {

                return (
                    ayah.surah ==
                    selectedSurah
                );

            });


        displayAyahs(filtered);

    }
);


// ==========================================
// Search
// ==========================================

searchInput.addEventListener(
    "input",
    function () {

        const search =
            this.value
                .toLowerCase()
                .trim();


        if (search === "") {

            displayAyahs(quranData);

            return;

        }


        const results =
            quranData.filter(function (ayah) {

                return (

                    ayah.arabic
                        .toLowerCase()
                        .includes(search)

                    ||

                    ayah.urdu
                        .toLowerCase()
                        .includes(search)

                    ||

                    ayah.surahNameUrdu
                        .toLowerCase()
                        .includes(search)

                    ||

                    String(ayah.ayah)
                        .includes(search)

                );

            });


        displayAyahs(results);

    }
);


// ==========================================
// Dark Mode
// ==========================================

themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );


        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            themeButton.textContent =
                "☀️ لائٹ موڈ";

        } else {

            themeButton.textContent =
                "🌙 ڈارک موڈ";

        }

    }
);
