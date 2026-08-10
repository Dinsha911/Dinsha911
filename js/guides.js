const guidesGrid =
    document.getElementById("guidesGrid");


/* =========================
   DISPLAY GUIDES
========================= */

function displayGuides() {

    guidesGrid.innerHTML = "";


    guidesData.forEach(function (guide) {

        const card =
            document.createElement("article");

        card.className = "tool-card";


        card.innerHTML = `

            <span class="tool-category">
                ${guide.category}
            </span>

            <h3>
                ${guide.title}
            </h3>

            <p>
                ${guide.summary}
            </p>

            <small>
                ${guide.level}
            </small>

            <br><br>

            <a
                href="guide.html?id=${guide.id}"
                class="button button-primary"
            >
                Read Guide →
            </a>

        `;


        guidesGrid.appendChild(card);

    });

}


/* =========================
   START
========================= */

displayGuides();
