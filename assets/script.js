var aboutBtn = document.getElementById("about-btn");
var workBtn = document.getElementById("work-btn");
var aboutEl = document.getElementById("about");
var workEl = document.getElementById("whole-work");

// To show introduction block
aboutBtn.addEventListener("click", function() {
    aboutEl.style.display = "block";
    workEl.style.display = "none";
    location.reload();
});

// To show my works block
workBtn.addEventListener("click", function() {
    aboutEl.style.display = "none";
    workEl.style.display = "block";
})