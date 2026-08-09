const searchBox = document.getElementById("toolSearch");

const toolsGrid = document.getElementById("toolsGrid");

const noResults = document.getElementById("noResults");

const categoryButtons = document.querySelectorAll(".category");

let selectedCategory = "all";


/* =========================
   CREATE TOOL CARDS
========================= */

function displayTools() {

    toolsGrid.innerHTML = "";

    toolsData.forEach(function (tool) {

        const card = document.createElement("div");

        card.className = "tool-card";

        card.dataset.category = tool.category;


        card.innerHTML = `

            <div class="tool-icon">
                ${tool.icon}
            </div>

            <span class="tool-category">
            ${tool.category}
            </span>

            <span class="tool-pricing">
            ${tool.pricing}
            </span>

            <h3>
                ${tool.name}
            </h3>

            <p>
                ${tool.description}
            </p>

            <a
                href="${tool.website}"
                class="tool-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit Tool →
            </a>

        `;


        toolsGrid.appendChild(card);

    });

}


/* =========================
   FILTER TOOLS
========================= */

function filterTools() {

    const searchText =
        searchBox.value.trim().toLowerCase();

    const toolCards =
        document.querySelectorAll(".tool-card");

    let visibleTools = 0;


    toolCards.forEach(function (card) {

        const cardText =
            card.textContent.toLowerCase();

        const cardCategory =
            card.dataset.category;


        const matchesSearch =
            cardText.includes(searchText);


        const matchesCategory =
            selectedCategory === "all" ||
            cardCategory === selectedCategory;


        if (matchesSearch && matchesCategory) {

            card.style.display = "block";

            visibleTools++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleTools === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* =========================
   SEARCH
========================= */

searchBox.addEventListener(
    "input",
    filterTools
);


/* =========================
   CATEGORY BUTTONS
========================= */

categoryButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            selectedCategory =
                button.dataset.category;


            categoryButtons.forEach(
                function (btn) {

                    btn.classList.remove("active");

                }
            );


            button.classList.add("active");


            filterTools();

        }
    );

});


/* =========================
   START WEBSITE
========================= */

displayTools();

filterTools();
