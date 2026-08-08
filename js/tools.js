const searchBox = document.getElementById("toolSearch");

const toolCards = document.querySelectorAll(".tool-card");

const noResults = document.getElementById("noResults");


searchBox.addEventListener("input", function () {

    const searchText = searchBox.value.trim().toLowerCase();

    let visibleTools = 0;


    /* If search box is empty */

    if (searchText === "") {

        toolCards.forEach(function (card) {

            card.style.display = "block";

        });

        noResults.style.display = "none";

        return;
    }


    /* Search the tools */

    toolCards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();


        if (cardText.includes(searchText)) {

            card.style.display = "block";

            visibleTools++;

        } else {

            card.style.display = "none";

        }

    });


    /* Show or hide No Results message */

    if (visibleTools === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});
