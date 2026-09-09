// =========================================================
// ENGINEERING JOURNEY INTERACTION
// =========================================================


// Find all the main journey year headings
const journeyYears = document.querySelectorAll(".journey-year");


// Go through every journey year
journeyYears.forEach(function(year) {

    // Listen for a click on the year
    year.addEventListener("click", function() {

        // Find the journey card containing this year
        const journeyCard = year.closest(".journey-card");

        // Find the semesters inside this journey card
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


// =========================================================
// SEMESTER INTERACTION
// =========================================================


// Find all semester headings
const semesterHeadings = document.querySelectorAll(".journey-semester h4");


// Go through every semester heading
semesterHeadings.forEach(function(heading) {

    // Listen for a click on the semester
    heading.addEventListener("click", function() {

        // Find the semester box containing this heading
        const semester = heading.closest(".journey-semester");

        // Find the subjects inside this semester
        const subjects = semester.querySelectorAll(".journey-subject");


        // Go through every subject
        subjects.forEach(function(subject) {

            // Add or remove the "active" class
            subject.classList.toggle("active");

        });

    });

});
