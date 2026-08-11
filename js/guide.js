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

    let guideContent = "";


    /* =========================
       WHAT IS AI
    ========================= */

    if (guide.id === "what-is-ai") {

        guideContent = `

            <div class="guide-toc">

                <h2>📖 In This Guide</h2>

                <ul>

                    <li>
                        <a href="#what-is-ai">
                            What Is Artificial Intelligence?
                        </a>
                    </li>

                    <li>
                        <a href="#how-ai-works">
                            How Does AI Work?
                        </a>
                    </li>

                    <li>
                        <a href="#where-ai-used">
                            Where Do We Use AI?
                        </a>
                    </li>

                    <li>
                        <a href="#why-ai-important">
                            Why Is AI Important?
                        </a>
                    </li>

                    <li>
                        <a href="#simple-ai">
                            The Simple Way to Think About AI
                        </a>
                    </li>

                    <li>
                        <a href="#key-takeaway">
                            Key Takeaway
                        </a>
                    </li>

                </ul>

            </div>


            <div class="prompt-box guide-content">

                <h2 id="what-is-ai">
                    What Is Artificial Intelligence?
                </h2>

                <p>
                    Artificial Intelligence, or AI, is
                    technology that allows computers to
                    perform tasks that normally require
                    human intelligence.
                </p>


                <h2 id="how-ai-works">
                    How Does AI Work?
                </h2>

                <p>
                    AI systems learn patterns from large
                    amounts of information. They use those
                    patterns to generate answers, recognize
                    images, understand language, make
                    predictions, and perform many other tasks.
                </p>


                <h2 id="where-ai-used">
                    Where Do We Use AI?
                </h2>

                <ul>

                    <li>Chatbots and virtual assistants</li>

                    <li>Image and video generation</li>

                    <li>Translation and language tools</li>

                    <li>Recommendation systems</li>

                    <li>AI-powered search</li>

                    <li>Software development</li>

                </ul>


                <h2 id="why-ai-important">
                    Why Is AI Important?
                </h2>

                <p>
                    AI is becoming part of many industries
                    and everyday activities. It can help
                    people automate repetitive work, analyze
                    information, create content, and solve
                    problems faster.
                </p>


                <h2 id="simple-ai">
                    The Simple Way to Think About AI
                </h2>

                <p>
                    You can think of AI as a technology that
                    helps computers recognize patterns and
                    produce useful results based on what they
                    have learned.
                </p>


                <h2 id="key-takeaway">
                    Key Takeaway
                </h2>

                <p>
                    AI is not just one technology. It is a
                    broad field that includes systems capable
                    of working with language, images, audio,
                    data, and many other types of information.
                </p>

            </div>

        `;

    }


    /* =========================
       WHAT IS CHATGPT
    ========================= */

    else if (guide.id === "what-is-chatgpt") {

        guideContent = `

            <div class="guide-toc">

                <h2>📖 In This Guide</h2>

                <ul>

                    <li>
                        <a href="#what-is-chatgpt">
                            What Is ChatGPT?
                        </a>
                    </li>

                    <li>
                        <a href="#how-chatgpt-works">
                            How Does ChatGPT Work?
                        </a>
                    </li>

                    <li>
                        <a href="#what-can-chatgpt-do">
                            What Can ChatGPT Do?
                        </a>
                    </li>

                    <li>
                        <a href="#how-to-use-chatgpt">
                            How Can Beginners Use ChatGPT?
                        </a>
                    </li>

                    <li>
                        <a href="#chatgpt-limitations">
                            What Are ChatGPT's Limitations?
                        </a>
                    </li>

                    <li>
                        <a href="#chatgpt-takeaway">
                            Key Takeaway
                        </a>
                    </li>

                </ul>

            </div>


            <div class="prompt-box guide-content">

                <h2 id="what-is-chatgpt">
                    What Is ChatGPT?
                </h2>

                <p>
                    ChatGPT is an AI assistant that can
                    understand natural-language instructions
                    and generate responses in a conversational
                    format.
                </p>

                <p>
                    You can use it to ask questions, explain
                    difficult topics, brainstorm ideas,
                    write and improve text, summarize
                    information, and help with many everyday
                    tasks.
                </p>


                <h2 id="how-chatgpt-works">
                    How Does ChatGPT Work?
                </h2>

                <p>
                    ChatGPT is powered by an AI model trained
                    on large amounts of data. When you send a
                    message, the system processes your
                    instructions and generates a response
                    based on patterns learned during training
                    and the conversation context.
                </p>

                <p>
                    A useful way to think about it is that
                    ChatGPT predicts and generates language
                    step by step rather than simply searching
                    a database for a pre-written answer.
                </p>


                <h2 id="what-can-chatgpt-do">
                    What Can ChatGPT Do?
                </h2>

                <ul>

                    <li>
                        Answer questions and explain concepts
                    </li>

                    <li>
                        Help brainstorm ideas
                    </li>

                    <li>
                        Write, rewrite, and summarize text
                    </li>

                    <li>
                        Help create social media content
                    </li>

                    <li>
                        Assist with coding and debugging
                    </li>

                    <li>
                        Help organize information
                    </li>

                    <li>
                        Create and improve prompts
                    </li>

                </ul>


                <h2 id="how-to-use-chatgpt">
                    How Can Beginners Use ChatGPT?
                </h2>

                <p>
                    The easiest way to start is to describe
                    what you want in normal language. You don't
                    need to know special programming commands.
                </p>

                <p>
                    For example, instead of asking:
                </p>

                <p>
                    <strong>
                        "Write something about AI."
                    </strong>
                </p>

                <p>
                    give ChatGPT more useful information:
                </p>

                <p>
                    <strong>
                        "Explain artificial intelligence
                        to a complete beginner using three
                        simple examples."
                    </strong>
                </p>

                <p>
                    The second instruction gives the AI more
                    context and a clearer goal.
                </p>


                <h2 id="chatgpt-limitations">
                    What Are ChatGPT's Limitations?
                </h2>

                <p>
                    ChatGPT can sometimes produce incorrect,
                    incomplete, or outdated information.
                    Its responses should not automatically
                    be treated as fact.
                </p>

                <p>
                    For important decisions, verify critical
                    information using reliable and current
                    sources.
                </p>


                <h2 id="chatgpt-takeaway">
                    Key Takeaway
                </h2>

                <p>
                    ChatGPT is best thought of as a flexible
                    AI assistant. The quality of the result
                    often depends on how clearly you explain
                    what you want, provide useful context,
                    and check the information when accuracy
                    matters.
                </p>

            </div>

        `;

    }


    /* =========================
       DISPLAY ARTICLE
    ========================= */

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


            ${guideContent}

        </article>

    `;

}
