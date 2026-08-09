const promptPage =
    document.getElementById("promptPage");


/* =========================
   GET PROMPT ID FROM URL
========================= */

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const promptId =
    urlParams.get("id");


/* =========================
   FIND PROMPT
========================= */

const promptData =
    promptsData.find(function (prompt) {

        return prompt.id === promptId;

    });


/* =========================
   DISPLAY PROMPT
========================= */

if (promptData) {

    promptPage.innerHTML = `

        <div class="prompt-detail">

            <div class="tool-icon">
                ${promptData.icon}
            </div>


            <span class="tool-category">
                ${promptData.category}
            </span>


            <h1>
                ${promptData.title}
            </h1>


            <p class="prompt-description">
                ${promptData.description}
            </p>


            <div class="prompt-box">

                <h2>
                    Your Prompt
                </h2>


                <pre id="fullPrompt">${promptData.prompt}</pre>

            </div>


            <button
                id="copyFullPrompt"
                class="button button-primary"
            >
                📋 Copy Prompt
            </button>


        </div>

    `;


    /* =========================
       COPY BUTTON
    ========================= */

    const copyButton =
        document.getElementById(
            "copyFullPrompt"
        );


    copyButton.addEventListener(
        "click",
        async function () {

            await navigator.clipboard.writeText(
                promptData.prompt
            );


            copyButton.textContent =
                "✓ Copied!";


            setTimeout(
                function () {

                    copyButton.textContent =
                        "📋 Copy Prompt";

                },
                2000
            );

        }
    );


} else {

    promptPage.innerHTML = `

        <div class="prompt-detail">

            <h1>
                Prompt Not Found
            </h1>

            <p>
                Sorry, we couldn't find
                that prompt.
            </p>

            <a
                href="prompts.html"
                class="button button-primary"
            >
                ← Back to Prompts
            </a>

        </div>

    `;

}
