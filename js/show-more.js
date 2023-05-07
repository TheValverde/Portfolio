document.addEventListener("DOMContentLoaded", function () {
    const projectsContainer = document.querySelector(".projects-container");
    const showMoreBtn = document.getElementById("show-more-btn");
    let hiddenProjects = document.querySelectorAll(".hidden");

    showMoreBtn.addEventListener("click", function () {
        for (let i = 0; i < 3; i++) {
            if (hiddenProjects.length > 0) {
                hiddenProjects[0].classList.remove("hidden");
                hiddenProjects = document.querySelectorAll(".hidden");
            }
        }
        if (hiddenProjects.length === 0) {
            showMoreBtn.style.display = "none";
        }
    });
});
