// =========================================================
// ENGINEERING JOURNEY INTERACTION
// =========================================================


// Find all the main journey year headings
const journeyYears = document.querySelectorAll(".journey-year");


// Go through every journey year
journeyYears.forEach(function(year) {

    // Listen for a click on the year
    year.addEventListener("click", function() {

        // Find the main journey card containing this year
        const journeyCard = year.closest(".journey-card");


        // =====================================================
        // CHECK FOR SEMESTERS
        // =====================================================

        // Find any semesters inside this journey card
        const semesters = journeyCard.querySelectorAll(".journey-semester");


        // If semesters exist, this is a TU705 year
        if (semesters.length > 0) {

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


        } else {

            // =================================================
            // QQI LEVEL 5
            // =================================================

            // No semesters exist, so find the subjects directly
            const subjects = journeyCard.querySelectorAll(".journey-subject");


            // Show or hide the QQI subjects
            subjects.forEach(function(subject) {

                // Add or remove the active class
                subject.classList.toggle("active");

            });

        }

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


        // Show or hide each subject
        subjects.forEach(function(subject) {

            // Add or remove the active class
            subject.classList.toggle("active");

        });

    });

});
