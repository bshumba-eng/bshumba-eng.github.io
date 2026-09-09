// =========================================================
// ENGINEERING JOURNEY INTERACTION
// =========================================================


// Find all elements that have the class "journey-year"
const journeyYears = document.querySelectorAll(".journey-year");


// Go through every journey year
journeyYears.forEach(function(year) {

    // Listen for a click on the year
    year.addEventListener("click", function() {

        // Find the main journey card containing this year
        const journeyCard = year.closest(".journey-card");

        // Find the semesters inside that journey card
        const semesters = journeyCard.querySelectorAll(".journey-semester");

        // Show or hide the semesters
        semesters.forEach(function(semester) {

            if (semester.style.display === "none") {

                // Show the semester
                semester.style.display = "block";

            } else {

                // Hide the semester
                semester.style.display = "none";

            }

        });

    });

});
