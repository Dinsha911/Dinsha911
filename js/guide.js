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


            <div class="prompt-box guide-content">

    <h2>
        What Is Artificial Intelligence?
    </h2>

    <p>
        Artificial Intelligence, or AI, is
        technology that allows computers to
        perform tasks that normally require
        human intelligence.
    </p>


    <h2>
        How Does AI Work?
    </h2>

    <p>
        AI systems learn patterns from large
        amounts of information. They use those
        patterns to generate answers, recognize
        images, understand language, make
        predictions, and perform many other tasks.
    </p>


    <h2>
        Where Do We Use AI?
    </h2>

    <ul>

        <li>
            Chatbots and virtual assistants
        </li>

        <li>
            Image and video generation
        </li>

        <li>
            Translation and language tools
        </li>

        <li>
            Recommendation systems
        </li>

        <li>
            AI-powered search
        </li>

        <li>
            Software development
        </li>

    </ul>


    <h2>
        Why Is AI Important?
    </h2>

    <p>
        AI is becoming part of many industries
        and everyday activities. It can help
        people automate repetitive work, analyze
        information, create content, and solve
        problems faster.
    </p>


    <h2>
        The Simple Way to Think About AI
    </h2>

    <p>
        You can think of AI as a technology that
        helps computers recognize patterns and
        produce useful results based on what they
        have learned.
    </p>


    <h2>
        Key Takeaway
    </h2>

    <p>
        AI is not just one technology. It is a
        broad field that includes systems capable
        of working with language, images, audio,
        data, and many other types of information.
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
