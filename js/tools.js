const searchBox = document.getElementById("toolSearch");

const toolCards = document.querySelectorAll(".tool-card");

const noResults = document.getElementById("noResults");


searchBox.addEventListener("input", function () {

    const searchText = searchBox.value.toLowerCase();

    let visibleTools = 0;


    toolCards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();


        if (cardText.includes(searchText)) {

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

});
