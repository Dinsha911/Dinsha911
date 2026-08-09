const newsGrid =
    document.getElementById("newsGrid");


/* =========================
   DISPLAY NEWS
========================= */

function displayNews() {

    newsGrid.innerHTML = "";


    newsData.forEach(function (news) {

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
   START
========================= */

displayNews();
