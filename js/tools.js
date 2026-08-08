const searchBox = document.getElementById("toolSearch");

const toolCards = document.querySelectorAll(".tool-card");


searchBox.addEventListener("input", function () {

    const searchText = searchBox.value.toLowerCase();


    toolCards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();


        if (cardText.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});
