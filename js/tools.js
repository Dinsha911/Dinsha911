const searchBox = document.getElementById("toolSearch");

const toolCards = document.querySelectorAll(".tool-card");

const noResults = document.getElementById("noResults");

const categoryButtons = document.querySelectorAll(".category");


let selectedCategory = "all";


/* =========================
   FILTER TOOLS
========================= */

function filterTools() {

    const searchText =
        searchBox.value.trim().toLowerCase();

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


    /* =========================
       NO RESULTS
    ========================= */

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
