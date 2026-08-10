const newsGrid =
    document.getElementById("newsGrid");

const newsSearch =
    document.getElementById("newsSearch");

const newsCategories =
    document.querySelectorAll(
        ".news-category"
    );


let selectedNewsCategory = "all";


/* =========================
   DISPLAY NEWS
========================= */

function displayNews() {

    const searchTerm =
        newsSearch.value
            .toLowerCase()
            .trim();


    const filteredNews =
        newsData.filter(function (news) {

            const matchesCategory =
                selectedNewsCategory === "all" ||
                news.category === selectedNewsCategory;


            const matchesSearch =
                news.title
                    .toLowerCase()
                    .includes(searchTerm) ||

                news.summary
                    .toLowerCase()
                    .includes(searchTerm);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    newsGrid.innerHTML = "";


    if (filteredNews.length === 0) {

        newsGrid.innerHTML = `

            <div class="no-results">

                <h3>
                    No news found
                </h3>

                <p>
                    Try another search
                    or category.
                </p>

            </div>

        `;

        return;

    }


    filteredNews.forEach(function (news) {

        const card =
            document.createElement("article");

        card.className = "tool-card";


        card.innerHTML = `

            <span class="tool-category">
                ${news.category}
            </span>

            <h3>
                ${news.title}
            </h3>

            <p>
                ${news.summary}
            </p>

            <small>
                ${news.date}
            </small>

            <br><br>

            <a
                href="${news.sourceUrl}"
                class="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
            >
                Read Source →
            </a>

        `;


        newsGrid.appendChild(card);

    });

}


/* =========================
   CATEGORY FILTERS
========================= */

newsCategories.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            newsCategories.forEach(
                function (btn) {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            selectedNewsCategory =
                button.dataset.category;


            displayNews();

        }
    );

});


/* =========================
   SEARCH
========================= */

newsSearch.addEventListener(
    "input",
    displayNews
);


/* =========================
   START
========================= */

displayNews();
