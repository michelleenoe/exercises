const root = document.documentElement,
btn = document.querySelector("button")


//get theme - hvad end værdien er 
let isDark = localStorage.getItem("theme") === "dark"



function applyTheme() {
if (isDark === true) {
    root.dataset.theme = "dark"
    localStorage.setItem("theme", dark)
} else {
    root.dataset.theme = ""
    localStorage.removeItem("theme")
}
}


function toggleTheme() {

    //boolean 
if (isDark === true) {
    isDark = false
}
 else {
    isDark = true
 }
 applyTheme()
}
applyTheme()

btn.addEventListener("click", toggleTheme);