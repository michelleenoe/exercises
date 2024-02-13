document.querySelector("select").addEventListener("change", selectChange);
let currentCol = "orange";

function selectChange(evt) {
  document.querySelector("body").addEventListener("animationEnd", colorAniEnd)
  console.log("change", evt.target.value);
  document.querySelector("body").style.setProperty("--bgcolor", evt.target.value);
  document.querySelector("body").classList.add("ani");
}

function colorAniEnd() {
  document.querySelector("body").classList.remove("ani");
}
