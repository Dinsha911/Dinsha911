const searchBox =
    document.querySelector(".search-box");

const categories =
    document.querySelectorAll(".category");


const promptsContainer =
    document.createElement("div");

promptsContainer.className =
    "tools-grid";


document
    .querySelector(".section")
    .appendChild(promptsContainer);


let selectedCategory = "all";


/* =========================
   DISPLAY PROMPTS
========================= */

function displayPrompts() {

    promptsContainer.innerHTML = "";


    promptsData.forEach(function (prompt) {

        const card =
            document.createElement("div");

        card.className = "tool-card";

        card.dataset.category =
            prompt.category;


        card.innerHTML = `

            <div class="tool-icon">
                ${prompt.icon}
            </div>

            <span class="tool-category">
                ${prompt.category}
            </span>

            <h3>
                ${prompt.title}
            </h3>

            <p>
                ${prompt.description}
            </p>

          <a
              href="prompt.html?id=${prompt.id}"
             class="button button-primary"
          >
            View Prompt →
           </a>
                Copy Prompt
            </button>

        `;


        promptsContainer.appendChild(card);

    });


    
}


/* =========================
   FILTER PROMPTS
========================= */

function filterPrompts() {

    const searchText =
        searchBox.value.trim().toLowerCase();


    const cards =
        promptsContainer.querySelectorAll(".tool-card");


    let visiblePrompts = 0;


    cards.forEach(function (card) {

        const text =
            card.textContent.toLowerCase();


        const category =
            card.dataset.category;


        const matchesSearch =
            text.includes(searchText);


        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;


        if (
            matchesSearch &&
            matchesCategory
        ) {

            card.style.display = "block";

            visiblePrompts++;

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================
   CATEGORY BUTTONS
========================= */

categories.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            categories.forEach(
                function (btn) {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add("active");


            selectedCategory =
            button.dataset.category;


            if (
                selectedCategory ===
                "all"
            ) {

                selectedCategory =
                    "all";

            }


            filterPrompts();

        }
    );

});


/* =========================
   SEARCH
========================= */

searchBox.addEventListener(
    "input",
    filterPrompts
);


/* =========================
   COPY PROMPT
========================= */

function addCopyButtons() {

    const buttons =
        document.querySelectorAll(
            ".copy-button"
        );


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            async function () {

                const prompt =
                    decodeURIComponent(
                        button.dataset.prompt
                    );


                await navigator.clipboard.writeText(
                    prompt
                );


                button.textContent =
                    "✓ Copied!";


                setTimeout(
                    function () {

                        button.textContent =
                            "Copy Prompt";

                    },
                    2000
                );

            }
        );

    });

}


/* =========================
   START
========================= */

displayPrompts();

filterPrompts();
