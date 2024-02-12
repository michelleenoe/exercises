const curseWords = [

    {bad: "var", good: "const"},
    {bad: "float", good: "grid"},
    {bad:"marquee", good: "just don't"},

];

document.querySelector("button").addEventListener("pointerdown",checkIfSentenceContainsProfanity);

function checkIfSentenceContainsProfanity() {
    let theText = document.querySelector("p").textContent;
    curseWords.forEach((wordObj) => {
    theText = theText.replaceAll(wordObj.bad, wordObj.good);
});





    console.log("HEJ", theText);
        document.querySelector("p").textContent = theText;
}