document.querySelector("select").addEventListener("change", selectChange);
let currentCol = "orange";

function selectChange(evt) {

  currentCol = evt.target.value;

  document.querySelector("body").addEventListener("animationend", colorAniEnd);
  console.log("change", evt.target.value);
  document.querySelector("body").style.setProperty("--bgcolor", currentCol);
  document.querySelector("body").classList.add("ani");
}

function colorAniEnd() {
  document.querySelector("body").classList.remove("ani");
  document.querySelector("body").style.backgroundColor = currentCol;
}

