var hoaBtn = document.querySelector("#hoa-card");
var hoaSection = document.querySelector("#hoa-section");
var poolRulesBtn = document.querySelector("#poolrules-card");
var poolRuesSection = document.querySelector("#poolrules-section");
var otherBtn = document.querySelector("#other");
var otherSection = document.querySelector("#other-section");


hoaBtn.addEventListener("click", function() {
    hoaSection.style.display = "flex";
    poolRuesSection.style.display = "none";
    otherSection.style.display = "none";
})

poolRulesBtn.addEventListener("click", function() {
    poolRuesSection.style.display = "flex";
    hoaSection.style.display = "none";
    otherSection.style.display = "none";
})

otherBtn.addEventListener("click", function() {
    otherSection.style.display = "flex";
    poolRuesSection.style.display = "none";
    hoaSection.style.display = "none";
})