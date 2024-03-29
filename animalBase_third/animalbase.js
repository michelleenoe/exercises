"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0
};

const settings = {
    filter: "all",
    sortBy: "name",
    sortDir: "asc",
}

function start() {
    console.log("ready");

    // TODO: Add event-listeners to filter and sort buttons
    registerButtons();
    loadJSON();
}
function registerButtons() {
    document.querySelectorAll("[data-action='filter']")
        .forEach(button => button.addEventListener("click", selectFilter));

    document.querySelectorAll("[data-action='sort']")
        .forEach(button => button.addEventListener("click", selectSort));

}




async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();

    // when loaded, prepare data objects
    prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
    allAnimals = jsonData.map(preapareObject);

    // TODO: This might not be the function we want to call first
    displayList(allAnimals);
}

function preapareObject(jsonObject) {
    const animal = Object.create(Animal);

    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;

    return animal;
}

function selectFilter(event) {
    const filter = event.target.dataset.filter;
    console.log(`User selected ${filter}`);
    setFilter(filter);
}


function setFilter(filter) {
    settings.filterBy = filter;
    buildList()
}

function filterList(filteredList) {
    //default to all 

    if (settings.filterBy === "cat") {
        //create a filtered list of only cats 
        filteredList = allAnimals.filter(isCat);
    } else if (settings.filterBy === "dog") {
        //create a filtered list of only dogs
        filteredList = allAnimals.filter(isDog);
    }
    //create a filtered list of only dragons 
    else if (settings.filterBy === "dragon") {
        filteredList = allAnimals.filter(isDragon);
    }
    //create a filtered list of only horses 
    else if (settings.filterBy === "horse") {
        filteredList = allAnimals.filter(isHorse);
    }
    return filteredList;
}



function isHorse(animal) {
    return animal.type === "horse";
}


function isDragon(animal) {
    return animal.type === "dragon";
}

function isCat(animal) {
    return animal.type === "cat";
}

function isDog(animal) {
    return animal.type === "dog";
}

function selectSort(event) {
    const sortBy = event.target.dataset.sort;
    const sortDir = event.target.dataset.sortDirection;


    //toggle the direction 

    if (sortDir === "asc") {
        event.target.dataset.sortDirection = "desc";
    } else {
        event.target.dataset.sortDirection = "asc";
    }


    console.log(`User selected ${sortDir}`);
    setSort(sortBy, sortDir);
}

function setSort(sortBy, sortDir) {
    settings.sortBy = sortBy;
    settings.sortDir = sortDir;
    buildList();
}

    function sortList(sortedList) {
    // let sortedList = allAnimals;
    // -1 = high to low
    // 1 = low to high
        let direction = 1;
     if (settings.sortDir === "desc") {
        direction = -1;
        }

        else {
        settings.direction = 1;
     }


    sortedList = sortedList.sort(sortByProperty);


    function sortByProperty(animalA, animalB) {
        if (animalA[settings.sortBy] < animalB[settings.sortBy]) {
            //sort from low to high
            return -1 * direction;
        }
        else {
            return 1 * direction;

        }

    }

    return sortedList;

}


function buildList() {
    const currentList = filterList(allAnimals);
    const sortedList = sortList(currentList);
    displayList(currentList);
}




function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild(clone);
}
