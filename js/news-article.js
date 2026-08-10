const newsArticle =
    document.getElementById(
        "newsArticle"
    );


/* =========================
   GET ARTICLE ID
========================= */

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const articleId =
    urlParams.get("id");


/* =========================
   FIND ARTICLE
========================= */

const article =
    newsData.find(function (news) {

        return news.id === articleId;

    });


/* =========================
   DISPLAY ARTICLE
========================= */

if (article) {

    newsArticle.innerHTML = `

        <article class="news-detail">

            <a
                href="news.html"
                class="back-to-prompts"
            >
                ← Back to AI News
            </a>


            <span class="tool-category">
                ${article.category}
            </span>


            <h1>
                ${article.title}
            </h1>


            <p class="news-date">
                ${article.date}
            </p>


            <div class="news-summary">

                <h2>
                    What Happened?
                </h2>

                <p>
                    ${article.summary}
                </p>

            </div>


            <div class="news-source">

                <strong>
                    Source:
                </strong>

                ${article.source}

                <br><br>

                <a
                    href="${article.sourceUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="button button-primary"
                >
                    Read Original Source →
                </a>

            </div>


        </article>

    `;

} else {

    newsArticle.innerHTML = `

        <div class="news-detail">

            <h1>
                Article Not Found
            </h1>

            <p>
                Sorry, we couldn't find
                this news article.
            </p>

            <a
                href="news.html"
                class="button button-primary"
            >
                ← Back to AI News
            </a>

        </div>

    `;

}
