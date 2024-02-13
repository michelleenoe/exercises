
document.querySelector("button").addEventListener("click", btn_klik);
function btn_klik(evt){
    document.querySelector("#ball").classList.add("ani");
    console.log("evt", evt);
}





//     function start() {
//         ball.style.animation = 'ani 1s linear 0s infinite alternate';
//     }
//     ball.addEventListener('animationiteration', function() {
//     });
//     ball.addEventListener('animationend', function() {
//     });
//     button.addEventListener('click', start);
// });
