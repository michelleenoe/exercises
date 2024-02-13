"use strict";

window.addEventListener("DOMContentLoaded", start);
const allAnimals = [
    
        {
            "name": "Mandu",
            "desc": "the amazing",
            "type": "cat",
            "age": 10
        },
        {
            "name": "Mia",
            "desc": "the black",
            "type": "cat",
            "age": 10
        },
        {
            "name": "Leeloo",
            "desc":"the growing",
            "type":"dog",
            "age": 3
        },
        {
            "name": "Toothless",
            "desc": "the trained",
            "type":"dragon",
            "age": 14
        },
        {
            "name": "ScoobyDoo",
            "desc": "the wondering",
            "type": "dog",
            "age": 58
        },
        {
            "name": "Horsey",
            "desc":"the horsing",
            "type":"horse",
            "age": 10
        }
    ]

let animals;

function start( ) {
    console.log("ready");

    loadJSON();
}
function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
    jsonData.forEach(jsonObject => {

        const fullname = jsonObject.fullname;
        const secondSpace = name.indexOf(" "), firstSpace + 1);
        const lastSpace = lastindexOf(" ");
        const name = fullname.substring
    }
}
function displayList() {
    // clear the list
    document.querySelector("#list").innerHTML = "";

    // build a new list
    animals.forEach(displayAnimal);
}
function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=fullname]").textContent = animal.fullname;
    clone.querySelector("[data-field=age]").textContent = animal.age;


    // append clone to list
    document.querySelector("#list").appendChild(clone);
}

