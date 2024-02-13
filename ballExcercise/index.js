


document.querySelector("button").addEventListener("click", btn_klik);

function btn_klik(evt){
    document.querySelector("#ball").addEventListener("animationend", animationIterateANdEnd);
    document.querySelector("#ball").addEventListener("animationiteration", animationIterateANdEnd);
    document.querySelector("#ball").classList.add("ani");
}

function animationIterateANdEnd(evt) {
    console.log("animationiterationANdEnd", evt.type);
    if (evt.type === "animationend") {
        document.querySelector("#ball").classList.remove("ani");
    }
}

