const guideArticle =
    document.getElementById(
        "guideArticle"
    );


/* =========================
   GET GUIDE ID
========================= */

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const guideId =
    urlParams.get("id");


/* =========================
   FIND GUIDE
========================= */

const guide =
    guidesData.find(function (item) {

        return item.id === guideId;

    });


/* =========================
   DISPLAY GUIDE
========================= */

if (guide) {

    guideArticle.innerHTML = `

        <article class="news-detail">

            <a
                href="guides.html"
                class="back-to-prompts"
            >
                ← Back to AI Guides
            </a>


            <span class="tool-category">
                ${guide.category}
            </span>


            <h1>
                ${guide.title}
            </h1>


            <p class="news-date">
                ${guide.level}
            </p>


            <div class="news-summary">

                <h2>
                    About This Guide
                </h2>

                <p>
                    ${guide.summary}
                </p>

            </div>


            <div class="prompt-box">

                <h2>
                    Guide Coming Soon
                </h2>

                <p>
                    We're preparing a detailed,
                    beginner-friendly guide for
                    this topic.
                </p>

            </div>


        </article>

    `;

} else {

    guideArticle.innerHTML = `

        <div class="news-detail">

            <h1>
                Guide Not Found
            </h1>

            <p>
                Sorry, we couldn't find
                this guide.
            </p>

            <a
                href="guides.html"
                class="button button-primary"
            >
                ← Back to AI Guides
            </a>

        </div>

    `;

}
