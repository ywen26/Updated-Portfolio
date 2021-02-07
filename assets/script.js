var aboutBtn = document.getElementById("about-btn");
var workBtn = document.getElementById("work-btn");
var aboutEl = document.getElementById("about");
var workEl = document.getElementById("whole-work");

aboutBtn.addEventListener("click", function() {
    aboutEl.style.display = "block";
    workEl.style.display = "none";
    location.reload();
});

workBtn.addEventListener("click", function() {
    aboutEl.style.display = "none";
    workEl.style.display = "block";
})