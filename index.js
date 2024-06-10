document.querySelector("button").addEventListener("click", showHide);
function showHide() {
  document
    .querySelector(".skills .max-width .skills-content .left p span")
    .classList.toggle("show");

  if (document.querySelector(".btn-txt").innerHTML == "Read More") {
    document.querySelector(".btn-txt").innerHTML = "Read Less";
  } else {
    document.querySelector(".btn-txt").innerHTML = "Read More";
  }
  document.querySelector(".skills").classList.toggle("skill_sizing");
}
