"use strict";

function momsBeregner (beloeb, moms = 25) {
    return beloeb + (beloeb * moms) / 100;

    //det som kommer tilbage fra funktionen - bliver returneret i konsollen
}

let beregnetMoms = momsBeregner (100);

console.log ("beregnetMoms", beregnetMoms);

