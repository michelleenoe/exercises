const root = document.documentElement,
      btn = document.querySelector("button");


let theme = localStorage.getItem("theme") || "light";

function applyTheme() {

  root.dataset.theme = theme;


  localStorage.setItem("theme", theme);
}

function toggleTheme() {

  if (theme === "light") {
    theme = "dark";
  } else if (theme === "dark") {
    theme = "colorful";
  } else {
    theme = "light";
  }
  
  applyTheme(); 
}

applyTheme(); 

btn.addEventListener("click", toggleTheme);
