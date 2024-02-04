document.getElementById('startGame').addEventListener('click', startGame);

let min = 0;
let max = 100;
let guess;
let guessCount = 0;

function startGame() {
    document.getElementById('game').classList.remove('hide');
    document.getElementById('game').classList.add('show');
    guessNumber();
}

function guessNumber() {
    guess = Math.floor((min + max) / 2);
    document.getElementById('guess').textContent = `Er dit tal ${guess}?`;
    guessCount++;
}

document.getElementById('higher').addEventListener('click', () => {
    min = guess + 1;
    guessNumber();
});

document.getElementById('lower').addEventListener('click', () => {
    max = guess - 1;
    guessNumber();
});

document.getElementById('correct').addEventListener('click', () => {
    document.getElementById('guess').textContent = `Jeg gættede dit tal! Det var ${guess}. Jeg brugte ${guessCount} gæt.`;
    document.getElementById('game').classList.remove('show');
    document.getElementById('game').classList.add('hide');
    min = 0;
    max = 100; 
    guessCount = 0; 
});
